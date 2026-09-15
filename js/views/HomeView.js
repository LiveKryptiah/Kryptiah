/**
 * HomeView Component
 * Faithful implementation of design.md:
 * - 64px display headline with rotating capability tags
 * - Email capture input paired with #09090b dark CTA
 * - Grayscale logo strip
 * - Category showcase cards (top image flush, 36px radius, 28px padding)
 * - Trending / Popular products
 * - Stats row (56px numbers + 14px descriptors)
 * - Dark feature block (#27272a, right arrow bullets)
 * - Breakthrough photo visual breath section (48px radius)
 * - Free resources showcase
 * - Final call to action
 */

import { CATEGORIES, PRODUCTS } from '../data/products.js';
import { renderProductCard } from '../components/ProductCard.js';

export function renderHomeView() {
  const popularProducts = PRODUCTS.filter(p => p.popular).slice(0, 3);
  const freeProducts = PRODUCTS.filter(p => p.isFree).slice(0, 3);

  return `
    <div class="homepage">
      <!-- 1. HERO SECTION -->
      <section class="section-gap" style="background-color: var(--color-paper); border-bottom: 1px solid var(--color-cloud);">
        <div class="container">
          <div style="display: flex; flex-direction: column; gap: 24px; max-width: 860px;">
            <!-- Credential Badge -->
            <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
              <span class="badge-ember">YC W24 BATCH</span>
              <span class="tag-pill" style="background: white;">Architecture-Grade UI System</span>
              <span class="tag-pill" style="background: white;">Zero Chromatic Bloat</span>
            </div>

            <!-- Display Headline (64px Cosmica weight 600, 1.12 line height) -->
            <h1 class="text-display">
              Build beautiful websites faster.
            </h1>

            <!-- Supporting Paragraph (15px Cosmica weight 400, #52525b) -->
            <p class="text-body-lg" style="max-width: 620px;">
              Premium website sections, UI components, icons, and templates designed in a disciplined zinc register to help engineering and design teams ship with authority.
            </p>

            <!-- Hero Action Area: Email capture + Primary CTA -->
            <div style="display: flex; flex-wrap: wrap; gap: 14px; align-items: center; margin-top: 12px;">
              <form 
                class="hero-input-group" 
                onsubmit="event.preventDefault(); window.dispatchEvent(new CustomEvent('azarel:toast', { detail: { message: 'Demo link sent to your inbox!' } })); this.reset();"
              >
                <input type="email" placeholder="Enter work email for preview bundle..." required />
                <button type="submit" class="btn-primary" style="padding: 10px 20px;">
                  Book demo
                </button>
              </form>

              <a href="#/sections" class="btn-ghost" style="padding: 13px 22px; border-radius: 14px;">
                Browse 50+ Assets →
              </a>
            </div>

            <!-- Mini trust metrics -->
            <div style="display: flex; align-items: center; gap: 24px; margin-top: 16px; font-size: 13px; color: var(--color-fog);">
              <span>✓ 100% Perpetual Commercial License</span>
              <span>✓ React 19 &amp; Tailwind v4</span>
              <span>✓ Figma Tokens Included</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. LOGO STRIP (Desaturated grayscale marks) -->
      <section style="padding: 36px 0; border-bottom: 1px solid var(--color-cloud); background: #ffffff;">
        <div class="container">
          <div style="text-align: center; margin-bottom: 18px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--color-fog); font-weight: 600;">
            Trusted by product engineers and design leaders at
          </div>
          <div class="logo-strip">
            <span class="logo-item"><span style="font-size: 20px;">❖</span> LINEAR</span>
            <span class="logo-item"><span style="font-size: 20px;">▲</span> VERCEL</span>
            <span class="logo-item"><span style="font-size: 20px;">⚡</span> STRIPE</span>
            <span class="logo-item"><span style="font-size: 20px;">⌘</span> RAYCAST</span>
            <span class="logo-item"><span style="font-size: 20px;">✦</span> SUPABASE</span>
            <span class="logo-item"><span style="font-size: 20px;">●</span> FIGMA</span>
          </div>
        </div>
      </section>

      <!-- 3. CATEGORY SHOWCASE CARDS -->
      <section class="section-gap">
        <div class="container">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; flex-wrap: wrap; gap: 16px;">
            <div>
              <span class="tag-pill" style="margin-bottom: 10px;">Taxonomy</span>
              <h2 class="text-heading">Explore by Asset Category</h2>
              <p class="text-body" style="color: var(--color-steel); margin-top: 6px;">
                Structured according to modern frontend workflows and modular architecture.
              </p>
            </div>
            <a href="#/sections" class="btn-neutral-pill">
              View All Categories →
            </a>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 24px;">
            ${CATEGORIES.map(cat => `
              <a href="#/${cat.id}" class="card-category">
                <div class="card-category-image-wrap">
                  <div style="position: absolute; inset: 0; background: linear-gradient(135deg, #f4f4f5 0%, #e4e4e7 100%); display: flex; align-items: center; justify-content: center;">
                    <div style="width: 80px; height: 80px; border-radius: 24px; background: white; border: 1px solid var(--color-cloud); display: flex; align-items: center; justify-content: center; font-size: 32px; box-shadow: var(--shadow-md);">
                      ${getCategoryIcon(cat.id)}
                    </div>
                  </div>
                  <span class="tag-filled" style="position: absolute; top: 16px; left: 16px; font-size: 11px;">
                    ${cat.count} ASSETS
                  </span>
                </div>
                <div class="card-category-body">
                  <div>
                    <h3 style="font-size: 20px; font-weight: 600; color: var(--color-obsidian); margin-bottom: 6px;">
                      ${cat.name}
                    </h3>
                    <p style="font-size: 14px; color: var(--color-steel); line-height: 1.45;">
                      ${cat.desc}
                    </p>
                  </div>
                  <div style="margin-top: 20px; display: flex; align-items: center; justify-content: space-between;">
                    <span class="tag-pill">Production Ready</span>
                    <span style="font-size: 13.5px; font-weight: 600; color: var(--color-obsidian);">Browse →</span>
                  </div>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- 4. TRENDING & POPULAR ASSETS -->
      <section class="section-gap" style="background-color: #ffffff; border-top: 1px solid var(--color-cloud); border-bottom: 1px solid var(--color-cloud);">
        <div class="container">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; flex-wrap: wrap; gap: 16px;">
            <div>
              <span class="badge-ember" style="margin-bottom: 10px;">HIGH VELOCITY</span>
              <h2 class="text-heading">Trending Digital Assets</h2>
              <p class="text-body" style="color: var(--color-steel); margin-top: 6px;">
                The most deployed UI sections and components this month.
              </p>
            </div>
            <a href="#/sections" class="btn-primary" style="padding: 10px 20px;">
              View Full Catalog (50+)
            </a>
          </div>

          <div class="product-grid">
            ${popularProducts.map(product => renderProductCard(product)).join('')}
          </div>
        </div>
      </section>

      <!-- 5. STATS ROW (3 Large-Number Blocks) -->
      <section class="section-gap">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-item card-awesomic" style="padding: 32px;">
              <span class="stat-number">20,000+</span>
              <div class="stat-label">
                <strong>Completed Projects</strong><br />
                Shipped across 85 countries
              </div>
            </div>
            <div class="stat-item card-awesomic" style="padding: 32px;">
              <span class="stat-number">99.8%</span>
              <div class="stat-label">
                <strong>Satisfaction Rate</strong><br />
                From verified design leaders
              </div>
            </div>
            <div class="stat-item card-awesomic" style="padding: 32px;">
              <span class="stat-number">0.00</span>
              <div class="stat-label">
                <strong>Cumulative Layout Shift</strong><br />
                Zero CLS guaranteed on all sections
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. DARK FEATURE CARD (Inverted Surface with right-arrow accents) -->
      <section class="section-gap" style="padding-top: 0;">
        <div class="container">
          <div class="card-dark-feature">
            <div style="max-width: 600px; margin-bottom: 32px;">
              <span class="badge-ember" style="margin-bottom: 16px;">THE ZINC STANDARD</span>
              <h2 style="font-size: 36px; font-weight: 700; color: #ffffff; line-height: 1.2;">
                Why high-growth tech teams reject bloated UI libraries
              </h2>
            </div>

            <div style="display: flex; flex-direction: column;">
              <div class="feature-list-item">
                <span class="feature-list-arrow">→</span>
                <div>
                  <div style="color: #ffffff; font-weight: 600;">Hairline 1px borders replace muddy drop shadows</div>
                  <div style="font-size: 14px; color: #a1a1aa; margin-top: 4px; font-weight: 400;">
                    Eliminates heavy render passes and keeps card elevation crisp across all display densities.
                  </div>
                </div>
              </div>

              <div class="feature-list-item">
                <span class="feature-list-arrow">→</span>
                <div>
                  <div style="color: #ffffff; font-weight: 600;">Standardized 36px / 14px / 10000px geometric triad</div>
                  <div style="font-size: 14px; color: #a1a1aa; margin-top: 4px; font-weight: 400;">
                    Containers feel spacious with 36px rounding, while buttons and controls stay precise at 14px.
                  </div>
                </div>
              </div>

              <div class="feature-list-item">
                <span class="feature-list-arrow">→</span>
                <div>
                  <div style="color: #ffffff; font-weight: 600;">99% Achromatic zinc discipline with functional ember badges</div>
                  <div style="font-size: 14px; color: #a1a1aa; margin-top: 4px; font-weight: 400;">
                    Orange (#ff5a00) is reserved strictly for status cues and credentials, preventing UI fatigue.
                  </div>
                </div>
              </div>
            </div>

            <div style="margin-top: 36px; display: flex; gap: 16px; flex-wrap: wrap;">
              <a href="#/about" class="btn-ghost" style="background: white; color: #18181b; border-color: white;">
                Read Our Architectural Manifesto
              </a>
              <a href="#/pricing" class="btn-ghost" style="background: transparent; color: white; border-color: #52525b;">
                Commercial Licenses →
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. BREAKTHROUGH IMAGE SECTION (Visual Breath Divider) -->
      <section style="padding: 0 0 60px 0;">
        <div class="container">
          <div class="breakthrough-image-section">
            <svg width="100%" height="100%" viewBox="0 0 1200 420" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="divGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#18181b" />
                  <stop offset="50%" stop-color="#27272a" />
                  <stop offset="100%" stop-color="#09090b" />
                </linearGradient>
                <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#333338" stroke-width="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#divGrad)" />
              <rect width="100%" height="100%" fill="url(#gridPattern)" opacity="0.4" />
              <!-- Geometric Accent -->
              <circle cx="600" cy="210" r="140" fill="none" stroke="#3f3f46" stroke-width="1.5" stroke-dasharray="6,6" />
              <circle cx="600" cy="210" r="100" fill="#18181b" stroke="#52525b" stroke-width="1" />
              <circle cx="600" cy="210" r="12" fill="#ff5a00" />
              <text x="600" y="340" text-anchor="middle" fill="#a1a1aa" font-family="sans-serif" font-size="14" letter-spacing="0.1em" font-weight="600">
                PRECISION INFRASTRUCTURE · ZERO ARBITRARY NOISE
              </text>
            </svg>
          </div>
        </div>
      </section>

      <!-- 8. FREE RESOURCES SECTION -->
      <section class="section-gap" style="background-color: #ffffff; border-top: 1px solid var(--color-cloud); border-bottom: 1px solid var(--color-cloud);">
        <div class="container">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; flex-wrap: wrap; gap: 16px;">
            <div>
              <span class="tag-pill" style="margin-bottom: 10px;">Community &amp; Open Source</span>
              <h2 class="text-heading">Curated Free Resources</h2>
              <p class="text-body" style="color: var(--color-steel); margin-top: 6px;">
                Download production-ready templates, token sets, and SVG icons at zero cost.
              </p>
            </div>
            <a href="#/resources" class="btn-neutral-pill">
              Browse All Freebies →
            </a>
          </div>

          <div class="product-grid">
            ${freeProducts.map(product => renderProductCard(product)).join('')}
          </div>
        </div>
      </section>

      <!-- 9. FINAL CALL TO ACTION -->
      <section class="section-gap" style="text-align: center;">
        <div class="container">
          <div class="card-awesomic" style="padding: 64px 32px; max-width: 900px; margin: 0 auto; background: #ffffff;">
            <span class="badge-ember" style="margin-bottom: 20px;">ELEVATE YOUR CODEBASE</span>
            <h2 class="text-heading-lg" style="margin-bottom: 16px; max-width: 680px; margin-left: auto; margin-right: auto;">
              Start shipping architectural websites today.
            </h2>
            <p class="text-body-lg" style="max-width: 560px; margin: 0 auto 32px auto;">
              Join thousands of developers and product teams building with the Awesomic zinc grid.
            </p>
            <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
              <a href="#/sections" class="btn-primary" style="padding: 13px 26px; font-size: 15px;">
                Explore Asset Marketplace
              </a>
              <a href="#/pricing" class="btn-ghost" style="padding: 13px 26px; font-size: 15px;">
                View All-Access Membership
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

function getCategoryIcon(id) {
  switch (id) {
    case 'sections': return '⊞';
    case 'components': return '⎇';
    case 'icons': return '❖';
    case 'templates': return '▣';
    case 'illustrations': return '▲';
    case 'resources': return '📦';
    default: return '✦';
  }
}
