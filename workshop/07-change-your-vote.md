# 07 – Change your vote

**Goal:** Implement the "Change your vote" issue on top of the merged voting feature.

## Steps

1. In the Project from task 06, ask it to start or coordinate a repository coding session for the "Change your vote" issue, based on the latest `main` so it includes voting.
2. Ask the session:
   ```text
   Work on the GitHub issue "Change your vote". Read the issue and the existing voting code first, then present a plan. Reuse the existing vote storage rather than adding a second one. Wait for my approval.
   ```
3. After implementation, test the tricky cases:
   - Bo votes for the Noodle Bowl, then switches to the Salad. Bo now has exactly one vote, for the Salad.
   - Switching to the menu you already voted for changes nothing.
   - Other users' votes are untouched.
4. Read the diff, open a PR linked to the issue, review and merge it (repeat tasks 04–05).

## Done when

- [ ] Users can change their vote, and are never counted twice
- [ ] The PR is merged and the issue is closed
