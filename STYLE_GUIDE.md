# Awesomic — Style Reference
> editorial zinc grid with confetti-orange punctuation.

**Theme:** light

Awesomic operates in a restrained, neutral-first visual register: a zinc-gray scale carries nearly the entire interface, with one vivid orange badge accent and almost no other chromatic intrusion. The geometry is defined by generous corner rounding — 36px cards, 14px buttons, 10000px pills — and hairline 1px borders replace drop shadows as the primary elevation tool. Typography is a single custom geometric sans (Cosmica, substitute: DM Sans) deployed at bold display weights (56–64px / weight 600) for editorial headlines, paired with compact 14px body text that signals efficiency. The atmosphere is that of a confident, infrastructure-grade marketplace: quiet surfaces, precise density, and color deployed as functional punctuation rather than decoration.

---

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Obsidian | `#09090b` | `--color-obsidian` | Primary action buttons, hero headlines, dominant text — the deepest near-black that grounds every dark CTA and display heading against the light canvas |
| Graphite | `#18181b` | `--color-graphite` | Body text, nav text, badge text — the working ink color across paragraphs, links, and labels |
| Slate | `#27272a` | `--color-slate` | Secondary headings and elevated card surfaces — a mid-dark gray for cards that need visual weight |
| Iron | `#3f3f46` | `--color-iron` | Muted text, button labels on light surfaces, badge text — the mid-gray used for secondary UI labels and outlined-button text |
| Steel | `#52525b` | `--color-steel` | Icon strokes, supporting metadata — borders and icon outlines in darker contexts |
| Fog | `#71717a` | `--color-fog` | Helper text, tertiary labels — muted copy and supporting metadata |
| Ash | `#a1a1aa` | `--color-ash` | Placeholder text, disabled labels, light icon strokes — the lightest readable gray |
| Mist | `#d4d4d8` | `--color-mist` | Subtle borders, secondary card fills, link pill backgrounds — structural divider color |
| Cloud | `#ececee` | `--color-cloud` | Primary border color across the system — 1px hairline rules on cards, badges, and inputs |
| Paper | `#f4f4f5` | `--color-paper` | Canvas background, card surfaces, badge fills — the warm-cool gray that carries the page surface |
| Snow | `#ffffff` | `--color-snow` | Elevated surfaces (cards on canvas), input fields, button backgrounds for ghost/neutral actions |
| Ember | `#ff5a00` | `--color-ember` | Accent badges (YC batch tags, highlight chips) — the single vivid color in the system, used sparingly for startup credentials and category emphasis |
| Magenta Spark | `#fe45e2` | `--color-magenta-spark` | Rare decorative card accent — used on one hero card as visual punctuation against the monochrome grid |

---

## Tokens — Typography

### Cosmica (Substitute: DM Sans)
Single-family type system for everything: 56–64px weight 600 display headlines with tight 1.12–1.28 line-height, 32–40px weight 600–700 section headings, 14–16px weight 400 body and UI text, 12–13px weight 400 badge and meta labels · `--font-cosmica`
- **Substitute:** DM Sans
- **Weights:** 300, 400, 500, 600, 700
- **Sizes:** 10, 12, 13, 14, 15, 16, 18, 20, 32, 40, 56, 64
- **Line height:** 1.0–1.8
- **Letter spacing:** normal across all steps (no tracking adjustments detected)

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.64 | — | `--text-caption` |
| body | 15px | 1.45 | — | `--text-body` |
| body-lg | 18px | 1.45 | — | `--text-body-lg` |
| subheading | 20px | 1.5 | — | `--text-subheading` |
| heading-sm | 32px | 1.5 | — | `--text-heading-sm` |
| heading | 40px | 1.28 | — | `--text-heading` |
| heading-lg | 56px | 1.28 | — | `--text-heading-lg` |
| display | 64px | 1.12 | — | `--text-display` |

---

## Tokens — Spacing & Shapes

**Base unit:** 4px  
**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 28 | 28px | `--spacing-28` |
| 32 | 32px | `--spacing-32` |
| 36 | 36px | `--spacing-36` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 68 | 68px | `--spacing-68` |
| 80 | 80px | `--spacing-80` |
| 120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value | Token |
|---------|-------|-------|
| cards | 36px | `--radius-cards` |
| icons | 40px | `--radius-icons` |
| pills | 10000px | `--radius-pills` |
| badges | 12px | `--radius-badges` |
| inputs | 14px | `--radius-inputs` |
| buttons | 14px | `--radius-buttons` |

### Shadows & Hairline Insets

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(255, 255, 255, 0.5) 0px 0.5px 0px 0px inset, rgba(117, 123, 133, 0.4) 0px 9px 14px -5px inset, rgb(44, 46, 52) 0px 0px 0px 1.5px, rgba(0, 0, 0, 0.14) 0px 4px 6px 0px` | `--shadow-subtle` |
| subtle-2 | `rgb(228, 228, 231) 0px 1px 0px 0px inset` | `--shadow-subtle-2` |
| subtle-3 | `rgb(255, 255, 255) 0px 0.5px 0px 0px inset` | `--shadow-subtle-3` |
| subtle-4 | `rgb(255, 255, 255) 0px -0.5px 0px 0px` | `--shadow-subtle-4` |
| subtle-5 | `rgb(228, 228, 231) 0px -1px 0px 0px` | `--shadow-subtle-5` |
| md | `rgba(0, 0, 0, 0.04) 0px 4px 12px 0px` | `--shadow-md` |

### Layout

- **Page max-width:** 1200px (`--page-max-width`)
- **Section gap:** 80px (`--section-gap`)
- **Card padding:** 28px (`--card-padding`)
- **Element gap:** 8px (`--element-gap`)

---

## Surfaces & Elevation

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#f4f4f5` | Page background — the warm-cool gray that fills the viewport |
| 1 | Card | `#ffffff` | Elevated content surfaces sitting on the canvas |
| 2 | Subtle Card | `#fafafa` | Slightly recessed surfaces within content areas |
| 3 | Dark Surface | `#18181b` | Dark feature blocks and inverted sections |
| 4 | Deep Dark | `#27272a` | Darker feature cards and dark mode accents |

### Elevation Rules
- **Primary Dark Button:** `inset 0 0.5px 0 0 rgba(255,255,255,0.5), inset 0 9px 14px -5px rgba(117,123,133,0.4), 0 0 0 1.5px rgb(44,46,52), 0 4px 6px 0 rgba(0,0,0,0.14)`
- **Card:** `none — uses 1px solid #ececee hairline border instead`
- **Link/Pill:** `inset 0 1px 0 0 rgb(228,228,231)`

---

## Components

### 1. Primary Action Button (Dark Filled)
- **Role:** Main CTA — 'Book demo', 'Get started', 'Get match'
- **Styles:** Background `#09090b`, white text (`#ffffff`), `1.5px solid #2c2e34` border with subtle inset highlight shadow (`--shadow-subtle`), 14px border-radius, 12px vertical / 16px horizontal padding, 14px Cosmica weight 400.

### 2. Ghost Action Button (White)
- **Role:** Secondary CTA on dark backgrounds
- **Styles:** Background `#ffffff`, dark text (`#3f3f46`), `1px solid #3f3f46` border, 36px pill radius, 20px all padding, 14px Cosmica.

### 3. Neutral Pill Button (Light)
- **Role:** Subtle action on light backgrounds — 'Our work'
- **Styles:** Background `#fafafa`, text `#18181b`, 14px border-radius, 12px vertical / 16px horizontal padding, 14px Cosmica weight 400. No visible border.

### 4. Category Card (Image Top)
- **Role:** Service category showcase — 'Web & product', 'Motion design'
- **Styles:** Full-width image fills the top half, 36px border-radius, 28px bottom padding, no shadow. Title overlay or below image at 20px Cosmica weight 600. Tag pills sit inside the card at bottom.

### 5. Dark Feature Card
- **Role:** Pain-point listing with arrow bullets
- **Styles:** Background `#27272a` or `#18181b`, white text, 28–36px border-radius, 24px padding. Each list item has a 20px Cosmica weight 500 with right-arrow accent.

### 6. Tag Pill Badge
- **Role:** Category tags — 'Web', 'UX/UI design', 'Mobile app'
- **Styles:** Transparent background with `1px solid #ececee` border, text `#18181b`, 12px border-radius, 4px vertical / 8px horizontal padding, 12–13px Cosmica weight 400.

### 7. Filled Tag Badge
- **Role:** Accent tags — 'Software development', 'Marketing'
- **Styles:** Background `#3f3f46`, text `#fafafa`, 12px border-radius, 4px/8px padding.

### 8. Orange Accent Badge
- **Role:** YC batch badges, highlight chips
- **Styles:** Background `#ff5a00`, white text, 12px border-radius, 4px/8px padding. Sole chromatic badge.

### 9. Email Input Field
- **Role:** Hero email capture, newsletter signup
- **Styles:** White background (`#ffffff`), text `#333333`, 14px border-radius, 12px vertical / 16px horizontal padding, 1px transparent border. Pairs with dark CTA button.

### 10. Logo Strip
- **Role:** Social proof — partner/client logos
- **Styles:** Grayscale logos rendered in `#71717a` at 60–70% opacity, horizontally centered with even spacing. No background container.

### 11. Stats Block
- **Role:** Headline metrics — '20 000+ completed projects'
- **Styles:** Large number at 40–56px Cosmica weight 600 in `#09090b`, adjacent descriptor at 14px weight 400 in `#52525b`.

### 12. Breakthrough Image Section
- **Role:** Full-bleed visual divider — landscape/moss
- **Styles:** Full-width photographic image (no overlay, no text), 48px or 64px corner radius on top corners.

### 13. Navigation Bar
- **Role:** Top-level site navigation
- **Styles:** Sticky white header, logo left, nav links center (14px Cosmica), login + dark CTA button right. No visible border — floats on canvas.

---

## Do's and Don'ts

### Do
- Use `#09090b` for all primary action buttons — the dark filled CTA is the system’s single most important interactive element
- Set card border-radius to 36px and rely on 1px solid `#ececee` borders instead of shadows for elevation
- Keep body text at 14–15px Cosmica weight 400 in `#18181b` — compact, dense, marketplace-grade
- Reserve `#ff5a00` exclusively for YC-style accent badges and startup credential chips — never use it for general UI
- Use 56–64px Cosmica weight 600 with line-height 1.12–1.28 for hero and section display headlines
- Apply 28px padding inside cards and 80px vertical rhythm between major page sections
- Use 10000px border-radius for pill-shaped CTAs in the navigation, and 14px for inline action buttons

### Don't
- Do not introduce new accent colors — the system is 99% achromatic; adding blues, greens, or purples breaks the restrained editorial register
- Do not use drop shadows on cards — hairline borders at `1px solid #ececee` are the only permitted elevation on content surfaces
- Do not set display headlines below weight 600 — the bold weight is what makes the editorial typography read as authoritative
- Do not use `#ff5a00` for body text, links, or large fills — it’s a badge color, not a brand color for general UI
- Do not use border-radius below 12px on any container — the system’s geometry is defined by generous rounding
- Do not break the single-font rule — Cosmica handles every typographic role from 10px badges to 64px displays
- Do not use pure black (`#000000`) — `#09090b` is the deepest permitted ink, keeping warmth in the neutrals

---

## Geometry Philosophy
The system’s spatial language is defined by three radii that repeat everywhere:
- **12px** for tags and small controls
- **14px** for buttons and inputs
- **36px** for cards and large surfaces
- **10000px** for pill shapes in navigation CTAs

No sharp corners (0px) are used on visible UI. The asymmetry between 14px (buttons) and 36px (cards) creates precision on interactive elements while keeping containers inviting and spacious.
