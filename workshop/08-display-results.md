# 08 – Display results

**Goal:** Replace the Results placeholder with real vote totals.

## Steps

1. Start a new session from the latest `main`.
2. Prompt:
   ```text
   Work on the GitHub issue "Display results". Show the vote total for every menu in the Results section, including menus with zero votes. It must update immediately after voting or changing a vote. Present a plan first.
   ```
3. Test it:
   - Vote as several users. The totals match the number of users who voted.
   - Change one user's vote. One menu goes down by 1 and another goes up by 1.
   - Menus with no votes show `0`.
4. Review the diff, then open, review and merge the PR.

## Stretch

Ask for a small enhancement in a separate issue, for example highlighting the leading menu or showing results only to admins in the Admin Command Center.

## Done when

- [ ] The totals are correct after votes and vote changes
- [ ] The PR is merged and the issue is closed
