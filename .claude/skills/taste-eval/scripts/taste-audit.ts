#!/usr/bin/env -S deno run --allow-read

/**
 * taste-audit.ts
 *
 * Score content against taste dimensions.
 *
 * Usage:
 *   deno run --allow-read scripts/taste-audit.ts testimony.md
 *   deno run --allow-read scripts/taste-audit.ts --scores-only chapter.md
 *   deno run --allow-read scripts/taste-audit.ts --prefs taste.md testimony.md
 */

import { parse } from "https://deno.land/std@0.208.0/flags/mod.ts";

// Types
interface Dimension {
  id: string;
  name: string;
  description: string;
  positive_pole: string;
  negative_pole: string;
  weight: number;
  check_questions: string[];
  positive_indicators: string[];
  negative_indicators: string[];
}

interface DimensionsData {
  dimensions: Dimension[];
  scoring: {
    scale: Record<string, string>;
    calculation: {
      method: string;
      formula: string;
    };
    interpretation: Record<string, string>;
  };
}

interface DimensionScore {
  id: string;
  name: string;
  score: number;
  weight: number;
  weightedScore: number;
  positiveMatches: string[];
  negativeMatches: string[];
  confidence: "high" | "medium" | "low";
}

interface AuditResult {
  file: string | null;
  overallScore: number;
  interpretation: string;
  dimensions: DimensionScore[];
  recommendations: string[];
}

// Load dimensions from data file
async function loadDimensions(): Promise<DimensionsData> {
  const scriptDir = new URL(".", import.meta.url).pathname;
  const dimensionsPath = `${scriptDir}../data/kepler-dimensions.json`;

  try {
    const content = await Deno.readTextFile(dimensionsPath);
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error loading dimensions from ${dimensionsPath}:`, error.message);
    Deno.exit(1);
  }
}

// Count indicator matches in text
function countIndicatorMatches(text: string, indicators: string[]): string[] {
  const matches: string[] = [];
  const lowerText = text.toLowerCase();

  for (const indicator of indicators) {
    // Convert indicator to searchable terms (simplified matching)
    const terms = indicator.toLowerCase().split(/\s+/).filter(t => t.length > 4);

    // If most terms are found in text, count as match
    let found = 0;
    for (const term of terms) {
      if (lowerText.includes(term)) {
        found++;
      }
    }

    if (terms.length > 0 && found >= terms.length * 0.6) {
      matches.push(indicator);
    }
  }

  return matches;
}

// Score a dimension based on text analysis
function scoreDimension(text: string, dimension: Dimension): DimensionScore {
  const positiveMatches = countIndicatorMatches(text, dimension.positive_indicators);
  const negativeMatches = countIndicatorMatches(text, dimension.negative_indicators);

  const positiveCount = positiveMatches.length;
  const negativeCount = negativeMatches.length;
  const totalIndicators = dimension.positive_indicators.length + dimension.negative_indicators.length;

  // Calculate base score
  let score: number;
  const matchRatio = (positiveCount + negativeCount) / totalIndicators;

  if (positiveCount === 0 && negativeCount === 0) {
    // No indicators found - neutral
    score = 0; // Absent
  } else if (positiveCount > 0 && negativeCount === 0) {
    // Only positive
    score = positiveCount >= 2 ? 5 : 4;
  } else if (negativeCount > 0 && positiveCount === 0) {
    // Only negative
    score = negativeCount >= 2 ? 1 : 2;
  } else {
    // Mixed
    const ratio = positiveCount / (positiveCount + negativeCount);
    if (ratio >= 0.75) score = 4;
    else if (ratio >= 0.5) score = 3;
    else if (ratio >= 0.25) score = 2;
    else score = 1;
  }

  // Determine confidence
  let confidence: "high" | "medium" | "low";
  if (matchRatio >= 0.3) confidence = "high";
  else if (matchRatio >= 0.1) confidence = "medium";
  else confidence = "low";

  return {
    id: dimension.id,
    name: dimension.name,
    score: score,
    weight: dimension.weight,
    weightedScore: score * dimension.weight,
    positiveMatches: positiveMatches,
    negativeMatches: negativeMatches,
    confidence: confidence,
  };
}

// Calculate overall score from dimensions
function calculateOverallScore(scores: DimensionScore[]): number {
  const presentScores = scores.filter(s => s.score > 0);

  if (presentScores.length === 0) {
    return 0;
  }

  const weightedSum = presentScores.reduce((sum, s) => sum + s.weightedScore, 0);
  const totalWeight = presentScores.reduce((sum, s) => sum + s.weight, 0);

  return weightedSum / totalWeight;
}

// Get interpretation for score
function getInterpretation(score: number, interpretations: Record<string, string>): string {
  if (score >= 4.0) return interpretations["4.0+"] || "Strong alignment";
  if (score >= 3.0) return interpretations["3.0-3.9"] || "Adequate alignment";
  if (score >= 2.0) return interpretations["2.0-2.9"] || "Significant misalignment";
  return interpretations["below_2.0"] || "Major revision needed";
}

// Generate recommendations based on scores
function generateRecommendations(scores: DimensionScore[], dimensions: Dimension[]): string[] {
  const recommendations: string[] = [];

  for (const score of scores) {
    if (score.score > 0 && score.score <= 2) {
      const dimension = dimensions.find(d => d.id === score.id);
      if (dimension) {
        recommendations.push(
          `[${dimension.name}] Low score (${score.score}/5): ${dimension.description}`
        );
        recommendations.push(
          `  ↳ Aim for: ${dimension.positive_pole}`
        );
        if (score.negativeMatches.length > 0) {
          recommendations.push(
            `  ↳ Found issues: ${score.negativeMatches.slice(0, 2).join("; ")}`
          );
        }
      }
    }
  }

  if (recommendations.length === 0) {
    const lowConfidence = scores.filter(s => s.confidence === "low" && s.score > 0);
    if (lowConfidence.length > 0) {
      recommendations.push(
        "Note: Some dimensions had low confidence scores due to limited indicator matches."
      );
    }
  }

  return recommendations;
}

// Format console output
function formatConsoleOutput(result: AuditResult, scoresOnly: boolean): string {
  const lines: string[] = [];

  if (result.file) {
    lines.push(`\n📊 Taste Audit: ${result.file}`);
  } else {
    lines.push(`\n📊 Taste Audit`);
  }
  lines.push("═".repeat(50));

  // Overall score
  const scoreBar = "█".repeat(Math.round(result.overallScore)) + "░".repeat(5 - Math.round(result.overallScore));
  lines.push(`\nOverall Score: ${result.overallScore.toFixed(1)}/5.0 [${scoreBar}]`);
  lines.push(`Interpretation: ${result.interpretation}`);
  lines.push("");

  // Dimension scores
  lines.push("Dimension Scores:");
  lines.push("─".repeat(50));

  for (const dim of result.dimensions) {
    if (dim.score === 0) {
      lines.push(`  ${dim.name}: — (not present)`);
      continue;
    }

    const dimBar = "●".repeat(dim.score) + "○".repeat(5 - dim.score);
    const confidenceIcon = dim.confidence === "high" ? "✓" : dim.confidence === "medium" ? "~" : "?";
    lines.push(`  ${dim.name}: ${dim.score}/5 [${dimBar}] ${confidenceIcon}`);

    if (!scoresOnly) {
      if (dim.positiveMatches.length > 0) {
        lines.push(`    ✅ ${dim.positiveMatches.slice(0, 2).join(", ")}`);
      }
      if (dim.negativeMatches.length > 0) {
        lines.push(`    ⚠️  ${dim.negativeMatches.slice(0, 2).join(", ")}`);
      }
    }
  }

  // Recommendations
  if (!scoresOnly && result.recommendations.length > 0) {
    lines.push("");
    lines.push("Recommendations:");
    lines.push("─".repeat(50));
    for (const rec of result.recommendations) {
      lines.push(rec);
    }
  }

  lines.push("");
  return lines.join("\n");
}

// Format JSON output
function formatJsonOutput(result: AuditResult): string {
  return JSON.stringify(result, null, 2);
}

// Main
async function main() {
  const args = parse(Deno.args, {
    string: ["prefs"],
    boolean: ["json", "help", "scores-only"],
    alias: { h: "help", j: "json", p: "prefs", s: "scores-only" },
  });

  if (args.help) {
    console.log(`
taste-audit.ts - Score content against taste dimensions

Usage:
  deno run --allow-read taste-audit.ts [options] <file>

Options:
  -h, --help          Show this help message
  -j, --json          Output as JSON
  -s, --scores-only   Show only scores, no details
  -p, --prefs FILE    Use custom preferences file (not yet implemented)

Dimensions scored:
  • Competence - characters solve problems methodically
  • Institutional Realism - power through incentives/constraints
  • Voice Integration - wit as character expression
  • Worldbuilding Subordination - world serves story
  • Impossibility Logic - earned mysteries with rules
  • Testimony Authenticity - real people with real lives

Scoring:
  5 = Exemplary (clearly positive)
  4 = Strong (mostly positive)
  3 = Neutral
  2 = Weak (leans negative)
  1 = Poor (clearly negative)
  0 = Absent (dimension not present)

Examples:
  deno run --allow-read taste-audit.ts testimony.md
  deno run --allow-read taste-audit.ts --scores-only chapter.md
`);
    Deno.exit(0);
  }

  const dimensionsData = await loadDimensions();

  // Get file to audit
  if (args._.length === 0) {
    console.error("Error: No file provided. Use --help for usage.");
    Deno.exit(1);
  }

  const fileName = String(args._[0]);
  let text: string;

  try {
    text = await Deno.readTextFile(fileName);
  } catch (error) {
    console.error(`Error reading file ${fileName}:`, error.message);
    Deno.exit(1);
  }

  // Score each dimension
  const scores: DimensionScore[] = [];
  for (const dimension of dimensionsData.dimensions) {
    scores.push(scoreDimension(text, dimension));
  }

  // Calculate overall score
  const overallScore = calculateOverallScore(scores);
  const interpretation = getInterpretation(overallScore, dimensionsData.scoring.interpretation);
  const recommendations = generateRecommendations(scores, dimensionsData.dimensions);

  const result: AuditResult = {
    file: fileName,
    overallScore: overallScore,
    interpretation: interpretation,
    dimensions: scores,
    recommendations: recommendations,
  };

  // Output
  if (args.json) {
    console.log(formatJsonOutput(result));
  } else {
    console.log(formatConsoleOutput(result, args["scores-only"]));
  }

  // Exit with code based on score
  if (overallScore < 2.0) {
    Deno.exit(1);
  }
}

main();
