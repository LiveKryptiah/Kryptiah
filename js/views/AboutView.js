/**
 * AboutView Component — Family Design System Showcase
 * Explains the architectural philosophy:
 * - Storybook spread on cream parchment (#fbfaf9)
 * - Inset hairline borders (#f2f0ed) instead of drop shadows
 * - Playful mascot markers and Inter typography
 * - Interactive Token swatch board
 */

export function renderAboutView() {
  const familyTokens = [
    { name: 'Cream Canvas', hex: '#fbfaf9', role: 'Page background, nav surface — paper feel' },
    { name: 'Stone Surface', hex: '#f2f0ed', role: '1px hairline inset borders & subtle depth' },
    { name: 'Ink Black', hex: '#121212', role: 'Headings, primary dark pill action CTA' },
    { name: 'Heading Charcoal', hex: '#343433', role: 'Primary text, decorative strokes, mascot lines' },
    { name: 'Body Brown', hex: '#474645', role: 'Readable running body copy' },
    { name: 'Muted Gray', hex: '#7e7e7d', role: 'Helper text and tertiary labels' },
    { name: 'Stone Border', hex: '#e5d5c3', role: 'Hairline decorative border on mascot shapes' },
    { name: 'Link Blue', hex: '#0086fc', role: 'Inline links and feature list emphasis' },
    { name: 'Sky Blue', hex: '#64c6ff', role: 'Illustration fill, mascot accents' },
    { name: 'Grass Green', hex: '#00c978', role: 'Green text accent, short phrase emphasis' },
    { name: 'Mint', hex: '#00ca48', role: 'Status badge pill, positive signals' },
    { name: 'Ember Orange', hex: '#ff3e00', role: 'Signature secondary CTA and demo link color' },
    { name: 'Sun Yellow', hex: '#ffcd6c', role: 'Mascot coloring, confetti shapes' },
    { name: 'Honey', hex: '#ffbb26', role: 'Pending status wash, soft highlight' },
    { name: 'Coral Pink', hex: '#ff58ae', role: 'Purchase badge fill, decorative accent' },
    { name: 'Plum Violet', hex: '#9f4fff', role: 'Violet accent for action icons' }
  ];

  return `
    <div class="about-page" style="padding: 48px 0 80px 0;">
      <div class="container" style="max-width: 900px;">
        <!-- Manifesto Header -->
        <div style="margin-bottom: 48px;">
          <div style="display: inline-flex; align-items: center; gap: 6px; background: #f2f0ed; padding: 4px 14px; border-radius: 9999px; margin-bottom: 16px;">
            <span style="font-size: 11px; font-weight: 700; color: #ff3e00; text-transform: uppercase;">DESIGN MANIFESTO</span>
          </div>
          <h1 class="text-display" style="font-size: 48px; margin-bottom: 20px;">
            Storybook spread on cream parchment.
          </h1>
          <p class="text-body" style="font-size: 19px; line-height: 1.6; margin-bottom: 16px;">
            Family speaks in a warm parchment-and-marker language: a cream canvas (<code style="background: #f2f0ed; padding: 2px 6px; border-radius: 4px; color: #121212;">#fbfaf9</code>) carries hand-drawn characters and scattered confetti shapes in primary-bright fills, while typography stays calm and utilitarian in Inter.
          </p>
          <p class="text-body" style="line-height: 1.6;">
            The interface itself is deliberately restrained — inset hairline borders (<code style="background: #f2f0ed; padding: 2px 6px; border-radius: 4px; color: #121212;">box-shadow: inset 0 0 0 1px #f2f0ed</code>) define surfaces rather than drop shadows — so the cartoon illustrations carry all the emotional weight and the chrome stays quiet.
          </p>
        </div>

        <!-- The 3 Core Pillars -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin-bottom: 56px;">
          <div class="card-hairline">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: #ffcd6c; display: flex; align-items: center; justify-content: center; font-size: 18px; margin-bottom: 16px;">
              📄
            </div>
            <h3 style="font-size: 18px; font-weight: 600; color: #121212; margin-bottom: 8px;">Pressed Into Paper</h3>
            <p style="font-size: 14px; color: #474645; line-height: 1.5;">
              Never use heavy drop shadows. Surfaces shift through subtle warmth shifts and crisp 1px inset strokes.
            </p>
          </div>

          <div class="card-hairline">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: #64c6ff; display: flex; align-items: center; justify-content: center; font-size: 18px; margin-bottom: 16px;">
              🎨
            </div>
            <h3 style="font-size: 18px; font-weight: 600; color: #121212; margin-bottom: 8px;">Chromatic Markers</h3>
            <p style="font-size: 14px; color: #474645; line-height: 1.5;">
              Near-black for the serious CTA, ember orange for watch links, mint/honey for status, and primary fills for mascots.
            </p>
          </div>

          <div class="card-hairline">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: #00c978; display: flex; align-items: center; justify-content: center; font-size: 18px; margin-bottom: 16px;">
              📐
            </div>
            <h3 style="font-size: 18px; font-weight: 600; color: #121212; margin-bottom: 8px;">Calm Inter Utility</h3>
            <p style="font-size: 14px; color: #474645; line-height: 1.5;">
              Display headings at 68px tighten tracking to -0.031em, while running body copy stays readable and quiet.
            </p>
          </div>
        </div>

        <!-- Interactive Color Tokens Swatch Board -->
        <div style="background: #ffffff; border-radius: 14px; padding: 32px; box-shadow: inset 0 0 0 1px #f2f0ed;">
          <h3 style="font-size: 22px; font-weight: 600; color: #121212; margin-bottom: 8px;">Design Tokens Palette</h3>
          <p style="font-size: 14px; color: #7e7e7d; margin-bottom: 24px;">Click any swatch to copy its hexadecimal color code.</p>

          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 14px;">
            ${familyTokens.map(tok => `
              <div 
                onclick="navigator.clipboard.writeText('${tok.hex}'); window.dispatchEvent(new CustomEvent('azarel:toast', { detail: { message: 'Copied ${tok.hex} to clipboard!' } }))"
                style="background: #fbfaf9; border-radius: 8px; padding: 12px; box-shadow: inset 0 0 0 1px #f2f0ed; cursor: pointer; transition: transform 0.1s ease;"
              >
                <div style="height: 36px; border-radius: 6px; background: ${tok.hex}; border: 1px solid rgba(0,0,0,0.08); margin-bottom: 8px;"></div>
                <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; color: #121212; margin-bottom: 2px;">
                  <span>${tok.name}</span>
                  <code style="font-size: 11px; color: #7e7e7d;">${tok.hex}</code>
                </div>
                <div style="font-size: 11px; color: #474645; line-height: 1.4;">
                  ${tok.role}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}
