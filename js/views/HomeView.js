/**
 * HomeView Component
 * Faithful implementation of design.md:
 * - Dark Mode Default
 * - Windows Full-Screen Per Section Sizing
 * - 64px display headline with rotating capability tags
 * - Email capture input paired with dark CTA
 * - Grayscale logo strip
 * - Category showcase cards (top image flush, 36px radius, 28px padding)
 * - Trending / Popular products
 * - Stats row (56px numbers + 14px descriptors)
 * - Dark feature block with right arrow bullets
 * - Breakthrough photo visual breath section
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
      <!-- 1. HERO SECTION (Windows Full Viewport Height minus Navbar) -->
      <section class="section-fullscreen-hero">
        <div class="container">
          <div style="display: flex; flex-direction: column; gap: 24px; max-width: 880px;">
            <!-- Credential Badges -->
            <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
              <span class="badge-ember">YC W24 BATCH</span>
              <span class="tag-pill">Architecture-Grade UI System</span>
              <span class="tag-pill">Zero Chromatic Bloat</span>
            </div>

            <!-- Display Headline (64px Cosmica weight 600, 1.12 line height) -->
            <h1 class="text-display">
              Build beautiful websites faster.
            </h1>

            <!-- Supporting Paragraph (15px Cosmica weight 400, #a1a1aa) -->
            <p class="text-body-lg" style="max-width: 640px;">
              Premium website sections, UI components, icons, and templates designed in a disciplined zinc register to help engineering and design teams ship with authority.
            </p>

            <!-- Hero Action Area: Email capture + Primary CTA -->
            <div style="display: flex; flex-wrap: wrap; gap: 14px; align-items: center; margin-top: 8px;">
              <form 
                class="hero-input-group" 
                onsubmit="event.preventDefault(); window.dispatchEvent(new CustomEvent('azarel:toast', { detail: { message: 'Preview bundle sent to your inbox!' } })); this.reset();"
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
            <div style="display: flex; align-items: center; gap: 24px; margin-top: 12px; font-size: 13px; color: var(--color-fog); flex-wrap: wrap;">
              <span>✓ 100% Perpetual Commercial License</span>
              <span>✓ React 19 &amp; Tailwind v4</span>
              <span>✓ Figma Tokens Included</span>
            </div>
          </div>
        </div>

        <!-- Scroll down indicator -->
        <div class="scroll-indicator-pill">
          <span>↓ Scroll to explore</span>
        </div>
      </section>

      <!-- 2. SOCIAL PROOF & CATEGORY SHOWCASE (Windows Full Viewport Height) -->
      <section class="section-fullscreen">
        <div class="container">
          <!-- Logo Strip Header -->
          <div style="text-align: center; margin-bottom: 24px;">
            <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-fog); font-weight: 600; margin-bottom: 16px;">
              Trusted by product engineers and design leaders at
            </div>
            <div class="logo-strip">
              <span class="logo-item"><span style="font-size: 18px;">❖</span> LINEAR</span>
              <span class="logo-item"><span style="font-size: 18px;">▲</span> VERCEL</span>
              <span class="logo-item"><span style="font-size: 18px;">⚡</span> STRIPE</span>
              <span class="logo-item"><span style="font-size: 18px;">⌘</span> RAYCAST</span>
              <span class="logo-item"><span style="font-size: 18px;">✦</span> SUPABASE</span>
              <span class="logo-item"><span style="font-size: 18px;">●</span> FIGMA</span>
            </div>
          </div>

          <!-- Category Showcase Header -->
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 28px; flex-wrap: wrap; gap: 16px;">
            <div>
              <span class="tag-pill" style="margin-bottom: 8px;">Taxonomy</span>
              <h2 class="text-heading">Explore by Asset Category</h2>
            </div>
            <a href="#/sections" class="btn-neutral-pill">
              View All Categories →
            </a>
          </div>

          <!-- Category Cards Grid (3x2 compact layout) -->
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px;">
            ${CATEGORIES.map(cat => `
              <a href="#/${cat.id}" class="card-category">
                <div class="card-category-image-wrap" style="height: 120px;">
                  <div style="position: absolute; inset: 0; background: linear-gradient(135deg, #18181b 0%, #121215 100%); display: flex; align-items: center; justify-content: center;">
                    <div style="width: 56px; height: 56px; border-radius: 18px; background: #27272a; border: 1px solid var(--color-mist); display: flex; align-items: center; justify-content: center; font-size: 24px;">
                      ${getCategoryIcon(cat.id)}
                    </div>
                  </div>
                  <span class="tag-filled" style="position: absolute; top: 12px; left: 12px; font-size: 11px;">
                    ${cat.count} ASSETS
                  </span>
                </div>
                <div class="card-category-body" style="padding: 18px 22px;">
                  <div>
                    <h3 style="font-size: 18px; font-weight: 600; color: var(--color-obsidian); margin-bottom: 4px;">
                      ${cat.name}
                    </h3>
                    <p style="font-size: 13.5px; color: var(--color-steel); line-height: 1.45;">
                      ${cat.desc}
                    </p>
                  </div>
                  <div style="margin-top: 14px; display: flex; align-items: center; justify-content: space-between;">
                    <span class="tag-pill" style="font-size: 11px;">Production Ready</span>
                    <span style="font-size: 13px; font-weight: 600; color: var(--color-obsidian);">Browse →</span>
                  </div>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- 3. TRENDING & HIGH-VELOCITY ASSETS (Windows Full Viewport Height) -->
      <section class="section-fullscreen">
        <div class="container">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 32px; flex-wrap: wrap; gap: 16px;">
            <div>
              <span class="badge-ember" style="margin-bottom: 8px;">HIGH VELOCITY</span>
              <h2 class="text-heading">Trending Digital Assets</h2>
              <p class="text-body" style="color: var(--color-steel); margin-top: 4px;">
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

      <!-- 4. STATS ROW & THE ZINC STANDARD (Windows Full Viewport Height) -->
      <section class="section-fullscreen">
        <div class="container">
          <!-- Stats Row -->
          <div class="stats-grid" style="margin-bottom: 32px;">
            <div class="stat-item card-awesomic" style="padding: 24px 28px;">
              <span class="stat-number">20,000+</span>
              <div class="stat-label">
                <strong style="color: var(--color-obsidian);">Completed Projects</strong><br />
                Shipped across 85 countries
              </div>
            </div>
            <div class="stat-item card-awesomic" style="padding: 24px 28px;">
              <span class="stat-number">99.8%</span>
              <div class="stat-label">
                <strong style="color: var(--color-obsidian);">Satisfaction Rate</strong><br />
                From verified design leaders
              </div>
            </div>
            <div class="stat-item card-awesomic" style="padding: 24px 28px;">
              <span class="stat-number">0.00</span>
              <div class="stat-label">
                <strong style="color: var(--color-obsidian);">Cumulative Layout Shift</strong><br />
                Zero CLS guaranteed
              </div>
            </div>
          </div>

          <!-- Dark Feature Card -->
          <div class="card-dark-feature">
            <div style="max-width: 620px; margin-bottom: 24px;">
              <span class="badge-ember" style="margin-bottom: 12px;">THE ZINC STANDARD</span>
              <h2 style="font-size: 32px; font-weight: 700; color: #ffffff; line-height: 1.2;">
                Why high-growth tech teams reject bloated UI libraries
              </h2>
            </div>

            <div style="display: flex; flex-direction: column;">
              <div class="feature-list-item">
                <span class="feature-list-arrow">→</span>
                <div>
                  <div style="color: #ffffff; font-weight: 600;">Hairline 1px borders replace muddy drop shadows</div>
                  <div style="font-size: 13.5px; color: var(--color-steel); margin-top: 2px; font-weight: 400;">
                    Eliminates heavy render passes and keeps card elevation crisp across all display densities.
                  </div>
                </div>
              </div>

              <div class="feature-list-item">
                <span class="feature-list-arrow">→</span>
                <div>
                  <div style="color: #ffffff; font-weight: 600;">Standardized 36px / 14px / 10000px geometric triad</div>
                  <div style="font-size: 13.5px; color: var(--color-steel); margin-top: 2px; font-weight: 400;">
                    Containers feel spacious with 36px rounding, while buttons and controls stay precise at 14px.
                  </div>
                </div>
              </div>

              <div class="feature-list-item">
                <span class="feature-list-arrow">→</span>
                <div>
                  <div style="color: #ffffff; font-weight: 600;">99% Achromatic zinc discipline with functional ember badges</div>
                  <div style="font-size: 13.5px; color: var(--color-steel); margin-top: 2px; font-weight: 400;">
                    Orange (#ff5a00) is reserved strictly for status cues and credentials, preventing UI fatigue.
                  </div>
                </div>
              </div>
            </div>

            <div style="margin-top: 28px; display: flex; gap: 14px; flex-wrap: wrap;">
              <a href="#/about" class="btn-primary" style="padding: 10px 20px;">
                Read Our Architectural Manifesto
              </a>
              <a href="#/pricing" class="btn-ghost" style="padding: 10px 20px;">
                Commercial Licenses →
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. BREAKTHROUGH DIVIDER & FREE RESOURCES (Windows Full Viewport Height) -->
      <section class="section-fullscreen">
        <div class="container">
          <!-- Visual Breath Divider -->
          <div class="breakthrough-image-section" style="margin-bottom: 32px; height: 160px;">
            <svg width="100%" height="100%" viewBox="0 0 1200 160" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="divGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#121215" />
                  <stop offset="50%" stop-color="#18181b" />
                  <stop offset="100%" stop-color="#09090b" />
                </linearGradient>
                <pattern id="gridPatternDark" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#27272a" stroke-width="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#divGradDark)" />
              <rect width="100%" height="100%" fill="url(#gridPatternDark)" opacity="0.6" />
              <circle cx="600" cy="80" r="45" fill="#18181b" stroke="#3f3f46" stroke-width="1" />
              <circle cx="600" cy="80" r="8" fill="#ff5a00" />
              <text x="600" y="140" text-anchor="middle" fill="#71717a" font-family="sans-serif" font-size="12" letter-spacing="0.12em" font-weight="600">
                PRECISION INFRASTRUCTURE · ZERO ARBITRARY NOISE
              </text>
            </svg>
          </div>

          <!-- Free Resources Showcase -->
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 24px; flex-wrap: wrap; gap: 16px;">
            <div>
              <span class="tag-pill" style="margin-bottom: 8px;">Community &amp; Open Source</span>
              <h2 class="text-heading">Curated Free Resources</h2>
              <p class="text-body" style="color: var(--color-steel); margin-top: 4px;">
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

      <!-- 6. FINAL CALL TO ACTION (Windows Full Viewport Height) -->
      <section class="section-fullscreen" style="text-align: center; border-bottom: none;">
        <div class="container">
          <div class="card-awesomic" style="padding: 64px 32px; max-width: 920px; margin: 0 auto; background: var(--surface-card);">
            <span class="badge-ember" style="margin-bottom: 20px;">ELEVATE YOUR CODEBASE</span>
            <h2 class="text-heading-lg" style="margin-bottom: 16px; max-width: 700px; margin-left: auto; margin-right: auto;">
              Start shipping architectural websites today.
            </h2>
            <p class="text-body-lg" style="max-width: 580px; margin: 0 auto 32px auto;">
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
