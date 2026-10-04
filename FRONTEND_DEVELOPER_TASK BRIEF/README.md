# Tula's International School — Modern Gurukul

A high-conversion homepage concept for the TIS frontend developer task. Built with Next.js, TypeScript, Tailwind CSS and Framer Motion.

## What this submission demonstrates

- Responsive React/Next.js architecture
- Semantic HTML and accessible controls
- Scroll-triggered reveal animations
- Custom cursor on desktop
- Scroll progress indicator
- Animated light/dark theme toggle
- Responsive navigation with mobile menu
- High-conversion admissions CTA
- Functional inquiry API route
- Reusable section components
- No external UI component framework

## Tech stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Keep the framework preset as Next.js.
4. Deploy.

No API key is required for this concept because the inquiry endpoint logs submissions server-side. For production, replace the route with a CRM/email/database integration.

## Design decisions

### Visual direction
The concept uses a premium editorial aesthetic: deep forest green, warm paper/cream, saffron accent, oversized serif typography, large photography and generous spacing. This keeps the school identity warm and aspirational while moving away from a conventional education-site layout.

### Animation
Framer Motion is used for:
- viewport-based section reveals
- hero entrance
- hover-driven card interactions
- scroll progress

Animations are intentionally short and transform/opacity based to maintain smoothness.

### Responsive behaviour
Desktop navigation and custom cursor are progressively enhanced. On smaller screens the navigation becomes a compact menu and the cursor is disabled because touch devices do not benefit from pointer-following effects.

### Content
Core claims and contact information were adapted from the public Tula's International School website. The page intentionally avoids inventing additional school claims.

## Accessibility notes

- Semantic `header`, `nav`, `section`, `article`, `form`, and `footer`
- Visible focus/hover states
- Form fields have meaningful names
- Buttons and icon-only controls have accessible labels
- Mobile menu is keyboard clickable
- Decorative animation is not required to understand the content

## Suggested screenshots for the assignment

After running locally or deploying:
1. Hero + navigation
2. Scroll-reveal stats/story
3. Campus life cards
4. Academics section
5. Admissions form
6. Mobile navigation at 390px width
7. Dark theme state

## Project structure

```text
app/
  api/inquiry/route.ts
  globals.css
  layout.tsx
  page.tsx
components/
  Academics.tsx
  Admissions.tsx
  ClientUI.tsx
  Experience.tsx
  Footer.tsx
  Hero.tsx
  Navbar.tsx
  Reveal.tsx
```

## Important

This is a frontend evaluation concept. Before production use, replace the image URLs with properly licensed TIS photography/assets and connect the enquiry endpoint to the school's approved backend/CRM.
