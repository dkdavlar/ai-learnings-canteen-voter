# 06 – Create a Project

**Goal:** Use a Project to plan the remaining issues and delegate each one to a different subagent.

## Key terms

- **Repository (repo):** a folder whose history is tracked by Git and hosted on GitHub.
- **Branch:** a separate line of work inside a repo. `main` is the shared, "official" version. Changes happen on other branches so `main` stays stable.
- **Project:** an ongoing workspace in the app. When you create one, choose the repository it will work with.
- **Subagent:** an agent a Project assigns a focused piece of work, such as resolving one issue.

## Steps

1. In the GitHub Copilot app, start creating a Project and select your workshop repository from the repository dropdown.
2. Give the Project a prompt asking it to plan the work. For this workshop, the two open issues from task 03 should remain. Try:
   ```text
   Make a plan for resolving all open issues in this repository. Read each issue and summarize its requirements. Assign each issue to a different subagent, and order the work to respect dependencies: "Change your vote" must be merged before "Display results" starts, so results include vote changes. Don't start any subagents or change files until I approve the plan.
   ```
3. Review the plan before approving it. Check that it covers the open issues, assigns a different subagent to each one, and puts "Change your vote" before "Display results." Ask the Project to revise the plan if needed. Approve it only when the assignments and order look right; approval lets the Project start the delegated work.
4. Follow the subagent working on "Change your vote" in task 07, then the different subagent working on "Display results" in task 08. Review each result and its PR before merging.

## Done when

- [ ] You created a Project with the workshop repository selected
- [ ] The plan assigns each open issue to a different subagent
- [ ] The plan respects the dependency between vote changes and results
- [ ] You reviewed the plan before approving the Project to start work
