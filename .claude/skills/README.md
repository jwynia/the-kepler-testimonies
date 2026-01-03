# Fiction Skills Cluster

Agent skills derived from the Story Sense fiction frameworks. These skills enable AI agents to assist with narrative development across various modes and use cases.

## Skill Architecture

The cluster is organized in four layers:

### 1. Diagnostic Skills
Core frameworks for identifying story problems and recommending interventions.

| Skill | Purpose | Scripts |
|-------|---------|---------|
| [story-sense](story-sense/) | Master diagnostic—identifies story state, recommends frameworks | `entropy.ts`, `functions.ts` |
| [worldbuilding](worldbuilding/) | Diagnose world-level problems—thin settings, designed institutions, flat cultures | `cascade.ts`, `institution.ts`, `belief.ts` |
| [cliche-transcendence](cliche-transcendence/) | Transform generic elements into original ones | `orthogonality-check.ts` |
| [character-arc](character-arc/) | Design and troubleshoot character transformation | — |
| [scene-sequencing](scene-sequencing/) | Structure scenes and control pacing | `analyze-scene.ts` |
| [dialogue](dialogue/) | Diagnose flat dialogue, same-voice characters, lack of subtext | `voice-check.ts`, `dialogue-audit.ts` |
| [endings](endings/) | Diagnose weak endings, rushed resolutions, arbitrary conclusions | `ending-check.ts`, `setup-payoff.ts` |
| [prose-style](prose-style/) | Diagnose sentence-level issues—flat prose, monotony, voice inconsistency | `prose-check.ts`, `rhythm.ts` |
| [revision](revision/) | Guide edit passes after drafting—knows when you're done | `revision-audit.ts` |
| [genre-conventions](genre-conventions/) | Diagnose genre problems, generate genre-specific elements | `genre-elements.ts`, `genre-check.ts`, `genre-blend.ts` |
| [interactive-fiction](interactive-fiction/) | Diagnose branching narrative problems—meaningless choices, agency conflicts | — |
| [conlang](conlang/) | Generate phonologically consistent constructed languages | `phonology.ts`, `words.ts` |
| [taste-eval](taste-eval/) | Evaluate work against explicit taste preferences—surface alignment and conflicts | `taste-check.ts`, `taste-audit.ts`, `preference-map.ts` |

### 2. Generative Skills
Skills focused on creation and ideation rather than diagnosis.

| Skill | Purpose | Modules |
|-------|---------|---------|
| [story-idea-generator](story-idea-generator/) | Genre-first story concept development | 4 setting modules + implementation guide |
| [drafting](drafting/) | Break through blocks and execute first drafts | — |

### 3. Workflow Skills
Operational modes that define how the agent interacts with the writer.

| Skill | Mode | Key Constraint |
|-------|------|----------------|
| [story-coach](story-coach/) | Assistive | Never writes prose; guides through questions |
| [story-collaborator](story-collaborator/) | Collaborative | Actively generates content alongside writer |

### 4. Utility Skills
Supporting tools for building and maintaining the skill ecosystem.

| Skill | Purpose | Scripts |
|-------|---------|---------|
| [list-builder](list-builder/) | Build production-quality randomization datasets | `validate-list.ts` |
| [sensitivity-check](sensitivity-check/) | Evaluate representation, flag potential harm concerns | `sensitivity-audit.ts`, `representation-map.ts` |

See also: [skill-builder](../skill-builder/) (top-level utility for creating skills in any domain)

### 5. Application Skills
Domain-specific applications for particular use cases.

| Skill | Application | Scripts |
|-------|-------------|---------|
| [shared-world](shared-world/) | Wiki-style world bible for collaborative fiction | `init-world.ts`, `add-entry.ts`, `check-conflicts.ts`, `build-index.ts` |
| [game-facilitator](game-facilitator/) | Narrative RPG game master for collaborative storytelling | `npc-generator.ts`, `complication-generator.ts`, `session-notes.ts` |
| [world-fates](world-fates/) | Manage long-term fate and fortune across a shared world | `fate-pressure.ts`, `fate-roll.ts`, `fate-choice.ts`, `propose-shift.ts`, `exposure-log.ts` |

## Skill Locations

**Source of truth:** `skills/fiction/` (this folder). Skills are copied to `.claude/skills/` for Claude Code runtime access.

```
skills/fiction/           # Source of truth - edit here
├── story-sense/
├── worldbuilding/
├── cliche-transcendence/
├── ...
└── world-fates/

.claude/skills/           # Runtime copies - do not edit directly
├── story-sense/
├── worldbuilding/
└── ...
```

## Usage Patterns

### Assistive Coach Mode
Combine `story-sense` + `story-coach`:
- Agent diagnoses problems
- Agent asks questions and explains frameworks
- Agent never generates story content
- Writer does all the writing

### Active Collaborator Mode
Combine `story-sense` + `story-collaborator`:
- Agent diagnoses problems AND generates content
- Agent offers prose drafts, dialogue options, alternatives
- Writer remains in creative control
- Agent matches writer's established voice

### Diagnostic Only
Use individual diagnostic skills standalone:
- `cliche-transcendence` for originality work
- `character-arc` for transformation design
- `scene-sequencing` for pacing problems
- `dialogue` for voice and subtext issues
- `endings` for resolution problems
- `prose-style` for sentence-level craft (after structure is solid)
- `revision` for systematic manuscript improvement
- `genre-conventions` for genre promise and element placement
- `interactive-fiction` for branching narrative and choice design

### Ideation Mode
Use when starting new projects:
- `story-idea-generator` for genre-first concept development
- `drafting` for executing first drafts and breaking blocks

### World Management
For shared universes and long-running campaigns:
- `shared-world` maintains wiki-style canonical reference
- `game-facilitator` runs real-time collaborative sessions
- `world-fates` manages probabilistic fate/fortune across time

## Relationship to Source Frameworks

Each skill is derived from corresponding markdown frameworks in `/frameworks/fiction/`:

| Skill | Source Framework |
|-------|------------------|
| story-sense | `index.md` (Story Sense diagnostic model) |
| cliche-transcendence | `Cliche Trancendence Framework.md` |
| character-arc | `character-arc-framework.md` |
| scene-sequencing | `scene-sequencing-framework.md` |
| dialogue | `dialogue-framework.md` |
| endings | `endings-framework.md` |
| prose-style | `prose-style-framework.md` |
| revision | `revision-framework.md` |
| worldbuilding | `systemic-worldbuilding.md` |
| interactive-fiction | `interactive-fiction-framework.md` |
| conlang | `Evolutionary Language Development Framework.md` |
| story-idea-generator | `Story Idea Generator.md` + 4 setting modules |
| drafting | `drafting-framework.md` |
| sensitivity-check | `Sensitivity Reader Framework.md` |

Skills are condensed for agent context efficiency (< 500 lines, < 5000 tokens recommended). Full frameworks contain complete methodology and examples.

## Design Principles

### Progressive Disclosure
- Name + description loaded at discovery
- Full SKILL.md loaded when activated
- References loaded only when needed

### Framework Fidelity
Skills preserve core insights from source frameworks:
- Diagnostic approach (assess → diagnose → intervene)
- Key questions and tests
- Anti-patterns to avoid

### Mode Clarity
Workflow skills have explicit constraints:
- story-coach: Cannot generate prose
- story-collaborator: Can generate prose
- Both apply same diagnostic frameworks

### Agent Interoperability
Skills follow Agent Skills spec (agentskills.io):
- YAML frontmatter with required fields
- Markdown instructions
- Self-contained (or with relative references)

### LLM + Scripts Architecture

**Philosophy:** LLMs excel at judgment, synthesis, and making meaning. Scripts excel at true randomness and maintaining large datasets. Each system does what it's best at.

**Pattern:**
1. LLM diagnoses the story state
2. Script provides random elements from curated lists
3. LLM applies framework thinking to random inputs
4. Writer chooses what resonates

**Tools are Deno scripts** for portability:
- No build step required
- TypeScript with type safety
- Easy to run: `deno run --allow-read script.ts`

## Available Scripts

### Core Diagnostic Scripts

| Skill | Script | Purpose |
|-------|--------|---------|
| story-sense | `entropy.ts` | Random elements from curated lists |
| story-sense | `functions.ts` | Function-form generator for character roles |
| worldbuilding | `cascade.ts` | Consequence cascade from speculative elements |
| worldbuilding | `institution.ts` | Institutional evolution history generator |
| worldbuilding | `belief.ts` | Belief system parameter generator |
| scene-sequencing | `analyze-scene.ts` | Scene structure analysis |
| cliche-transcendence | `orthogonality-check.ts` | Four-axis cliché evaluation |
| dialogue | `voice-check.ts` | Voice distinctiveness between characters |
| dialogue | `dialogue-audit.ts` | Double-duty test for dialogue function |
| endings | `ending-check.ts` | Ending structure and type analysis |
| endings | `setup-payoff.ts` | Track setups and payoffs across story |
| prose-style | `prose-check.ts` | Passive voice, weak verbs, modifiers |
| prose-style | `rhythm.ts` | Sentence/paragraph variety analysis |
| revision | `revision-audit.ts` | Pass progress and scene decision tracking |
| genre-conventions | `genre-elements.ts` | Random elements per genre |
| genre-conventions | `genre-check.ts` | Pattern-match text against genre |
| genre-conventions | `genre-blend.ts` | Secondary genre integration helper |
| conlang | `phonology.ts` | Phoneme inventory generation |
| conlang | `words.ts` | Word generation from inventory |
| list-builder | `validate-list.ts` | Assess dataset maturity and quality |
| sensitivity-check | `sensitivity-audit.ts` | Pattern concerns scanner |
| sensitivity-check | `representation-map.ts` | Character identity distribution |
| taste-eval | `taste-check.ts` | Pattern-match text for taste violations |
| taste-eval | `taste-audit.ts` | Score content against taste dimensions |
| taste-eval | `preference-map.ts` | Visualize preference balance across contributors |

### Application Scripts

| Skill | Script | Purpose |
|-------|--------|---------|
| shared-world | `init-world.ts` | Initialize world bible structure |
| shared-world | `add-entry.ts` | Create entries from templates |
| shared-world | `check-conflicts.ts` | Scan for contradictions |
| shared-world | `build-index.ts` | Regenerate index files |
| game-facilitator | `npc-generator.ts` | Generate NPCs on demand |
| game-facilitator | `complication-generator.ts` | Generate complications when stuck |
| game-facilitator | `session-notes.ts` | Session note template generator |
| world-fates | `fate-pressure.ts` | Calculate fate pressure for entity |
| world-fates | `fate-roll.ts` | Roll the wheel of fate |
| world-fates | `fate-choice.ts` | Generate dramatic Tier 2 choices |
| world-fates | `propose-shift.ts` | Generate fate-shift proposal |
| world-fates | `exposure-log.ts` | Log risk exposure events |

### Example Usage

```bash
# Random character flaw
deno run --allow-read skills/fiction/story-sense/scripts/entropy.ts lies

# Consequence cascade from speculative element
deno run --allow-read skills/fiction/worldbuilding/scripts/cascade.ts "teleportation exists"

# Check dialogue voice distinctiveness
deno run --allow-read skills/fiction/dialogue/scripts/voice-check.ts dialogue.txt

# Validate a randomization list
deno run --allow-read skills/fiction/list-builder/scripts/validate-list.ts data.json

# Calculate fate pressure
deno run --allow-read skills/fiction/world-fates/scripts/fate-pressure.ts "Lord Varen" --bible ./world-bible
```

### Data Files

Extensible JSON files for domain-specific lists:
- `story-sense/data/genre-elements.json` - Genre-specific lists
- `story-sense/data/functions-forms.json` - Character function/form templates
- `conlang/data/phoneme-frequencies.json` - PHOIBLE-derived frequency data
- `conlang/data/syllable-templates.json` - Syllable structure templates
- `taste-eval/data/taste-patterns.json` - Taste state detection patterns
- `taste-eval/data/kepler-dimensions.json` - Project-specific taste dimensions

**Dataset Maturity Levels:**

| Level | Items | Status |
|-------|-------|--------|
| Starter | 10-30 | Demo/prototype only |
| Functional | 30-75 | Usable but limited |
| Production | 75-150 | Ready for regular use |
| Comprehensive | 150+ | Reference quality |

See [list-builder references](list-builder/references/dataset-quality-criteria.md) for complete criteria.

## Adding New Skills

To add a skill to this cluster:

1. Create directory: `skills/fiction/[skill-name]/`
2. Create `SKILL.md` with required frontmatter:
   ```yaml
   ---
   name: skill-name
   description: When to use this skill and what it does
   license: MIT
   metadata:
     author: jwynia
     version: "1.0"
     domain: fiction
     cluster: story-sense
   ---
   ```
3. Write instructions under 500 lines
4. Add scripts in `scripts/` subdirectory if needed
5. Update this README

## Skill Summary

| Category | Count | Skills |
|----------|-------|--------|
| Diagnostic | 13 | story-sense, worldbuilding, cliche-transcendence, character-arc, scene-sequencing, dialogue, endings, prose-style, revision, genre-conventions, interactive-fiction, conlang, taste-eval |
| Generative | 2 | story-idea-generator, drafting |
| Workflow | 2 | story-coach, story-collaborator |
| Utility | 2 | list-builder, sensitivity-check |
| Application | 3 | shared-world, game-facilitator, world-fates |
| **Total** | **22** | |

## Related Clusters

This fiction cluster connects to other operating framework domains:
- `doppelganger/` — Identity and decision-making (informs character work)
- `context-networks/` — Information organization (informs worldbuilding, shared-world)
- `naming/` — Naming conventions (informs character/place naming)
