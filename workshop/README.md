# Workshop: Build the Canteen Menu Voter with an AI coding agent

In this workshop you'll turn the starter page into a small menu voting app. You won't write most of the code yourself. You'll plan the work as GitHub issues and hand it to an AI coding agent in the GitHub Copilot app. Then you'll review what it built and merge it.

No prior Git or AI-agent experience is needed. Git terms are explained the first time they come up.

## Before you start

- A GitHub account with access to this repository, or to your own copy of it (your facilitator will tell you which)
- The GitHub Copilot app installed and signed in
- A browser for viewing the app preview

Start by adding your workshop repository to the app and opening a normal local repository coding session. In [task 01](01-explore-the-app.md), you'll ask Copilot to start and preview the page; a persistent Project comes later.

## Tasks

Do the tasks in order. Each one builds on the one before it.

### Core path (everyone)

| # | Task | You'll learn |
|---|------|--------------|
| 01 | [Explore the app](01-explore-the-app.md) | Start a repository coding session, preview the app, and try test mode |
| 02 | [Add custom instructions](02-add-custom-instructions.md) | Use the task 01 session to add repository rules |
| 03 | [Create GitHub issues](03-create-github-issues.md) | Writing small, clear, testable work items |
| 04 | [Implement voting](04-implement-voting.md) | Plan, implement, review a diff, open a PR |
| 05 | [Review and merge](05-review-and-merge.md) | Reviewing a pull request and merging it |

### Extensions (if you have time)

| # | Task | You'll learn |
|---|------|--------------|
| 06 | [Create a project](06-create-a-project.md) | Coordinate the remaining issues with a persistent Project |
| 07 | [Change your vote](07-change-your-vote.md) | Iterating on existing behaviour safely |
| 08 | [Display results](08-display-results.md) | Building on earlier work, and checking edge cases |
| 09 | [Create an automation](09-create-an-automation.md) | Designing a repeatable, read-only agent task |
| 10 | [Bonus challenges](10-bonus-challenges.md) | Parallel sessions, skills, agent review |

## The voting rules (used across tasks)

1. Each user gets **one vote** for today's lunch.
2. A user can **change** their vote. Changing a vote never counts twice.
3. The page shows the **total** votes per menu.
4. There's no real login or backend. The current user comes from the 🧪 test-mode bar (`currentUser` in `app.js`), and data may be stored in the browser.

## Tips

- **Stay in control.** The agent proposes changes and you decide what to keep. Read the plans and diffs it shows you.
- **Keep it small.** One issue = one change = one pull request.
- **When stuck,** ask the agent to explain what it did, or ask your facilitator.
