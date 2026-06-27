# QA notes — navigation and location revision

## Automated project checks

- `npm run check`: 0 errors, 0 warnings, 0 hints
- `npm run build`: successful
- Static routes generated: 76
- Internal broken links: 0

## Browser interaction checks

The revision was exercised at desktop widths of 1440, 1120, 1024, and 990 pixels, plus a 390 × 844 mobile viewport.

Validated behavior:

- Desktop mega menu remains inside 16px viewport gutters.
- Desktop mega menu uses a two-column layout and no longer stacks vertically at narrow desktop widths.
- Mobile drawer fills the available viewport without horizontal overflow.
- Shop opens as a right-to-left child panel.
- Back returns to the main mobile menu.
- Products and Support use the same reusable panel controller.
- Custom location listbox opens within the mobile viewport.
- Selecting Edmonton updates the visible label, document location state, stored location, and URL query parameter.
- Custom location menu dimensions remain inside a 390px viewport.

## Accessibility behavior included

- ARIA expanded/current/selected states
- Escape handling for desktop menus, mobile drawer, and location popover
- Arrow Up/Down, Home, and End navigation in the location listbox
- Native Enter/Space activation on listbox option buttons
- Focus returned to the trigger after closing the selector
- Reduced-motion support preserved
