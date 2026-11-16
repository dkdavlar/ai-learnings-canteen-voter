# 01 – Explore the app

**Goal:** Understand what the starter does before you change anything.

## Steps

1. Start the page from the repository folder:
   ```bash
   python3 -m http.server 8000
   ```
   Then open <http://localhost:8000>. You can also just open `index.html` in a browser.
2. Find the yellow **🧪 TEST MODE** bar at the top. Use **View as** to switch between users, and notice how the greeting changes.
3. Choose **Ada Brick**, who is an admin. An **Admin Command Center** panel appears. Switch to an employee and it disappears.
4. Add `?as=u3` to the end of the URL and reload. The page now shows Clara Plate.
5. Reload without `?as=`. The last selected user is remembered, because it's stored in your browser's `localStorage`.
6. Open the files and skim them:
   - `data.js`: the seeded `USERS` (each with a `role`) and `MENUS` (each with `dietary` labels)
   - `app.js`: `currentUser`, `renderMenus()` (look for the `TODO (workshop)` comment), and `render()`
   - `index.html`: the **Results** section is just a placeholder

> **Test mode isn't security.** It's a tool for simulating different users while you build. Real apps need real authentication, but that's out of scope here.

## Optional: ask the agent

If you've already opened the project in the app (see task 02), you can try:

```text
Explain how this project works in plain language. Which file holds the data, how is the current user chosen, and where would voting logic most naturally go? Don't change any files.
```

## Done when

- [ ] The page runs locally
- [ ] You've viewed it as both an admin and an employee
- [ ] You know where `currentUser`, `USERS` and `MENUS` live
