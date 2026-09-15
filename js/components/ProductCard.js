/**
 * ProductCard Component — Family Style Reference
 * Hairline-Bordered Feature Card:
 * - Pure white background (#ffffff)
 * - 10px radius
 * - 1px inset border in #f2f0ed (box-shadow: inset 0 0 0 1px #f2f0ed)
 * - Heading at 23px Inter 500, #343433
 * - Body copy in Inter 400, #474645
 * - Underlined ember-orange (#ff3e00) 'Watch the demo' link
 * - Direct Add to Cart & Stack in Page Mixer triggers
 */

import { state } from '../state.js';
import { Icons } from './Icons.js';

export function renderProductCard(section) {
  const isFavorited = state.isFavorited(section.id);
  const inMixer = state.mixerStack.includes(section.id);
  const cardMode = state.getCardMode(section.id);

  return `
    <div class="section-card" id="card-${section.id}">
      <!-- 1. Interactive Frame Header with Mode Switcher -->
      <div style="position: relative;">
        <!-- Card Mode Switcher (Click to change into design.md or preview) -->
        <div class="card-mode-toggle" onclick="event.stopPropagation()">
          <button 
            type="button" 
            class="mode-btn ${cardMode === 'preview' ? 'active' : ''}" 
            onclick="window.azarelSetCardMode('${section.id}', 'preview')"
            title="Live Visual Preview"
          >
            Preview
          </button>
          <button 
            type="button" 
            class="mode-btn ${cardMode === 'design' ? 'active' : ''}" 
            onclick="window.azarelSetCardMode('${section.id}', 'design')"
            title="design.md Specification"
          >
            design.md
          </button>
        </div>

        <!-- Floating Favorite Button -->
        <button 
          type="button" 
          onclick="event.stopPropagation(); window.azarelToggleFav('${section.id}')" 
          class="card-fav-floating" 
          title="${isFavorited ? 'Remove from saved' : 'Save section'}"
          aria-label="Save Section"
        >
          ${Icons.heart(14, isFavorited, isFavorited ? '#ff3e00' : '#7e7e7d')}
        </button>

        ${cardMode === 'design' ? `
          <!-- DESIGN.MD SPECIFICATION FRAME (Zero Code) -->
          <div 
            class="design-spec-frame" 
            onclick="window.azarelOpenPreview('${section.id}', 'design')" 
            title="Click to open full design.md specification"
          >
            <div style="padding-top: 24px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="display: inline-flex; align-items: center; gap: 5px; font-size: 10px; font-weight: 700; color: #e4f222; text-transform: uppercase; letter-spacing: 0.06em; font-family: ui-monospace, monospace;">
                  <span style="width: 6px; height: 6px; border-radius: 50%; background: #e4f222;"></span>
                  DESIGN.MD SPEC
                </span>
                <span style="font-size: 11px; color: #8a8f98; font-family: ui-monospace, monospace;">Level 1 Carbon</span>
              </div>

              <div class="token-swatch-strip" style="margin-bottom: 10px;">
                <span class="token-dot" style="background: #08090a;" title="Void #08090a"></span>
                <span class="token-dot" style="background: #0f1011;" title="Carbon #0f1011"></span>
                <span class="token-dot" style="background: #23252a;" title="Graphite #23252a"></span>
                <span class="token-dot" style="background: #d0d6e0;" title="Mist #d0d6e0"></span>
                <span class="token-dot" style="background: #e4f222;" title="Acid Lime #e4f222"></span>
                <span style="font-size: 11px; color: #8a8f98; margin-left: 4px;">Palette</span>
              </div>

              <div style="font-size: 12px; color: #d0d6e0; line-height: 1.45;">
                <div style="color: #ffffff; font-weight: 500;">Inter Variable · Berkeley Mono</div>
                <div style="color: #8a8f98; font-size: 11px;">12px Card · 6px Button · 0.5px Hairline</div>
              </div>
            </div>

            <div style="padding-top: 8px; border-top: 1px solid #23252a; display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 11px; color: #e4f222; font-weight: 510; display: inline-flex; align-items: center; gap: 4px;">
                Inspect design.md spec →
              </span>
              <span style="font-size: 10px; color: #62666d; font-family: ui-monospace, monospace;">NO CODE</span>
            </div>
          </div>
        ` : `
          <!-- LIVE VISUAL PREVIEW FRAME -->
          <div 
            class="card-preview-window" 
            onclick="window.azarelOpenPreview('${section.id}', 'preview')" 
            title="Click to launch interactive device preview"
          >
            <div class="preview-mini-scale">
              ${section.previewHtml}
            </div>

            <!-- Minimal Centered Hover Action -->
            <div class="preview-hover-overlay">
              <span class="preview-pill-action">
                ${Icons.search(13, '#ffffff')}
                <span>Preview Viewport</span>
              </span>
            </div>
          </div>
        `}
      </div>

      <!-- 2. Minimal Card Meta & Title -->
      <div style="padding: 12px 4px 4px 4px; display: flex; flex-direction: column; flex: 1; justify-content: space-between;">
        <div>
          <!-- Category & Price Row -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; color: #7e7e7d; letter-spacing: 0.04em;">
              ${section.categoryLabel || section.category}
            </span>
            <span style="font-size: 13px; font-weight: 600; color: #121212;">
              ${section.isFree ? '<span class="badge-status badge-mint" style="padding: 2px 8px; font-size: 11px;">Free</span>' : `$${section.price}`}
            </span>
          </div>

          <!-- Section Title -->
          <h3 style="font-size: 16px; font-weight: 600; color: #121212; line-height: 1.35; margin: 0 0 10px 0;">
            <a href="#/section/${section.slug}" style="text-decoration: none; color: inherit;">
              ${section.name}
            </a>
          </h3>
        </div>

        <!-- 3. Minimal Footer Actions -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 10px; border-top: 1px solid #f2f0ed; margin-top: auto;">
          <button 
            type="button" 
            onclick="window.azarelOpenPreview('${section.id}', '${cardMode === 'design' ? 'design' : 'preview'}')" 
            class="link-demo"
            style="font-size: 13px; color: ${cardMode === 'design' ? '#08090a' : '#ff3e00'}; font-weight: ${cardMode === 'design' ? '600' : '500'};"
          >
            ${cardMode === 'design' ? 'View design.md spec →' : 'Watch demo'}
          </button>

          <div style="display: flex; align-items: center; gap: 6px;">
            <button 
              type="button" 
              onclick="window.azarelToggleMixer('${section.id}')" 
              class="btn-sand-pill" 
              style="padding: 5px 11px; font-size: 11px;"
              title="${inMixer ? 'Remove from Page Stack' : 'Stack into Page Mixer'}"
            >
              ${inMixer ? `${Icons.check(11, '#00ca48')} In Stack` : '+ Stack'}
            </button>

            <button 
              type="button" 
              onclick="window.azarelAddToCart('${section.id}')" 
              class="btn-dark-pill" 
              style="padding: 5px 12px; font-size: 11px;"
            >
              ${section.isFree ? 'Get Free' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Global Card Handlers
window.azarelToggleFav = (id) => state.toggleFavorite(id);
window.azarelToggleMixer = (id) => {
  if (state.mixerStack.includes(id)) {
    state.removeFromMixer(id);
  } else {
    state.addToMixer(id);
  }
};
window.azarelAddToCart = (id) => {
  const section = state.getFilteredSections().find(s => s.id === id) || state.cart.find(s => s.id === id);
  if (section) {
    state.addToCart(section);
  }
};
window.azarelOpenPreview = (id, tab = 'preview') => state.openPreview(id, tab);
window.azarelSetCardMode = (id, mode) => state.setCardMode(id, mode);
window.azarelToggleCardMode = (id) => state.toggleCardMode(id);
