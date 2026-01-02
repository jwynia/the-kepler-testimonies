#!/usr/bin/env -S deno run --allow-read

/**
 * Institution Evolution Generator
 *
 * Generates realistic institutional history and evolution for fictional organizations.
 * Creates founding contexts, naming evolution, crises, and current state.
 *
 * Usage:
 *   deno run --allow-read institution.ts --sector banking --era 1920s
 *   deno run --allow-read institution.ts "Umbrella Corporation" --crises 3
 *   deno run --allow-read institution.ts --sector technology --ecosystem
 */

interface InstitutionProfile {
  name: string;
  sector: string;
  foundingEra: string;
  foundingContext: string;
  namingEvolution: string[];
  crises: string[];
  currentState: string;
  internalTensions: string[];
  externalRelationships: string[];
}

// Sector-specific naming patterns by era
const NAMING_PATTERNS: Record<string, Record<string, string[]>> = {
  banking: {
    "pre-1900": [
      "[Founder] & Sons Bank",
      "First National Bank of [Location]",
      "[Location] Savings & Trust",
      "Merchants Bank of [Location]",
    ],
    "1900-1950": [
      "[Location] National Bank",
      "[Founder] Banking Corporation",
      "Continental [Location] Bank",
      "Union Trust Company",
    ],
    "1950-1980": [
      "[Abbreviation] Financial",
      "[Location] Bancorp",
      "First [Location]",
      "[Abstract] Bank",
    ],
    "1980-2000": [
      "[Abstract] Financial Group",
      "[Abbreviation] Holdings",
      "[Location] Financial Partners",
    ],
    "2000-present": [
      "[Abstract]",
      "[Short-word] Bank",
      "[Abstract] Capital",
    ],
  },
  technology: {
    "pre-1970": [
      "[Founder] Computing Machines",
      "Advanced [Function] Corporation",
      "[Location] Electronics",
      "Precision [Function] Inc.",
    ],
    "1970-1990": [
      "[Portmanteau]",
      "[Abstract] Systems",
      "[Abbreviation] Technologies",
      "[Function]Corp",
    ],
    "1990-2010": [
      "[Abstract].com",
      "[Misspelling]",
      "[Short-word] Technologies",
      "[Abstract] Solutions",
    ],
    "2010-present": [
      "[Single-word]",
      "[Dropped-vowel]",
      "[Abstract]",
      "[Portmanteau]",
    ],
  },
  pharmaceutical: {
    "pre-1950": [
      "[Founder] Pharmaceutical Company",
      "[Location] Drug Company",
      "[Founder] Chemical Works",
    ],
    "1950-1980": [
      "[Abstract]-Pharma",
      "[Founder] Laboratories",
      "[Abstract] Therapeutics",
    ],
    "1980-2000": [
      "[Abstract]Med",
      "[Greek-prefix] Pharmaceuticals",
      "[Abstract] Biosciences",
    ],
    "2000-present": [
      "[Greek-prefix]",
      "[Abstract] Therapeutics",
      "[Portmanteau]",
    ],
  },
  military: {
    "any": [
      "[Ordinal] [Unit-type] Division",
      "[Location] [Unit-type] Regiment",
      "[Founder's] Own [Unit-type]",
      "[Abstract] [Unit-type] Brigade",
    ],
  },
  religious: {
    "any": [
      "Church of [Concept]",
      "Temple of [Deity/Concept]",
      "[Founder]-ite [Denomination]",
      "Order of [Saint/Founder]",
      "[Location] [Denomination] Assembly",
    ],
  },
  criminal: {
    "any": [
      "The [Abstract]",
      "[Location] [Crime-type]",
      "[Founder's] Organization",
      "The [Number]",
    ],
  },
};

// Crisis types by sector
const CRISIS_TYPES: Record<string, string[]> = {
  banking: [
    "Market crash requiring government intervention",
    "Fraud scandal in leadership",
    "Hostile takeover attempt",
    "Regulatory investigation",
    "Technology disruption (new payment systems)",
    "Major debtor default",
    "Currency crisis in key market",
    "Merger integration problems",
  ],
  technology: [
    "Product failure with safety implications",
    "Antitrust investigation",
    "Key talent exodus to competitor",
    "Patent infringement lawsuit",
    "Security breach exposing customer data",
    "Failed acquisition",
    "Platform obsolescence",
    "Founder departure/controversy",
  ],
  pharmaceutical: [
    "Drug recall with fatalities",
    "Clinical trial fraud",
    "Patent cliff on major product",
    "FDA rejection of key drug",
    "Price gouging scandal",
    "Opioid lawsuit",
    "Manufacturing contamination",
    "Generic competition undercutting",
  ],
  military: [
    "Defeat in major engagement",
    "Leadership scandal",
    "Budget cuts/reorganization",
    "Equipment failure",
    "War crimes investigation",
    "Mutiny or mass desertion",
    "Political change in government",
    "Merger with rival unit",
  ],
  religious: [
    "Schism over doctrine",
    "Leadership succession crisis",
    "Abuse scandal",
    "Political persecution",
    "Theological challenge from reformers",
    "Financial scandal",
    "Competing revelation claims",
    "Generational faith crisis",
  ],
  criminal: [
    "Major law enforcement crackdown",
    "Leadership assassination",
    "Territory war with rival",
    "Key member turning informant",
    "Money laundering exposure",
    "Supply chain disruption",
    "Generational succession conflict",
    "Legitimate business gone wrong",
  ],
  default: [
    "Leadership transition crisis",
    "Financial difficulties",
    "Regulatory challenge",
    "Public relations scandal",
    "Competitive pressure",
    "Internal power struggle",
    "External threat or attack",
    "Mission drift or identity crisis",
  ],
};

// Founding contexts
const FOUNDING_CONTEXTS: Record<string, string[]> = {
  banking: [
    "Founded to finance [industry] development in [location]",
    "Created after [crisis] left [location] without reliable credit",
    "Spin-off from [larger-institution] regional operations",
    "Merger of [number] smaller banks seeking scale",
    "Founded by [immigrant-group] community for mutual support",
  ],
  technology: [
    "Founded by [university] researchers commercializing [research]",
    "Garage startup by [founder-type] who saw opportunity in [trend]",
    "Spin-off from [larger-company] when project was deprioritized",
    "Founded to solve specific problem: [problem]",
    "Result of [government-program] privatization",
  ],
  pharmaceutical: [
    "Founded by chemist who discovered [compound]",
    "Spin-off from [chemical-company] pharmaceutical division",
    "Founded to develop treatments for [disease]",
    "Result of [country] effort to develop domestic drug industry",
    "Started as [natural-remedy] company, transitioned to pharma",
  ],
  default: [
    "Founded in response to [need/opportunity]",
    "Created by [founder-type] who saw gap in market",
    "Emerged from [previous-institution] reorganization",
    "Founded during [historical-period] upheaval",
    "Result of [government/private] initiative",
  ],
};

// Internal tensions
const INTERNAL_TENSIONS = [
  "Old guard vs. new leadership philosophy",
  "Profit/mission balance debates",
  "Centralization vs. regional autonomy",
  "Innovation vs. stability factions",
  "Generational culture clash",
  "Merger integration resentments",
  "Ethics vs. expedience disputes",
  "Founder's vision vs. market reality",
];

// External relationships
const EXTERNAL_RELATIONSHIPS = [
  "Regulatory capture: close ties to [regulator]",
  "Dependent on [larger-entity] for [resource]",
  "Locked in competition with [rival]",
  "Symbiotic relationship with [partner]",
  "Strained relations with [government-entity]",
  "Mutual defense pact with [ally]",
  "Historical enemy: [antagonist]",
  "Patron relationship with [benefactor]",
];

function randomFrom<T>(arr: T[], count: number = 1): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function getEraCategory(era: string): string {
  const year = parseInt(era.replace(/[^0-9]/g, "")) || 2000;
  if (year < 1900) return "pre-1900";
  if (year < 1950) return "1900-1950";
  if (year < 1970) return "pre-1970";
  if (year < 1980) return "1950-1980";
  if (year < 1990) return "1970-1990";
  if (year < 2000) return "1980-2000";
  if (year < 2010) return "1990-2010";
  return "2000-present";
}

function generateInstitution(
  sector: string,
  era: string,
  crisisCount: number,
  existingName?: string
): InstitutionProfile {
  const sectorPatterns = NAMING_PATTERNS[sector] || NAMING_PATTERNS.technology;
  const eraCategory = getEraCategory(era);
  const patterns = sectorPatterns[eraCategory] || sectorPatterns["any"] || Object.values(sectorPatterns)[0];

  // Generate name if not provided
  const name = existingName || randomFrom(patterns, 1)[0];

  // Get founding context
  const contexts = FOUNDING_CONTEXTS[sector] || FOUNDING_CONTEXTS.default;
  const foundingContext = randomFrom(contexts, 1)[0];

  // Generate naming evolution
  const namingEvolution = [
    `${era}: "${name}" (original founding name)`,
  ];

  // Add evolution steps based on how old the institution is
  const ageSteps = Math.min(3, Math.floor((2026 - parseInt(era.replace(/[^0-9]/g, ""))) / 30));
  if (ageSteps > 0) {
    const evolutionReasons = [
      "simplified after regional expansion",
      "rebranded following merger",
      "modernized for new market positioning",
      "abbreviated for digital presence",
      "changed after scandal/crisis",
    ];
    for (let i = 0; i < ageSteps; i++) {
      const reason = randomFrom(evolutionReasons, 1)[0];
      namingEvolution.push(`[decade later]: Name ${reason}`);
    }
  }

  // Generate crises
  const crisisPool = CRISIS_TYPES[sector] || CRISIS_TYPES.default;
  const crises = randomFrom(crisisPool, crisisCount);

  // Current state
  const currentStates = [
    "Stable but facing disruption pressure",
    "Growing rapidly but culture is strained",
    "Mature and dominant but complacent",
    "Recovering from recent crisis",
    "Pivoting to new business model",
    "Acquisition target",
    "Acquirer seeking scale",
    "Facing existential regulatory threat",
  ];

  return {
    name,
    sector,
    foundingEra: era,
    foundingContext,
    namingEvolution,
    crises: crises.map((c, i) => `Crisis ${i + 1}: ${c}`),
    currentState: randomFrom(currentStates, 1)[0],
    internalTensions: randomFrom(INTERNAL_TENSIONS, 2),
    externalRelationships: randomFrom(EXTERNAL_RELATIONSHIPS, 2),
  };
}

function formatProfile(profile: InstitutionProfile): string {
  const lines: string[] = [];

  lines.push(`# Institution Profile: ${profile.name}\n`);
  lines.push(`**Sector:** ${profile.sector}`);
  lines.push(`**Founded:** ${profile.foundingEra}\n`);

  lines.push("## Founding Context\n");
  lines.push(profile.foundingContext);
  lines.push("");

  lines.push("## Name Evolution\n");
  for (const step of profile.namingEvolution) {
    lines.push(`- ${step}`);
  }
  lines.push("");

  lines.push("## Crisis History\n");
  for (const crisis of profile.crises) {
    lines.push(`- ${crisis}`);
  }
  lines.push("");

  lines.push("## Current State\n");
  lines.push(profile.currentState);
  lines.push("");

  lines.push("## Internal Tensions\n");
  for (const tension of profile.internalTensions) {
    lines.push(`- ${tension}`);
  }
  lines.push("");

  lines.push("## External Relationships\n");
  for (const rel of profile.externalRelationships) {
    lines.push(`- ${rel}`);
  }
  lines.push("");

  lines.push("## Story Implications\n");
  lines.push("- This institution's history suggests [specific narrative possibilities]");
  lines.push("- Internal tensions could manifest as [character conflicts]");
  lines.push("- Past crises inform current behavior and trauma");
  lines.push("- External relationships create obligations and enemies");

  return lines.join("\n");
}

function main(): void {
  const args = Deno.args;

  if (args.includes("--help") || args.includes("-h")) {
    console.log(`Institution Evolution Generator

Usage:
  deno run --allow-read institution.ts --sector <sector> --era <era>
  deno run --allow-read institution.ts "<existing-name>" --crises <count>
  deno run --allow-read institution.ts --sector <sector> --ecosystem

Options:
  --sector    Type of institution
              Available: banking, technology, pharmaceutical, military,
                        religious, criminal
              Default: technology

  --era       Founding era (e.g., "1920s", "1985", "pre-1900")
              Default: 1980s

  --crises    Number of historical crises to generate (1-5)
              Default: 2

  --ecosystem Generate a set of related institutions (competitors, partners)

  --json      Output as JSON

Examples:
  deno run --allow-read institution.ts --sector banking --era 1920s
  deno run --allow-read institution.ts "Umbrella Corporation" --sector pharmaceutical --crises 4
  deno run --allow-read institution.ts --sector technology --ecosystem
`);
    Deno.exit(0);
  }

  // Parse arguments
  const sectorIndex = args.indexOf("--sector");
  const eraIndex = args.indexOf("--era");
  const crisesIndex = args.indexOf("--crises");
  const jsonOutput = args.includes("--json");
  const ecosystem = args.includes("--ecosystem");

  // Get existing name if provided
  let existingName: string | undefined;
  for (const arg of args) {
    if (!arg.startsWith("--") && args.indexOf(arg) === 0) {
      existingName = arg;
      break;
    }
  }

  const sector = sectorIndex !== -1 && args[sectorIndex + 1]
    ? args[sectorIndex + 1]
    : "technology";

  const era = eraIndex !== -1 && args[eraIndex + 1]
    ? args[eraIndex + 1]
    : "1980s";

  const crisisCount = crisesIndex !== -1 && args[crisesIndex + 1]
    ? parseInt(args[crisesIndex + 1]) || 2
    : 2;

  if (ecosystem) {
    // Generate ecosystem of related institutions
    const institutions = [];
    console.log(`# ${sector.charAt(0).toUpperCase() + sector.slice(1)} Sector Ecosystem\n`);

    // Main institution
    const main = generateInstitution(sector, era, crisisCount, existingName);
    institutions.push(main);
    console.log("## Primary Institution\n");
    console.log(formatProfile(main));
    console.log("\n---\n");

    // Competitor
    const competitor = generateInstitution(sector, era, 1);
    console.log("## Primary Competitor\n");
    console.log(formatProfile(competitor));
    console.log("\n---\n");

    // Partner/Supplier
    const partner = generateInstitution(sector, String(parseInt(era) - 20), 1);
    console.log("## Partner/Supplier\n");
    console.log(formatProfile(partner));

    if (jsonOutput) {
      console.log(JSON.stringify(institutions, null, 2));
    }
  } else {
    const profile = generateInstitution(sector, era, crisisCount, existingName);

    if (jsonOutput) {
      console.log(JSON.stringify(profile, null, 2));
    } else {
      console.log(formatProfile(profile));
    }
  }
}

main();
