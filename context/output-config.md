# Skill Output Configuration

This file tells skills where to save their output.

## Output Locations by Skill

| Skill | Output Path | File Pattern |
|-------|-------------|--------------|
| `/brainstorming` | `context/story/explorations/` | `{topic}-brainstorm-{date}.md` |
| `/outline-collaborator` | `context/story/outline/` | Updates to storyboard.md or new files |
| `/story-sense` | `context/story/explorations/` | `{topic}-diagnosis-{date}.md` |
| `/character-arc` | `context/story/elements/characters/` | `{character}-arc.md` |
| `/cliche-transcendence` | `context/story/explorations/` | `{element}-cliche-{date}.md` |

## Adding New Skills

When a skill asks where to save output:
1. Suggest an appropriate path in the context network
2. Add the entry to this table
3. Follow the established file naming patterns
