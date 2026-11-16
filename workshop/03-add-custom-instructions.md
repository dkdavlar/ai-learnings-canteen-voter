# 03 – Add custom instructions

**Goal:** Give the agent standing rules for this repository, so you don't have to repeat them in every prompt.

Custom instructions are a Markdown file in the repository that the agent reads automatically. For GitHub Copilot, this is commonly `.github/copilot-instructions.md`.

## Steps

1. In a session, ask:
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
2. Read the result. Remove anything you don't agree with, and add anything that's missing.
3. Let the agent **commit** it. A commit is a saved snapshot of changes, with a message describing them.
4. Start a *new* session and ask "What rules should you follow in this repo?" to check that it picks the instructions up.

## Done when

- [ ] `.github/copilot-instructions.md` exists and you've read every line
- [ ] A new session follows the rules, for example by proposing a plan before editing
