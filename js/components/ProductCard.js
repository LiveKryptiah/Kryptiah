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

export function renderProductCard(section) {
  const isFavorited = state.isFavorited(section.id);
  const inMixer = state.mixerStack.includes(section.id);

  return `
    <div class="card-hairline" id="card-${section.id}">
      <!-- Top Card Header: Category & Price Badge -->
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px;">
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
          <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; color: #7e7e7d; letter-spacing: 0.04em;">
            ${section.categoryLabel || section.category}
          </span>
          ${section.badge ? `
            <span class="badge-status ${section.isFree ? 'badge-mint' : 'badge-honey'}">
              ${section.badge}
            </span>
          ` : ''}
        </div>

        <!-- Favorite Button -->
        <button 
          type="button" 
          onclick="window.azarelToggleFav('${section.id}')" 
          class="btn-fav" 
          title="Save section"
          style="background: transparent; border: none; font-size: 18px; cursor: pointer; color: ${isFavorited ? '#ff3e00' : '#7e7e7d'};"
          aria-label="Save Section"
        >
          ${isFavorited ? '♥' : '♡'}
        </button>
      </div>

      <!-- Section Title (23px Inter 500 in #343433) -->
      <h3 style="font-size: 21px; font-weight: 500; color: #343433; line-height: 1.25; margin-bottom: 10px;">
        <a href="#/section/${section.slug}" style="text-decoration: none; color: inherit;">
          ${section.name}
        </a>
      </h3>

      <!-- Section Description (Inter 400 in #474645) -->
      <p style="font-size: 15px; color: #474645; line-height: 1.5; margin-bottom: 20px;">
        ${section.description}
      </p>

      <!-- Miniature Preview Frame -->
      <div 
        class="card-preview-window" 
        onclick="window.azarelOpenPreview('${section.id}', 'preview')" 
        title="Click to launch interactive device preview"
      >
        <div class="preview-mini-scale">
          ${section.previewHtml}
        </div>
        <div class="preview-hover-overlay">
          <span>🔍 Expand Live Viewport &amp; Code</span>
        </div>
      </div>

      <!-- Card Footer Actions -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px; padding-top: 16px; border-top: 1px solid #f2f0ed; flex-wrap: wrap; gap: 12px;">
        <!-- Ember-Orange Inline Demo Link -->
        <button 
          type="button" 
          onclick="window.azarelOpenPreview('${section.id}', 'preview')" 
          class="link-demo"
        >
          Watch the demo
        </button>

        <div style="display: flex; align-items: center; gap: 8px;">
          <!-- Quick Mixer Toggle -->
          <button 
            type="button" 
            onclick="window.azarelToggleMixer('${section.id}')" 
            class="btn-sand-pill" 
            style="padding: 6px 12px; font-size: 12px;"
            title="${inMixer ? 'Remove from Page Stack' : 'Stack into Live Page Preview'}"
          >
            ${inMixer ? '✓ In Stack' : '+ Stack'}
          </button>

          <!-- Add to Cart or Download Free -->
          <button 
            type="button" 
            onclick="window.azarelAddToCart('${section.id}')" 
            class="btn-dark-pill" 
            style="padding: 6px 14px; font-size: 12px;"
          >
            ${section.isFree ? 'Freebie' : `Buy $${section.price}`}
          </button>
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
