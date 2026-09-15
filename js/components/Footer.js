/**
 * Footer Component — Family Style Reference
 * Cream canvas / stone surface footer with hand-drawn mascot and clean Inter links.
 */

import { renderMiniMascot } from './Mascots.js';

export function renderFooter() {
  return `
    <footer class="site-footer" style="background: #fbfaf9; border-top: 1px solid #f2f0ed; padding: 72px 0 48px 0; margin-top: auto;">
      <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; margin-bottom: 56px;">
          <!-- Col 1: Brand & Mascot -->
          <div style="max-width: 300px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 16px;">
              ${renderMiniMascot('flower', 34)}
              <span style="font-size: 20px; font-weight: 600; color: #121212;">Azarel Sections</span>
            </div>
            <p style="font-size: 14px; color: #474645; line-height: 1.55; margin-bottom: 20px;">
              Storybook spread on cream parchment. Production-ready website sections engineered with hairline borders and zero chromatic clutter.
            </p>
            <div style="font-size: 13px; color: #7e7e7d;">
              © ${new Date().getFullYear()} Azarel. Perpetual commercial license.
            </div>
          </div>

          <!-- Col 2: Sections -->
          <div>
            <div style="font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #121212; margin-bottom: 16px;">
              Website Sections
            </div>
            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; font-size: 14px; color: #474645;">
              <li><a href="#/sections" style="text-decoration: none; color: inherit;">Hero Spreads (4)</a></li>
              <li><a href="#/sections" style="text-decoration: none; color: inherit;">Bento Feature Grids (3)</a></li>
              <li><a href="#/sections" style="text-decoration: none; color: inherit;">Pricing Tables (2)</a></li>
              <li><a href="#/sections" style="text-decoration: none; color: inherit;">Friends of Family Tweet Walls (2)</a></li>
              <li><a href="#/sections" style="text-decoration: none; color: inherit;">Lead Capture CTAs (2)</a></li>
            </ul>
          </div>

          <!-- Col 3: Tools & Resources -->
          <div>
            <div style="font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #121212; margin-bottom: 16px;">
              Tools &amp; Licensing
            </div>
            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; font-size: 14px; color: #474645;">
              <li><a href="#/mixer" style="text-decoration: none; color: inherit;">Interactive Page Stack Mixer</a></li>
              <li><a href="#/pricing" style="text-decoration: none; color: inherit;">All-Access Lifetime Pass ($99)</a></li>
              <li><a href="#/about" style="text-decoration: none; color: inherit;">Family Design Tokens</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener" style="text-decoration: none; color: inherit;">Tailwind v4 Config</a></li>
              <li><a href="#/about" style="text-decoration: none; color: inherit;">Commercial License Terms</a></li>
            </ul>
          </div>

          <!-- Col 4: Updates Newsletter -->
          <div>
            <div style="font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #121212; margin-bottom: 16px;">
              New Section Drops
            </div>
            <p style="font-size: 14px; color: #474645; margin-bottom: 14px; line-height: 1.45;">
              Get notified whenever new Family-styled sections, bento grids, and mascots are added.
            </p>
            <form onsubmit="event.preventDefault(); window.dispatchEvent(new CustomEvent('azarel:toast', { detail: { message: 'Subscribed to section drop alerts!' } })); this.reset();" style="display: flex; gap: 6px;">
              <input type="email" placeholder="Your email..." required style="flex: 1; padding: 8px 12px; border-radius: 32px; border: 1px solid #e5d5c3; background: #ffffff; color: #121212; font-size: 13px;" />
              <button type="submit" class="btn-dark-pill" style="padding: 8px 14px; font-size: 13px;">Join</button>
            </form>
          </div>
        </div>

        <div style="border-top: 1px solid #f2f0ed; padding-top: 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; font-size: 13px; color: #7e7e7d;">
          <div style="display: flex; gap: 18px;">
            <span>Base Canvas: #fbfaf9</span>
            <span>Hairline: #f2f0ed</span>
            <span>Accent: #ff3e00</span>
          </div>
          <div>
            Crafted for engineers and designers shipping modern web products.
          </div>
        </div>
      </div>
    </footer>
  `;
}
