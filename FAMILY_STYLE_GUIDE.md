# Family — Style Reference
> storybook spread on cream parchment

**Theme:** light

Family speaks in a warm parchment-and-marker language: a cream canvas (#fbfaf9) carries hand-drawn characters and scattered confetti shapes in primary-bright fills, while typography stays calm and utilitarian in Inter. The interface itself is deliberately restrained — inset hairline borders define surfaces rather than shadows — so the cartoon illustrations carry all the emotional weight and the chrome stays quiet. Color functions as semantic markers: near-black for the one serious action, blue and orange for status, gold and green for positive signals, red and pink for destructive/attention. Every screen should feel like a children's storybook spread: generous whitespace, big confident headings, and a few vivid characters punctuating an otherwise monochrome layout.

---

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Cream Canvas | `#fbfaf9` | `--color-cream-canvas` | Page background, nav surface — warm off-white that reads as paper rather than screen |
| Stone Surface | `#f2f0ed` | `--color-stone-surface` | Card surfaces, secondary panels, inset border tone — one shade darker than canvas to create depth without shadow |
| Ink Black | `#121212` | `--color-ink-black` | Headings, primary action fill, dark card surfaces — near-black that stays slightly warm |
| Heading Charcoal | `#343433` | `--color-heading-charcoal` | Primary text, nav text, decorative strokes — softened black for readable body |
| Body Brown | `#474645` | `--color-body-brown` | Body copy, secondary text — warm desaturated brown rather than cool gray |
| Muted Gray | `#7e7e7d` | `--color-muted-gray` | Helper text, inactive nav, tertiary labels |
| Stone Border | `#e5d5c3` | `--color-stone-border` | Hairline decorative borders on illustrations and shapes |
| Link Blue | `#0086fc` | `--color-link-blue` | Inline links, feature list text — vivid blue that reads as actionable without being a button |
| Sky Blue | `#64c6ff` | `--color-sky-blue` | Illustration fill, decorative mascot accents — sky-bright for storybook characters |
| Alt Blue | `#00b2ff` | `--color-alt-blue` | Secondary illustration fill, icon accents — slightly deeper blue for variation |
| Grass Green | `#00c978` | `--color-grass-green` | Green text accent for links, tags, and emphasized short phrases. Use as a supporting accent, not as a status color |
| Mint | `#00ca48` | `--color-mint` | Green wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Use as a supporting accent, not as a status color |
| Ember Orange | `#ff3e00` | `--color-ember-orange` | Orange text accent for links, tags, and emphasized short phrases |
| Sun Yellow | `#ffcd6c` | `--color-sun-yellow` | Illustration fill, decorative shapes, mascot coloring |
| Gold | `#d48f00` | `--color-gold` | Yellow text accent for links, tags, and emphasized short phrases. |
| Honey | `#ffbb26` | `--color-honey` | Yellow wash for highlight backgrounds, decorative bands, and soft emphasis behind content |
| Coral Pink | `#ff58ae` | `--color-coral-pink` | Purchase badge fill, decorative illustration accent |
| Plum Violet | `#9f4fff` | `--color-plum-violet` | Violet wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Do not promote it to the primary CTA color |
| Alert Red | `#ff2b3a` | `--color-alert-red` | Red wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Use as a supporting accent, not as a status color |

---

## Tokens — Typography

### Family (Display and Hero Headings)
- **Role:** Display and hero headings — custom Family typeface at weight 500, letter-spacing tightening to -0.031em at 68px creates a slightly playful, slightly condensed character that defines the brand · `--font-family`
- **Substitute:** Druk Wide Medium or GT America Compressed Medium
- **Weights:** 500
- **Sizes:** 44px, 68px
- **Line height:** 1.09-1.10
- **Letter spacing:** -0.031em at 68px, -0.020em at 44px

### Inter (Body Copy, UI & Nav)
- **Role:** Body copy, nav text, card descriptions — Inter at regular weight carries the utility layer; tighter line-heights (1.42-1.53) for running text, generous (1.58) for caption-level · `--font-inter`
- **Substitute:** Inter (Google Fonts)
- **Weights:** 400, 500, 600
- **Sizes:** 12px, 13px, 14px, 15px, 16px, 17px, 19px, 23px, 44px
- **Line height:** 1.09-1.58

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| micro | 12px | 19px | -0.01px | `--text-micro` |
| caption | 15px | 22px | -0.14px | `--text-caption` |
| body | 17px | 26px | -0.22px | `--text-body` |
| subheading | 19px | 27px | -0.3px | `--text-subheading` |
| heading | 23px | 25px | -0.44px | `--text-heading` |
| heading-lg | 44px | 53px | -0.88px | `--text-heading-lg` |
| display | 68px | 75px | -2.1px | `--text-display` |

---

## Tokens — Spacing & Shapes

**Base unit:** 4px  
**Density:** comfortable

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
| 48 | 48px | `--spacing-48` |
| 60 | 60px | `--spacing-60` |
| 76 | 76px | `--spacing-76` |
| 80 | 80px | `--spacing-80` |
| 92 | 92px | `--spacing-92` |
| 96 | 96px | `--spacing-96` |
| 104 | 104px | `--spacing-104` |

### Border Radius

| Element | Value | Token |
|---------|-------|-------|
| nav | 10px | `--radius-nav` |
| cards | 10px | `--radius-cards` |
| icons | 40px | `--radius-icons` |
| pills | 9999px | `--radius-pills` |
| small | 2px | `--radius-small` |
| badges | 6px | `--radius-badges` |
| buttons | 32px | `--radius-buttons` |
| illustration | 72px | `--radius-illustration` |

### Shadows & Elevation

| Name | Value | Token |
|------|-------|-------|
| subtle | `color(display-p3 0.94902 0.941176 0.929412) 0px 0px 0px 1px inset` | `--shadow-subtle` |
| subtle-2 | `color(display-p3 0.94902 0.941176 0.929412) 0px 0px 0px 0px inset` | `--shadow-subtle-2` |
| subtle-3 | `rgba(0, 0, 0, 0.04) 0px 0px 0px 1px` | `--shadow-subtle-3` |
| lg | `rgba(0, 0, 0, 0.15) 0px 0px 24px 0px` | `--shadow-lg` |
| sm | `rgba(0, 0, 0, 0.04) 0px 1px 6px 0px, rgba(0, 0, 0, 0.05) 0px 0px 24px 0px` | `--shadow-sm` |

### Layout Guidelines
- **Page max-width:** 1200px
- **Section gap:** 80-120px
- **Card padding:** 32px
- **Element gap:** 8-12px

---

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#fbfaf9` | Page background, hero backdrop — warm cream that reads as paper |
| 1 | Stone | `#f2f0ed` | Inset border tone, secondary card surfaces, subtle surface shifts |
| 2 | Sand | `#f6f4ef` | Pill button secondary variant, light tag surfaces for demo blocks |
| 3 | Pure White | `#ffffff` | Feature cards, tweet cards — only on white does the 1px inset hairline register |
| 4 | Dark Surface | `#121212` | Dark pill buttons, primary CTA — the only dark surface in the system |
| 5 | Full Black | `#000000` | Dark feature card (Send/Swap stack), shadow base — strongest tonal shift available |

---

## Components

### 1. Hero Illustration Cluster
- **Role:** Decorative character/scatter artwork flanking the hero headline.
- **Details:** Hand-drawn cartoon mascots (flower, blob, cat, triangle character) with scattered confetti shapes (stars, coins, hearts, gears, leaves). Uses fills from the accent palette (#64c6ff, #ffcd6c, #00c978, #ff3e00, #ff58ae, #e5d5c3) with thin strokes at #343433. Shapes use organic radii of 40-72px. Two clusters flank a centered text block — they do not overlap the type.

### 2. Ghost Nav Button
- **Role:** Secondary header action (Log In).
- **Details:** Transparent background, text in #343433, no border, font-size 13-14px Inter 400. Sits flush left of the primary CTA in the top nav.

### 3. Dark Pill Button
- **Role:** Primary header CTA (Get Started).
- **Details:** Background #121212, text white, fully rounded (32px radius), horizontal padding 14px, vertical padding sized to content height (roughly 8-11px). Small, dense, high-contrast.

### 4. Sand Pill Button
- **Role:** Secondary page CTA (Watch the Video).
- **Details:** Background #f6f4ef (lighter than canvas), text #121212, 32px pill radius, 14px horizontal padding. Pairs beside the dark primary to create tonal contrast.

### 5. Inline Demo Link
- **Role:** Feature-card watch-the-demo link.
- **Details:** Underlined text link, no border, no background padding beyond 4px vertical. Color is #ff3e00 (ember orange) — the brand's signature secondary CTA color. Border-radius 0 to read as text.

### 6. Feature Card (Hairline-Bordered)
- **Role:** Primary card for the 6-feature grid.
- **Details:** White background (#ffffff), 10px radius, 32px padding on all sides. Border is a 1px inset in #f2f0ed (stone surface) rather than a drop shadow — giving a pressed-into-paper feel. 3-column grid with 8-12px gaps. Heading is 23px Inter medium, body is 16-17px Inter 400 in #474645.

### 7. Light Tag Surface
- **Role:** Secondary card surface for grouped feature blocks.
- **Details:** Background #fbfaf9 or #fcfbf9, 12px radius, no shadow, horizontal padding ~23px, vertical padding 14px. Defines surface through subtle warmth shift rather than contrast.

### 8. Dark Feature Card
- **Role:** Dark-mode card for the leftmost action card (Send/Swap/Receive/Purchase).
- **Details:** Background #000000, 24px left-only radius (asymmetric), 24px soft drop shadow at rgba(0,0,0,0.15), 4px padding. Houses a stacked list of icon+label rows in white/cream text.

### 9. Action Row (Inside Dark Card)
- **Role:** Send / Swap / Receive / Purchase list item.
- **Details:** Circular icon in app-brand color (#0090ff, #9f4fff, #00c978, #ff58ae), label in white Inter 500/600, helper text in muted white. Rows separated by 1-2px gaps.

### 10. Status Badge Pill
- **Role:** Backing Up / Pending / Completed indicators.
- **Details:** Fully rounded pill (9999px radius), background in status hue (mint #00ca48 for backing-up, gold #ffbb26 for pending), text in matching dark or light. Padded ~10-12px horizontal, 6-8px vertical.

### 11. Tweet Card
- **Role:** Social proof card in the 'Friends of Family' grid.
- **Details:** White background (#ffffff), 10px radius, 1px inset border in #f2f0ed, 32px padding. 40px circular avatar, handle in #343433, tweet body in #474645 at 15-16px. X-platform icon top-right.

---

## Do's and Don'ts

### Do
- Use the custom Family typeface at 44-68px weight 500 for all display and hero headings; never substitute system fonts at this scale
- Use 10px radius as the default for cards and nav surfaces; use 32-9999px only for pill buttons and badges
- Build card definition with a 1px inset border in #f2f0ed rather than a drop shadow — the page should feel pressed into paper, not floating
- Let #ff3e00 carry the 'demo link' and accent text role; keep ember orange for inline links and feature callouts, never as a filled button
- Set body text in Inter 400 at 16-17px with line-height 1.42-1.53 and letter-spacing -0.013 to -0.016em
- Use the cream canvas (#fbfaf9) as the base for every full-bleed section; alternate by introducing the #f2f0ed stone surface for grouped card clusters
- Use illustration clusters of cartoon mascots in primary fills to anchor hero sections; scatter them asymmetrically so the centered text remains the focal point

### Don't
- Never use a drop shadow larger than rgba(0,0,0,0.04) — the design system rejects heavy elevation
- Don't use blue (#0086fc) as a filled CTA background; blue is reserved for inline links and list emphasis text
- Don't introduce gradients — the system is strictly flat with hairline inset borders
- Don't use Inter at the display sizes — display and hero headings must use the Family typeface at weight 500
- Don't separate surfaces with white-on-white; always shift toward #f2f0ed stone or toward #121212 black for clear contrast
- Don't add decoration to pill buttons — dark pill (#121212) and sand pill (#f6f4ef) are the only two pill variants
- Don't use warm reds (#ff2b3a) for anything beyond destructive/error states; the warm accent slot belongs to #ff3e00
