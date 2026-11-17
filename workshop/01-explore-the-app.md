# 01 – Explore the app

**Goal:** Understand what the starter does before you change anything.

## Steps

1. In the GitHub Copilot app, select or add your own workshop repository. Start a **local repository coding session**: a chat attached to that repository and its working copy. This is not a standalone chat without files, and you don't need a persistent Project yet.
2. In that session, ask Copilot:
   ```text
   Start this webpage and open it in a Browser canvas inside the Copilot app. Don't change any project files. If something is missing, explain what's needed before installing anything.
   ```
   Explore the page in the Browser canvas in the Copilot app. If something is missing, review its explanation before deciding whether to install it.
3. Find the yellow **🧪 TEST MODE** bar at the top. Use **View as** to switch between users, and notice how the greeting changes.
4. Choose **Ada Brick**, who is an admin. An **Admin Command Center** panel appears. Switch to an employee and it disappears.
5. Add `?as=u3` to the end of the URL and reload. The page now shows Clara Plate.
6. Reload without `?as=`. The last selected user is remembered, because it's stored in your browser's `localStorage`.
7. Open the files and skim them:
   - `data.js`: the seeded `USERS` (each with a `role`) and `MENUS` (each with `dietary` labels)
   - `app.js`: `currentUser`, `renderMenus()` (look for the `TODO (workshop)` comment), and `render()`
   - `index.html`: the **Results** section is just a placeholder
8. When you're finished, ask Copilot to stop the preview.

> **Test mode isn't security.** It's a tool for simulating different users while you build. Real apps need real authentication, but that's out of scope here.

## Optional: ask the agent

In your repository session, you can try:

```text
Explain how this project works in plain language. Which file holds the data, how is the current user chosen, and where would voting logic most naturally go? Don't change any files.
```

## Done when

- [ ] The page runs locally
- [ ] You can start and stop the preview
- [ ] You've viewed it as both an admin and an employee
- [ ] You know where `currentUser`, `USERS` and `MENUS` live
