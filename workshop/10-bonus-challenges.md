# 10 – Bonus challenges

Pick any of these. Each one should still go through issue → plan → diff review → PR → merge.

## A. Parallel sessions

Create two **independent** issues, for example "Add two more seeded menus" and "Show the dietary label legend". Run them in two sessions at the same time. Each session works on its own branch.

- Merge one PR, then the other. Did they conflict?
- Discuss why independent changes parallelize well, while changes to the same lines don't.

## B. Reusable skill

If you keep repeating the same instructions, for example how to write a good issue for this repo, capture them as a reusable skill or prompt. Then use it to draft your next issue and compare the result.

## C. Agent review with explicit permissions

Ask an agent to review an open PR against its issue, and to fix only what you approve:

```text
Review this pull request against its linked issue. List the problems first and wait for me to approve each fix. Don't merge.
```

Decide in advance which actions you allow the agent to take (commenting, pushing fixes, merging), and say so explicitly in the prompt.

## D. Admin features

Use the admin placeholder. For example, an admin can reset all votes for the day. Write the issue yourself, including what employees must *not* be able to do.

## Done when

- [ ] You completed at least one challenge end to end
