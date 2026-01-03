# Plan: Incorporate Outline Structure Guide into Context Network

## Goal
Adapt the outline structure system from `inbox/outline-structure-guide.md` into this project's context network, creating a full skeleton ready for story development.

## User Decisions
- **Meta location**: Move tagline/premise to `story/meta/` (foundation keeps only workflow/process docs)
- **Testimony organization**: Leave flexible - this is a story development question, not structural
- **Scope**: Create full skeleton now

## Key Principles Being Adopted

1. **Atomic documents** - One concept per file, heavily cross-linked
2. **Navigation everywhere** - Every folder has an `_index.md` hub
3. **Multiple granularities** - Tagline → Premise → Synopsis → Outline → Draft
4. **Clear separation** - Structure, elements, craft decisions, and prose live apart
5. **Backlog system** - Issue tracking for story problems with prioritized categories
6. **Status everywhere** - Everything has a clear state

## Target Structure

```
context/story/
├── index.md                    # Navigation hub (update existing)
├── meta/
│   ├── _index.md              # Meta navigation
│   ├── tagline.md             # One line
│   ├── premise.md             # One paragraph (move from foundation)
│   └── synopsis.md            # One page overview (placeholder)
├── outline/
│   ├── _index.md              # Structure overview
│   ├── backlog.md             # Issue tracker
│   └── issues/
│       └── _index.md          # Issue navigation
├── elements/
│   ├── _index.md              # Elements navigation
│   ├── characters/
│   │   └── _index.md
│   ├── places/
│   │   └── _index.md
│   ├── organizations/
│   │   └── _index.md
│   └── objects/
│       └── _index.md
└── craft/
    ├── _index.md              # Craft navigation
    ├── voice.md               # Voice decisions
    └── decisions.md           # Writing choices log

context/foundation/
├── ...existing files...
└── outline-workflow.md        # NEW: How the system works
```

Note: Testimony-specific substructure (the-twelve/, ordinary/, arcs/) will be added during story development when we know how to organize them.

## Implementation Steps

### Step 1: Create Directory Structure
Create all new folders under `context/story/`

### Step 2: Create Meta Files
- `context/story/meta/_index.md` - Navigation for meta section
- `context/story/meta/tagline.md` - Extract from existing premise or create
- `context/story/meta/premise.md` - Move content from `context/foundation/premise.md`
- `context/story/meta/synopsis.md` - Placeholder for one-page overview

### Step 3: Create Outline Files
- `context/story/outline/_index.md` - Structure overview
- `context/story/outline/backlog.md` - Issue tracker with priority categories
- `context/story/outline/issues/_index.md` - Issue navigation

### Step 4: Create Elements Structure
- `context/story/elements/_index.md`
- `context/story/elements/characters/_index.md`
- `context/story/elements/places/_index.md`
- `context/story/elements/organizations/_index.md`
- `context/story/elements/objects/_index.md`

### Step 5: Create Craft Files
- `context/story/craft/_index.md`
- `context/story/craft/voice.md`
- `context/story/craft/decisions.md`

### Step 6: Document the System
- `context/foundation/outline-workflow.md` - How to use this system

### Step 7: Update Navigation
- `context/story/index.md` - Update to reflect new structure
- `context/discovery.md` - Add links to new sections

### Step 8: Handle Foundation Premise
- Update `context/foundation/premise.md` to redirect to story/meta/premise.md
- Or delete and update any references

### Step 9: Update Status
- `context/meta/status.md` - Document structural changes

### Step 10: Archive Source
- Move `inbox/outline-structure-guide.md` to `archive/`

## Files Summary

### Create (18 files)
| File | Purpose |
|------|---------|
| `context/story/meta/_index.md` | Meta section navigation |
| `context/story/meta/tagline.md` | One-line story hook |
| `context/story/meta/premise.md` | Story premise (moved from foundation) |
| `context/story/meta/synopsis.md` | One-page overview placeholder |
| `context/story/outline/_index.md` | Outline section overview |
| `context/story/outline/backlog.md` | Issue tracker |
| `context/story/outline/issues/_index.md` | Issues navigation |
| `context/story/elements/_index.md` | Elements section navigation |
| `context/story/elements/characters/_index.md` | Character roster |
| `context/story/elements/places/_index.md` | Places roster |
| `context/story/elements/organizations/_index.md` | Organizations roster |
| `context/story/elements/objects/_index.md` | Objects roster |
| `context/story/craft/_index.md` | Craft section navigation |
| `context/story/craft/voice.md` | Voice decisions |
| `context/story/craft/decisions.md` | Writing choices log |
| `context/foundation/outline-workflow.md` | System documentation |

### Modify (3 files)
| File | Change |
|------|--------|
| `context/story/index.md` | Update structure to point to new sections |
| `context/discovery.md` | Add navigation links |
| `context/meta/status.md` | Document changes made |

### Move/Update (1 file)
| File | Change |
|------|--------|
| `context/foundation/premise.md` | Move content to story/meta/, leave redirect |

### Archive (1 file)
| File | Change |
|------|--------|
| `inbox/outline-structure-guide.md` | Move to `archive/` |
