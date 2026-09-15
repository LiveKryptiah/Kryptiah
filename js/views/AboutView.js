/**
 * AboutView Component
 * Dark Mode Default & Full Window Height Layout
 * Articulates the design philosophy and architectural principles from design.md:
 * - Editorial zinc grid with confetti-orange punctuation
 * - Restrained, neutral-first visual register
 * - 36px / 14px / 10000px geometry philosophy
 * - Interactive token swatch showcase
 */

export function renderAboutView() {
  const tokens = [
    { name: 'Obsidian', hex: '#09090b', role: 'Primary CTA buttons, hero headlines, dominant text' },
    { name: 'Graphite', hex: '#18181b', role: 'Body text, nav text, badge text' },
    { name: 'Slate', hex: '#27272a', role: 'Secondary headings and elevated dark surfaces' },
    { name: 'Iron', hex: '#3f3f46', role: 'Muted text, button labels on light surfaces' },
    { name: 'Steel', hex: '#52525b', role: 'Icon strokes, supporting metadata' },
    { name: 'Fog', hex: '#71717a', role: 'Helper text, tertiary labels' },
    { name: 'Ash', hex: '#a1a1aa', role: 'Placeholder text, disabled labels' },
    { name: 'Mist', hex: '#d4d4d8', role: 'Subtle borders, secondary card fills' },
    { name: 'Cloud', hex: '#ececee', role: 'Primary border color across system (1px hairlines)' },
    { name: 'Paper', hex: '#f4f4f5', role: 'Canvas background, card surfaces' },
    { name: 'Snow', hex: '#ffffff', role: 'Elevated surfaces, input fields' },
    { name: 'Ember', hex: '#ff5a00', role: 'Sole vivid accent — YC badges and highlight chips' }
  ];

  return `
    <div class="about-page" style="min-height: calc(100vh - 68px);">
      <!-- Hero Manifesto -->
      <section style="background-color: var(--surface-canvas); border-bottom: 1px solid var(--color-cloud); padding: 60px 0;">
        <div class="container" style="max-width: 860px;">
          <span class="badge-ember" style="margin-bottom: 16px;">THE AZAREL MANIFESTO</span>
          <h1 class="text-display" style="margin-bottom: 24px;">
            A restrained, neutral-first visual register for the modern web.
          </h1>
          <p class="text-body-lg" style="margin-bottom: 20px;">
            Most modern design marketplaces suffer from sensory overload: saturated gradient blobs, heavy drop shadows, and arbitrary accent colors competing for attention.
          </p>
          <p class="text-body-lg" style="color: var(--color-steel);">
            Azarel was created to prove that clarity is the highest form of craftsmanship. Our system is 99% achromatic: an architectural zinc-gray scale carries nearly the entire interface, with one vivid confetti-orange badge accent (<code style="background: var(--surface-subtle-card); padding: 2px 6px; border-radius: 6px; border: 1px solid var(--color-cloud);">#ff5a00</code>) and almost no other chromatic intrusion.
          </p>
        </div>
      </section>

      <!-- Geometry Philosophy Section -->
      <section style="padding: 60px 0; border-bottom: 1px solid var(--color-cloud);">
        <div class="container">
          <div style="margin-bottom: 48px; max-width: 700px;">
            <span class="tag-pill" style="margin-bottom: 10px;">Geometry Triad</span>
            <h2 class="text-heading">The Geometry Philosophy</h2>
            <p class="text-body" style="color: var(--color-steel); margin-top: 8px;">
              The system's spatial language is defined by three radii that repeat everywhere with intentional asymmetry:
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px;">
            <div class="card-awesomic" style="padding: 32px;">
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 16px;">
                <span style="font-size: 40px; font-weight: 700; color: var(--color-obsidian);">36px</span>
                <span class="tag-pill">Cards &amp; Large Surfaces</span>
              </div>
              <h3 style="font-size: 18px; font-weight: 600; color: var(--color-obsidian); margin-bottom: 8px;">Generous Enclosures</h3>
              <p style="font-size: 14px; color: var(--color-steel); line-height: 1.55;">
                Cards feel spacious, inviting, and architecturally grounded. Hairline 1px borders replace drop shadows as the primary elevation tool.
              </p>
            </div>

            <div class="card-awesomic" style="padding: 32px;">
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 16px;">
                <span style="font-size: 40px; font-weight: 700; color: var(--color-obsidian);">14px</span>
                <span class="tag-pill">Buttons &amp; Inputs</span>
              </div>
              <h3 style="font-size: 18px; font-weight: 600; color: var(--color-obsidian); margin-bottom: 8px;">Compact Precision</h3>
              <p style="font-size: 14px; color: var(--color-steel); line-height: 1.55;">
                Buttons feel precise and contained. The deliberate asymmetry with 36px cards creates crisp tactile feedback for every interactive CTA.
              </p>
            </div>

            <div class="card-awesomic" style="padding: 32px;">
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 16px;">
                <span style="font-size: 40px; font-weight: 700; color: var(--color-obsidian);">10000px</span>
                <span class="tag-pill">Navigation Pills</span>
              </div>
              <h3 style="font-size: 18px; font-weight: 600; color: var(--color-obsidian); margin-bottom: 8px;">Continuous Flow</h3>
              <p style="font-size: 14px; color: var(--color-steel); line-height: 1.55;">
                Reserved exclusively for primary navigation CTAs and segmented mode controllers to guide eyes smoothly along high-level actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Interactive Swatch Palette -->
      <section style="padding: 60px 0; border-bottom: 1px solid var(--color-cloud);">
        <div class="container">
          <div style="margin-bottom: 40px;">
            <span class="badge-ember" style="margin-bottom: 10px;">SYSTEM TOKENS</span>
            <h2 class="text-heading">The Zinc Color Hierarchy</h2>
            <p class="text-body" style="color: var(--color-steel); margin-top: 8px;">
              Live token swatches specified in design.md and implemented in tokens.css.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px;">
            ${tokens.map(t => `
              <div style="border: 1px solid var(--color-cloud); border-radius: 20px; overflow: hidden; background: var(--surface-card);">
                <div style="height: 70px; background-color: ${t.hex}; border-bottom: 1px solid var(--color-cloud);"></div>
                <div style="padding: 16px;">
                  <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px;">
                    <strong style="font-size: 15px; color: var(--color-obsidian);">${t.name}</strong>
                    <code style="font-size: 12px; color: var(--color-steel); font-family: monospace;">${t.hex}</code>
                  </div>
                  <p style="font-size: 12px; color: var(--color-steel); line-height: 1.4;">${t.role}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section style="padding: 60px 0; text-align: center;">
        <div class="container">
          <h2 class="text-heading" style="margin-bottom: 16px;">Ready to explore the marketplace?</h2>
          <p class="text-body-lg" style="margin-bottom: 28px; max-width: 500px; margin-left: auto; margin-right: auto;">
            Browse website sections, UI components, icons, and full templates built to this exact standard.
          </p>
          <a href="#/sections" class="btn-primary" style="padding: 13px 28px; font-size: 15px;">
            Explore All Assets →
          </a>
        </div>
      </section>
    </div>
  `;
}
