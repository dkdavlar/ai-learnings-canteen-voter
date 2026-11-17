# ai-learnings-canteen-voter

A minimal starter for a canteen **menu voting** app, used in an AI-assisted development workshop.

## Run it

No build, backend or login is required.

1. Add your workshop repository to the GitHub Copilot app.
2. Open a normal local repository coding session, not a persistent Project.
3. Ask Copilot:
   ```text
   Start this webpage and open a preview. Don't change any project files. If something is missing, explain what's needed before installing anything.
   ```
4. When you're finished, ask Copilot to stop the preview.

## What's included

| File | Purpose |
|------|---------|
| `index.html` | Page layout |
| `styles.css` | Styling (deliberately "AI-generated" look) |
| `data.js` | Seed data: 5 fictional users (1 admin, 4 employees) and 3 menus with dietary labels |
| `app.js` | Renders menu cards and handles test mode (`currentUser`) |

## Test mode: view as another user

There is no login. Use the yellow **🧪 TEST MODE** bar at the top to view the site as any seeded user. You can also add `?as=<userId>` to the URL, for example `?as=u1` for the admin. The selection is saved in `localStorage`. In code, read the `currentUser` variable in `app.js` (`null` when no user is selected).

Admins also see an **Admin Command Center** placeholder panel.

## What's not included (your tasks)

- Voting on a menu
- Showing results

Workshop participants will create GitHub issues for features like these and work through them using the app.

## Workshop

Start with the step-by-step tasks in [`workshop/`](workshop/README.md).
