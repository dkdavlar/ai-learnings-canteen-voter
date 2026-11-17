# 05 – Review and merge

**Goal:** Review the pull request from task 04 and merge it into `main` on purpose.

**Merging** applies the PR's commits to `main`, so they become the shared version everyone builds on.

## Steps

1. Open the PR on GitHub, or view it from the app.
2. Review it like a teammate would:
   - Does the description explain the change and how to test it?
   - Does the diff match the issue, with nothing extra?
   - Are there any checks on the PR, and do they pass?
3. Optionally, ask an agent for a second opinion:
   ```text
   Review the open pull request for "Vote for a menu" against its issue's acceptance criteria. List any bugs or missing criteria. Don't change any code.
   ```
4. If something needs fixing, ask the session to fix it. The PR updates when new commits are pushed.
5. When you're satisfied, **merge** the PR yourself.
6. Check that the linked issue was closed, and that `main` now contains the voting feature.

> Merging is a decision, not a formality. If you're unsure, don't merge yet.

## Done when

- [ ] The PR is merged into `main`
- [ ] The "Vote for a menu" issue is closed
- [ ] Voting works when you run the latest `main`

🎉 That's the core path! Continue with the extensions if you have time.
