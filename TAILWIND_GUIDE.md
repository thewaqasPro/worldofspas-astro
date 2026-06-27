# Tailwind CSS architecture

This project uses **Tailwind CSS 4 through the first-party `@tailwindcss/vite` plugin**.

## Why the hybrid approach

The site already has a mature visual system and several interaction-heavy components. Rewriting every established selector as utilities would add risk without creating customer value. The project therefore uses:

- Tailwind utilities for new component composition, responsive layout, spacing, state styling, and focus treatment.
- Tailwind theme tokens in `src/styles/global.css` for the World of Spas palette, fonts, radius, and shadow.
- Named component CSS for complex mega-menu positioning, drawer panel transitions, hero animation, SVG product art, and global legacy page patterns.
- Plain Astro components and small browser scripts instead of a hydrated UI framework.

This keeps Tailwind’s speed and prebuilt-component compatibility while preserving readable domain components.

## Installation

Tailwind is configured in `astro.config.mjs`:

```js
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

The global stylesheet begins with:

```css
@import 'tailwindcss';
```

No `tailwind.config.js`, PostCSS file, or deprecated `@astrojs/tailwind` integration is required.

## Theme utilities

The `@theme` block exposes utilities such as:

- `bg-wos-navy`
- `text-wos-teal`
- `border-wos-aqua`
- `font-display`
- `rounded-wos`
- `shadow-wos`

Add shared project tokens there rather than repeating arbitrary values throughout page templates.

## Using prebuilt components

Prefer framework-neutral HTML/Tailwind component markup. When adapting a React/Vue component library:

1. Port the markup to `.astro` when the component does not need client state.
2. Keep small interactions in a component `<script>` or a reusable controller.
3. Add a UI framework integration only for components that genuinely require hydration.
4. Replace library colors and radii with the World of Spas theme tokens.
5. Preserve labels, roles, keyboard behavior, reduced-motion handling, and visible focus states.

## Navigation implementation

`src/components/Header.astro` provides:

- Desktop mega menu positioned against the viewport and clamped to 16px side gutters.
- Desktop dropdowns clamped independently to avoid right-edge overflow.
- Mobile full-width drawer panels for Shop, Products, and Support.
- Horizontal forward navigation and a persistent Back control.
- Escape-key handling and panel reset when the drawer closes.

## Location selector implementation

`src/components/LocationSelector.astro` is a custom listbox rather than a native select. It supports:

- Trigger and popover states with ARIA attributes.
- Arrow Up/Down, Home, End, Enter, and Escape behavior.
- Click-outside closing.
- Active-option styling and check indicator.
- Optional hidden form input via the `name` prop.
- Top or bottom placement.
- Synchronization across every selector instance through the global location controller.
