---
title: "Building This Site"
excerpt: "Why I built this portfolio, the tools behind it, and how the content system works."
publishDate: "2024-01-15"
tags:
  [
    "astro",
    "tailwind",
    "typescript",
    "starwind-ui",
    "portfolio",
    "web-development",
  ]
---

# Building This Site

I built this site because I wanted a place to show my work — something simple, fast, and fully mine. I’d been meaning to try [Astro](https://astro.build/) for a while, and this felt like the perfect excuse.

Astro ended up being exactly what I hoped for: a static site generator that doesn’t feel old school. It gave me fast builds, simple routing, and a content workflow that makes writing posts feel natural. Because it outputs static files, GitHub Pages is an easy (and free) deployment target.

What really clicked for me was Astro’s Content Collections. They let me define a schema for blog posts and projects, validate metadata automatically, and keep everything type-safe.

## Goals

- **Fast**: ship static HTML with minimal JavaScript
- **Easy to update**: add posts/projects by writing Markdown
- **Low maintenance**: no CMS, no database, no admin UI
- **Type-safe content**: metadata validated at build time

## The stack

- **Astro** for static generation and routing
- **TypeScript** for safer refactors and tooling
- **Tailwind CSS** for styling
- **Starwind UI** for consistent UI components

## Theming and accessibility

Before I started building, I spent some time looking at different UI/UX frameworks. I ended up landing on Tailwind and Starwind UI because they let me move quickly while keeping the design consistent.

For theming, the goal was simple: define a color scheme once and have it work in both light and dark mode. I default to the user’s `prefers-color-scheme`, but I also added a manual toggle so you can override it.

Implementation-wise, I use Tailwind’s class-based dark mode strategy with `dark:` utilities (for example, `text-light dark:text-dark`). Utility classes plus a small set of reusable components made the theme feel consistent without fighting CSS.

Theming ties directly into accessibility, so I tried to make those decisions together:

- **Contrast first**: picking colors that remain readable in both themes
- **Clear focus states**: making keyboard navigation obvious (especially for links and buttons)
- **Semantic HTML**: keeping the structure simple so tabbing and screen readers work well

I haven’t done a thorough accessibility review yet, but I tried to follow good practices early. Starwind UI’s components are based on shadcn/ui patterns, so they start from a pretty solid accessibility baseline.

## Content Collections (type-safe Markdown)

Here’s the schema I’m using:

```ts
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishDate: z.string().transform((str) => new Date(str)),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});
```

Defining this means every post has a consistent structure, and Astro will warn me if I forget something. It feels more like writing than “managing content,” which is exactly what I wanted.

Today, I use this metadata to generate previews on the homepage and blog page. I can extract the title, tags, and excerpt for cards, and use `publishDate` to sort posts chronologically.

Longer-term, I’d like to generate a search index and add filtering by tag and timeframe. I also added a boolean for whether a post is a draft (and shouldn’t be displayed yet), which gives me the option to write ahead and publish later.

On the content side, a blog post is just a Markdown file with frontmatter:

```md
---
title: "My Post"
excerpt: "A short summary."
publishDate: "2024-01-01"
tags: ["example"]
---
```

Astro validates the metadata, and the rest is just Markdown. No CMS, no database, no complicated setup — just writing.

Projects work the same way. Each one is a Markdown file with a small amount of frontmatter that describes the project:

```md
---
title: "Nadex"
tech: ["Rust", "egui"]
link: "https://github.com/cj-tomlin/nadex"
---
```

Astro uses this metadata to automatically generate project cards and pages. Keeping everything in Markdown means I don’t have to think about tooling when I want to add something new — I just write it and commit.

---

## Deployment (GitHub Pages)

Since the site builds to static assets, deployment is straightforward: the build output gets published to GitHub Pages.

## Tradeoffs and constraints

Keeping the site static simplifies hosting and performance, but it also shapes what features make sense:

- **No server-side features by default**: anything like comments or dynamic search needs a third-party service or a build-time approach.
- **Build-time is your friend**: content-driven features (feeds, tag pages, indexes) fit naturally.

## The Result

The final site is:

- **Fast** — static HTML with minimal JavaScript
- **Accessible** — semantic HTML, keyboard navigation, and clear focus states
- **Clean** — a minimal design that puts content first
- **Easy to maintain** — new posts and projects take seconds to add

It’s intentionally uncomplicated, which makes it a great foundation for future work.

The biggest thing I learned is that performance and accessibility aren’t big, scary tasks. If you think about them early, they become part of the workflow instead of chores at the end.

---

## What’s Next

Next, I want to write more posts — especially about the homelab I’m building — and maybe add search or comments later. But for now, I’m happy with this foundation.

If you’re curious, the code is on [GitHub](https://github.com/cj-tomlin/cj-tomlin.github.io).
