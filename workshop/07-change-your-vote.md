# 07 – Change your vote

**Goal:** Implement the "Change your vote" issue on top of the merged voting feature.

## Steps

1. In the Project from task 06, follow the subagent assigned to "Change your vote." It should work from the latest `main`, which includes the merged voting feature, and should not start until you approve the Project's plan.
2. After implementation, test the tricky cases:
   - Bo votes for the Noodle Bowl, then switches to the Salad. Bo now has exactly one vote, for the Salad.
   - Switching to the menu you already voted for changes nothing.
   - Other users' votes are untouched.
3. Read the diff and review the subagent's PR linked to the issue. Merge it only when you're satisfied (repeat tasks 04–05).

## Done when

- [ ] Users can change their vote, and are never counted twice
- [ ] The PR is merged and the issue is closed
