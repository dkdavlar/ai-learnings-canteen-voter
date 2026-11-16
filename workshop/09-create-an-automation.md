# 09 – Create an automation

**Goal:** Design a repeatable, **read-only** agent task that summarizes open issues, and try it by hand. You won't set up a real schedule in this workshop.

An automation is a prompt that runs repeatedly, for example every morning. Because it runs without you watching, it should be safe and read-only by default.

## Steps

1. Write the prompt you'd want to automate:
   ```text
   Summarize the open GitHub issues in this repository. For each one, give the title, a one-line summary and a rough size (S/M/L). Then recommend which issue to work on next and why. Read-only: don't create, edit, comment on or close anything.
   ```
2. Run it manually in a session. Then judge the result:
   - Is it accurate compared with the issues on GitHub?
   - Is the recommendation sensible?
   - Did it stay read-only?
3. Improve the prompt (format, length, what to recommend) until you'd be happy getting it every day.
4. Discuss with your neighbour how often it should run, who should see the output, and what could go wrong if it weren't read-only.

## Done when

- [ ] You have a reliable read-only summary prompt
- [ ] You've run it manually and checked the output
