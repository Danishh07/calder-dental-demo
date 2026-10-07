# Calder Dental Studio

A website concept for a premium cosmetic dentistry practice in Chicago's Gold Coast. Designed with Figma AI from a written brief, then built in React and Tailwind CSS with motion.

> **Concept project.** The practice, doctor, prices, phone number and email are fictional. Photography is AI-generated. The consult form is a front-end demo with no backend. The before/after panel is an illustration, not patient photography.

## The idea: the shade guide

Cosmetic dentists match porcelain to a tooth shade guide. The whole page is built around one.

- A row of 10 shade tabs in the hero. Hovering a tab lifts it and softly tints the page background; clicking selects it.
- The selected shade carries through the page: the "preview" side of the before/after panel, the process copy, the FAQ and the "Target shade" in the consult form all use it.
- As you scroll, the page tint shifts with each section.

## Motion

Built with [Framer Motion](https://www.framer.com/motion/). All motion respects `prefers-reduced-motion` (`MotionConfig reducedMotion="user"`).

- Hero headline lines and shade tabs rise in on load, staggered.
- Shade tabs use spring physics on hover and select.
- Photos reveal with a soft clip and slow zoom as they enter the viewport.
- Section content fades up once, on first view.
- Before/after handle is draggable (pointer) and keyboard-accessible (arrow keys).
- FAQ items animate open and closed; the mobile menu slides in with staggered links.

## Tech stack

React 18, Vite, Tailwind CSS v4 (design tokens in the `@theme` block of `src/index.css`), Framer Motion, React Hook Form, Schibsted Grotesk (Google Fonts, loaded without blocking render).

## Getting started

Requires Node.js 18 or newer.

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build in dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
├── assets/          WebP photos (clinic, scanner, ceramist, doctor, entrance)
├── App.jsx          layout and motion config
├── Header.jsx       sticky header and animated mobile menu
├── sections.jsx     Hero, Treatments, Preview, Process, Doctor, Cost, Faq, Footer
├── BeforeAfter.jsx  draggable comparison panel (SVG teeth)
├── Consult.jsx      consult form (React Hook Form validation)
├── shade.jsx        shade list, shared selection state, scroll tint
├── ui.jsx           buttons, wrappers, reveal helpers
├── data.js          treatments, process steps, costs, FAQ
└── index.css        Tailwind import and design tokens
```

## Notes

- The page has `noindex` set on purpose, because the practice is fictional.
- Structured data (`Dentist`) is included in `index.html`.
- Copy and prices live in `src/data.js` and `src/sections.jsx`, so the site can be re-skinned for a real practice.

## What a real client project would add

Patient photography with consent, a real booking or request system, financing partner integration, a treatment detail page per service, and analytics.
