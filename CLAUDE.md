# Claude Code Instructions for The Kepler Testimonies

## Project Overview

The Kepler Testimonies is an experimental collaborative fiction project. AI (Claude Opus + fiction skills) does the heavy lifting of drafting while humans act as producers/directors, voting on key decisions.

**The Premise**: 500 testimonies from a vanished ship. 488 are ordinary. 12 are impossible. All are true.

## Project Structure

```
.context-network.md     # Discovery file pointing to context network
context/                # Context network (team memory)
  discovery.md          # Navigation hub
  foundation/           # Core project info (premise, workflow)
  story/                # Story development
  community/            # Participation info
  decisions/            # Decision records
  planning/             # Roadmap and next steps
  meta/                 # Status and network maintenance
archive/                # Reference materials
```

## Context Network

This project uses a context network. **All planning, design, and coordination documents MUST go in the context network, never in the project root.**

### Before Starting Any Task
1. Read `.context-network.md` to locate the context network
2. Check `context/meta/status.md` for current project state
3. Review relevant sections based on your task

### After Completing Any Task
1. Update `context/meta/status.md` with changes
2. Update other relevant context documents if needed
3. Add decision records for significant choices

### Critical Domain Boundary

**Context Network (Team Memory)**:
- Planning documents
- Story outlines and development notes
- Character bibles
- World-building documentation
- Architecture/design discussions
- Decision records

**Project Artifacts (What Gets Published)**:
- Finished manuscript files
- Final testimony texts
- Published content
- Build/export scripts

**RULE**: If it's about "how we'll write the story" it goes in the context network. If it's "the story itself (finished)" it goes in project artifacts.

## Workflow

### AI Role (You)
- Draft prose and story content
- Generate options for community votes
- Apply fiction craft frameworks
- Maintain narrative consistency
- Update context network after significant work

### Human Role (Community)
- Vote on key story decisions via GitHub Discussions
- Discuss narrative direction
- Suggest ideas and flag problems

### Transparency
Everything is public. All session logs, drafts, and revisions are visible in the repo. Document your reasoning.

## Decision-Making

This project uses a tiered decision-making model to clarify authority and enable velocity. See [Governance](context/foundation/governance.md) for complete details.

**Quick Reference**:
- **Tier 1 (AI Autonomous)**: Drafting, technical improvements, documentation → Proceed without approval
- **Tier 2 (Community Advisory)**: Major story directions, character fates → Post to GitHub Discussions for vote
- **Tier 3 (Director Decision)**: Ties, deadlocks, process changes, meta-questions → Escalate to jwynia via `context/meta/leadership-queue.md`

**Key Rule**: When in doubt, bias toward action. Post to the leadership queue rather than block progress.

## Available Fiction Skills

The following skills are available for story development:

- `/brainstorming` - Break out of convergent ideation
- `/character-arc` - Design character transformation arcs
- `/character-naming` - Generate names with external entropy
- `/cliche-transcendence` - Transform generic elements into fresh ones
- `/dialogue` - Fix flat dialogue and same-voice characters
- `/drafting` - Break through blocks and execute drafts
- `/endings` - Diagnose weak endings and resolutions
- `/genre-conventions` - Work with genre-specific elements
- `/outline-collaborator` - Develop story structure collaboratively
- `/prose-style` - Fix sentence-level issues
- `/revision` - Guide the edit pass
- `/scene-sequencing` - Structure scenes and pacing
- `/sensitivity-check` - Evaluate representation
- `/story-collaborator` - Active writing partner
- `/story-idea-generator` - Generate story concepts
- `/story-sense` - Diagnose what any story needs
- `/worldbuilding` - Diagnose world-level problems

## Session Workflow

1. **Start**: Check `context/meta/status.md`
2. **Work**: Use fiction skills as appropriate, track significant tasks
3. **End**: Update status and any changed context documents

## What NOT to Do

- Don't create planning documents outside the context network
- Don't make major story decisions without community input (when applicable)
- Don't skip updating the context network after significant work
- Don't ignore the premise constraints ("all are true", 12 impossible, etc.)

---

## Context Network System Prompt

### Task Context Management

As an agent working on this project, your workflow must integrate with the project's Context Network. This structured knowledge framework helps maintain information relationships, preserve context across tasks, and ensure knowledge continuity.

### Context Network Discovery

When starting work, first locate the `.context-network.md` discovery file. This points to where the actual context network is located.

If the discovery file doesn't exist, create it and establish an initial context network structure.

### Before Starting Your Task

1. **Consult the Context Network**:
   - Read the `.context-network.md` discovery file
   - Locate and navigate to the actual context network
   - Identify relevant information nodes for your current task
   - Look for related domains, dependencies, and prerequisites
   - Note any recent changes that might impact your work

2. **Information Analysis**:
   - Assess which context areas are most relevant to your current task
   - Review relationship links to understand how your task connects to the broader project
   - Check for perspective maps if multiple viewpoints exist on relevant topics

3. **Context Preparation**:
   - Load relevant foundation documents into your working context
   - Examine recent changes in connected information areas
   - Extract specific context needed for your task with clear boundaries

### During Your Task

1. **Context Awareness**:
   - Maintain awareness of how your work relates to the established network
   - Reference relevant information nodes when making decisions
   - Maintain consistency with established terminology and patterns
   - When facing contradictions between information nodes, explicitly document the conflict

2. **Domain Boundary Enforcement**:
   - NEVER create planning documents, architecture diagrams, or design discussions outside the context network
   - Always place finished artifacts (manuscript files, etc.) in the project artifact domain
   - If uncertain about where a file belongs:
     - If it's about "how we'll build it" -> Context Network
     - If it's "the thing we're building" -> Project Artifacts

### After Completing Your Task

1. **Context Network Updates**:
   - Update appropriate information nodes with new content
   - Document any new relationships discovered
   - Add your changes to status.md

2. **Verification**:
   - Ensure no planning documents were mistakenly placed outside the context network
   - Verify navigation paths remain functional

### Information Classification

When classifying information nodes, use these dimensions:

- **Domain**: Story, World, Characters, Community, Meta, etc.
- **Stability**: Static / Semi-stable / Dynamic
- **Abstraction**: Conceptual / Structural / Detailed
- **Confidence**: Established / Evolving / Speculative

### Conceptual Framework

Think of the relationship between the context network and project files as:

- **Script vs. Movie**: The context network is where the script, storyboards, and production notes live. The project files are the final movie that audiences see.

- **Team Room vs. Product**: The context network is like the team's private room where all planning happens. The project files are what gets shipped to readers.
