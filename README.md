# ai-learnings-canteen-voter

A minimal starter for a canteen **menu voting** app, used in an AI-assisted development workshop.

## Run it

No build, backend or login. Either open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

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
