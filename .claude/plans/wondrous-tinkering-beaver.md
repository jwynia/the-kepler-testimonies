# Plan: Fix Voting Polls with Native GitHub Polls

## Problem
The current polls ask users to react with emoji letters (🅰️, 🅱️, 🅲, 🅳) but GitHub only supports 8 specific reaction emojis. People can't vote.

## Solution
Recreate the polls using GitHub Discussions' native poll feature, which provides clickable options with automatic vote counting.

## Steps

### 1. Close existing broken polls
- Close or delete the two existing discussions:
  - "Vote: What is the Kepler?"
  - "Vote: What makes 12 testimonies impossible?"

### 2. Create new polls with native poll format
GitHub Discussions polls use this markdown syntax in the body:

```markdown
```[poll]
# Question text here
- Option A
- Option B
- Option C
```
```

Create two new polls:

**Poll 1: What is the Kepler?**
- The Failed Mission
- The Lifeboat
- The Stopover
- None of these (comment below)

**Poll 2: What makes 12 testimonies impossible?**
- The Absent Witnesses
- The Document Anomaly
- The Agreement Problem
- None of these (comment below)

Keep the detailed option descriptions in the body text above the poll block.

### 3. Update documentation
Update `context/foundation/github-workflow.md` to document the correct poll syntax for future polls.

## Files to Modify
- `context/foundation/github-workflow.md` - add native poll syntax documentation

## Commands
```bash
# Get existing discussion IDs for closing
gh api repos/jwynia/the-kepler-testimonies/discussions

# Close old discussions (need node IDs)
gh api graphql -f query='...'

# Create new discussions with poll format
gh api repos/jwynia/the-kepler-testimonies/discussions -f title="..." -f body="..." -f categoryId="..."
```
