#!/usr/bin/env -S deno run --allow-read

/**
 * taste-check.ts
 *
 * Pattern-match text for taste state violations (T1-T7).
 *
 * Usage:
 *   deno run --allow-read scripts/taste-check.ts testimony.md
 *   deno run --allow-read scripts/taste-check.ts --states T1,T2 scene.md
 *   deno run --allow-read scripts/taste-check.ts --text "The government was too stupid..."
 *   deno run --allow-read scripts/taste-check.ts --json testimony.md
 */

import { parse } from "https://deno.land/std@0.208.0/flags/mod.ts";

// Types
interface TriggerMatch {
  state: string;
  stateName: string;
  trigger: string;
  passage: string;
  line: number;
  severity: "low" | "medium" | "high";
  context: string;
}

interface StatePattern {
  name: string;
  description: string;
  triggers: string[];
  severity_modifiers: {
    high: string[];
    medium: string[];
    low: string[];
  };
  context_exceptions: string[];
  fix_suggestions: string[];
}

interface PatternsData {
  states: Record<string, StatePattern>;
  detection_config: {
    case_sensitive: boolean;
    require_word_boundaries: boolean;
    context_window: number;
  };
}

interface CheckResult {
  file: string | null;
  totalMatches: number;
  matches: TriggerMatch[];
  summary: Record<string, number>;
}

// Load patterns from data file
async function loadPatterns(): Promise<PatternsData> {
  const scriptDir = new URL(".", import.meta.url).pathname;
  const patternsPath = `${scriptDir}../data/taste-patterns.json`;

  try {
    const content = await Deno.readTextFile(patternsPath);
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error loading patterns from ${patternsPath}:`, error.message);
    Deno.exit(1);
  }
}

// Get context around a match
function getContext(text: string, matchIndex: number, windowSize: number): string {
  const start = Math.max(0, matchIndex - windowSize);
  const end = Math.min(text.length, matchIndex + windowSize);
  let context = text.slice(start, end);

  if (start > 0) context = "..." + context;
  if (end < text.length) context = context + "...";

  return context.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
}

// Get line number for a position in text
function getLineNumber(text: string, position: number): number {
  const textBeforeMatch = text.slice(0, position);
  return (textBeforeMatch.match(/\n/g) || []).length + 1;
}

// Determine severity based on surrounding text
function determineSeverity(
  context: string,
  modifiers: { high: string[]; medium: string[]; low: string[] }
): "low" | "medium" | "high" {
  const lowerContext = context.toLowerCase();

  for (const mod of modifiers.high) {
    if (lowerContext.includes(mod.toLowerCase())) {
      return "high";
    }
  }

  for (const mod of modifiers.medium) {
    if (lowerContext.includes(mod.toLowerCase())) {
      return "medium";
    }
  }

  // Default to medium if no modifiers found
  return "medium";
}

// Check text against all patterns
function checkText(
  text: string,
  patterns: PatternsData,
  selectedStates: string[] | null
): TriggerMatch[] {
  const matches: TriggerMatch[] = [];
  const lowerText = text.toLowerCase();

  for (const [stateId, stateData] of Object.entries(patterns.states)) {
    // Skip if state not in selected list
    if (selectedStates && !selectedStates.includes(stateId.toUpperCase())) {
      continue;
    }

    for (const trigger of stateData.triggers) {
      const lowerTrigger = trigger.toLowerCase();
      let searchIndex = 0;

      while (true) {
        const matchIndex = lowerText.indexOf(lowerTrigger, searchIndex);
        if (matchIndex === -1) break;

        // Check word boundaries if required
        if (patterns.detection_config.require_word_boundaries) {
          const charBefore = lowerText[matchIndex - 1] || " ";
          const charAfter = lowerText[matchIndex + lowerTrigger.length] || " ";
          const isWordBoundaryBefore = /\W/.test(charBefore);
          const isWordBoundaryAfter = /\W/.test(charAfter);

          if (!isWordBoundaryBefore || !isWordBoundaryAfter) {
            searchIndex = matchIndex + 1;
            continue;
          }
        }

        const context = getContext(
          text,
          matchIndex,
          patterns.detection_config.context_window
        );

        const lineNumber = getLineNumber(text, matchIndex);
        const passage = text.slice(matchIndex, matchIndex + trigger.length);

        const severity = determineSeverity(context, stateData.severity_modifiers);

        matches.push({
          state: stateId.toUpperCase().replace("_", "").slice(0, 2),
          stateName: stateData.name,
          trigger: trigger,
          passage: passage,
          line: lineNumber,
          severity: severity,
          context: context,
        });

        searchIndex = matchIndex + 1;
      }
    }
  }

  // Sort by line number
  return matches.sort((a, b) => a.line - b.line);
}

// Format output for console
function formatConsoleOutput(result: CheckResult): string {
  const lines: string[] = [];

  if (result.file) {
    lines.push(`\n📋 Taste Check: ${result.file}`);
  } else {
    lines.push(`\n📋 Taste Check: (inline text)`);
  }
  lines.push("═".repeat(50));

  if (result.totalMatches === 0) {
    lines.push("✅ No taste pattern violations detected.");
    return lines.join("\n");
  }

  lines.push(`\n⚠️  Found ${result.totalMatches} potential taste pattern(s):\n`);

  for (const match of result.matches) {
    const severityIcon =
      match.severity === "high" ? "🔴" :
      match.severity === "medium" ? "🟡" : "🟢";

    lines.push(`${severityIcon} [${match.state}] ${match.stateName}`);
    lines.push(`   Line ${match.line}: "${match.trigger}"`);
    lines.push(`   Context: ${match.context}`);
    lines.push("");
  }

  // Summary
  lines.push("─".repeat(50));
  lines.push("Summary by state:");
  for (const [state, count] of Object.entries(result.summary)) {
    lines.push(`  ${state}: ${count}`);
  }

  return lines.join("\n");
}

// Format output as JSON
function formatJsonOutput(result: CheckResult): string {
  return JSON.stringify(result, null, 2);
}

// Main
async function main() {
  const args = parse(Deno.args, {
    string: ["states", "text"],
    boolean: ["json", "help"],
    alias: { h: "help", j: "json", s: "states", t: "text" },
  });

  if (args.help) {
    console.log(`
taste-check.ts - Detect taste state violations in text

Usage:
  deno run --allow-read taste-check.ts [options] [file]

Options:
  -h, --help          Show this help message
  -j, --json          Output as JSON
  -s, --states STATES Comma-separated list of states to check (e.g., T1,T2)
  -t, --text TEXT     Check inline text instead of file

States:
  T1  Institutional Cartoon - simplistic institutional portrayals
  T2  Cynicism as Cleverness - snark without substance
  T3  Worldbuilding Dominance - exposition overwhelms story
  T4  Narrator Commentary - author voice intrudes
  T5  Unearned Impossibility - arbitrary magic/mystery
  T6  Bumbling for Plot - characters fail stupidly
  T7  Baroque Complexity - complexity for its own sake

Examples:
  deno run --allow-read taste-check.ts testimony.md
  deno run --allow-read taste-check.ts --states T1,T2 scene.md
  deno run --allow-read taste-check.ts --text "The government was too stupid..."
`);
    Deno.exit(0);
  }

  const patterns = await loadPatterns();

  // Get text to check
  let text: string;
  let fileName: string | null = null;

  if (args.text) {
    text = args.text;
  } else if (args._.length > 0) {
    fileName = String(args._[0]);
    try {
      text = await Deno.readTextFile(fileName);
    } catch (error) {
      console.error(`Error reading file ${fileName}:`, error.message);
      Deno.exit(1);
    }
  } else {
    console.error("Error: No text or file provided. Use --help for usage.");
    Deno.exit(1);
  }

  // Parse selected states
  let selectedStates: string[] | null = null;
  if (args.states) {
    selectedStates = args.states.split(",").map((s: string) => s.trim().toUpperCase());
  }

  // Run check
  const matches = checkText(text, patterns, selectedStates);

  // Create summary
  const summary: Record<string, number> = {};
  for (const match of matches) {
    const key = `${match.state}: ${match.stateName}`;
    summary[key] = (summary[key] || 0) + 1;
  }

  const result: CheckResult = {
    file: fileName,
    totalMatches: matches.length,
    matches: matches,
    summary: summary,
  };

  // Output
  if (args.json) {
    console.log(formatJsonOutput(result));
  } else {
    console.log(formatConsoleOutput(result));
  }

  // Exit with code 1 if high severity matches found
  const hasHighSeverity = matches.some(m => m.severity === "high");
  if (hasHighSeverity) {
    Deno.exit(1);
  }
}

main();
