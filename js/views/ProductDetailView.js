/**
 * ProductDetailView Component
 * Dark Mode Default & Full Window Height Layout
 * High-fidelity product details matching design.md:
 * - Responsive preview frame with desktop / tablet / mobile breakpoints
 * - Light and dark preview toggle
 * - Code preview block with one-click clipboard copy
 * - Tabbed navigation (Preview, Code, Specs, Reviews)
 * - Accordion breakdown of included items
 * - Related products recommendation
 */

import { PRODUCTS, FAQS } from '../data/products.js';
import { renderProductCard } from '../components/ProductCard.js';
import { state } from '../state.js';

export function renderProductDetailView(slug) {
  const product = PRODUCTS.find(p => p.slug === slug);
  if (!product) {
    return `
      <div class="container section-gap" style="text-align: center; min-height: calc(100vh - 68px); display: flex; align-items: center; justify-content: center;">
        <div class="card-awesomic" style="padding: 64px 24px; max-width: 600px; margin: 0 auto;">
          <h2 class="text-heading" style="margin-bottom: 12px;">Asset Not Found</h2>
          <p class="text-body" style="color: var(--color-steel); margin-bottom: 24px;">
            The requested product slug "${slug}" does not exist in the catalog.
          </p>
          <a href="#/sections" class="btn-primary">Browse All Marketplace Assets</a>
        </div>
      </div>
    `;
  }

  const isFav = state.isFavorited(product.id);
  const related = PRODUCTS.filter(p => p.id !== product.id && (p.category === product.category || p.style === product.style)).slice(0, 3);

  return `
    <div class="product-detail-page" style="min-height: calc(100vh - 68px);">
      <!-- Breadcrumbs & Meta Top -->
      <section style="background-color: var(--surface-canvas); border-bottom: 1px solid var(--color-cloud); padding: 20px 0;">
        <div class="container">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; font-size: 13px; color: var(--color-steel);">
            <div style="display: flex; align-items: center; gap: 8px;">
              <a href="#/" class="footer-link">Home</a>
              <span>/</span>
              <a href="#/${product.category}" class="footer-link" style="text-transform: capitalize;">${product.category}</a>
              <span>/</span>
              <span style="color: var(--color-obsidian); font-weight: 500;">${product.name}</span>
            </div>

            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="tag-pill">★ ${product.rating} (${product.reviewCount} reviews)</span>
              ${product.isFree ? `<span class="badge-ember">FREE ASSET</span>` : `<span class="tag-filled">COMMERCIAL LICENSE</span>`}
            </div>
          </div>
        </div>
      </section>

      <!-- Main Overview Grid: Live Preview & Purchase Sidebar -->
      <section style="padding: 40px 0;">
        <div class="container">
          <div style="display: grid; grid-template-columns: 1fr 380px; gap: 36px; align-items: start;">
            <!-- Left: Hero Headline & Responsive Interactive Preview Viewport -->
            <div>
              <div style="margin-bottom: 24px;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                  <span class="tag-pill">${product.category.toUpperCase()}</span>
                  ${product.framework ? `<span class="tag-pill" style="font-weight: 600;">${product.framework}</span>` : ''}
                  ${product.badge ? `<span class="badge-ember">${product.badge}</span>` : ''}
                </div>
                <h1 class="text-heading-lg" style="margin-bottom: 12px;">
                  ${product.name}
                </h1>
                <p class="text-body-lg" style="color: var(--color-steel); max-width: 680px;">
                  ${product.description}
                </p>
              </div>

              <!-- Viewport Simulator Controls -->
              <div class="preview-viewport-container">
                <div class="preview-toolbar">
                  <!-- Breakpoint Switchers -->
                  <div style="display: flex; gap: 6px; background: var(--surface-card); padding: 4px; border-radius: 12px; border: 1px solid var(--color-cloud);">
                    <button 
                      id="view-mode-desktop" 
                      onclick="window.azarelSetViewportWidth('100%')" 
                      class="btn-ghost active" 
                      style="padding: 6px 12px; font-size: 12px; border: none; background: #f4f4f5; color: #09090b; font-weight: 600; border-radius: 8px;"
                    >
                      Desktop 100%
                    </button>
                    <button 
                      id="view-mode-tablet" 
                      onclick="window.azarelSetViewportWidth('768px')" 
                      class="btn-ghost" 
                      style="padding: 6px 12px; font-size: 12px; border: none; border-radius: 8px;"
                    >
                      Tablet 768px
                    </button>
                    <button 
                      id="view-mode-mobile" 
                      onclick="window.azarelSetViewportWidth('375px')" 
                      class="btn-ghost" 
                      style="padding: 6px 12px; font-size: 12px; border: none; border-radius: 8px;"
                    >
                      Mobile 375px
                    </button>
                  </div>

                  <!-- Light / Dark Preview Switch -->
                  <button 
                    onclick="window.azarelTogglePreviewTheme()" 
                    class="btn-ghost" 
                    style="padding: 6px 12px; font-size: 12px; border-radius: 10px;"
                  >
                    Toggle Light/Dark Preview
                  </button>
                </div>

                <!-- Resizable Frame Container -->
                <div id="simulated-preview-frame" class="preview-frame-wrap" style="width: 100%; max-width: 100%; min-height: 380px; border: 1px solid var(--color-cloud);">
                  ${product.previewHtml || `
                    <div style="padding: 30px; text-align: center;">
                      <img src="${product.image}" alt="${product.name}" style="max-width: 100%; height: auto; border-radius: 16px;" />
                    </div>
                  `}
                </div>
              </div>

              <!-- Product Details Tabs -->
              <div style="margin-top: 48px;">
                <div class="tabs-nav">
                  <button class="tab-btn active" onclick="window.azarelSwitchTab('code', this)">Component Code (React/Tailwind)</button>
                  <button class="tab-btn" onclick="window.azarelSwitchTab('features', this)">Specifications &amp; Features</button>
                  <button class="tab-btn" onclick="window.azarelSwitchTab('reviews', this)">Verified Reviews (${product.reviewCount})</button>
                </div>

                <!-- Tab 1: Code Preview -->
                <div id="tab-content-code">
                  <div class="code-preview-box">
                    <div class="code-header">
                      <span style="font-size: 12px; color: #a1a1aa; font-family: monospace;">ComponentSnippet.tsx</span>
                      <button 
                        type="button"
                        onclick="navigator.clipboard.writeText(decodeURIComponent('${encodeURIComponent(product.codeSnippet)}')); window.dispatchEvent(new CustomEvent('azarel:toast', { detail: { message: 'Code snippet copied to clipboard!' } }))" 
                        class="btn-primary" 
                        style="padding: 6px 14px; font-size: 12px; border-radius: 10px;"
                      >
                        Copy Code
                      </button>
                    </div>
                    <pre class="code-content"><code>${escapeHtml(product.codeSnippet)}</code></pre>
                  </div>
                </div>

                <!-- Tab 2: Specifications -->
                <div id="tab-content-features" style="display: none;">
                  <div class="card-awesomic" style="padding: 32px;">
                    <h3 style="font-size: 18px; font-weight: 600; color: var(--color-obsidian); margin-bottom: 16px;">Engineered Specifications</h3>
                    <ul style="list-style: none; display: flex; flex-direction: column; gap: 12px;">
                      ${product.features.map(f => `
                        <li style="display: flex; align-items: center; gap: 12px; font-size: 14.5px; color: var(--color-graphite);">
                          <span style="color: var(--color-ember); font-weight: bold;">✓</span>
                          <span>${f}</span>
                        </li>
                      `).join('')}
                    </ul>

                    <h3 style="font-size: 18px; font-weight: 600; color: var(--color-obsidian); margin-top: 28px; margin-bottom: 16px;">What is included in the package</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                      ${product.included.map(inc => `
                        <span class="tag-pill" style="font-size: 13px; padding: 6px 12px;">📦 ${inc}</span>
                      `).join('')}
                    </div>
                  </div>
                </div>

                <!-- Tab 3: Reviews -->
                <div id="tab-content-reviews" style="display: none;">
                  <div class="card-awesomic" style="padding: 32px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--color-cloud);">
                      <div>
                        <span style="font-size: 36px; font-weight: 700; color: var(--color-obsidian);">${product.rating}</span>
                        <span style="font-size: 15px; color: var(--color-steel);"> / 5.0</span>
                        <p style="font-size: 13px; color: var(--color-fog); margin-top: 2px;">Based on ${product.reviewCount} customer reviews</p>
                      </div>
                      <span class="badge-ember">100% Verified Buyers</span>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 20px;">
                      <div style="padding-bottom: 16px; border-bottom: 1px solid var(--color-cloud);">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                          <strong style="color: var(--color-obsidian);">Danielle Miller · Lead Frontend Engineer</strong>
                          <span style="color: var(--color-ember);">★★★★★</span>
                        </div>
                        <p style="font-size: 14px; color: var(--color-steel); line-height: 1.5;">
                          "Cleanest code structure I've purchased. The DM Sans typography line heights match design.md down to the exact pixel. Plugged right into our Next.js 15 app router."
                        </p>
                      </div>
                      <div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                          <strong style="color: var(--color-obsidian);">Alexei Morozov · Founder</strong>
                          <span style="color: var(--color-ember);">★★★★★</span>
                        </div>
                        <p style="font-size: 14px; color: var(--color-steel); line-height: 1.5;">
                          "The 36px card corner radius and hairline border look insanely sleek on high-DPI MacBooks. Shipped our landing page in one afternoon."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- FAQ Accordion -->
              <div style="margin-top: 48px;">
                <h3 class="text-heading-sm" style="margin-bottom: 20px;">Frequently Asked Questions</h3>
                <div class="card-awesomic" style="padding: 16px 28px;">
                  ${FAQS.map((faq, idx) => `
                    <div class="accordion-item">
                      <button 
                        class="accordion-trigger" 
                        onclick="window.azarelToggleAccordion(${idx})"
                        id="faq-btn-${idx}"
                      >
                        <span>${faq.q}</span>
                        <span id="faq-icon-${idx}" style="font-size: 18px; color: var(--color-steel);">+</span>
                      </button>
                      <div class="accordion-body" id="faq-body-${idx}" style="display: none;">
                        ${faq.a}
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Right Sidebar: Purchase / Download Card -->
            <aside style="position: sticky; top: 90px;">
              <div class="card-awesomic" style="padding: 32px; background: var(--surface-card);">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 16px;">
                  <span style="font-size: 14px; color: var(--color-steel); font-weight: 500;">License Price</span>
                  <div style="text-align: right;">
                    <span style="font-size: 36px; font-weight: 700; color: var(--color-obsidian);">
                      ${product.isFree ? 'Free' : `$${product.price}`}
                    </span>
                    ${!product.isFree ? `<span style="font-size: 12px; color: var(--color-fog); display: block;">Perpetual / One-time</span>` : ''}
                  </div>
                </div>

                <div style="padding: 14px 0; border-top: 1px solid var(--color-cloud); border-bottom: 1px solid var(--color-cloud); margin-bottom: 20px; font-size: 13.5px; color: var(--color-steel); display: flex; flex-direction: column; gap: 8px;">
                  <div style="display: flex; justify-content: space-between;">
                    <span>Compatibility</span>
                    <strong style="color: var(--color-obsidian);">${product.framework}</strong>
                  </div>
                  <div style="display: flex; justify-content: space-between;">
                    <span>Design Geometry</span>
                    <strong style="color: var(--color-obsidian);">36px Card / 14px Controls</strong>
                  </div>
                  <div style="display: flex; justify-content: space-between;">
                    <span>License</span>
                    <strong style="color: var(--color-obsidian);">Commercial Perpetual</strong>
                  </div>
                </div>

                <!-- Primary CTA -->
                <button 
                  onclick="window.azarelPurchaseAsset('${product.id}', '${product.name}', ${product.price})" 
                  class="btn-primary" 
                  style="width: 100%; padding: 14px 20px; font-size: 15px; border-radius: 14px; margin-bottom: 12px;"
                >
                  ${product.isFree ? 'Direct Download Asset (.zip)' : `Purchase License ($${product.price})`}
                </button>

                <!-- Favorite Toggle -->
                <button 
                  onclick="window.azarelToggleFav('${product.id}', event)" 
                  class="btn-ghost" 
                  style="width: 100%; padding: 12px 20px; font-size: 14px; border-radius: 14px;"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="${isFav ? '#ef4444' : 'none'}" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  ${isFav ? 'Saved in Collection' : 'Save to Collection'}
                </button>

                <!-- Guarantee callouts -->
                <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid var(--color-cloud); font-size: 12.5px; color: var(--color-fog); display: flex; flex-direction: column; gap: 8px;">
                  <div>✓ Instant ZIP &amp; GitHub repository access</div>
                  <div>✓ 14-day 100% money-back guarantee</div>
                  <div>✓ Free updates &amp; token patches for life</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <!-- Related Products Section -->
      ${related.length > 0 ? `
        <section style="background-color: var(--surface-canvas); border-top: 1px solid var(--color-cloud); padding: 48px 0;">
          <div class="container">
            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 32px;">
              <div>
                <span class="tag-pill" style="margin-bottom: 8px;">Recommendations</span>
                <h2 class="text-heading">Related Digital Assets</h2>
              </div>
              <a href="#/${product.category}" class="btn-neutral-pill">
                Explore More ${product.category} →
              </a>
            </div>

            <div class="product-grid">
              ${related.map(p => renderProductCard(p)).join('')}
            </div>
          </div>
        </section>
      ` : ''}
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
