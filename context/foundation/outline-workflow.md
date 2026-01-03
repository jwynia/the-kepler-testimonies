# Outline Workflow

How to use the story development structure for The Kepler Testimonies.

---

## Philosophy

This system rests on four principles:

1. **Atomic documents** - One concept per file, heavily cross-linked
2. **Navigation everywhere** - Every folder has an `_index.md` hub
3. **Multiple granularities** - Tagline → Premise → Synopsis → Outline → Draft
4. **Clear separation** - Structure, elements, craft decisions, and prose live apart

The goal: never wonder where something goes, never lose track of what's done.

---

## Story Development Structure

```
context/story/
├── index.md              # Navigation hub
├── meta/                 # Story-level summaries
│   ├── tagline.md       # One line
│   ├── premise.md       # One paragraph
│   └── synopsis.md      # One page
├── outline/              # Structure and planning
│   ├── _index.md        # Overview
│   ├── backlog.md       # Issue tracker
│   └── issues/          # Individual issue files
├── elements/             # Who, what, where
│   ├── characters/
│   ├── places/
│   ├── organizations/
│   └── objects/
└── craft/                # How to write it
    ├── voice.md         # Voice decisions
    └── decisions.md     # Writing choices log
```

---

## The Backlog System

The backlog (`outline/backlog.md`) is your task tracker for story problems.

### Priority Levels

| Priority | Type | Examples |
|----------|------|----------|
| 1 | Structural | Arc pacing, missing turns, weak endings |
| 2 | Character | Arc gaps, missing agency, thin relationships |
| 3 | Pacing/Threads | Scene flow, subplot timing, transitions |
| 4 | Worldbuilding | Mechanics unclear, rules inconsistent |
| 5 | Tonal/Craft | Voice issues, dialogue problems, register |
| 6 | Minor/Polish | Names, small continuity, enrichment |

### Issue Lifecycle

1. **Create**: Get next ID from backlog, create file in `issues/`, increment counter, add to backlog table
2. **Work**: Change status to "In Progress"
3. **Resolve**: Update affected files, change status to "Resolved (YYYY-MM-DD)", move to Resolved table

### Issue File Template

```markdown
# Issue NNN: Short Descriptive Title

**Status:** Open | In Progress | Resolved (YYYY-MM-DD)
**Priority:** 1-6 (with type)
**Created:** YYYY-MM-DD
**Scope:** What areas are affected

---

## Problem
Clear statement of what's wrong.

## Diagnosis
What framework or skill identified this?

## Recommended Fix
How to address it.

## Resolution Criteria
- [ ] Criterion one
- [ ] Criterion two
```

---

## Skills Integration

The following skills produce outputs that feed into this system:

### Diagnostic Skills (Create Issues)

| Skill | Use When | Output |
|-------|----------|--------|
| `/story-sense` | Something feels wrong | Prioritized issue list |
| `/character-arc` | Character feels flat | Arc diagnosis |
| `/genre-conventions` | Genre promise unclear | Genre state |
| `/scene-sequencing` | Pacing feels off | Rhythm problems |
| `/dialogue` | Conversations feel flat | Voice gaps |
| `/endings` | Ending doesn't land | Resolution gaps |

### Development Skills (Build Content)

| Skill | Use When | Output |
|-------|----------|--------|
| `/story-collaborator` | Need active partner | Prose, alternatives |
| `/drafting` | Blocked on a scene | First draft |
| `/revision` | Draft needs improvement | Edit guidance |
| `/worldbuilding` | World feels thin | Systemic gaps |

### Workflow

1. Run diagnostic skill on outline or draft
2. Create issue files from identified problems
3. Add to backlog
4. Work issues using development skills
5. Update affected files
6. Mark resolved

---

## Separation of Concerns

| Area | Contains | Does NOT contain |
|------|----------|------------------|
| **meta/** | Story summaries | Plot details |
| **outline/** | What happens | Who people are |
| **elements/** | Who/what/where | Plot events |
| **craft/** | How to write | What to write |

---

## Anti-Mess Principles

### 1. One Problem = One File
Never combine unrelated issues. The backlog shows the full picture; issue files hold detail.

### 2. Every Folder Has Navigation
No folder without an `_index.md`. Update indices when you add or finish things.

### 3. Status Everywhere
Everything has status. Never guess what's done.

### 4. Never Let Indices Go Stale
Update indices immediately when creating or resolving files.

### 5. Link Extensively
Use `[[wikilinks]]` to connect issues to affected areas, characters to relationships, decisions to elements.

### 6. Keep Files Short
- Index files: 20-80 lines
- Issue files: 50-120 lines
- Element files: 50-150 lines

If a file is getting long, split it.

---

## Quick Reference: Where Does It Go?

| Content Type | Location |
|--------------|----------|
| Story summary | `meta/` |
| What happens | `outline/` |
| Story problems | `outline/issues/` |
| Characters | `elements/characters/` |
| Places | `elements/places/` |
| Voice decisions | `craft/voice.md` |
| Specific choices | `craft/decisions.md` |
| Finished prose | Outside context network |

---

## Relationship Network

- **Related**: [[workflow|General Workflow]]
- **Applies to**: [[../story/index|Story Development]]
