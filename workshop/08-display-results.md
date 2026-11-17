# 08 – Display results

**Goal:** Replace the Results placeholder with real vote totals.

## Steps

1. After task 07 is merged, follow the different subagent assigned to "Display results" in the Project from task 06. It must start from the updated `main`, so it includes voting and vote changes.
2. Test the result:
   - Vote as several users. The totals match the number of users who voted.
   - Change one user's vote. One menu goes down by 1 and another goes up by 1.
   - Menus with no votes show `0`.
3. Review the subagent's diff and PR, then merge only when you're satisfied.

## Stretch

Ask for a small enhancement in a separate issue, for example highlighting the leading menu or showing results only to admins in the Admin Command Center.

## Done when

- [ ] The totals are correct after votes and vote changes
- [ ] The PR is merged and the issue is closed
