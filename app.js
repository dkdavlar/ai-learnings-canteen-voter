// Starter logic: renders the seeded menus and handles "View as" test mode.
// Voting and results are intentionally NOT implemented — that's the workshop!

const STORAGE_KEY = "canteen-view-as";

const viewAsSelect = document.getElementById("view-as");
const greeting = document.getElementById("greeting");
const adminPanel = document.getElementById("admin-panel");
const menuList = document.getElementById("menu-list");

// The user the page is currently being viewed as (or null).
// Read this from your own code instead of the <select>.
let currentUser = null;

function findUser(id) {
  return USERS.find((u) => u.id === id) || null;
}

function setCurrentUser(id) {
  currentUser = findUser(id);
  viewAsSelect.value = currentUser ? currentUser.id : "";

  if (currentUser) {
    localStorage.setItem(STORAGE_KEY, currentUser.id);
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }

  const url = new URL(location.href);
  if (currentUser) {
    url.searchParams.set("as", currentUser.id);
  } else {
    url.searchParams.delete("as");
  }
  history.replaceState(null, "", url);

  render();
}

function renderViewAsOptions() {
  for (const user of USERS) {
    const option = document.createElement("option");
    option.value = user.id;
    option.textContent = `${user.name} — ${user.role} (${user.team})`;
    viewAsSelect.append(option);
  }
}

function renderMenus() {
  for (const menu of MENUS) {
    const card = document.createElement("li");
    card.className = "menu-card";

    const title = document.createElement("h3");
    title.textContent = `${menu.emoji} ${menu.name}`;

    const description = document.createElement("p");
    description.textContent = menu.description;

    const tags = document.createElement("ul");
    tags.className = "tags";
    tags.setAttribute("aria-label", "Dietary information");
    for (const label of menu.dietary) {
      const tag = document.createElement("li");
      tag.textContent = label;
      tags.append(tag);
    }

    // TODO (workshop): add a vote button here.
    card.append(title, description, tags);
    menuList.append(card);
  }
}

function render() {
  greeting.textContent = currentUser
    ? `✨ Welcome, ${currentUser.name}! Role: ${currentUser.role}. Your culinary journey awaits.`
    : "No user selected. Use the 🧪 Test mode bar to view the site as someone.";
  adminPanel.hidden = currentUser?.role !== "admin";
}

viewAsSelect.addEventListener("change", () => setCurrentUser(viewAsSelect.value));

renderViewAsOptions();
renderMenus();
setCurrentUser(
  new URLSearchParams(location.search).get("as") || localStorage.getItem(STORAGE_KEY)
);
