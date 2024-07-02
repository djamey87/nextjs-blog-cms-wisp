# My portfolio template

This is a fork off one of the great [next.js templates](https://github.com/Wisp-CMS/nextjs-blog-cms-wisp)

## Features

- Beautiful blog starter kit with server rendering using Next.js 14 Server Components
- Responsive layout for mobile devices
- Filter blog posts by tags
- About page
- Light & dark mode
- Automatic hierarchical sitemap generation
- Automatic Open Graph image generation

## Technologies

- [Next.js 14](https://nextjs.org/) using App Router & TypeScript
- [Wisp](https://wisp.blog/?utm_source=github&utm_medium=web&utm_campaign=nextjs-blog-cms-wisp) to manage blog posts
- [Tailwind CSS](https://tailwindcss.com/) for CSS framework
- [Shadcn UI](https://ui.shadcn.com/) for UI components
- [ESLint](https://eslint.org/) for static analysis
- [TypeScript](https://www.typescriptlang.org/) for type safety
- Font optimization with [next/font](https://nextjs.org/docs/app/api-reference/components/font)

## Getting Started

1. Install the dependencies `bun install` | `npm install` | `yarn install`
2. Setup an account with [Wisp](https://wisp.blog) note your "blog id" from your settings page.
3. Create the local .env file `cp .env.example .env`
4. Add your "blog id" (from step 2) to the .env var `NEXT_PUBLIC_BLOG_ID`
5. Run the development server `npm run dev` | `yarn dev` | `pnpm dev` | `bun dev`
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
