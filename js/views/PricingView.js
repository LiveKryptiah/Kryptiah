/**
 * PricingView Component — Family Style Reference
 * Section bundles and transparent lifetime licensing tiers.
 */

import { BUNDLES } from '../data/products.js';
import { state } from '../state.js';
import { Icons } from '../components/Icons.js';

export function renderPricingView() {
  return `
    <div class="pricing-page" style="padding: 48px 0 80px 0; min-height: calc(100vh - 64px);">
      <div class="container">
        <!-- Header -->
        <div style="text-align: center; max-width: 640px; margin: 0 auto 48px auto;">
          <div style="display: inline-flex; align-items: center; gap: 6px; background: #f2f0ed; padding: 4px 14px; border-radius: 9999px; margin-bottom: 14px;">
            <span style="font-size: 11px; font-weight: 700; color: #ff3e00; text-transform: uppercase;">PERPETUAL LICENSING</span>
          </div>
          <h1 class="text-display" style="font-size: 48px; margin-bottom: 12px;">
            Simple, fair pricing.
          </h1>
          <p class="text-body">
            No monthly subscriptions or recurring fees. Buy individual sections or get lifetime access to the entire Family design catalog.
          </p>
        </div>

        <!-- 3 Tier Cards Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; max-width: 1060px; margin: 0 auto 64px auto; align-items: stretch;">
          <!-- Tier 1: Single Section -->
          <div class="card-hairline" style="display: flex; flex-direction: column;">
            <div style="font-size: 14px; font-weight: 600; color: #7e7e7d; text-transform: uppercase; margin-bottom: 6px;">
              Starter
            </div>
            <h3 style="font-size: 22px; font-weight: 600; color: #121212; margin-bottom: 8px;">Single Section</h3>
            <p style="font-size: 14px; color: #474645; margin-bottom: 20px;">
              Pick and pay only for the exact section you need for your landing page.
            </p>
            <div style="font-size: 38px; font-weight: 700; color: #121212; margin-bottom: 24px;">
              $19 - $39 <span style="font-size: 14px; font-weight: 400; color: #7e7e7d;">/ section</span>
            </div>

            <ul style="list-style: none; padding: 0; margin: 0 0 28px 0; display: flex; flex-direction: column; gap: 10px; font-size: 14px; color: #474645;">
              <li style="display: flex; align-items: center; gap: 8px;">${Icons.check(13, '#00ca48')} design.md specification &amp; tokens</li>
              <li style="display: flex; align-items: center; gap: 8px;">${Icons.check(13, '#00ca48')} AI Agent prompt guides &amp; directives</li>
              <li style="display: flex; align-items: center; gap: 8px;">${Icons.check(13, '#00ca48')} Mobile, tablet &amp; desktop tested</li>
              <li style="display: flex; align-items: center; gap: 8px;">${Icons.check(13, '#00ca48')} Perpetual commercial license</li>
              <li style="display: flex; align-items: center; gap: 8px; color: #a1a1aa;">${Icons.close(13, '#a1a1aa')} Access to other sections</li>
            </ul>

            <div style="margin-top: auto;">
              <a href="#/sections" class="btn-sand-pill" style="display: block; text-align: center; width: 100%; padding: 12px;">
                Browse Marketplace →
              </a>
            </div>
          </div>

          <!-- Tier 2: Essential Pack -->
          <div class="card-hairline" style="display: flex; flex-direction: column;">
            <div style="font-size: 14px; font-weight: 600; color: #ff3e00; text-transform: uppercase; margin-bottom: 6px;">
              Launch Pack
            </div>
            <h3 style="font-size: 22px; font-weight: 600; color: #121212; margin-bottom: 8px;">Essential 5-Pack</h3>
            <p style="font-size: 14px; color: #474645; margin-bottom: 20px;">
              Hero + Bento Feature + Pricing Table + Tweet Wall + Lead CTA.
            </p>
            <div style="font-size: 38px; font-weight: 700; color: #121212; margin-bottom: 24px;">
              $49 <span style="font-size: 14px; font-weight: 400; color: #7e7e7d;">one-time</span>
            </div>

            <ul style="list-style: none; padding: 0; margin: 0 0 28px 0; display: flex; flex-direction: column; gap: 10px; font-size: 14px; color: #474645;">
              <li style="display: flex; align-items: center; gap: 8px;">${Icons.check(13, '#00ca48')} 5 Core Landing Page Sections</li>
              <li style="display: flex; align-items: center; gap: 8px;">${Icons.check(13, '#00ca48')} Complete Page Stack integration</li>
              <li style="display: flex; align-items: center; gap: 8px;">${Icons.check(13, '#00ca48')} Figma source file included</li>
              <li style="display: flex; align-items: center; gap: 8px;">${Icons.check(13, '#00ca48')} Perpetual commercial license</li>
              <li style="display: flex; align-items: center; gap: 8px;">${Icons.check(13, '#00ca48')} Lifetime updates on these 5 sections</li>
            </ul>

            <div style="margin-top: auto;">
              <button 
                type="button" 
                onclick="window.azarelAddBundleToCart('bundle-starter-pack')" 
                class="btn-sand-pill" 
                style="width: 100%; padding: 12px; font-size: 14px;"
              >
                Buy Launch Pack ($49)
              </button>
            </div>
          </div>

          <!-- Tier 3: All-Access Pass (Highlighted) -->
          <div class="card-hairline" style="box-shadow: inset 0 0 0 2px #121212; position: relative; display: flex; flex-direction: column; background: #ffffff;">
            <div style="position: absolute; top: -12px; right: 24px; background: #00ca48; color: #121212; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 9999px; display: inline-flex; align-items: center; gap: 5px;">
              ${Icons.sparkle(12, '#121212')}
              <span>BEST VALUE • LIFETIME PASS</span>
            </div>
            <div style="font-size: 14px; font-weight: 600; color: #0086fc; text-transform: uppercase; margin-bottom: 6px;">
              Everything Unlimited
            </div>
            <h3 style="font-size: 22px; font-weight: 600; color: #121212; margin-bottom: 8px;">All-Access Section Pass</h3>
            <p style="font-size: 14px; color: #474645; margin-bottom: 20px;">
              Every current and future website section dropped into the catalog forever.
            </p>
            <div style="font-size: 38px; font-weight: 700; color: #121212; margin-bottom: 24px;">
              $99 <span style="font-size: 14px; font-weight: 400; color: #7e7e7d;">lifetime</span>
            </div>

            <ul style="list-style: none; padding: 0; margin: 0 0 28px 0; display: flex; flex-direction: column; gap: 10px; font-size: 14px; color: #474645;">
              <li style="display: flex; align-items: center; gap: 8px;">${Icons.check(13, '#00ca48')} All 16+ Website Sections</li>
              <li style="display: flex; align-items: center; gap: 8px;">${Icons.check(13, '#00ca48')} Complete Interactive Page Stack Mixer access</li>
              <li style="display: flex; align-items: center; gap: 8px;">${Icons.check(13, '#00ca48')} Full Figma Component Design System</li>
              <li style="display: flex; align-items: center; gap: 8px;">${Icons.check(13, '#00ca48')} All future section drops included free</li>
              <li style="display: flex; align-items: center; gap: 8px;">${Icons.check(13, '#00ca48')} Unlimited commercial &amp; client projects</li>
              <li style="display: flex; align-items: center; gap: 8px;">${Icons.check(13, '#00ca48')} Direct priority Discord &amp; email support</li>
            </ul>

            <div style="margin-top: auto;">
              <button 
                type="button" 
                onclick="window.azarelAddBundleToCart('bundle-all-access')" 
                class="btn-dark-pill" 
                style="width: 100%; padding: 12px; font-size: 14px;"
              >
                Get All-Access Lifetime Pass ($99)
              </button>
            </div>
          </div>
        </div>

        <!-- FAQ Section -->
        <div style="max-width: 800px; margin: 0 auto;">
          <h2 style="font-size: 28px; font-weight: 600; color: #121212; margin-bottom: 24px; text-align: center;">
            Frequently Asked Questions
          </h2>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div class="card-hairline" style="padding: 20px;">
              <h4 style="font-size: 16px; font-weight: 600; color: #121212; margin-bottom: 6px;">
                What code frameworks are included?
              </h4>
              <p style="font-size: 14px; color: #474645; line-height: 1.5;">
                Every section includes typed React 19 JSX components, clean Tailwind CSS v4 utility classes, and vanilla HTML/CSS templates.
              </p>
            </div>

            <div class="card-hairline" style="padding: 20px;">
              <h4 style="font-size: 16px; font-weight: 600; color: #121212; margin-bottom: 6px;">
                Can I use these sections in commercial client websites?
              </h4>
              <p style="font-size: 14px; color: #474645; line-height: 1.5;">
                Yes! Every purchase comes with an unlimited perpetual commercial license. You can use them for SaaS applications, client work, internal tools, and agency projects.
              </p>
            </div>

            <div class="card-hairline" style="padding: 20px;">
              <h4 style="font-size: 16px; font-weight: 600; color: #121212; margin-bottom: 6px;">
                How does the Family design aesthetic work?
              </h4>
              <p style="font-size: 14px; color: #474645; line-height: 1.5;">
                Family speaks in a warm parchment-and-marker language: cream paper canvas (#fbfaf9), inset hairline borders (#f2f0ed) instead of drop shadows, cartoon mascots, and clean Inter typography.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
