# Leadership Queue

Questions and decisions awaiting Project Director (jwynia) input.

This queue provides an async way to escalate Tier 3 decisions: AI documents the question with context, options, and recommendation. Director reviews and decides. No meeting required.

## Active Queue

### [2026-01-02] Should we start AI drafting before community votes conclude?

**Status**: Awaiting Director Decision

**Context**:
We have brainstormed voting options for two foundational story questions:
1. "What is the Kepler?" (Options: Failed Mission, Lifeboat, Stopover)
2. "What makes 12 testimonies impossible?" (Options: Absent Witnesses, Document Anomaly, Agreement Problem)

The options are ready to post for community vote. The blocking question is: what's the project's philosophy on AI drafting *before* community decisions are made? Should we:
- Wait until votes conclude before any prose drafting?
- Draft exploratory content in parallel with voting?
- Do something else?

**Question for Director**:
What is the project's approach to AI drafting while community votes are running? Should we maximize community agency (vote first, draft after) or maximize velocity (draft parallel with voting)?

**Options with Assessment**:

1. **Wait for Community Votes** (Vote First, Draft After)
   - **Approach**: Post polls now, wait 7 days, begin drafting only when winning direction is clear
   - **PROS**:
     - Community chooses direction before seeing execution
     - No "wasted" drafting on abandoned options
     - Pure community agency
   - **CONS**:
     - Slower overall timeline
     - Community votes on abstract options, not seeing how they play out
     - Delays beginning of actual story work
   - **Timeline**: ~2 weeks until drafting starts

2. **Draft All Options** (Show & Tell Voting)
   - **Approach**: Draft sample testimonies for each option combination (3×3=9 samples?), post samples alongside polls for informed voting
   - **PROS**:
     - Community votes on actual prose samples, not abstractions
     - Can assess execution quality and tone
     - Demonstrates how concepts translate to story
   - **CONS**:
     - Significant AI work on paths not chosen
     - Takes longer to prepare samples
     - Options might influence community differently than expected
   - **Timeline**: ~2-3 weeks to prepare samples + 1 week voting

3. **AI Picks One, Draft & Show** (AI Recommendation Path)
   - **Approach**: AI recommends the most promising option combination, drafts samples, posts to community for feedback/vote
   - **PROS**:
     - Faster—focuses effort on one path
     - Community can course-correct if they hate it
     - Shows execution quality
   - **CONS**:
     - Reduces community agency—AI influence is high
     - Might pick less popular option
     - Feels less collaborative
   - **Timeline**: ~2 weeks to draft + feedback

4. **Parallel Track** (Vote + Exploratory Development)
   - **Approach**: Post community vote immediately on story concept. While vote runs (7 days), AI works on elements that apply to *all* options:
     - Develop testimony format/structure (applies regardless of Kepler type)
     - Create document templates (station logs, forensics reports, etc.)
     - Design the reading experience (how to navigate 500 testimonies)
     - Build world-building foundation that's concept-agnostic
     - Develop character naming conventions
   - **PROS**:
     - Maintains community authority (vote untainted by draft examples)
     - Makes productive use of voting period
     - Preparation work applies to all options
     - When vote concludes, drafting begins immediately
     - True collaboration—voting + development in parallel
   - **CONS**:
     - If vote goes unexpectedly, some preparation might not directly apply
     - Requires clear separation between "universal" and "direction-specific" work
   - **Timeline**: Post vote now, begin drafting immediately after (7 days)

**AI Recommendation**: **Option 4 (Parallel Track)**

**Reasoning**:
- Maintains the core collaborative spirit (community votes untainted)
- Prevents blocking—work happens during voting period
- Develops universal elements that apply to all options
- When vote concludes, AI can *immediately* start drafting testimonies in winning direction with format/structure already established
- Best of both worlds: fast timeline + community agency + practical productivity

**Community Input**:
None yet—this is a meta-process question, not a creative decision. Not posted to Discussions.

**What Happens If Director Chooses Each Option**:
- **Option 1 (Wait)**: Post vote now, delay development until result. Expected start: ~2 weeks
- **Option 2 (Show & Tell)**: Post vote now, AI begins drafting samples immediately. Expected results: ~3 weeks
- **Option 3 (AI Pick)**: AI recommends path now, begins drafting immediately. Expected start: immediate, vote ends when sample is ready
- **Option 4 (Parallel)**: Post vote now, AI begins foundational work immediately. Expected drafting start: 1 week

---

## Resolved

(No resolved decisions yet—this is the first Director Decision under the new governance model)

---

## How This Queue Works

### For AI Contributors
When you encounter a decision that feels like Tier 3:
1. Add a new entry with date, title, and "Status: Awaiting Director Decision"
2. Include Context, Question, Options, and your recommendation
3. Commit to this file
4. Director reviews and adds decision (by editing this file or in a PR comment)

### For Director (jwynia)
When reviewing the queue:
1. Read the question and options
2. Decide which option (or alternative) you prefer
3. Add a "**Director Decision**:" line stating your choice and reasoning
4. Mark status as "Resolved"
5. Move to "Resolved" section (or file as decision record if complex)

### Updates
This file should be updated:
- When new Tier 3 questions arise
- When Director makes decisions
- Periodically, as context changes

See [Governance](../foundation/governance.md) for the complete decision framework.
