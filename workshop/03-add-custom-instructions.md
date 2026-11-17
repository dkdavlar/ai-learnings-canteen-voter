# 03 – Add custom instructions

**Goal:** Give the agent standing rules for this repository, so you don't have to repeat them in every prompt.

For this exercise, use a **repository instructions file**, `.github/copilot-instructions.md`. It lives in the repository, not in the app's Project-level settings, so it can be shared with sessions working on that repository.

## Steps

1. Return to the repository coding session you started in task 01, not the Project conversation from task 02. Ask it:
   ```text
   Create .github/copilot-instructions.md for this repo with short, practical rules:
   - Plain HTML, CSS and JavaScript only. No frameworks, build tools or backend.
   - Keep the existing "AI-generated" visual style, and keep controls readable and keyboard accessible.
   - Use `currentUser` from app.js for the current user. Never add real authentication.
   - Keep seed data in data.js.
   - Before changing files, present a short plan and wait for my approval.
   - Explain how to verify each change in the browser.
   Show me the file before committing.
   ```
2. Read the file and review the **diff** (the lines added or removed). Ask for changes if anything is missing or you don't agree with it.
3. Ask the agent to commit the file, push its branch, and open a pull request:
   ```text
   Commit the instructions file, push this branch, and open a pull request to main. Don't merge it; let me review it first.
   ```
   A **commit** is a saved snapshot of changes. **Push** uploads the branch's commits to GitHub. A **pull request (PR)** proposes merging that branch into `main` for review.
4. Review the PR, then merge it yourself when you're satisfied. **Merging** applies its changes to `main`. Check on GitHub that `.github/copilot-instructions.md` is now on `main`.
5. Start a **new session** from the updated `main` and ask:
   ```text
   What repository instructions should you follow? Don't change any files.
   ```
   Check its answer against the file, and check that it follows the rules in subsequent work.

A new session's working copy starts from its base branch. The instructions must be on that branch to be available there. For a quick check before merging, you can start a session from the instructions branch instead, if your setup allows it; later sessions based on `main` still need the file merged into `main`.

## Done when

- [ ] `.github/copilot-instructions.md` is on `main` and you've read every line
- [ ] A new session follows the rules, for example by proposing a plan before editing
