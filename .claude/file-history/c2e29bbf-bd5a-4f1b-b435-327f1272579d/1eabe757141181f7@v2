# Plan: Taste Evaluation Skill

## Context

PR #13 proposes `context/foundation/taste.md` with narrative creative preferences. The existing fiction skills (story-sense, genre-conventions, revision) provide structured diagnostic frameworks with states, symptoms, and interventions.

**Goal**: Create a full **taste-eval** skill integrated with existing skills, following the established pattern of diagnostic skills.

## User Decisions

- **Location**: Integrate into skills (not a standalone document)
- **Depth**: Full skill treatment with CLI tools and documentation

---

## Skill Architecture

### New Skill: `.claude/skills/taste-eval/`

```
taste-eval/
├── SKILL.md                    # Main documentation
├── scripts/
│   ├── taste-check.ts         # Pattern-match text for taste violations
│   ├── taste-audit.ts         # Score testimony against taste dimensions
│   └── preference-map.ts      # Visualize preference balance across contributors
└── data/
    ├── taste-patterns.json    # Pattern libraries for detection
    └── kepler-dimensions.json # Project-specific taste dimensions
```

---

## SKILL.md Content Structure

### 1. Core Principle

**Taste is explicit preference that enables creative friction.**

Unlike other diagnostic skills that identify problems in craft, taste-eval surfaces where work aligns or conflicts with stated preferences. The goal is not consensus but productive tension.

### 2. The Taste States

| State | Symptoms | Fix |
|-------|----------|-----|
| **T1: Institutional Cartoon** | Government dumb, corporations evil, only heroes see through | Show incentives, constraints, internal knowledge |
| **T2: Cynicism as Cleverness** | Snark without substance, nihilism as insight | Ground critique in specific mechanism, show stakes |
| **T3: Worldbuilding Dominance** | Story stops for exposition, setting > character | Deliver world through action, cut info dumps |
| **T4: Narrator Commentary** | Wit from outside story, author intrudes | Embed voice in character, cut narrator jokes |
| **T5: Unearned Impossibility** | Magic/mystery arbitrary, "because plot" | Establish internal logic, earn the reveal |
| **T6: Bumbling for Plot** | Characters fail stupidly to serve plot | Failures from constraints not incompetence |
| **T7: Baroque Complexity** | Complexity mistaken for depth | Simplify to essence, complexity serves function |

### 3. Kepler-Specific Dimensions

Evaluable criteria derived from project taste:

| Dimension | Positive Pole | Negative Pole | Check |
|-----------|---------------|---------------|-------|
| **Competence** | Capable people facing real constraints | Bumbling idiots serving plot | Characters solve problems methodically |
| **Institutional Realism** | Power through incentives/info/constraints | Cartoon corruption | Authority figures have internal logic |
| **Voice Integration** | Wit as character expression | Narrator commentary | Humor comes from character, not meta |
| **Worldbuilding Subordination** | World serves story | Story serves world | Details earn their place |
| **Impossibility Logic** | Earned mysteries | Arbitrary weirdness | 12 impossibilities have internal rules |
| **Testimony Authenticity** | Real people with real lives | Archetypes serving plot | Voices feel distinct and grounded |

### 4. Diagnostic Process

```
Read testimony/scene
    ↓
Check against taste states (T1-T7)
    ↓
Score against dimensions (0-5 per dimension)
    ↓
If violations detected:
    ├── Flag specific passages
    ├── Identify which state(s) triggered
    └── Recommend intervention
    ↓
Output: Taste report with scores + recommendations
```

### 5. Integration Points

| Skill | Integration |
|-------|-------------|
| **story-sense** | Reference taste-eval for State 7 (Ready for Evaluation) |
| **revision** | Add "Taste Pass" after Prose Pass, before Polish |
| **drafting** | Pre-flight checklist includes taste dimensions |
| **genre-conventions** | Kepler Mystery requirements reference taste |

---

## CLI Tools

### taste-check.ts

Pattern-match text for taste violations.

```bash
# Check testimony for taste states
deno run --allow-read scripts/taste-check.ts testimony-047.md

# Check specific states only
deno run --allow-read scripts/taste-check.ts --states T1,T2 scene.md

# Inline text check
deno run --allow-read scripts/taste-check.ts --text "The government was too stupid to see..."
```

**Output**: Flagged passages with state identification and severity.

### taste-audit.ts

Score content against taste dimensions.

```bash
# Full audit
deno run --allow-read scripts/taste-audit.ts testimony-047.md

# Score only (no recommendations)
deno run --allow-read scripts/taste-audit.ts --score-only chapter.md

# Compare to baseline preferences
deno run --allow-read scripts/taste-audit.ts --compare taste.md testimony.md
```

**Output**: Dimension scores (0-5), overall taste alignment, recommendations.

### preference-map.ts

Visualize preference balance across contributors.

```bash
# Generate preference map from taste.md
deno run --allow-read scripts/preference-map.ts context/foundation/taste.md

# Check if content balances preferences
deno run --allow-read scripts/preference-map.ts --check chapter.md
```

**Output**: Preference distribution, conflict points, balance recommendations.

---

## Data Files

### taste-patterns.json

Pattern libraries for detection:

```json
{
  "T1_institutional_cartoon": {
    "triggers": ["too stupid to", "of course the government", "corrupt officials"],
    "severity_modifiers": ["just another", "always", "never"],
    "context_exceptions": ["character POV irony", "later revealed as wrong"]
  },
  "T2_cynicism": {
    "triggers": ["nothing ever changes", "that's just how it is", "wake up sheeple"],
    "severity_modifiers": ["clearly", "obviously", "everyone knows"]
  }
}
```

### kepler-dimensions.json

Project-specific evaluation criteria:

```json
{
  "dimensions": [
    {
      "id": "competence",
      "name": "Competence vs. Bumbling",
      "positive": "Characters solve problems methodically",
      "negative": "Failures from stupidity",
      "weight": 1.5
    },
    {
      "id": "institutional_realism",
      "name": "Institutional Realism",
      "positive": "Power through incentives/constraints",
      "negative": "Cartoon corruption",
      "weight": 2.0
    }
  ],
  "source": "context/foundation/taste.md"
}
```

---

## Files to Create/Modify

### New Files

1. `.claude/skills/taste-eval/SKILL.md` - Main skill documentation (~300 lines)
2. `.claude/skills/taste-eval/scripts/taste-check.ts` - Pattern matcher
3. `.claude/skills/taste-eval/scripts/taste-audit.ts` - Dimension scorer
4. `.claude/skills/taste-eval/scripts/preference-map.ts` - Balance visualizer
5. `.claude/skills/taste-eval/data/taste-patterns.json` - Detection patterns
6. `.claude/skills/taste-eval/data/kepler-dimensions.json` - Project dimensions

### Modify Existing Files

1. `.claude/skills/README.md` - Add taste-eval to skill registry
2. `.claude/skills/story-sense/SKILL.md` - Add reference to taste-eval at State 7
3. `.claude/skills/revision/SKILL.md` - Add Taste Pass to six-pass sequence

### Update in PR #13 (or new PR)

1. `context/foundation/taste.md` - Add "Structured Evaluation" section referencing skill

---

## Implementation Order

1. **Create skill skeleton** - SKILL.md with frontmatter and states
2. **Define dimensions** - kepler-dimensions.json from taste.md analysis
3. **Build taste-check.ts** - Pattern matching for states
4. **Build taste-audit.ts** - Dimension scoring
5. **Integrate with story-sense** - Add State 7 reference
6. **Integrate with revision** - Add Taste Pass
7. **Update README** - Add to skill registry

---

## Relationship to PR #13

This work **complements** PR #13 rather than replacing it:

- **PR #13's taste.md**: Narrative preferences, individual entries, forced tradeoffs
- **taste-eval skill**: Structured evaluation, diagnostic states, CLI tools

The skill reads from taste.md as its data source and provides the machinery to evaluate work against those preferences.
