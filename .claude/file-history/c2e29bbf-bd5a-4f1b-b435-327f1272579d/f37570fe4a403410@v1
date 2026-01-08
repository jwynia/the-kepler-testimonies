#!/usr/bin/env -S deno run --allow-read

/**
 * preference-map.ts
 *
 * Visualize preference distribution and balance across contributors.
 *
 * Usage:
 *   deno run --allow-read scripts/preference-map.ts context/foundation/taste.md
 *   deno run --allow-read scripts/preference-map.ts --conflicts taste.md
 *   deno run --allow-read scripts/preference-map.ts --check content.md
 */

import { parse } from "https://deno.land/std@0.208.0/flags/mod.ts";

// Types
interface Contributor {
  name: string;
  preferences: {
    loves: string[];
    wants_more: string[];
    wants_less: string[];
    pet_peeves: string[];
    non_negotiables: string[];
  };
}

interface ConflictPoint {
  topic: string;
  perspectives: Array<{
    contributor: string;
    stance: "positive" | "negative" | "neutral";
    detail: string;
  }>;
  severity: "high" | "medium" | "low";
}

interface PreferenceMap {
  contributors: Contributor[];
  conflicts: ConflictPoint[];
  commonGround: string[];
  forcedTradeoffs: string[];
}

// Parse a taste.md file to extract contributor preferences
function parseTasteFile(content: string): PreferenceMap {
  const contributors: Contributor[] = [];
  const forcedTradeoffs: string[] = [];

  // Split by contributor sections (### Name)
  const sections = content.split(/^### /m).filter(s => s.trim());

  for (const section of sections) {
    const lines = section.split("\n");
    const nameLine = lines[0]?.trim();

    // Skip non-contributor sections
    if (!nameLine || nameLine.includes("Template") || nameLine.includes("Forced")) {
      // Check for forced tradeoffs section
      if (section.includes("We do") || section.includes("We don't") || section.includes(", not")) {
        const tradeoffMatches = section.match(/[-*]\s*\*\*(.+?)\*\*/g) || [];
        for (const match of tradeoffMatches) {
          forcedTradeoffs.push(match.replace(/[-*]\s*\*\*/g, "").replace(/\*\*/g, "").trim());
        }
      }
      continue;
    }

    const contributor: Contributor = {
      name: nameLine.replace(/\(.*?\)/g, "").trim(),
      preferences: {
        loves: [],
        wants_more: [],
        wants_less: [],
        pet_peeves: [],
        non_negotiables: [],
      },
    };

    // Extract preferences by section headers
    let currentSection = "";
    for (const line of lines) {
      const lowerLine = line.toLowerCase();

      if (lowerLine.includes("love") || lowerLine.includes("works i love")) {
        currentSection = "loves";
      } else if (lowerLine.includes("want more")) {
        currentSection = "wants_more";
      } else if (lowerLine.includes("want less")) {
        currentSection = "wants_less";
      } else if (lowerLine.includes("pet peeve") || lowerLine.includes("biggest pet peeve")) {
        currentSection = "pet_peeves";
      } else if (lowerLine.includes("for this project") || lowerLine.includes("non-negotiable")) {
        currentSection = "non_negotiables";
      } else if (line.startsWith("-") && currentSection) {
        const item = line.replace(/^-\s*/, "").trim();
        if (item && contributor.preferences[currentSection as keyof typeof contributor.preferences]) {
          contributor.preferences[currentSection as keyof typeof contributor.preferences].push(item);
        }
      }
    }

    if (contributor.preferences.loves.length > 0 ||
        contributor.preferences.wants_more.length > 0 ||
        contributor.preferences.pet_peeves.length > 0) {
      contributors.push(contributor);
    }
  }

  // Analyze for conflicts
  const conflicts = analyzeConflicts(contributors);

  // Find common ground
  const commonGround = findCommonGround(contributors);

  return {
    contributors,
    conflicts,
    commonGround,
    forcedTradeoffs,
  };
}

// Analyze preferences for potential conflicts
function analyzeConflicts(contributors: Contributor[]): ConflictPoint[] {
  const conflicts: ConflictPoint[] = [];

  // Keywords that might indicate opposing preferences
  const oppositionPatterns = [
    { positive: ["grounded", "realistic"], negative: ["fantasy", "magical"] },
    { positive: ["fast-paced", "action"], negative: ["slow", "contemplative"] },
    { positive: ["dark", "gritty"], negative: ["hopeful", "optimistic"] },
    { positive: ["complex", "layered"], negative: ["simple", "streamlined"] },
    { positive: ["humorous", "wit"], negative: ["serious", "dramatic"] },
  ];

  for (const pattern of oppositionPatterns) {
    const perspectives: ConflictPoint["perspectives"] = [];

    for (const contributor of contributors) {
      const allPrefs = [
        ...contributor.preferences.loves,
        ...contributor.preferences.wants_more,
      ].join(" ").toLowerCase();

      const allAversions = [
        ...contributor.preferences.wants_less,
        ...contributor.preferences.pet_peeves,
      ].join(" ").toLowerCase();

      let stance: "positive" | "negative" | "neutral" = "neutral";
      let detail = "";

      for (const pos of pattern.positive) {
        if (allPrefs.includes(pos)) {
          stance = "positive";
          detail = `Prefers ${pos}`;
          break;
        }
        if (allAversions.includes(pos)) {
          stance = "negative";
          detail = `Dislikes ${pos}`;
          break;
        }
      }

      if (stance === "neutral") {
        for (const neg of pattern.negative) {
          if (allPrefs.includes(neg)) {
            stance = "positive";
            detail = `Prefers ${neg}`;
            break;
          }
          if (allAversions.includes(neg)) {
            stance = "negative";
            detail = `Dislikes ${neg}`;
            break;
          }
        }
      }

      if (stance !== "neutral") {
        perspectives.push({
          contributor: contributor.name,
          stance,
          detail,
        });
      }
    }

    // Only report if there's actual conflict (different stances)
    if (perspectives.length >= 2) {
      const hasPositive = perspectives.some(p => p.stance === "positive");
      const hasNegative = perspectives.some(p => p.stance === "negative");

      if (hasPositive && hasNegative) {
        conflicts.push({
          topic: pattern.positive.join("/"),
          perspectives,
          severity: "medium",
        });
      }
    }
  }

  return conflicts;
}

// Find common ground across contributors
function findCommonGround(contributors: Contributor[]): string[] {
  if (contributors.length < 2) return [];

  const common: string[] = [];

  // Look for similar themes in loves and wants_more
  const allPositives = contributors.map(c => [
    ...c.preferences.loves,
    ...c.preferences.wants_more,
  ].join(" ").toLowerCase());

  // Keywords that appear across multiple contributors
  const keywords = [
    "character", "grounded", "competent", "realistic", "wit", "voice",
    "distinct", "authentic", "earned", "constraints", "institutional",
  ];

  for (const keyword of keywords) {
    const count = allPositives.filter(p => p.includes(keyword)).length;
    if (count >= Math.ceil(contributors.length * 0.6)) {
      common.push(`Shared interest: ${keyword}`);
    }
  }

  return common;
}

// Format preference map for console
function formatConsoleOutput(map: PreferenceMap, showConflicts: boolean): string {
  const lines: string[] = [];

  lines.push("\n🗺️  Preference Map");
  lines.push("═".repeat(50));

  // Contributors overview
  lines.push(`\nContributors: ${map.contributors.length}`);
  for (const contrib of map.contributors) {
    lines.push(`  • ${contrib.name}`);
    if (contrib.preferences.loves.length > 0) {
      lines.push(`    Loves: ${contrib.preferences.loves.slice(0, 2).join(", ")}`);
    }
    if (contrib.preferences.pet_peeves.length > 0) {
      lines.push(`    Pet peeves: ${contrib.preferences.pet_peeves.slice(0, 1).join(", ")}`);
    }
  }

  // Forced tradeoffs
  if (map.forcedTradeoffs.length > 0) {
    lines.push("\n📋 Forced Tradeoffs:");
    lines.push("─".repeat(50));
    for (const tradeoff of map.forcedTradeoffs) {
      lines.push(`  • ${tradeoff}`);
    }
  }

  // Common ground
  if (map.commonGround.length > 0) {
    lines.push("\n✅ Common Ground:");
    lines.push("─".repeat(50));
    for (const ground of map.commonGround) {
      lines.push(`  • ${ground}`);
    }
  }

  // Conflicts
  if (showConflicts && map.conflicts.length > 0) {
    lines.push("\n⚠️  Potential Conflicts:");
    lines.push("─".repeat(50));
    for (const conflict of map.conflicts) {
      lines.push(`  Topic: ${conflict.topic}`);
      for (const p of conflict.perspectives) {
        const icon = p.stance === "positive" ? "👍" : "👎";
        lines.push(`    ${icon} ${p.contributor}: ${p.detail}`);
      }
      lines.push("");
    }
  } else if (map.conflicts.length === 0) {
    lines.push("\n✅ No significant conflicts detected.");
  }

  lines.push("");
  return lines.join("\n");
}

// Format JSON output
function formatJsonOutput(map: PreferenceMap): string {
  return JSON.stringify(map, null, 2);
}

// Main
async function main() {
  const args = parse(Deno.args, {
    boolean: ["json", "help", "conflicts", "check"],
    alias: { h: "help", j: "json", c: "conflicts" },
  });

  if (args.help) {
    console.log(`
preference-map.ts - Visualize preference distribution across contributors

Usage:
  deno run --allow-read preference-map.ts [options] <taste-file>

Options:
  -h, --help       Show this help message
  -j, --json       Output as JSON
  -c, --conflicts  Show detailed conflict analysis
  --check FILE     Check if content balances preferences (not yet implemented)

The taste file should be in the project's taste.md format with:
  - Individual contributor sections (### Name)
  - Loves/Works I Love sections
  - Want More/Want Less sections
  - Pet peeves
  - Forced Tradeoffs section

Examples:
  deno run --allow-read preference-map.ts context/foundation/taste.md
  deno run --allow-read preference-map.ts --conflicts taste.md
`);
    Deno.exit(0);
  }

  // Get file to parse
  if (args._.length === 0) {
    console.error("Error: No taste file provided. Use --help for usage.");
    Deno.exit(1);
  }

  const fileName = String(args._[0]);
  let content: string;

  try {
    content = await Deno.readTextFile(fileName);
  } catch (error) {
    console.error(`Error reading file ${fileName}:`, error.message);
    Deno.exit(1);
  }

  // Parse the taste file
  const map = parseTasteFile(content);

  // Output
  if (args.json) {
    console.log(formatJsonOutput(map));
  } else {
    console.log(formatConsoleOutput(map, args.conflicts));
  }
}

main();
