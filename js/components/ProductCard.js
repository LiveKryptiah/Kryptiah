/**
 * ProductCard Component — Family & Linear Minimal Hybrid
 * Ultra-minimal Section Card:
 * - Pure white background (#ffffff)
 * - 12px radius & 1px inset border (#f2f0ed)
 * - Clean scaled live preview frame (click to open preview modal)
 * - Category micro-type & price badge
 * - Inter 600 section title
 * - Minimal footer actions: + Stack and Add to Cart
 * (Removed watch demo, removed preview and design.md toggle button per user request)
 */

import { state } from '../state.js';
import { Icons } from './Icons.js';

export function renderProductCard(section) {
  const isFavorited = state.isFavorited(section.id);
  const inMixer = state.mixerStack.includes(section.id);

  return `
    <div class="section-card" id="card-${section.id}">
      <!-- 1. Interactive Preview Frame -->
      <div style="position: relative;">
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

        <!-- LIVE VISUAL PREVIEW WINDOW (Click to open preview viewport) -->
        <div 
          class="card-preview-window" 
          onclick="window.azarelOpenPreview('${section.id}', 'preview')" 
          title="Click to preview section"
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

        <!-- 3. Minimal Footer Actions (Watch demo & mode buttons removed) -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 10px; border-top: 1px solid #f2f0ed; margin-top: auto;">
          <span style="font-size: 12px; color: #7e7e7d; font-family: ui-monospace, monospace;">
            ${section.framework || 'React 19 / Tailwind'}
          </span>

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
