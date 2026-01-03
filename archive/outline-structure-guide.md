# Novel Outline Structure Guide

How to organize files for novel outlining with Claude skills, based on the Transmission Zero project.

---

## Philosophy

This system rests on four principles:

1. **Atomic documents** - One concept per file, heavily cross-linked
2. **Navigation everywhere** - Every folder has an `_index.md` hub
3. **Multiple granularities** - Tagline → Premise → Synopsis → Outline → Draft
4. **Clear separation** - Structure, elements, craft decisions, and prose live apart

The goal: never wonder where something goes, never lose track of what's done.

---

## Directory Structure

```
project-root/
├── .context-network.md          # Pointer to context network
├── context-network/
│   ├── discovery.md             # Navigation hub
│   ├── processes/
│   │   └── workflow.md          # Session workflow
│   └── decisions/
│       └── YYYY-MM-DD-name.md   # Major decisions
└── novels/
    └── 01-novel-name/
        ├── meta/
        │   ├── tagline.md       # One line
        │   ├── premise.md       # One paragraph
        │   └── synopsis.md      # One page
        ├── outline/
        │   ├── _index.md        # Structure overview
        │   ├── backlog.md       # Issue tracker
        │   ├── chapters/
        │   │   ├── _index.md    # Chapter roster
        │   │   ├── 01.md
        │   │   ├── 02.md
        │   │   └── ...
        │   └── issues/
        │       ├── 001-name.md
        │       ├── 002-name.md
        │       └── ...
        ├── elements/
        │   ├── characters/
        │   │   ├── _index.md
        │   │   └── character-name.md
        │   ├── places/
        │   │   ├── _index.md
        │   │   └── place-name.md
        │   ├── organizations/
        │   │   ├── _index.md
        │   │   └── org-name.md
        │   └── objects/
        │       ├── _index.md
        │       └── object-name.md
        ├── craft/
        │   ├── voice.md         # POV and voice decisions
        │   ├── decisions.md     # Writing choices
        │   └── texture-*.md     # Specific craft notes
        └── drafts/
            └── chapters/
                ├── 01.md
                └── ...
```

---

## Naming Conventions

| Type | Pattern | Example |
|------|---------|---------|
| Files | kebab-case | `erica-tierney.md` |
| Chapters | two-digit numbers | `01.md`, `24.md` |
| Index files | underscore prefix | `_index.md` |
| Issues | ID + kebab-case | `061-opening-hook-weak.md` |
| Decisions | date + kebab-case | `2024-12-31-act2b-collision-model.md` |

**Links:** Use wikilink format: `[[issues/061-opening-hook-weak]]`, `[[../../craft/voice]]`

---

## Index Files (`_index.md`)

Every folder with multiple items gets an index. The index provides:

- **Roster** - List of contents with brief descriptions
- **Navigation** - Links to each item
- **Cross-cutting notes** - Patterns, relationships, arc summaries

### Example: Chapter Index

```markdown
# Chapter Roster - Novel 01

## Act 1: The Anomaly She Can't Explain

| Ch | Title | Status | Summary |
|----|-------|--------|---------|
| [[01]] | The Methodology | outline | Erica's normal work life; seeds of SETI past |
| [[02]] | The Wrong Shape | outline | Anomaly surfaces; first investigation |
...

**Emotional Arc:** Comfortable competence → growing unease → reluctant action
```

### Example: Character Index

```markdown
# Characters - Novel 01

## POV Character
- [[erica-tierney]] - The Skeptic. Security researcher, ex-SETI.

## Major Characters
- [[miles-lindqvist]] - The Believer. Journalist who witnessed The Experience.

## Supporting Characters
*(Added as they appear in drafts)*
- **Diane** - Erica's supervisor. Championed her methodology evaluation.
...
```

The key: indices are **navigation**, not duplication. Brief notes here, detail in individual files.

---

## The Backlog System

The backlog (`outline/backlog.md`) is your task tracker. It works like a lightweight issue system.

### Structure

```markdown
# Outline Backlog - Novel 01

Issues and gaps to address, organized by priority.

**Next ID:** 082

---

## Priority 1: Structural

| ID  | Issue                            | Chapters       | Status   |
| --- | -------------------------------- | -------------- | -------- |
| 001 | [[issues/001-act2b-static]]      | 13-16          | Resolved |
| 061 | [[issues/061-opening-hook-weak]] | 1              | Open     |

---

## Priority 2: Character
...

## Priority 3: Thread Development / Pacing
...

## Priority 4: Worldbuilding
...

## Priority 5: Tonal/Craft
...

## Priority 6: Minor/Polish
...

---

## Resolved

| ID  | Issue                       | Resolution Date | Notes                    |
| --- | --------------------------- | --------------- | ------------------------ |
| 001 | [[issues/001-act2b-static]] | 2024-12-31      | C+D fix with collision model |
```

### Priority Levels

| Priority | Type | Examples |
|----------|------|----------|
| 1 | Structural | Act pacing, missing turns, weak midpoints |
| 2 | Character | Arc gaps, missing agency, thin relationships |
| 3 | Pacing/Threads | Scene flow, subplot timing, transitions |
| 4 | Worldbuilding | Mechanics unclear, rules inconsistent |
| 5 | Tonal/Craft | Voice issues, dialogue problems, register |
| 6 | Minor/Polish | Names, small continuity, enrichment |

---

## Issue File Format

Each issue gets its own file in `outline/issues/`. Full context lives here, not in the backlog.

### Template

```markdown
# Issue NNN: Short Descriptive Title

**Status:** Open | In Progress | Resolved (YYYY-MM-DD)
**Priority:** 1-6 (with type)
**Created:** YYYY-MM-DD
**Chapters Affected:** X, Y, Z

---

## Problem

Clear statement of what's wrong. What's missing, broken, or weak?

## Diagnosis

What framework or skill identified this? (story-sense, character-arc, genre-conventions, etc.)

What state is the story element in? (e.g., "G1: Missing Genre Promise")

## What's Missing

Itemized list of specific gaps:
- Thing one
- Thing two
- Thing three

## Recommended Fix

### Option A: Name
- Description
- Pros/cons

### Option B: Name
- Description
- Pros/cons

## Recommended Approach

**Option X** - Brief rationale for why this approach.

**How:**
1. Step one
2. Step two
3. Step three

## Impact on Other Chapters

- Ch N: How it's affected
- Ch M: How it's affected

## Resolution Criteria

- [ ] Criterion one met
- [ ] Criterion two met
- [ ] Changes propagated to affected chapters

---

**Next Action:** What to do next
```

### Resolved Issue Format

When resolved, add:

```markdown
## Resolution

How the fix was implemented. What approach was taken.

## Changes Made

| File | Change |
|------|--------|
| `chapters/14.md` | Added motel FBI history, Erica's credential mistake |
| `elements/organizations/fbi.md` | Added institutional fracture detail |

## Related Issues
- [[008-fbi-sudden]] - Partially addressed
- [[009-act2b-physical]] - Created as follow-up
```

---

## Issue Lifecycle

### Creating an Issue

1. Get next ID from `backlog.md` counter
2. Create file: `issues/[ID]-[short-name].md`
3. Increment the counter in backlog
4. Add row to appropriate priority table in backlog

### Resolving an Issue

1. Change status to `In Progress`
2. Work the fix
3. Update affected chapter outlines
4. Change status to `Resolved (YYYY-MM-DD)`
5. Add to Resolved table in backlog with date and brief note
6. Cross-reference any related issues

### Batch Issue Creation

After running a diagnostic skill (like `/story-sense`), you may get many issues at once:

1. Create all issue files
2. Update counter to final ID + 1
3. Add all rows to backlog tables
4. Commit as single batch

---

## Skills Integration

The `.claude/commands/` directory contains writing skills. Each produces specific outputs that feed into this system.

### Diagnostic Skills (Create Issues)

| Skill | Use When | Output |
|-------|----------|--------|
| `/story-sense` | Something feels wrong, not sure what | Prioritized issue list |
| `/character-arc` | Character feels flat or arc feels unearned | Arc diagnosis, transformation gaps |
| `/genre-conventions` | Genre promise unclear or broken | Genre state, missing elements |
| `/scene-sequencing` | Pacing feels off | Scene-sequel analysis, rhythm problems |
| `/dialogue` | Conversations feel flat | Voice differentiation gaps |
| `/endings` | Ending doesn't land | Resolution gaps, unearned beats |

### Development Skills (Build Content)

| Skill | Use When | Output |
|-------|----------|--------|
| `/story-coach` | Need guidance without prose | Questions, frameworks, approaches |
| `/story-collaborator` | Need active writing partner | Prose, alternatives, builds on ideas |
| `/drafting` | Blocked on a scene | First draft text |
| `/revision` | Draft exists, needs improvement | Edit guidance |
| `/worldbuilding` | World feels thin | Systemic gaps, institutional logic |

### Workflow

1. Run diagnostic skill on outline or chapter
2. Create issue files from identified problems
3. Add to backlog
4. Work issues using development skills
5. Update chapter outlines
6. Mark resolved

---

## Drafting and Editing Workflow

The outline phase produces chapter outlines. Drafting turns those into prose. Editing refines the prose. Each phase has its own workflow.

### Status Progression

Each chapter moves through four states:

| Status | Meaning |
|--------|---------|
| `outline` | Structure planned, no prose yet |
| `draft` | First draft complete |
| `revision` | Under active editing |
| `complete` | Ready for publication |

Track status in `outline/chapters/_index.md`. Update immediately when status changes.

### Draft File Structure

Drafts live in `drafts/chapters/`, mirroring outline structure:

```
drafts/
└── chapters/
    ├── 01.md
    ├── 02.md
    └── ...
```

Each draft file is pure prose. No metadata, no outline notes—just the chapter text.

### Outline → Draft Workflow

**Before drafting a chapter:**

1. Ensure chapter outline is solid (check for open issues affecting it)
2. Read relevant element files (characters, places involved)
3. Check `craft/voice.md` for POV and voice decisions
4. Review previous chapter's draft ending (if exists) for continuity

**During drafting:**

1. Use `/drafting` skill if blocked
2. Use `/story-collaborator` for active partnership
3. Draft in `drafts/chapters/NN.md`
4. Don't edit the outline during drafting—note discrepancies for later

**After drafting:**

1. Update chapter status to `draft` in `chapters/_index.md`
2. Reconcile outline with draft:
   - If draft deviated from outline, decide which is right
   - Update outline to match draft OR note issue for revision
3. Update element files with any new details that emerged
4. Record craft decisions in `craft/decisions.md`

### Draft → Revision Workflow

**Before revising:**

1. Run `/revision` skill on the draft
2. Check backlog for open issues affecting this chapter
3. Read diagnostic output and prioritize fixes

**During revision:**

1. Work through identified issues
2. Use `/prose-style` for sentence-level polish
3. Use `/dialogue` if conversations feel flat
4. Edit in place (same draft file)

**After revision:**

1. Update chapter status to `revision` (or `complete` if done)
2. Update backlog—mark resolved issues, note new ones discovered
3. Check continuity with adjacent chapters

### Keeping Outline and Draft in Sync

The outline is the **plan**. The draft is the **execution**. They will diverge.

**When draft deviates from outline:**

1. Finish the draft—don't stop to fix the outline mid-scene
2. After drafting, compare outline to draft
3. Decide: Was the deviation an improvement or a mistake?
4. If improvement: Update outline to reflect new reality
5. If mistake: Create issue in backlog, fix in revision

**What to update in outline after drafting:**

- Scene beats that changed significantly
- Character moments that landed differently
- New plants or callbacks that emerged
- Timeline changes

**What NOT to update:**

- Don't copy prose into outlines
- Don't add granular scene detail (outlines stay structural)
- Don't remove outline notes that are still relevant for revision

### Element Updates During Drafting

As you draft, characters reveal themselves. Places gain texture. Update element files:

**Characters:** Add dialogue patterns, revealed backstory, relationship shifts
**Places:** Add sensory details, discovered layout, atmosphere notes
**Organizations:** Add institutional behaviors, character interactions
**Objects:** Add physical descriptions, how characters interact with them

Rule: If you described it in prose and might need to describe it consistently later, capture it in the element file.

### Craft Decisions During Drafting

When you make a choice about how to write something, record it:

```markdown
## Voice Decisions

### 2025-01-15: Erica's Internal Monologue
- Decided: analytical voice, sentence fragments when stressed
- Reason: Reflects her methodology-trained thinking
- First used: Ch 1 draft, paragraph 3
```

This prevents inconsistency across chapters and sessions.

### Multi-Chapter Continuity

Before drafting chapter N:
1. Reread end of chapter N-1 draft
2. Check for unresolved beats that should carry forward
3. Note time elapsed, emotional state, location

After drafting chapter N:
1. Check that opening connects to N-1's ending
2. Verify any callbacks reference actual planted details
3. Note threads that need pickup in N+1

### Revision Passes

Don't do everything at once. Work in passes:

**Pass 1: Structural**
- Does the chapter do its job in the story?
- Are beats in the right order?
- Does pacing work?

**Pass 2: Character**
- Do voices sound distinct?
- Are motivations clear?
- Do emotional beats land?

**Pass 3: Prose**
- Sentence-level polish
- Cut redundancy
- Sharpen word choices

**Pass 4: Continuity**
- Check against adjacent chapters
- Verify element consistency
- Confirm timeline

### When to Use Which Skill

| Situation | Skill |
|-----------|-------|
| Staring at blank page | `/drafting` |
| Want active help writing | `/story-collaborator` |
| Draft exists, don't know what's wrong | `/revision` |
| Pacing feels off | `/scene-sequencing` |
| Dialogue sounds same-voice | `/dialogue` |
| Prose feels flat | `/prose-style` |
| Ending doesn't land | `/endings` |
| Character arc feels unearned | `/character-arc` |

---

## Context Network

The context network holds cross-project information that isn't novel-specific.

### Root Pointer

`.context-network.md` at project root:

```markdown
# Project Context Network

## Location
The context network is at: `./context-network/`

## Structure
context-network/     → Cross-project workflow and decisions
novels/              → Novel manuscripts and planning
```

### Workflow File

`context-network/processes/workflow.md`:

- Session flow (starting, during, after work)
- Available skills list
- What NOT to do (scope constraints)

### Decision Records

`context-network/decisions/YYYY-MM-DD-name.md`:

For major architectural decisions:
- Problem statement
- Decision made
- Rationale
- Consequences
- Changes made across files

---

## What Makes This Work (Anti-Mess Principles)

### 1. One Problem = One File

Never combine unrelated issues. If you're tracking "weak opening" and "thin midpoint," those are two files. The backlog table shows the full picture; issue files hold the detail.

### 2. Every Folder Has Navigation

No folder without an `_index.md`. When you add something, update the index. When you finish something, update the index. Indices are the map.

### 3. Status Everywhere

Everything has status:
- Chapters: outline | draft | revision | complete
- Issues: Open | In Progress | Resolved
- Never guess what's done.

### 4. Never Let Indices Go Stale

After creating files, update indices immediately. After resolving issues, update backlog immediately. Stale indices are how projects become messes.

### 5. Link Extensively

Use `[[wikilinks]]` to connect:
- Issues to affected chapters
- Issues to related issues
- Characters to relationship dynamics
- Craft decisions to the elements they affect

Links make the system navigable. Without links, it's just folders.

### 6. Keep Files Short

- Index files: 20-80 lines
- Issue files: 50-120 lines
- Element files: 50-150 lines
- Chapter outlines: 50-100 lines

If a file is getting long, split it or you're duplicating.

### 7. Separation of Concerns

- **meta/** - What is this story? (summaries)
- **outline/** - What happens? (structure)
- **elements/** - Who/what/where? (world details)
- **craft/** - How do we write it? (style decisions)
- **drafts/** - The actual prose

Don't mix these. A character file describes who they are, not what happens to them (that's chapter outlines). A craft file describes voice choices, not character personality.

### 8. Granularity Levels

Work at the right level:
- **Tagline** - Elevator pitch, one line
- **Premise** - Story hook, one paragraph
- **Synopsis** - Full arc, one page
- **Outline** - Chapter-by-chapter beats
- **Draft** - Actual prose

Each level should stand alone. You should be able to understand the story from any level without needing the others.

---

## Quick Start: Setting Up a New Project

1. Create directory structure (copy the tree above)
2. Create `.context-network.md` pointing to context network
3. Create `context-network/discovery.md` with navigation
4. Create `context-network/processes/workflow.md`
5. Write `meta/tagline.md`, `meta/premise.md`, `meta/synopsis.md`
6. Create `outline/_index.md` with structure overview
7. Create `outline/backlog.md` with "Next ID: 001" and empty priority tables
8. Create `outline/chapters/_index.md` with chapter roster
9. Create chapter files as you develop them
10. Create element folders with empty `_index.md` files
11. Add elements as they appear in outlines

Start lean. Add detail as needed. The system scales up; don't front-load.

---

## Troubleshooting: Signs of Mess

| Symptom | Cause | Fix |
|---------|-------|-----|
| Can't find anything | Missing indices | Add `_index.md` to every folder |
| Duplicate information | Files too broad | Split into atomic units |
| Don't know what's done | Missing status | Add status to backlog and chapter roster |
| Issues forgotten | Not in backlog | Always add to backlog immediately |
| Outdated info in indices | Stale updates | Update indices as part of every change |
| Files getting huge | Too much in one place | Split by concept, link between |
| Unclear where to put things | Blurred separation | Review separation of concerns |

---

## Reference: Example File Sizes

From the Transmission Zero project:

| File Type | Typical Lines |
|-----------|---------------|
| `tagline.md` | 1-3 |
| `premise.md` | 5-15 |
| `synopsis.md` | 40-80 |
| `outline/_index.md` | 60-80 |
| `backlog.md` | 100-180 |
| `chapters/_index.md` | 70-100 |
| Individual chapter | 50-100 |
| Issue file | 60-120 |
| Character file | 50-150 |
| Place file | 30-60 |
| Organization file | 40-80 |

If your files are consistently larger, you're probably combining things that should be separate.
