# Contributing to The Kepler Testimonies

Welcome! This guide will help you (and your AI assistant) contribute effectively to this collaborative fiction project.

## The AI-First Contribution Model

This project is designed for AI-assisted contribution. Whether you're using Claude Code, Cursor, Windsurf, or another AI coding assistant, the workflow is:

1. **AI reads the context network** to understand current state
2. **AI asks you questions** about what you want to contribute
3. **AI proposes specific tasks** based on your interests and project needs
4. **You and AI collaborate** to create the contribution
5. **Submit a PR** for review and discussion

## Quick Start Prompt

When you first open this repository, give your AI assistant this prompt:

```
Hey, I just cloned the Kepler Testimonies repo and want to contribute to this
collaborative fiction project. Can you:

1. Read the context network (starting with context/meta/status.md) to understand
   the current state
2. Ask me what kind of contribution I'm interested in (story development, structure,
   community engagement, technical, etc.)
3. Based on my interests, suggest specific ways I can help right now

Let's figure out where I can be most useful!
```

## Understanding the Context Network

The `context/` directory is the project's team memory. Before proposing any contribution, your AI should:

### 1. Check Current Status
Read [`context/meta/status.md`](context/meta/status.md) to understand:
- What phase the project is in
- Recent activity
- What's blocking progress
- Open questions

### 2. Navigate the Context
Use [`context/discovery.md`](context/discovery.md) as a map to find:
- **Foundation** - Core project principles and premises
- **Story** - Story development and creative work
- **Decisions** - Past decisions and their rationale
- **Planning** - What's coming next
- **Community** - How participation works

### 3. Identify Gaps
Look for:
- Open questions in status.md
- "Next steps" that haven't been started
- TODO items in planning documents
- Missing pieces in story development

## Contribution Types

### Story Development
- Brainstorm story options using divergent thinking
- Develop character arcs and motivations
- Design world-building elements
- Draft testimony samples
- Apply fiction craft frameworks

**Files**: Typically in `context/story/`

### Structural Design
- Design the reading experience (how 500 testimonies are presented)
- Create document formats (testimony templates, station logs, forensic reports)
- Plan the revelation pattern (when/how impossibilities are discovered)
- Architect the narrative structure

**Files**: Typically in `context/planning/` or `context/story/`

### Community Engagement
- Draft poll questions for GitHub Discussions
- Summarize community feedback
- Document decisions from votes
- Create discussion prompts

**Files**: Typically in `context/community/` and `context/decisions/`

### Technical Infrastructure
- Improve contribution workflows
- Create helpful scripts or tools
- Enhance documentation
- Set up automation

**Files**: Project root, .github/, or archive/

## The Survey Approach

When helping someone contribute, your AI should ask questions like:

### Interest Questions
- "Are you more interested in creative/story work or structural/technical work?"
- "Do you prefer brainstorming new ideas or developing existing ones?"
- "Are you comfortable with fiction writing, or would you rather focus on structure and process?"

### Constraint Questions
- "How much time do you have? (Quick contribution vs. deep work)"
- "Do you want to work solo or coordinate with ongoing discussions?"
- "Are you more interested in what's urgent or what's interesting?"

### Preference Questions
- "Do you want to push boundaries or refine existing ideas?"
- "Prefer working on big-picture or details?"
- "Want to build something new or improve something existing?"

## Proposing Contributions

Based on answers, your AI should propose specific, actionable contributions:

### Good Proposals
✓ "Based on your interest in structure and the open question about presentation, I could help you design 3 different reading path options for the 500 testimonies, then create a poll for community feedback."

✓ "The status shows voting options are ready but not posted. I can help you format the polls for GitHub Discussions and draft the discussion posts."

✓ "You mentioned wanting to work on story development. The Lifeboat option needs an outline. I can use the `/outline-collaborator` skill to help develop the narrative structure."

### Weak Proposals
✗ "I could help with anything you want" (too vague)
✗ "Let me draft the entire novel" (too big, skips collaboration)
✗ "I'll update some files" (no clear purpose)

## Workflow Guidelines

### Before Starting
1. Create a feature branch with a descriptive name
2. Check if anyone else is working on related tasks
3. Review any recent PRs that might affect your work

### While Working
1. Make atomic commits with clear messages
2. Update `context/meta/status.md` as you complete significant work
3. Add decision records for important choices
4. Keep changes focused on the stated contribution

### Before Submitting PR
1. Ensure all new files are in the correct location (context network vs project artifacts)
2. Update status.md with what you completed
3. Link any related GitHub Discussions or issues
4. Write a clear PR description explaining the contribution

## Context Network Rules

### What Goes Where

**Context Network** (`context/` directory):
- Planning documents
- Story outlines and development notes
- Character bibles
- World-building documentation
- Architecture/design discussions
- Decision records

**Project Artifacts** (project root):
- Finished manuscript files
- Published content
- Build/export scripts
- Repository infrastructure (.github/, etc.)

**Rule of Thumb**: If it's about "how we'll write the story" it goes in the context network. If it's "the story itself (finished)" it goes in project artifacts.

### Never Do This
- Don't create planning docs in the project root
- Don't skip updating status.md after significant work
- Don't make story decisions without checking if they need community input
- Don't ignore the premise constraints

## For AI Assistants

If you're an AI reading this to help someone contribute:

### Your Responsibilities
1. **Read first**: Always check [`context/meta/status.md`](context/meta/status.md) before proposing anything
2. **Survey the contributor**: Ask questions to understand their interests and constraints
3. **Propose specifically**: Don't just list options, recommend specific contributions
4. **Guide the process**: Help with branching, commits, PR descriptions
5. **Maintain standards**: Follow the context network rules and update status

### Available Fiction Skills
If you have access to fiction skills/frameworks, you can use:
- `/brainstorming` - Break out of convergent ideation
- `/outline-collaborator` - Develop story structure
- `/story-sense` - Diagnose what the story needs
- `/cliche-transcendence` - Transform generic elements
- Many others (see [CLAUDE.md](CLAUDE.md) for full list)

### Making Good Suggestions
Your suggestions should be:
- **Specific**: "Design 3 impossibility reveal patterns" not "work on story structure"
- **Scoped**: Achievable in a reasonable session
- **Aligned**: Match what status.md says is needed
- **Collaborative**: Leave room for community input on key decisions

## Questions?

If you're unsure about something:
1. Check if it's answered in the context network
2. Look at past decisions ([`context/decisions/`](context/decisions/))
3. Post in GitHub Discussions
4. When in doubt, over-communicate in your PR description

## License & Attribution

All contributions to this project become part of the collaborative work. By submitting a PR, you agree that your contribution can be used, modified, and published as part of The Kepler Testimonies project.

AI-assisted contributions should be clearly labeled in commit messages or PR descriptions (e.g., "Generated with Claude" or "AI-assisted development").
