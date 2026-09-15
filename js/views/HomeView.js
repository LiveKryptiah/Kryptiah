/**
 * HomeView Component — Family Style Reference
 * Fullscreen per-section sizing on storybook cream parchment (#fbfaf9):
 * 1. Hero flanked by mascot character clusters (section-fullscreen-hero)
 * 2. 3-Column card grid anchored by the signature asymmetric Dark Feature Card (section-fullscreen)
 * 3. Interactive Page Stack Previewer teaser (section-fullscreen)
 * 4. Friends of Family horizontally scrolling tweet grid (section-fullscreen)
 * 5. Lifetime Bundle Call to Action banner (section-fullscreen)
 * Clean SVG icons (zero emojis).
 */

import { SECTIONS_DATA, BUNDLES } from '../data/products.js';
import { renderProductCard } from '../components/ProductCard.js';
import { renderHeroLeftMascotCluster, renderHeroRightMascotCluster } from '../components/Mascots.js';
import { Icons } from '../components/Icons.js';

export function renderHomeView() {
  const showcaseSections = [
    SECTIONS_DATA.find(s => s.id === 'sec-hero-01') || SECTIONS_DATA[0],
    SECTIONS_DATA.find(s => s.id === 'sec-bento-01') || SECTIONS_DATA[1],
    SECTIONS_DATA.find(s => s.id === 'sec-pricing-01') || SECTIONS_DATA[2]
  ];

  return `
    <div class="homepage">
      <!-- 1. HERO SPREAD (Windows Fullscreen Viewport minus navbar) -->
      <section class="section-fullscreen-hero hero-spread">
        <div class="container">
          <div class="hero-flank-container">
            <!-- Left Mascot Cluster -->
            ${renderHeroLeftMascotCluster()}

            <!-- Centered Headline & Call to Action Stack -->
            <div style="max-width: 680px; margin: 0 auto; z-index: 2;">
              <!-- Storybook Badge Pill -->
              <div style="display: inline-flex; align-items: center; gap: 8px; background: #f2f0ed; padding: 6px 16px; border-radius: 9999px; margin-bottom: 24px;">
                <span style="width: 8px; height: 8px; border-radius: 50%; background: #00ca48;"></span>
                <span style="font-size: 13px; font-weight: 500; color: #343433;">
                  Storybook Spread on Cream Parchment
                </span>
              </div>

              <!-- Display Headline (Family Display 68px, -0.031em tracking) -->
              <h1 class="text-display" style="margin-bottom: 20px;">
                Pre-built website sections. Ready to drop in.
              </h1>

              <!-- Calm Utilitarian Body (Inter 17px) -->
              <p class="text-body" style="max-width: 560px; margin: 0 auto 32px auto;">
                A curated marketplace of production-ready heroes, bento grids, pricing tables, and social proof. Defined by inset hairline borders rather than heavy shadows.
              </p>

              <!-- Dual Pill Buttons (Dark Primary + Sand Secondary) -->
              <div style="display: flex; justify-content: center; align-items: center; gap: 14px; flex-wrap: wrap;">
                <a href="#/sections" class="btn-dark-pill" style="padding: 12px 28px; font-size: 15px;">
                  Explore 16+ Sections →
                </a>
                <a href="#/mixer" class="btn-sand-pill" style="padding: 12px 24px; font-size: 15px;">
                  Try Page Stack Mixer
                </a>
              </div>

              <!-- Trust Micro Row -->
              <div style="margin-top: 36px; display: flex; justify-content: center; gap: 24px; font-size: 13px; color: #7e7e7d; flex-wrap: wrap;">
                <span style="display: inline-flex; align-items: center; gap: 6px;">
                  ${Icons.check(14, '#00ca48')} React 19 &amp; Tailwind v4
                </span>
                <span style="display: inline-flex; align-items: center; gap: 6px;">
                  ${Icons.check(14, '#00ca48')} Hairline Inset Borders (#f2f0ed)
                </span>
                <span style="display: inline-flex; align-items: center; gap: 6px;">
                  ${Icons.check(14, '#00ca48')} 100% Perpetual License
                </span>
              </div>
            </div>

            <!-- Right Mascot Cluster -->
            ${renderHeroRightMascotCluster()}
          </div>
        </div>
      </section>

      <!-- 2. EXPLORE SECTIONS (Minimal Fullscreen Section Showcase) -->
      <section class="section-fullscreen" style="border-top: 1px solid #f2f0ed;">
        <div class="container">
          <!-- Minimal Showcase Header -->
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 32px; flex-wrap: wrap; gap: 16px;">
            <div>
              <div style="display: inline-flex; align-items: center; gap: 6px; background: #f2f0ed; padding: 4px 12px; border-radius: 9999px; margin-bottom: 8px;">
                <span style="font-size: 11px; font-weight: 600; color: #ff3e00; text-transform: uppercase; letter-spacing: 0.05em;">SECTION SHOWCASE</span>
              </div>
              <h2 class="text-heading-lg" style="margin-top: 2px;">
                Curated Website Sections
              </h2>
            </div>
            <a href="#/sections" class="link-demo" style="font-size: 14px; font-weight: 600;">
              View all 16 sections in marketplace →
            </a>
          </div>

          <!-- Minimal 3-Card Showcase Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; align-items: stretch;">
            ${showcaseSections.map(sec => renderProductCard(sec)).join('')}
          </div>

          <!-- Minimal Footer Bar -->
          <div style="margin-top: 32px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; padding-top: 18px; border-top: 1px solid #f2f0ed;">
            <div style="font-size: 13px; color: #7e7e7d; display: flex; align-items: center; gap: 8px;">
              <span style="width: 6px; height: 6px; border-radius: 50%; background: #00ca48;"></span>
              <span>16+ production sections • Ready for React 19 &amp; Tailwind CSS v4</span>
            </div>
            <div style="display: flex; align-items: center; gap: 12px;">
              <a href="#/mixer" class="btn-sand-pill" style="font-size: 12px; padding: 6px 16px;">
                Open Page Mixer
              </a>
              <a href="#/sections" class="btn-dark-pill" style="font-size: 12px; padding: 6px 18px;">
                Explore All Sections
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. INTERACTIVE PAGE STACK MIXER TEASER (Fullscreen Section) -->
      <section class="section-fullscreen" style="background: #f2f0ed; border-top: 1px solid #e5d5c3; border-bottom: 1px solid #e5d5c3;">
        <div class="container">
          <div style="text-align: center; max-width: 600px; margin: 0 auto 36px auto;">
            <div style="display: inline-flex; align-items: center; gap: 6px; background: #00ca48; color: #121212; padding: 3px 12px; border-radius: 9999px; font-size: 11px; font-weight: 700; margin-bottom: 12px;">
              ${Icons.sparkle(12, '#121212')}
              <span>INTERACTIVE BUILDER</span>
            </div>
            <h2 class="text-heading-lg" style="margin-bottom: 12px;">Assemble your page in seconds.</h2>
            <p class="text-body">
              Mix and match headers, bento grids, and pricing blocks to see how your dream marketing page looks before buying.
            </p>
          </div>

          <div style="background: #ffffff; border-radius: 14px; padding: 24px; box-shadow: inset 0 0 0 1px #f2f0ed; max-width: 900px; margin: 0 auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
              <div style="font-size: 14px; font-weight: 600; color: #121212;">
                Active Stack: <span style="color: #ff3e00;">Hero + Bento Feature + Social Proof + CTA</span>
              </div>
              <a href="#/mixer" class="btn-dark-pill" style="font-size: 13px; padding: 8px 18px;">
                Open Fullscreen Mixer Tool →
              </a>
            </div>

            <!-- Mini Stack Simulation -->
            <div style="display: flex; flex-direction: column; gap: 8px; background: #fbfaf9; border-radius: 10px; padding: 14px; box-shadow: inset 0 0 0 1px #f2f0ed;">
              <div style="padding: 12px; background: #ffffff; border-radius: 6px; box-shadow: inset 0 0 0 1px #f2f0ed; font-size: 13px; font-weight: 500; display: flex; justify-content: space-between; align-items: center;">
                <span>1. Storybook Mascot Hero</span>
                <span style="display: inline-flex; align-items: center; gap: 4px; color: #00ca48; font-weight: 600;">
                  ${Icons.check(12, '#00ca48')} Freebie
                </span>
              </div>
              <div style="padding: 12px; background: #ffffff; border-radius: 6px; box-shadow: inset 0 0 0 1px #f2f0ed; font-size: 13px; font-weight: 500; display: flex; justify-content: space-between;">
                <span>2. 4-Column Bento Feature Matrix</span>
                <span style="color: #121212; font-weight: 600;">$39</span>
              </div>
              <div style="padding: 12px; background: #ffffff; border-radius: 6px; box-shadow: inset 0 0 0 1px #f2f0ed; font-size: 13px; font-weight: 500; display: flex; justify-content: space-between;">
                <span>3. Friends of Family Tweet Wall</span>
                <span style="color: #121212; font-weight: 600;">$24</span>
              </div>
              <div style="padding: 12px; background: #ffffff; border-radius: 6px; box-shadow: inset 0 0 0 1px #f2f0ed; font-size: 13px; font-weight: 500; display: flex; justify-content: space-between; align-items: center;">
                <span>4. Parchment Email Lead &amp; Bundle CTA</span>
                <span style="display: inline-flex; align-items: center; gap: 4px; color: #00ca48; font-weight: 600;">
                  ${Icons.check(12, '#00ca48')} Freebie
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. FRIENDS OF FAMILY TWEET WALL (Fullscreen Section) -->
      <section class="section-fullscreen" style="border-top: 1px solid #f2f0ed;">
        <div class="container">
          <div style="text-align: center; margin-bottom: 40px;">
            <span style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: #7e7e7d;">
              COMMUNITY PROOF
            </span>
            <h2 class="text-heading-lg" style="margin-top: 6px;">Friends of Family</h2>
            <p class="text-body" style="max-width: 500px; margin: 8px auto 0 auto;">
              Founders and frontend engineers building memorable digital experiences with our sections.
            </p>
          </div>

          <!-- 4-Column Scrolling Card Row -->
          <div style="display: flex; gap: 16px; overflow-x: auto; padding-bottom: 16px; scrollbar-width: none;">
            <div class="card-hairline" style="min-width: 280px; flex: 1;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div style="width: 40px; height: 40px; border-radius: 50%; background: #64c6ff; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #121212;">
                    R
                  </div>
                  <div>
                    <div style="font-size: 15px; font-weight: 600; color: #343433;">Ryan Hoover</div>
                    <div style="font-size: 13px; color: #7e7e7d;">Product Hunt</div>
                  </div>
                </div>
                ${Icons.xTwitter(16, '#7e7e7d')}
              </div>
              <p style="font-size: 15px; color: #474645; line-height: 1.5;">
                "The warm cream parchment aesthetic paired with hairline borders is such a breath of fresh air compared to typical generic dark templates."
              </p>
            </div>

            <div class="card-hairline" style="min-width: 280px; flex: 1;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div style="width: 40px; height: 40px; border-radius: 50%; background: #ffcd6c; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #121212;">
                    K
                  </div>
                  <div>
                    <div style="font-size: 15px; font-weight: 600; color: #343433;">Karri Saarinen</div>
                    <div style="font-size: 13px; color: #7e7e7d;">Linear Design</div>
                  </div>
                </div>
                ${Icons.xTwitter(16, '#7e7e7d')}
              </div>
              <p style="font-size: 15px; color: #474645; line-height: 1.5;">
                "The restraint on shadows and elevation makes the cartoon mascots pop emotionally while keeping the typography razor sharp."
              </p>
            </div>

            <div class="card-hairline" style="min-width: 280px; flex: 1;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div style="width: 40px; height: 40px; border-radius: 50%; background: #00c978; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #121212;">
                    G
                  </div>
                  <div>
                    <div style="font-size: 15px; font-weight: 600; color: #343433;">Guillermo Rauch</div>
                    <div style="font-size: 13px; color: #7e7e7d;">Vercel</div>
                  </div>
                </div>
                ${Icons.xTwitter(16, '#7e7e7d')}
              </div>
              <p style="font-size: 15px; color: #474645; line-height: 1.5;">
                "Pasted the hero code into our Next.js App Router project and had 100/100 Lighthouse performance instantly. Superb architecture."
              </p>
            </div>

            <div class="card-hairline" style="min-width: 280px; flex: 1;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div style="width: 40px; height: 40px; border-radius: 50%; background: #ff58ae; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #121212;">
                    A
                  </div>
                  <div>
                    <div style="font-size: 15px; font-weight: 600; color: #343433;">Amjad Masad</div>
                    <div style="font-size: 13px; color: #7e7e7d;">Replit</div>
                  </div>
                </div>
                ${Icons.xTwitter(16, '#7e7e7d')}
              </div>
              <p style="font-size: 15px; color: #474645; line-height: 1.5;">
                "We bought the $99 lifetime pass for our team and have already shipped 3 landing pages in under two weeks."
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. FINAL ALL-ACCESS BUNDLE BANNER (Fullscreen Section) -->
      <section class="section-fullscreen" style="border-top: 1px solid #f2f0ed;">
        <div class="container">
          <div style="background: #ffffff; border-radius: 14px; padding: 48px 32px; box-shadow: inset 0 0 0 1px #f2f0ed; text-align: center; max-width: 960px; margin: 0 auto; position: relative;">
            <div style="display: inline-flex; align-items: center; gap: 6px; background: #ffcd6c; color: #121212; font-size: 12px; font-weight: 700; padding: 4px 14px; border-radius: 9999px; margin-bottom: 16px;">
              ${Icons.sparkle(14, '#121212')}
              <span>SPECIAL LIFETIME LAUNCH OFFER</span>
            </div>
            <h2 class="text-heading-lg" style="margin-bottom: 14px;">
              Get All 16+ Sections for $99
            </h2>
            <p class="text-body" style="max-width: 540px; margin: 0 auto 28px auto;">
              Own every current and future website section. Unlimited commercial projects, full React 19 JSX, Tailwind v4, and Figma tokens.
            </p>
            <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
              <button 
                type="button" 
                onclick="window.azarelAddBundleToCart('bundle-all-access')" 
                class="btn-dark-pill" 
                style="padding: 12px 28px; font-size: 15px;"
              >
                Claim All-Access Pass ($99)
              </button>
              <a href="#/sections" class="btn-sand-pill" style="padding: 12px 24px; font-size: 15px;">
                Browse Single Sections
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
