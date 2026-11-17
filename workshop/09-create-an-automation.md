# 09 – Create an automation

**Goal:** Create and configure a scheduled, **read-only** automation that summarizes open issues.

An automation runs a prompt on a schedule, sometimes without you watching. Keep its instructions read-only, and check its configuration before enabling it.

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
4. In the GitHub Copilot app, create an automation for this repository or its Project using the final prompt. Configure:
   - A schedule that suits how often the issues change (for example, once each weekday)
   - An available model, and why you chose it
   - The run mode or approval setting. An unattended mode is appropriate only because this prompt is read-only; if you're unsure, choose a mode that requires approval
5. Review the repository, prompt, schedule, model, and run mode before saving. Run it once now if the app offers that option, and check that the result is still read-only. Decide when to pause or disable the schedule after the workshop.

## Done when

- [ ] You have a reliable read-only summary prompt
- [ ] You've run it manually and checked the output
- [ ] You created and configured a scheduled automation
- [ ] You reviewed its first result and know how to pause or disable it
