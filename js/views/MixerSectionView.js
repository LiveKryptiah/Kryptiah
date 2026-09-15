/**
 * MixerSectionView Component — Interactive Page Stack Mixer
 * Allows users to assemble sections into a complete webpage and test live responsiveness.
 * Clean SVG icons (zero emojis).
 */

import { SECTIONS_DATA } from '../data/products.js';
import { state } from '../state.js';
import { Icons } from '../components/Icons.js';

export function renderMixerSectionView() {
  const currentStackIds = state.mixerStack;
  const stackedSections = currentStackIds
    .map(id => SECTIONS_DATA.find(s => s.id === id))
    .filter(Boolean);

  const availableToAdd = SECTIONS_DATA.filter(s => !currentStackIds.includes(s.id));
  const activeDevice = state.previewDevice;

  // Calculate stack price
  const stackTotal = stackedSections.reduce((sum, s) => sum + (s.price || 0), 0);

  return `
    <div class="mixer-page" style="padding: 40px 0 80px 0; min-height: calc(100vh - 64px);">
      <div class="container">
        <!-- Header -->
        <div class="mixer-header">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
            <div>
              <div style="display: inline-flex; align-items: center; gap: 6px; background: #00ca48; color: #121212; padding: 3px 12px; border-radius: 9999px; margin-bottom: 8px;">
                ${Icons.sparkle(12, '#121212')}
                <span style="font-size: 11px; font-weight: 700; text-transform: uppercase;">LIVE PAGE BUILDER</span>
              </div>
              <h1 style="font-size: 32px; font-weight: 600; color: #121212; margin-bottom: 6px;">
                Interactive Page Stack Mixer
              </h1>
              <p style="font-size: 15px; color: #474645;">
                Stack any combination of website sections to preview a full landing page layout before buying.
              </p>
            </div>

            <!-- Stack Actions -->
            <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
              <!-- Viewport Switcher -->
              <div class="device-switcher">
                <button 
                  type="button" 
                  onclick="window.azarelSetDevice('desktop')" 
                  class="device-btn ${activeDevice === 'desktop' ? 'active' : ''}"
                  style="display: inline-flex; align-items: center; gap: 6px;"
                >
                  ${Icons.desktop(14)}
                  <span>Desktop</span>
                </button>
                <button 
                  type="button" 
                  onclick="window.azarelSetDevice('tablet')" 
                  class="device-btn ${activeDevice === 'tablet' ? 'active' : ''}"
                  style="display: inline-flex; align-items: center; gap: 6px;"
                >
                  ${Icons.tablet(14)}
                  <span>Tablet</span>
                </button>
                <button 
                  type="button" 
                  onclick="window.azarelSetDevice('mobile')" 
                  class="device-btn ${activeDevice === 'mobile' ? 'active' : ''}"
                  style="display: inline-flex; align-items: center; gap: 6px;"
                >
                  ${Icons.mobile(14)}
                  <span>Mobile</span>
                </button>
              </div>

              <!-- Reset Stack -->
              <button 
                type="button" 
                onclick="window.azarelResetMixer()" 
                class="btn-sand-pill"
                style="font-size: 13px;"
              >
                Reset Default
              </button>

              <!-- Add Entire Stack to Cart -->
              <button 
                type="button" 
                onclick="window.azarelAddEntireStackToCart()" 
                class="btn-dark-pill"
                style="font-size: 13px;"
              >
                Buy Stack (${stackTotal > 99 ? 'Best with $99 Pass' : `$${stackTotal}`})
              </button>
            </div>
          </div>
        </div>

        <!-- Add More Sections Selector Bar -->
        ${availableToAdd.length > 0 ? `
          <div style="background: #ffffff; border-radius: 10px; padding: 14px 20px; box-shadow: inset 0 0 0 1px #f2f0ed; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
            <span style="font-size: 13px; font-weight: 600; color: #343433;">
              + Add another section to your stack:
            </span>
            <div style="display: flex; gap: 8px; overflow-x: auto; max-width: 100%; padding-bottom: 4px;">
              ${availableToAdd.map(sec => `
                <button 
                  type="button" 
                  onclick="window.azarelAddToMixer('${sec.id}')"
                  class="btn-sand-pill"
                  style="font-size: 12px; padding: 5px 12px; white-space: nowrap;"
                >
                  + ${sec.name} (${sec.isFree ? 'Free' : `$${sec.price}`})
                </button>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Stack Canvas Area -->
        <div class="viewport-canvas-wrapper" style="padding: 32px 16px; background: #e5d5c3; border-radius: 14px;">
          <div class="viewport-frame viewport-${activeDevice}" style="box-shadow: 0 10px 30px rgba(0,0,0,0.12);">
            ${stackedSections.length === 0 ? `
              <div style="padding: 60px 24px; text-align: center; background: #ffffff;">
                <h4>Your stack is currently empty</h4>
                <p style="color: #7e7e7d; margin-bottom: 16px;">Add a section above to start assembling your page.</p>
                <button type="button" onclick="window.azarelResetMixer()" class="btn-dark-pill">Load Sample Stack</button>
              </div>
            ` : `
              <div style="display: flex; flex-direction: column;">
                ${stackedSections.map((sec, idx) => `
                  <div class="mixer-slot">
                    <!-- Control Bar on Top of Each Slot -->
                    <div class="mixer-slot-bar">
                      <span>#${idx + 1} — ${sec.name}</span>
                      <div style="display: flex; align-items: center; gap: 12px;">
                        <span style="font-size: 11px; font-weight: 600; color: ${sec.isFree ? '#00ca48' : '#121212'};">
                          ${sec.isFree ? 'Freebie' : `$${sec.price}`}
                        </span>
                        <button 
                          type="button" 
                          onclick="window.azarelOpenPreview('${sec.id}', 'code')" 
                          style="font-size: 11px; color: #ff3e00; text-decoration: underline; background: none; border: none; cursor: pointer;"
                        >
                          View Code
                        </button>
                        <button 
                          type="button" 
                          onclick="window.azarelRemoveFromMixer('${sec.id}')" 
                          style="font-size: 11px; color: #ff2b3a; display: inline-flex; align-items: center; gap: 4px; background: none; border: none; cursor: pointer;"
                        >
                          ${Icons.close(12, '#ff2b3a')}
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                    <!-- Rendered Preview Content -->
                    <div style="width: 100%;">
                      ${sec.previewHtml}
                    </div>
                  </div>
                `).join('')}
              </div>
            `}
          </div>
        </div>
      </div>
    </div>
  `;
}

// Global Mixer Handlers
window.azarelAddToMixer = (id) => state.addToMixer(id);
window.azarelRemoveFromMixer = (id) => state.removeFromMixer(id);
window.azarelResetMixer = () => state.resetMixer();
window.azarelAddEntireStackToCart = () => {
  const currentStackIds = state.mixerStack;
  currentStackIds.forEach(id => {
    const s = SECTIONS_DATA.find(item => item.id === id);
    if (s && !s.isFree) {
      state.addToCart(s);
    }
  });
  state.notifyToast('Added stack items to your cart!');
  state.isCartOpen = true;
  state.notify();
};
