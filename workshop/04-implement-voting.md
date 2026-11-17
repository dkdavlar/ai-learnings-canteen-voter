# 04 – Implement voting

**Goal:** Have the agent implement the "Vote for a menu" issue, and review the change before it goes anywhere.

## Key terms

- **Diff:** the exact lines added (+) and removed (−) by a change.
- **Push:** uploading your branch's commits to GitHub.
- **Pull request (PR):** a request to merge a branch into `main`. It's where changes get reviewed.

## Steps

1. Start a **new session** for this issue, so the work gets its own branch.
2. Ask for a plan first:
   ```text
   Work on the GitHub issue "Vote for a menu" in this repo. Read the issue and present a plan first: which files will change, how votes are stored, and how I can test it. Don't edit anything until I approve.
   ```
3. Check the plan against the issue. Push back if it goes beyond scope, for example by adding vote changing or results. Then approve it.
4. When the agent is done, **read the diff**. Ask about anything unclear:
   ```text
   Walk me through the diff. Why is each change needed?
   ```
5. Test it yourself in the browser:
   - View as Bo and vote. Reload, and Bo's vote is still shown.
   - Bo can't vote a second time.
   - Switch to Clara. She can vote independently.
   - With no user selected, voting isn't possible (or is clearly explained).
6. Ask the agent to commit, push the branch and open a pull request that links the issue:
   ```text
   Commit this, push the branch, and open a pull request. Link it to the "Vote for a menu" issue so the issue closes when the PR is merged. Include how to test it in the description.
   ```

## Done when

- [ ] You approved a plan before any code changed
- [ ] You read the full diff and tested every acceptance criterion
- [ ] An open PR is linked to the issue
