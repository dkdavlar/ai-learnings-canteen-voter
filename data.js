// Seed data for the Canteen Menu Voter starter.
// All users and menus are fictional.

const USERS = [
  { id: "u1", name: "Ada Brick", team: "Platform", role: "admin" },
  { id: "u2", name: "Bo Studsen", team: "Design", role: "employee" },
  { id: "u3", name: "Clara Plate", team: "Data", role: "employee" },
  { id: "u4", name: "Dev Minifig", team: "Security", role: "employee" },
  { id: "u5", name: "Eli Baseplate", team: "Support", role: "employee" },
];

const MENUS = [
  {
    id: "m1",
    name: "Neural Noodle Bowl",
    emoji: "🍜",
    description: "Ramen-style noodles in miso broth with roasted mushrooms, soft-boiled egg and spring onion.",
    dietary: ["vegetarian"],
  },
  {
    id: "m2",
    name: "Quantum Garden Salad",
    emoji: "🥗",
    description: "Quinoa, chickpeas, cucumber, cherry tomatoes and lemon-tahini dressing.",
    dietary: ["vegan", "gluten-free"],
  },
  {
    id: "m3",
    name: "Synthwave Chicken Wrap",
    emoji: "🌯",
    description: "Grilled chicken, crunchy slaw and chipotle mayo in a toasted tortilla.",
    dietary: ["contains dairy"],
  },
];
