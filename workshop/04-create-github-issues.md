# 04 – Create GitHub issues

**Goal:** Turn the voting rules into small, clear issues on GitHub that you (or the agent) can pick up one at a time.

An **issue** is a tracked work item on GitHub: a title, a description and a checklist of **acceptance criteria**, which say how you'll know it's done.

## Steps

1. Ask the agent to draft the issues *without creating them yet*:
   ```text
   Draft three GitHub issues for this repo. Don't create them yet; show me the drafts.

   1. "Vote for a menu": The current user (from test mode) can vote for one menu. Votes are stored in localStorage so they survive a reload. Once a user has voted, the page shows which menu they chose, and they can't vote again. Changing a vote is NOT part of this issue.
   2. "Change your vote": A user who has already voted can switch to a different menu. Their old vote is removed, so totals never count them twice.
   3. "Display results": The Results section shows the number of votes per menu for all users, and updates right after a vote.

   Each issue needs: a short description, acceptance criteria as a checklist, how to test it in the browser using the test-mode bar, and what is out of scope.
   ```
2. Review the drafts:
   - Is each issue small enough for one pull request?
   - Could someone tell from the acceptance criteria alone whether it's done?
   - Does issue 1 stay out of the way of issues 2 and 3?
3. Ask for changes until you're happy, then ask the agent to create the issues on GitHub. Check them on github.com.

> Tip: If the agent can't create issues directly, ask it to give you the text and create them yourself on GitHub.

## Done when

- [ ] Three issues exist on GitHub, each with testable acceptance criteria
- [ ] Their scopes don't overlap
