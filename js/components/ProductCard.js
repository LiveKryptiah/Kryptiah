/**
 * ProductCard Component
 * Implements design.md specifications:
 * - 36px border-radius
 * - Hairline 1px solid #ececee border
 * - Top image fills the card width
 * - 28px bottom padding
 * - 20px Cosmica/DM Sans weight 600 title
 * - Tag pill badges (12px radius, hairline border)
 * - Ember accent badge for Free / YC Highlight
 * - Quick-preview button & Favorite button
 */

import { state } from '../state.js';

export function renderProductCard(product) {
  const isFav = state.isFavorited(product.id);

  return `
    <article class="product-card" data-product-id="${product.id}">
      <!-- Top Image flush to card edges -->
      <div class="product-card-preview">
        <a href="#/product/${product.slug}" style="display: block; width: 100%; height: 100%;">
          <img src="${product.image}" alt="${product.name}" class="product-card-thumb" loading="lazy" />
        </a>

        <!-- Top-left Badges -->
        <div class="product-card-badges">
          ${product.isFree 
            ? `<span class="badge-ember">FREE</span>` 
            : `<span class="tag-filled">$${product.price}</span>`
          }
          ${product.badge ? `<span class="tag-pill" style="background: rgba(255,255,255,0.85); backdrop-filter: blur(4px);">${product.badge}</span>` : ''}
        </div>

        <!-- Top-right Action Buttons -->
        <div class="product-card-actions">
          <!-- Favorite toggle -->
          <button 
            type="button" 
            class="btn-icon-circle ${isFav ? 'favorited' : ''}" 
            onclick="window.azarelToggleFav('${product.id}', event)" 
            title="${isFav ? 'Remove from saved' : 'Save to collection'}"
            aria-label="Favorite ${product.name}"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${isFav ? '#ef4444' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>

          <!-- Quick Preview -->
          <button 
            type="button" 
            class="btn-icon-circle" 
            onclick="window.azarelQuickPreview('${product.id}', event)" 
            title="Quick Interactive Preview"
            aria-label="Quick Preview ${product.name}"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
        </div>
      </div>

      <!-- Card Body with 28px padding -->
      <div class="product-card-body">
        <div class="product-card-header">
          <div>
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-fog); font-weight: 600;">
              ${product.category}
            </span>
            <h3 class="product-card-title" style="margin-top: 2px;">
              <a href="#/product/${product.slug}" style="color: inherit;">
                ${product.name}
              </a>
            </h3>
          </div>
          <div class="product-card-price">
            ${product.isFree ? '<span style="color: var(--color-ember);">Free</span>' : `$${product.price}`}
          </div>
        </div>

        <p class="product-card-desc">
          ${product.description}
        </p>

        <!-- Footer Tag Pills & Framework -->
        <div class="product-card-footer">
          <div class="product-card-tags">
            ${product.tags.slice(0, 2).map(tag => `
              <span class="tag-pill">${tag}</span>
            `).join('')}
            ${product.framework ? `<span class="tag-pill" style="font-weight: 500; color: var(--color-slate);">${product.framework}</span>` : ''}
          </div>

          <a href="#/product/${product.slug}" class="btn-ghost" style="padding: 6px 12px; border-radius: 12px; font-size: 12px; font-weight: 600;">
            Inspect →
          </a>
        </div>
      </div>
    </article>
  `;
}
