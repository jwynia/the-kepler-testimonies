# Project Governance

## Purpose

This document establishes the decision-making framework for The Kepler Testimonies. It clarifies who has authority over which decisions, preventing paralysis through unclear leadership while maintaining transparency and community voice.

**Core Principle**: Clear authority structures are more collaborative than ambiguous ones—everyone knows how to contribute and where decisions happen.

## Authority Structure

### Project Director: jwynia
**Authority**: Final decision-making power on all matters.

**Responsibilities**:
- Approve or override community votes when necessary
- Break tied votes and deadlocks
- Make decisions on governance and process
- Decide when to proceed if community vote shows no clear consensus
- Answer meta-questions about project direction

**Note**: This is not a command-and-control role. The Director's job is to *enable* good decisions, not to override community voice without reason. Decisions should be documented with reasoning.

### AI Team: Claude Opus + Fiction Skills
**Authority**: Autonomous drafting and story development within established constraints.

**Responsibilities**:
- Brainstorm and generate options for community votes
- Draft prose, develop characters, design scenes
- Apply fiction craft frameworks and maintain consistency
- Propose technical improvements
- Escalate unclear decisions to leadership queue
- Document significant choices in commit messages and decision records

**Autonomy**: The AI team should proceed with work in Tier 1 without seeking approval. The project moves faster when drafting isn't blocked waiting for votes.

### Community: GitHub Discussions
**Authority**: Advisory voice through voting and discussion.

**Responsibilities**:
- Vote on major story decisions
- Discuss narrative direction and flag problems
- Suggest ideas and improvements
- Hold the team accountable to community values
- Participate in decision-making when invited

**Note**: Community votes are genuinely influential but not binding. The Director respects the community voice but can override if necessary with explanation.

## Decision Tiers

Decisions fall into three categories. Use these to understand who decides what.

### Tier 1: AI Autonomous

**Who Decides**: AI team (no approval needed)

**These decisions get made immediately without waiting for community input:**

- Drafting prose and story content
- Developing characters within established arcs
- Scene-level choices and pacing
- Applying fiction craft frameworks (scene-sequel rhythm, dialogue patterns, etc.)
- Technical improvements and documentation
- Bug fixes and typos
- Architectural decisions about the context network
- Content updates that don't change direction

**Examples**:
- ✓ "I'm going to draft three sample testimonies showing the Lifeboat concept"
- ✓ "I'm updating the scene-sequencing document with a new example"
- ✓ "I'm fixing broken links in the context network"
- ✓ "I'm developing the family relationships for this testimonial character"

**Key Insight**: Tier 1 decisions are *executable*—they implement direction that's already been set, rather than choosing new direction.

**Decision Process**:
1. AI identifies work as Tier 1
2. AI creates a feature branch and proceeds
3. AI documents choices in commit messages or decision records if the choice is significant
4. Community can comment on the PR and flag issues
5. If community strongly disagrees with the categorization, they can request escalation

### Tier 2: Community Advisory

**Who Decides**: Community (via GitHub Discussions polls)

**These decisions are too important to make without community input:**

- Major story directions ("What is the Kepler?", "What makes testimonies impossible?")
- Character fates that determine the ending
- Genre blend decisions (how much sci-fi vs. mystery vs. something else?)
- Tone and voice major shifts
- Structural approaches to the 500 testimonies
- How and when to reveal the 12 impossibilities
- Publication and licensing decisions

**Examples**:
- ✓ "Should the Kepler be a failed mission, lifeboat, or unexpected stopover?"
- ✓ "Should impossibility come from absent witnesses, document anomaly, or agreement problems?"
- ✓ "How should the reader discover the 12 impossibilities: gradually or all at once?"

**Key Insight**: Tier 2 decisions determine the shape of the story itself.

**Decision Process**:
1. AI brainstorms 3+ divergent options (using fiction skills if needed)
2. AI posts options to GitHub Discussions in the **Polls** category
3. Poll includes "None of these—suggest alternative" option (prevents forced choices)
4. Poll runs for 7 days or until clear consensus emerges
5. Winning option is implemented
6. Decision recorded in `context/decisions/`

**If "None of These" Wins**:
- First time: AI brainstorms new options, run another poll
- Second time: AI recommends one approach, community can vote up or down
- Third time: Escalate to Tier 3 (Director decides what's next)

### Tier 3: Director Decision

**Who Decides**: Project Director (jwynia)

**These decisions require Director judgment:**

- Governance and process changes
- Tied votes or deadlocked community decisions
- Low participation in polls (fewer than 3 votes after 7 days)
- Controversial creative choices flagged by community
- Meta-questions about the project ("Should we start writing?", "When do we publish?")
- Scope changes or significant direction shifts
- When community voting isn't producing clear answers
- Any decision where stakeholders are in genuine conflict

**Examples**:
- ✓ "Should we start AI drafting before community votes conclude?"
- ✓ "The vote on 'What is the Kepler?' is tied between two options"
- ✓ "Only 2 people voted on the testimony structure poll"
- ✓ "We've tried three brainstorm rounds on impossibility mechanisms and nothing feels right"

**Key Insight**: Tier 3 decisions usually need context, judgment, and the ability to say "here's how we move forward."

**Decision Process**:
1. AI identifies need for Director decision
2. AI documents the question in `context/meta/leadership-queue.md` with:
   - Context and background
   - What's been tried (if applicable)
   - Options with pros/cons
   - AI recommendation (if applicable)
   - Community input summary (if applicable)
3. Director reviews and makes call
4. Decision recorded in `context/decisions/` with "Director Decision" type

## Decision Process Workflows

### For Tier 1 (AI Autonomous)

```
AI identifies Tier 1 work
    ↓
AI creates feature branch
    ↓
AI does the work
    ↓
AI commits with clear message
    ↓
AI creates PR with explanation
    ↓
Community discusses (optional)
    ↓
PR merged (no approval needed)
    ↓
Work complete
```

### For Tier 2 (Community Advisory)

```
AI generates 3+ divergent options
    ↓
AI posts poll to GitHub Discussions
    ↓
Poll runs 7 days or until consensus
    ↓
Winning option clear?
    ├─ YES → AI implements
    └─ NO → escalate to Tier 3
    ↓
Decision recorded in context/decisions/
    ↓
Implementation proceeds
```

### For Tier 3 (Director Decision)

```
AI identifies Director decision needed
    ↓
AI adds to leadership-queue.md with context
    ↓
Director reviews and decides
    ↓
Decision recorded in context/decisions/
    ↓
Project proceeds based on decision
```

## Escalation & Tie-Breaking

### Tied Votes
When a community vote ends in a tie: **Escalate to Tier 3. Director decides.**

### Low Participation
When fewer than 3 people vote after 7 days: **Escalate to Tier 3. Director decides whether to extend the poll, pick an option, or make own decision.**

### "None of These" Wins Repeatedly
If "None of these" wins 2+ times in a row on the same question: **Escalate to Tier 3. Director decides next steps** (brainstorm differently, pick best option, table decision, etc.).

### Community Disagrees with Tier Categorization
If community flags that an AI Tier 1 decision should have been Tier 2: **Discuss in the PR. Escalate if needed. Refine governance based on feedback.**

### Director Disagreement
If the Director disagrees with a community vote or AI decision: **Director can override with explanation. Document reasoning in decision record.**

**Note**: Director overrides should be rare and always documented. If overrides happen frequently, the decision tiers need refinement.

## When in Doubt

**Default: Bias toward action.**

If a decision is unclear:
1. **Can you implement it as Tier 1?** → Do it
2. **Does it feel like it needs community input?** → Add to Tier 2 poll
3. **Is it genuinely unclear or contentious?** → Add to leadership queue (Tier 3)

**Never block progress** waiting for perfect clarity. If you categorize wrong, community will let you know.

## Relationship Network

- **Related**: [Workflow](workflow.md) - How AI and community collaborate
- **Related**: [Project Definition](project.md) - Core constraints and premise
- **Dependent**: [Community Participation](../community/index.md) - How to participate
- **Implementation**: [Leadership Queue](../meta/leadership-queue.md) - Active Tier 3 decisions
- **Records**: [Decision Index](../decisions/index.md) - History of all decisions
