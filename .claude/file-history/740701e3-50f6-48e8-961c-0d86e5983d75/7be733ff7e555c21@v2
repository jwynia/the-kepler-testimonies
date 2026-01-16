# Snowflake Outlining Workflow

This document describes how we expand the storyboard iteratively, using the snowflake method with skill-assisted development.

---

## The Snowflake Method

Each level of the outline expands the previous level with more structural detail:

| Level | What It Contains | Expansion Ratio |
|-------|------------------|-----------------|
| L0 | One sentence (the premise) | - |
| L1 | One paragraph (~5 sentences) | 5x |
| L2 | Page summary (5 paragraphs) | 5x |
| L3 | Act structure (3-4 acts with turning points) | ~4x |
| L4 | Sequence breakdown (2-3 sequences per act) | ~3x |
| L5 | Scene beats (individual scenes with goals) | ~3x |
| L6+ | Scene internals, dialogue, prose | variable |

**Key principle**: Each level should be coherent on its own. A reader at any level should understand the story at that level of detail.

---

## Skill Usage by Level

### Levels 0-2: Foundation (Complete)
Pre-populated from locked decisions. Uses:
- `/story-sense` to verify story state
- `/cliche-transcendence` to check for generic elements

### Level 3: Act Structure
Expand L2 beats into acts with turning points. Uses:
- `/outline-collaborator` for structural proposals
- `/story-sense` to diagnose pacing issues
- `/character-arc` to map investigator transformation across acts

### Level 4: Sequence Breakdown
Break acts into sequences. Uses:
- `/outline-collaborator` for sequence proposals
- `/scene-sequencing` for pacing within sequences
- `/brainstorming` if stuck on how to structure a sequence

### Level 5: Scene Beats
Individual scenes with Goal-Conflict-Disaster or Reaction-Dilemma-Decision structure. Uses:
- `/scene-sequencing` heavily
- `/dialogue` to plan key conversations
- `/cliche-transcendence` to freshen predictable scenes

### Level 6+: Execution
Scene internals, drafting. Uses:
- `/drafting` for prose execution
- `/prose-style` for sentence-level polish
- `/revision` for edit passes

---

## Expansion Process

### Step 1: Select a Level to Expand
Start with the lowest incomplete level. Currently: **Level 3 (Act Structure)**.

### Step 2: Invoke the Right Skill
Say "expand this" or "snowflake this" or "next level of detail" and `/outline-collaborator` will activate automatically.

Provide context:
- Which level you're expanding
- Any constraints or preferences
- Questions you want the expansion to address

### Step 3: Review and Iterate
The skill will propose structural options. Accept, modify, or reject. Use `/story-sense` if the proposal feels off.

### Step 4: Update the Storyboard
Once satisfied, update `storyboard.md` with the new level content.

### Step 5: Commit and Continue
Commit the expansion. Move to the next level or next section needing work.

---

## Automatic Skill Triggers

These phrases invoke skills immediately (per CLAUDE.md):

| Phrase | Skill | Use Case |
|--------|-------|----------|
| "expand this", "snowflake this" | `/outline-collaborator` | Develop next level |
| "what state is the story in" | `/story-sense` | Diagnose problems |
| "too generic", "make this fresh" | `/cliche-transcendence` | Fix predictable elements |
| "character arc for [name]" | `/character-arc` | Map transformation |
| "scene sequence", "pacing" | `/scene-sequencing` | Structure scene flow |

---

## Open Questions at Each Level

As you expand, these questions guide development:

### For Level 3 (Act Structure)
- Where exactly does Act 1 end? (Personal connection discovered? First discrepancy noticed?)
- What's the midpoint reversal? (When does the investigator realize they can't sign off?)
- Where's the "point of no return"? (When is retreat impossible?)

### For Level 4 (Sequences)
- How many testimonies appear in each sequence?
- Which of the 12 impossible testimonies appear when?
- How does investigation procedure structure the sequences?

### For Level 5 (Scenes)
- Which scenes are testimony-reading (investigator alone with documents)?
- Which are testimony-as-flashback (dramatic rendering)?
- Which are confrontation scenes (investigator vs. institution)?

---

## PR Workflow for Expansion

Each expansion level can be its own PR:

1. Create branch: `feature/storyboard-level-N`
2. Develop the level using skills
3. Update storyboard.md
4. Commit and push
5. Create PR with summary of what was developed
6. Leave open ~2 days for comment
7. Merge if no objections
8. Continue to next level

---

## Related Documents

- [storyboard.md](storyboard.md) - The living storyboard document
- [CLAUDE.md](/CLAUDE.md) - Skill invocation patterns
- [outline-workflow.md](../_outline-workflow.md) - General outline workflow (if exists)
