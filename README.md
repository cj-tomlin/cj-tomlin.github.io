# CJ Tomlin - Portfolio

A modern, fast, and accessible portfolio website built with Astro, showcasing my projects and blog posts.

🌐 **Live Site**: [https://cj-tomlin.github.io](https://cj-tomlin.github.io)

## ✨ Features

- **⚡ Lightning Fast** - Built with Astro for optimal performance
- **🎨 Modern Design** - Clean, professional UI with StarwindUI components
- **🌙 Dark Mode** - Automatic theme switching with system preference detection
- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **♿ Accessible** - WCAG compliant with proper ARIA labels and keyboard navigation
- **🔍 SEO Optimized** - Complete meta tags, Open Graph, Twitter cards, and structured data
- **📄 Content Management** - Blog posts and projects managed with Astro Content Collections
- **🎭 Smooth Animations** - Page load transitions and hover effects
- **🗺️ Sitemap & Robots.txt** - Automatic generation for search engines

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── favicon.svg             # Site favicon
│   ├── og-image.jpg            # Social media preview image
│   └── robots.txt              # Search engine crawling rules
├── src/
│   ├── components/
│   │   ├── starwind/           # StarwindUI components
│   │   ├── BlogPostCard.astro  # Reusable blog post card
│   │   ├── ProjectCard.astro   # Reusable project card
│   │   ├── InfiniteScroll.astro # Infinite scroll component
│   │   ├── Navbar.astro        # Navigation component
│   │   ├── ThemeToggle.astro   # Dark/light mode toggle
│   │   └── SEO.astro           # SEO meta tags component
│   ├── content/
│   │   ├── blog/               # Blog post markdown files
│   │   ├── projects/           # Project markdown files
│   │   └── config.ts           # Content collections schema
│   ├── layouts/
│   │   └── Layout.astro        # Base page layout
│   ├── pages/
│   │   ├── api/                # API endpoints for infinite scroll
│   │   ├── blog/               # Blog pages
│   │   ├── index.astro         # Homepage
│   │   ├── projects.astro      # Projects listing
│   │   └── 404.astro           # 404 error page
│   └── styles/
│       ├── global.css          # Global styles and animations
│       └── starwind.css        # StarwindUI theme configuration
├── astro.config.mjs            # Astro configuration
├── tailwind.config.cjs         # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Static site generator with partial hydration
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[StarwindUI](https://starwind.dev)** - Component library for consistent UI
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe JavaScript
- **[MDX](https://mdxjs.com)** - Markdown with JSX for rich content
- **GitHub Actions** - Automated deployment to GitHub Pages

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/cj-tomlin/cj-tomlin.github.io.git
   cd cj-tomlin.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 📝 Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run astro check` | Check for TypeScript errors |

## 📄 Content Management

### Adding Blog Posts

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter with title, excerpt, publishDate, and tags
3. Write your content in Markdown

### Adding Projects

1. Create a new `.md` file in `src/content/projects/`
2. Add frontmatter with title, description, link, and tags
3. Describe your project in Markdown

## 🚀 Deployment

The site automatically deploys to GitHub Pages via GitHub Actions when you push to the `main` branch.

## 📧 Contact

- **Email**: [tomlinc@proton.me](mailto:tomlinc@proton.me)
- **GitHub**: [cj-tomlin](https://github.com/cj-tomlin)
- **LinkedIn**: [christomlin](https://linkedin.com/in/christomlin)
