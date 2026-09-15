/**
 * Footer Component
 * Architectural zinc footer matching design.md:
 * - Muted ink hierarchy (#71717a, #52525b)
 * - Email newsletter signup
 * - Categorized sitemap links
 * - Operational status indicator
 */

export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand Column -->
          <div>
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 16px;">
              <div style="width: 32px; height: 32px; background: #09090b; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 16px;">
                A
              </div>
              <span style="font-size: 19px; font-weight: 700; color: #09090b; letter-spacing: -0.02em;">Azarel</span>
            </div>
            <p style="font-size: 14px; color: var(--color-steel); line-height: 1.55; max-width: 300px; margin-bottom: 20px;">
              Editorial zinc grid with confetti-orange punctuation. High-performance digital assets, UI sections, and design infrastructure.
            </p>
            <div style="display: inline-flex; align-items: center; gap: 8px; background: #f4f4f5; padding: 6px 12px; border-radius: 10000px; border: 1px solid var(--color-cloud); font-size: 12px; color: var(--color-steel);">
              <span style="width: 8px; height: 8px; border-radius: 50%; background-color: #22c55e;"></span>
              All marketplace systems operational
            </div>
          </div>

          <!-- Links: Marketplace -->
          <div>
            <div style="font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--color-obsidian); margin-bottom: 16px;">
              Marketplace
            </div>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-size: 14px; color: var(--color-steel);">
              <li><a href="#/sections" class="footer-link">Website Sections</a></li>
              <li><a href="#/components" class="footer-link">UI Components</a></li>
              <li><a href="#/icons" class="footer-link">Icon Library</a></li>
              <li><a href="#/templates" class="footer-link">Full Templates</a></li>
              <li><a href="#/resources" class="footer-link">Free Resources</a></li>
            </ul>
          </div>

          <!-- Links: Design System -->
          <div>
            <div style="font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--color-obsidian); margin-bottom: 16px;">
              Tokens &amp; Specs
            </div>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-size: 14px; color: var(--color-steel);">
              <li><a href="#/about" class="footer-link">Design System Guide</a></li>
              <li><a href="tokens.css" target="_blank" class="footer-link">CSS Custom Properties</a></li>
              <li><a href="theme.css" target="_blank" class="footer-link">Tailwind v4 Theme</a></li>
              <li><a href="tokens.json" target="_blank" class="footer-link">tokens.json Manifest</a></li>
              <li><a href="design.md" target="_blank" class="footer-link">design.md Reference</a></li>
            </ul>
          </div>

          <!-- Links: Platform -->
          <div>
            <div style="font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--color-obsidian); margin-bottom: 16px;">
              Platform
            </div>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-size: 14px; color: var(--color-steel);">
              <li><a href="#/pricing" class="footer-link">Pricing &amp; Licenses</a></li>
              <li><a href="#/about" class="footer-link">About Azarel</a></li>
              <li><a href="#/search" class="footer-link">Search Catalog</a></li>
              <li><a href="#/favorites" class="footer-link">Saved Collection</a></li>
            </ul>
          </div>

          <!-- Newsletter Signup -->
          <div>
            <div style="font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--color-obsidian); margin-bottom: 16px;">
              Stay In Sync
            </div>
            <p style="font-size: 13px; color: var(--color-steel); margin-bottom: 12px; line-height: 1.45;">
              Weekly drop of new zinc components and free templates.
            </p>
            <form id="footer-newsletter-form" onsubmit="event.preventDefault(); window.dispatchEvent(new CustomEvent('azarel:toast', { detail: { message: 'Subscribed to weekly asset drop!' } })); this.reset();" style="display: flex; flex-direction: column; gap: 8px;">
              <input type="email" required placeholder="Enter work email..." class="input-field" style="padding: 9px 14px; font-size: 13px; border-radius: 12px;" />
              <button type="submit" class="btn-primary" style="padding: 9px 14px; font-size: 13px; border-radius: 12px; width: 100%;">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div style="padding-top: 28px; border-top: 1px solid var(--color-cloud); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; font-size: 13px; color: var(--color-fog);">
          <div>
            &copy; 2026 Azarel Systems Inc. All rights reserved. Crafted on the Awesomic design system.
          </div>
          <div style="display: flex; gap: 20px;">
            <span>Cosmica &amp; DM Sans</span>
            <span>&bull;</span>
            <span>36px Card Geometry</span>
            <span>&bull;</span>
            <span>#09090b Obsidian Ink</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}
