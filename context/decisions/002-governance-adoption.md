# Decision 002: Governance Framework Adoption

Formal governance model adopted to clarify decision authority, enable velocity, and prevent decision paralysis through explicit authority structures.

## Decision Type

- [x] Director Decision
- [ ] Community Vote
- [ ] Creative Decision (AI)
- [ ] Technical Decision

## Summary

The project adopted a formal governance framework establishing three decision tiers (AI Autonomous, Community Advisory, Director Decision), clarifying who has authority over which decisions. This solves the blocking issue of unclear authority while maintaining transparency and community voice.

## Context

As the project moved from initial concept voting to ongoing story development, several gaps appeared:

1. **Unclear Authority**: It was ambiguous whether jwynia (repo owner) had final decision-making authority or if decisions were consensus-based
2. **Decision Paralysis**: Without clear authority, the team could "out-nice" each other, leading to blocked decisions
3. **No Escalation Path**: When community votes tied or received low participation, there was no process for moving forward
4. **Blocking the AI Team**: It wasn't clear which decisions the AI could make autonomously vs. which needed approval
5. **Immediate Blocker**: The question "Should we start writing with AI?" had no clear decision path

The project had good collaborative instincts but needed formalized authority structures to move forward without sacrificing community agency.

## Options Considered

### Option A: Pure Consensus
- **Approach**: All decisions require agreement or consensus vote
- **Rejected**: Too slow, prevents decision-making when people have different views, "out-nicing" leads to paralysis

### Option B: AI Full Autonomy
- **Approach**: AI team makes all story decisions, community is advisory
- **Rejected**: Defeats the collaborative purpose, community becomes passive observer

### Option C: Pure Democracy (Community Voting on Everything)
- **Approach**: Community votes on every decision
- **Rejected**: Too slow, low participation becomes blocking, no tie-breaking mechanism

### Option D: Benevolent Dictator with Tiers (ADOPTED)
- **Approach**: Formalize jwynia as Project Director with final authority, but establish three decision tiers so most decisions don't need Director approval. AI autonomous for Tier 1, community votes Tier 2, Director decides Tier 3
- **Adopted**: Enables velocity while maintaining transparency and community voice

## Decision

**Governance Framework Adopted**

Three-tier decision structure:

**Tier 1: AI Autonomous** (no approval needed)
- Drafting prose and story development
- Technical improvements
- Applying fiction craft frameworks
- Documentation and process improvements

**Tier 2: Community Advisory** (community votes)
- Major story directions
- Character fates and structural choices
- Genre and tone decisions
- How to structure/present 500 testimonies

**Tier 3: Director Decision** (jwynia decides)
- Governance and process changes
- Tied votes and deadlocks
- Meta-questions ("Should we start writing?")
- Scope changes and publication decisions

**Authority Structure Clarified**:
- **Project Director (jwynia)**: Final decision authority, decides Tier 3
- **AI Team**: Autonomous Tier 1 drafting, generates Tier 2 options
- **Community**: Advisory voice through Tier 2 voting and discussion

**Key Mechanisms**:
- Leadership Queue (`context/meta/leadership-queue.md`) tracks Tier 3 decisions
- Tie-breaking rule: All ties/deadlocks escalate to Tier 3
- Bias toward action: Default is to proceed unless explicitly marked for community/director decision
- Transparency: All authority explicit, documented in governance.md

## Rationale

**Why This Model**:

1. **Solves the immediate blocker**: Tier 3 mechanism provides path to decide "Should we start writing?" and other meta-questions
2. **Enables velocity**: Tier 1 is broad so AI can proceed without blocking on votes
3. **Respects community**: Tier 2 decisions (story direction) go to community, not Director
4. **Prevents paralysis**: Director can break deadlocks instead of waiting forever
5. **Maintains transparency**: All authority is explicit—no hidden power dynamics
6. **Practical**: Uses existing GitHub infrastructure (Discussions for Tier 2, files for Tier 3)

**Why Benevolent Dictator Model**:

The "benevolent dictator" pattern (used by many open-source projects) works because:
- It's honest about power structures (jwynia can merge PRs anyway)
- It enables decision-making without committee overhead
- It's compatible with collaborative values if Director is transparent about reasoning
- The tiers mean most decisions don't need Director approval

**Why Three Tiers**:

- Tier 1 prevents blocking on routine drafting
- Tier 2 reserves community voice for story-shaping decisions
- Tier 3 provides escape hatch for genuinely contentious issues

## Implications

**Immediate**:
- Leadership Queue is active—Tier 3 decisions can be queued and handled async
- The question "Should we start writing with AI?" can now be decided (added to queue)
- AI team can proceed with Tier 1 work without waiting for approval

**Ongoing**:
- All future decisions will be classified into tiers
- Community understands their authority (votes on Tier 2, not everything)
- Director has clear role (decides Tier 3)
- Decision records will document all governance decisions

**Process Changes**:
- Contributors will check governance.md to understand which tier their decision falls into
- New Tier 3 questions are added to leadership-queue.md
- Decision records follow new TEMPLATE.md format
- status.md tracks active votes and director queue

**Potential Adjustments**:
- After using this model for several decisions, the tiers might be refined
- If Tier 1 is too broad, some decisions might move to Tier 2
- If Tier 3 queue overflows, some decisions might move to Tier 2

## Related Decisions

None yet—this is the first governance decision under the new framework.

## Status

**Implemented**

The governance framework is active. All future decisions will use this structure.

## Metadata

- **Decision Type**: Director Decision
- **Decision Date**: 2026-01-02
- **Authority**: jwynia (Project Director)
- **Documentation**:
  - `context/foundation/governance.md` - Complete framework
  - `context/meta/leadership-queue.md` - Active Tier 3 decisions
  - `context/decisions/TEMPLATE.md` - Decision record template
- **Related Updates**:
  - `context/foundation/workflow.md` - Updated with Decision Authority section
  - `context/meta/status.md` - Updated with Decision Status tracking
  - `CLAUDE.md` - Updated with governance reference
  - `CONTRIBUTING.md` - Updated with decision authority guide
  - `context/discovery.md` - Updated with governance link

---

## Implementation Notes

This decision was recorded retroactively after governance framework implementation, as this document itself is the first to use the new system.

If you have feedback on this governance model, post in GitHub Discussions in the **General** category or create an Issue.
