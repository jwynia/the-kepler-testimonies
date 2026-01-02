# Ideal State

This document defines what "done" looks like for The Kepler Testimonies project. It's our success criteria, deliverables, and the changelog tracking our journey toward them.

## Purpose & Philosophy

Without explicit success criteria, projects drift. Features keep adding, quality is never "enough," and completion becomes meaningless. This document prevents that by being explicit about what done looks like.

**This is not a timeline.** It's not "we'll finish in 6 months." It's "when we've accomplished X, Y, and Z with quality bar of Q, we're done."

## Project Goals

### Primary Goal
**Produce a complete novel-length story using AI+human collaboration.**

Specifications:
- **Scope**: 500 testimony-style documents (exact form TBD by community)
- **Structure**: 488 ordinary, 12 impossible testimonies, all coherent in a single narrative
- **Quality**: Publishable literary fiction quality, not AI-generated slush
- **Format**: TBD (traditional ebook, interactive web experience, experimental form—community decides)
- **Length**: Estimated 60-100k words depending on format

### Secondary Goals
1. **Demonstrate effective AI + human collaboration** - Show that this process actually works
2. **Maintain transparency throughout** - All work public, all decisions documented
3. **Create a replicable process** - Leave behind a playbook for future projects
4. **Share what we learn** - Document challenges, solutions, lessons

## Deliverables

### The Story Itself
- 500 testimonies (format TBD)
- All 12 impossibilities integrated
- Coherent narrative arc
- Publishable quality
- **Success metric**: A complete story that reads as intentional fiction, not AI-generated content

### Process Documentation
- This entire context network (exported as reference)
- Decision records for major choices
- Template kit for creators wanting to replicate the process
- Blog series or essay about the evolution (optional but appreciated)
- **Success metric**: Someone could read these and understand how we did it

### Public Artifacts
- GitHub repository with full history
- Published story in final chosen format
- License/attribution clarity (TBD)
- **Success metric**: Story is accessible to readers, process is accessible to creators

## Success Criteria

### Story Quality Bar
- **Narrative coherence**: Reader can follow the mystery through 500 testimonies
- **Character distinctness**: Voices are distinct, motivations are clear
- **Worldbuilding consistency**: Details don't contradict, setting feels real
- **Impossibility execution**: The 12 impossible testimonies feel earned, not arbitrary
- **Prose quality**: Sentences are clear, dialogue sounds natural (not generic AI)
- **Emotional resonance**: Reader cares about what happens

### Process Quality Bar
- **Collaboration worked**: AI and humans produced better work together than either alone
- **Community influenced direction**: Votes mattered, outcomes differ from AI recommendations
- **Transparency held**: Work is genuinely public (not retrospectively curated)
- **Decisions are documented**: Future readers understand why choices were made

### Project Success Metrics
- **Completion**: Story is finished, not abandoned or perpetually "in progress"
- **Community participated**: Multiple people voted, discussed, contributed
- **Learning extracted**: We know what worked, what didn't, and why
- **Replicable**: Process could be used for other projects

### What Does NOT Count as Success
- **Commercial success**: It doesn't need to sell, win awards, become a bestseller
- **Timeline pressure**: "We must finish by X date" is not a goal
- **Unanimous preferences**: It's fine if some people wanted different story direction
- **Perfect execution**: Some experiments will fail, and that's valuable data

## Changelog Approach

### Purpose
Track the evolution from concept to completion. Show how decisions shaped the work. Document challenges and lessons.

### When to Update
- **Major decisions**: Community votes conclude, Director decides something
- **Phase transitions**: Moving from concept → outline → draft → revision
- **Milestones**: 100 testimonies drafted, all 12 impossibilities integrated, etc.
- **Monthly**: Even if no major milestone, document what happened that month
- **Lessons**: When we learn something about the process

### Format Template

```markdown
### [YYYY-MM-DD]: [Short Title]

**Type**: [Milestone / Direction / Process / Lesson / Blocker]
**Impact**: [One line: Why this matters]

[1-3 paragraphs describing what happened and significance]

**Relationship**: [Links to relevant decision records, PRs, discussions if applicable]
```

### What Gets Logged

**Always**:
- Tier 2 community vote conclusions
- Tier 3 Director decisions
- Phase transitions (concept → outline → draft, etc.)
- Major milestones (50% complete, all impossibilities integrated, etc.)
- Process changes that affect how the team works
- Significant lessons learned

**Never**:
- Minor status updates ("updated status.md")
- Typo fixes and small edits
- Routine commits (git history captures these)
- Individual sentence-level drafting decisions

## Project Changelog

### [2026-01-02]: Taste and Ideal-State Documents Created

**Type**: Milestone
**Impact**: Established creative direction and success criteria

Created `context/foundation/taste.md` and `context/foundation/ideal-state.md` to establish:
- Individual creative preferences guiding all decisions
- Forced tradeoffs documenting project-level creative commitments
- Explicit success criteria and deliverables
- Integrated changelog for tracking evolution

This moves the project from implicit to explicit creative direction, enabling contributors to make decisions aligned with project taste while maintaining flexibility for diverse perspectives.

**Relationship**: PR #12, Governance adoption (Decision 002)

### [2026-01-02]: Governance Framework Adopted

**Type**: Process
**Impact**: Clarified decision authority and enabled velocity

Formalized decision-making framework:
- Tier 1 (AI Autonomous): Drafting, technical work
- Tier 2 (Community Advisory): Major story directions via voting
- Tier 3 (Director Decision): Deadlocks, process changes, meta-questions

Prevents decision paralysis, clarifies authority, maintains community voice. Director (jwynia) has final decision authority, but community decides story direction, and AI proceeds autonomously on implementation.

**Relationship**: PR #11, Decision 002

### [2026-01-02]: Year Updated to 2026

**Type**: Process
**Impact**: Corrected calculation dates in templates

Updated hardcoded year 2024 → 2026 in institution.ts calculation script to reflect current year.

**Relationship**: PR #10

### [2026-01-01]: Concept Voting Options Ready

**Type**: Milestone
**Impact**: Story direction decisions ready for community

Completed brainstorm using Escape Velocity Protocol:
- "What is the Kepler?" (3 options: Failed Mission, Lifeboat, Stopover)
- "What makes testimonies impossible?" (3 options: Absent Witnesses, Document Anomaly, Agreement Problem)
- All options verified as divergent (different axes, not variations)

Community voting setup: All polls include "None of these—suggest alternative" to prevent forced choices.

**Relationship**: Story development, context/story/concept-brainstorm-2026-01-01.md

### [2026-01-01]: Context Network Initialized

**Type**: Milestone
**Impact**: Team memory structure established

Created context network with navigation, foundation documents (project, premise, workflow, github-workflow), and structural framework for ongoing development. Establishes single source of truth for project information.

**Relationship**: context/discovery.md navigation hub

### [2025-12]: Community Voted on Premise

**Type**: Milestone
**Impact**: Project concept locked in

Community vote selected "THE KEPLER TESTIMONIES" from three options:
- THE LAST ORIGINAL (backup/identity)
- **THE KEPLER TESTIMONIES** (mystery, testimonies)
- TRANSLATION DISTANCE (first contact)

Provides locked premise and narrative structure for all future work.

**Relationship**: Decision 001

### [2025-12]: Project Created

**Type**: Milestone
**Impact**: Project launched

The Kepler Testimonies project created after community interest check on Threads. Experimental collaborative fiction using AI drafting + human directing.

**Premise**: 500 testimonies from a vanished ship. 488 are ordinary. 12 are impossible. All are true.

---

## Review & Maintenance

### Monthly Check-ins
- Review changelog—what happened this month?
- Confirm success criteria still feel appropriate
- Adjust timeline expectations if needed (even though we don't have deadlines)
- Celebrate milestones

### Phase Transitions
When moving from concept → outline → draft → revision → publication:
- Document in changelog what triggered the transition
- Confirm success criteria for this phase
- Update status.md with new phase

### Success Criteria Refinement
If we discover success criteria were wrong or incomplete:
- Document why in a decision record
- Update this section
- Don't retroactively change past judgments

## Relationship Network

- **Related**: [Taste](taste.md) - Creative preferences guiding quality
- **Related**: [Governance](governance.md) - Decision framework
- **Related**: [Workflow](workflow.md) - How collaboration works
- **Related**: [Project Definition](project.md) - Core goals and vision
- **Dependent**: All work toward completion should align with these criteria
