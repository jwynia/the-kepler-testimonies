# GitHub Workflow

Technical workflow for how work gets done on the GitHub project.

## Branch Strategy

All work happens in feature branches, merged to main via pull requests.

### Workflow

1. Create a feature branch from `main`
2. Do the work (drafting, documentation, etc.)
3. Commit changes with clear messages
4. Open a pull request to `main`
5. Merge after review/approval

### Branch Naming

Use descriptive names that indicate the work:
- `feature/testimony-001-draft`
- `docs/update-premise`
- `fix/typo-in-chapter-3`

## GitHub Issues

Use issues to track work items for future sessions.

### When to Create Issues

- Tasks identified during a session that can't be done immediately
- Bugs or problems discovered
- Ideas that need further exploration
- Follow-up work from completed tasks

### Issue Guidelines

- Clear, actionable title
- Enough context to pick up the work later
- Label appropriately (if labels exist)

## GitHub Discussions

Different categories serve different purposes:

| Category | Purpose | Examples |
|----------|---------|----------|
| **Polls** | Community votes on story decisions | "Which character should survive?" |
| **General** | Discuss the narrative | "Thoughts on the ending?" |
| **Ideas** | Suggestions and problem flagging | "What if we added..." |
| **Announcements** | Project updates | "New chapter posted" |

### When to Create Polls

- Any significant story decision
- Character fates
- Plot direction choices
- World-building decisions that affect the narrative

## Using the gh CLI

The `gh` CLI is the standard tool for all GitHub operations. It's already authenticated and ready to use.

### Common Commands

```bash
# Issues
gh issue create --title "Title" --body "Description"
gh issue list
gh issue view 123

# Pull Requests
gh pr create --title "Title" --body "Description"
gh pr list
gh pr view 123
gh pr merge 123

# Discussions
gh api repos/jwynia/the-kepler-testimonies/discussions

# Polls (must be created via web UI - API doesn't support poll options)
```

### Creating a Poll

**Polls must be created through the GitHub web UI.** The GraphQL API does not support creating poll options programmatically.

To create a poll:
1. Go to: https://github.com/jwynia/the-kepler-testimonies/discussions/new?category=polls
2. Enter a **Discussion title**
3. Optionally add body text with context about the options
4. Fill in the **Poll question** field
5. Add **Poll options** (minimum 2, click "Add an option" for more)
6. Click **Start poll**

**Important:**
- Polls are a special category format—you cannot add polls to other discussion categories
- Do NOT use emoji reactions for voting (GitHub only supports 8 specific emojis)
- Native polls provide clickable options with automatic vote counting
- Up to 8 poll options are supported

## Relationship Network

- **Related**: [Workflow](workflow.md) - The conceptual collaboration model
- **Related**: [Community Participation](../community/index.md) - How the public participates
