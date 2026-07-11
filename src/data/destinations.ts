export const destinations = [
  {
    number: "01",
    title: "Work",
    description: "Products and systems I’m actively building.",
    href: "/work",
  },

  {
    number: "02",
    title: "Labs",
    description: "Experiments with AI, infrastructure, and new ideas.",
    href: "/labs",
  },

  {
    number: "03",
    title: "Writing",
    description: "Notes about decisions, mistakes, and what I learn.",
    href: "/writing",
  },

  {
    number: "04",
    title: "About",
    description: "My background and how I approach software.",
    href: "/about",
  },
] as const;

export type Destination = (typeof destinations)[number];
