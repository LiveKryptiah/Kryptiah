/**
 * Azarel Website Sections Data Architecture
 * Dedicated catalog of production-ready website sections built in the Family Design System:
 * - Storybook cream parchment (#fbfaf9)
 * - Hairline inset borders (#f2f0ed)
 * - Hand-drawn mascots & confetti accents
 * - Inter typography & semantic marker colors
 */

import { Icons } from '../components/Icons.js';

export const SECTION_CATEGORIES = [
  { id: 'all', name: 'All Sections', count: 16, icon: 'grid', desc: 'Complete inventory of production sections' },
  { id: 'heroes', name: 'Hero Sections', count: 4, icon: 'layout', desc: 'Display typography, mascot clusters, and lead captures' },
  { id: 'bento', name: 'Bento & Metrics', count: 3, icon: 'layers', desc: 'Multi-column bento grids and metric telemetry blocks' },
  { id: 'features', name: 'Feature Showcases', count: 3, icon: 'zap', desc: 'Alternating story spreads and interactive action cards' },
  { id: 'pricing', name: 'Pricing Tables', count: 2, icon: 'tag', desc: 'Transparent tier matrices and annual/monthly toggles' },
  { id: 'social-proof', name: 'Social Proof', count: 2, icon: 'message-square', desc: 'Horizontally scrolling tweet cards & partner strips' },
  { id: 'ctas', name: 'CTAs & Forms', count: 2, icon: 'send', desc: 'High-converting banners and email capture blocks' }
];

export const FRAMEWORKS = ['All', 'React 19', 'Tailwind v4', 'HTML/CSS', 'Figma'];

export const SECTIONS_DATA = [
  // --------------------------------------------------------------------------
  // HERO SECTIONS
  // --------------------------------------------------------------------------
  {
    id: 'sec-hero-01',
    slug: 'storybook-mascot-hero',
    name: 'Storybook Mascot Centered Hero',
    category: 'heroes',
    categoryLabel: 'Hero Sections',
    description: 'The signature Family spread: centered 68px headline with tight tracking, flanked by hand-drawn cartoon mascot clusters, dual dark and sand pill action buttons, and trust metrics.',
    price: 0,
    isFree: true,
    framework: 'React 19 / Tailwind v4',
    style: 'Family Parchment',
    tags: ['Hero', 'Mascot', 'Freebie', 'Storybook', 'Conversion'],
    featured: true,
    popular: true,
    rating: 5.0,
    reviewCount: 94,
    badge: 'Popular Freebie',
    previewHtml: `
      <div style="background: #fbfaf9; padding: 50px 24px; text-align: center; border-radius: 10px; box-shadow: inset 0 0 0 1px #f2f0ed; position: relative; overflow: hidden; font-family: 'Inter', sans-serif;">
        <div style="display: inline-flex; align-items: center; gap: 8px; background: #f2f0ed; padding: 5px 14px; border-radius: 9999px; margin-bottom: 20px;">
          <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #00ca48;"></span>
          <span style="font-size: 13px; font-weight: 500; color: #343433;">Family Design System • v2.0</span>
        </div>
        <h1 style="font-size: 38px; font-weight: 600; color: #121212; line-height: 1.15; letter-spacing: -0.031em; max-width: 680px; margin: 0 auto 16px auto;">
          Everything you need to ship delight.
        </h1>
        <p style="font-size: 16px; color: #474645; max-width: 520px; margin: 0 auto 28px auto; line-height: 1.5;">
          A warm parchment canvas carrying hand-drawn characters, quiet hairline borders, and pure Inter typography.
        </p>
        <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
          <a href="#/sections" style="background: #121212; color: #ffffff; padding: 10px 24px; border-radius: 32px; font-size: 14px; font-weight: 600; text-decoration: none;">Get Started Free</a>
          <a href="#/mixer" style="background: #f6f4ef; color: #121212; padding: 10px 22px; border-radius: 32px; font-size: 14px; font-weight: 500; text-decoration: none; border: 1px solid #f2f0ed;">Watch Demo</a>
        </div>
        <div style="margin-top: 24px; font-size: 13px; color: #7e7e7d; display: flex; justify-content: center; gap: 20px;">
          <span style="display: inline-flex; align-items: center; gap: 5px;">${Icons.check(14, '#00ca48')} Zero setup required</span>
          <span style="display: inline-flex; align-items: center; gap: 5px;">${Icons.check(14, '#00ca48')} MIT Commercial License</span>
        </div>
      </div>
    `,
    codeReact: `import React from 'react';

export function StorybookHero() {
  return (
    <section className="bg-[#fbfaf9] py-24 px-6 relative overflow-hidden border-b border-[#f2f0ed]">
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#f2f0ed] px-3.5 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00ca48]" />
          <span className="text-xs font-medium text-[#343433]">Family Design System • Ready for React 19</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-medium text-[#121212] tracking-[-0.031em] leading-[1.09] max-w-3xl mx-auto mb-6">
          Everything you need to ship delight.
        </h1>
        
        <p className="text-lg md:text-xl text-[#474645] max-w-xl mx-auto mb-10 leading-relaxed">
          A warm parchment canvas carrying hand-drawn characters, quiet hairline borders, and pure Inter typography.
        </p>
        
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button className="bg-[#121212] hover:bg-[#262626] text-white px-6 py-3 rounded-[32px] text-sm font-semibold transition-all shadow-sm">
            Get Started Free
          </button>
          <button className="bg-[#f6f4ef] hover:bg-[#ece8df] text-[#121212] px-6 py-3 rounded-[32px] text-sm font-medium transition-all">
            Watch the Video
          </button>
        </div>
      </div>
    </section>
  );
}`,
    codeTailwind: `<section class="bg-[#fbfaf9] py-24 px-6 text-center border-b border-[#f2f0ed]">
  <div class="max-w-[1200px] mx-auto">
    <span class="inline-flex items-center gap-2 bg-[#f2f0ed] px-3.5 py-1.5 rounded-full text-xs font-medium text-[#343433] mb-6">
      <span class="w-2 h-2 rounded-full bg-[#00ca48]"></span>
      Storybook Spread
    </span>
    <h1 class="text-5xl md:text-7xl font-medium text-[#121212] tracking-[-0.031em] leading-[1.09] max-w-3xl mx-auto mb-6">
      Everything you need to ship delight.
    </h1>
    <p class="text-lg text-[#474645] max-w-xl mx-auto mb-10">
      Hand-drawn characters and quiet hairline borders on a cream canvas.
    </p>
    <div class="flex justify-center gap-3">
      <button class="bg-[#121212] text-white px-6 py-3 rounded-[32px] font-semibold text-sm">Get Started</button>
      <button class="bg-[#f6f4ef] text-[#121212] px-6 py-3 rounded-[32px] font-medium text-sm">Watch Video</button>
    </div>
  </div>
</section>`,
    codeHtml: `<div class="hero-storybook">
  <div class="badge-status">● Live in Production</div>
  <h1>Everything you need to ship delight.</h1>
  <p>A warm parchment canvas carrying hand-drawn characters and quiet hairline borders.</p>
  <div class="hero-actions">
    <button class="btn-dark-pill">Get Started Free</button>
    <button class="btn-sand-pill">Watch Video</button>
  </div>
</div>`,
    features: [
      'Authentic Family storybook styling on #fbfaf9 canvas',
      'Dual pill CTA hierarchy (#121212 primary, #f6f4ef secondary)',
      'Tight negative letter-spacing (-0.031em) display headline',
      'Zero layout shift, 100% accessible contrast'
    ],
    included: ['React 19 JSX component', 'Tailwind CSS v4 classes', 'Figma AutoLayout frame', 'Vanilla HTML & CSS']
  },

  {
    id: 'sec-hero-02',
    slug: 'split-interactive-feature-hero',
    name: 'Split Hero with Dark Feature Anchor Card',
    category: 'heroes',
    categoryLabel: 'Hero Sections',
    description: 'Two-column hero pairing bold narrative copy with the signature Family Asymmetric Dark Feature Card (#000000 with 24px left radius, colorful action rows for Send, Swap, Receive, Purchase).',
    price: 29,
    isFree: false,
    framework: 'React 19 / Tailwind v4',
    style: 'Family Parchment',
    tags: ['Hero', 'Dark Card', 'Bestseller', 'Web3 / SaaS'],
    featured: true,
    popular: true,
    rating: 4.9,
    reviewCount: 68,
    badge: 'Bestseller',
    previewHtml: `
      <div style="background: #fbfaf9; padding: 40px 24px; border-radius: 10px; box-shadow: inset 0 0 0 1px #f2f0ed; font-family: 'Inter', sans-serif;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px; align-items: center;">
          <div>
            <div style="font-size: 13px; font-weight: 600; color: #ff3e00; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 12px;">NEW INTERFACE STANDARD</div>
            <h2 style="font-size: 32px; font-weight: 600; color: #121212; line-height: 1.15; letter-spacing: -0.02em; margin-bottom: 14px;">
              A friendlier home for your digital universe.
            </h2>
            <p style="font-size: 15px; color: #474645; line-height: 1.5; margin-bottom: 24px;">
              Crafted with hairline inset strokes, warm tone shifts, and chromatic punctuation marks that make complex workflows intuitive.
            </p>
            <div style="display: flex; gap: 10px; align-items: center;">
              <a href="#/pricing" style="background: #121212; color: white; padding: 9px 20px; border-radius: 32px; font-size: 13px; font-weight: 600; text-decoration: none;">Download Section</a>
              <a href="#/sections" style="color: #ff3e00; font-size: 14px; font-weight: 500; text-decoration: underline; margin-left: 8px;">Watch the demo</a>
            </div>
          </div>
          <!-- Dark Feature Card Preview -->
          <div style="background: #000000; border-radius: 24px 0 0 24px; padding: 20px; box-shadow: 0 0 24px rgba(0,0,0,0.15); color: white;">
            <div style="font-size: 11px; text-transform: uppercase; color: #7e7e7d; font-weight: 600; margin-bottom: 14px; letter-spacing: 0.05em;">Connected Vault</div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; background: #121212; border-radius: 10px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div style="width: 28px; height: 28px; border-radius: 50%; background: #0086fc; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">↑</div>
                  <div>
                    <div style="font-size: 13px; font-weight: 600;">Send Assets</div>
                    <div style="font-size: 11px; color: #7e7e7d;">Instant zero-fee transfer</div>
                  </div>
                </div>
                <span style="color: #00c978; font-size: 12px; font-weight: 600;">Active</span>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; background: #121212; border-radius: 10px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div style="width: 28px; height: 28px; border-radius: 50%; background: #9f4fff; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">⇄</div>
                  <div>
                    <div style="font-size: 13px; font-weight: 600;">Swap &amp; Bridge</div>
                    <div style="font-size: 11px; color: #7e7e7d;">Lowest slippage routing</div>
                  </div>
                </div>
                <span style="color: #ffbb26; font-size: 11px;">0.02s</span>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; background: #121212; border-radius: 10px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div style="width: 28px; height: 28px; border-radius: 50%; background: #00c978; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">↓</div>
                  <div>
                    <div style="font-size: 13px; font-weight: 600;">Receive &amp; Stake</div>
                    <div style="font-size: 11px; color: #7e7e7d;">4.8% APY compounding</div>
                  </div>
                </div>
                <span style="color: #00ca48; font-size: 12px; font-weight: bold;">+4.8%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    codeReact: `import React from 'react';

export function SplitActionHero() {
  const actions = [
    { icon: 'arrowUp', color: '#0086fc', label: 'Send Assets', helper: 'Instant zero-fee transfer', badge: 'Active' },
    { icon: 'arrowSwap', color: '#9f4fff', label: 'Swap & Bridge', helper: 'Lowest slippage routing', badge: '0.02s' },
    { icon: 'arrowDown', color: '#00c978', label: 'Receive & Stake', helper: '4.8% APY compounding', badge: '+4.8%' },
    { icon: 'sparkle', color: '#ff58ae', label: 'Collectibles', helper: 'Verified on-chain vault', badge: 'New' },
  ];

  return (
    <section className="bg-[#fbfaf9] py-20 px-6 lg:px-12 border-b border-[#f2f0ed]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <span className="text-[#ff3e00] font-semibold text-xs uppercase tracking-wider mb-4 block">
            Interface Standard
          </span>
          <h1 className="text-4xl lg:text-6xl font-medium text-[#121212] tracking-[-0.025em] leading-[1.12] mb-6">
            A friendlier home for your digital universe.
          </h1>
          <p className="text-[#474645] text-lg leading-relaxed mb-8">
            Crafted with hairline inset strokes, warm tone shifts, and chromatic punctuation marks that make complex workflows intuitive.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-[#121212] text-white px-6 py-3 rounded-[32px] text-sm font-semibold hover:bg-neutral-800 transition-all">
              Claim License
            </button>
            <a href="#demo" className="text-[#ff3e00] text-sm font-medium underline underline-offset-4">
              Watch the demo
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          {/* Signature Family Dark Feature Card */}
          <div className="bg-[#000000] rounded-l-[24px] rounded-r-none p-6 shadow-[0_0_24px_rgba(0,0,0,0.15)]">
            <div className="text-xs uppercase text-[#7e7e7d] font-semibold tracking-wider mb-4">
              Family Vault Engine
            </div>
            <div className="space-y-2">
              {actions.map((act, i) => (
                <div key={i} className="flex items-center justify-between p-3.5 bg-[#121212] rounded-[10px] hover:bg-[#1a1a1a] transition-all">
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{ backgroundColor: act.color }}>
                      {act.icon}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{act.label}</div>
                      <div className="text-neutral-400 text-xs">{act.helper}</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-black/40 text-neutral-300">
                    {act.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`,
    codeTailwind: `<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#fbfaf9] p-12">
  <div>
    <h2 class="text-4xl font-medium text-[#121212] mb-4">A friendlier home for your digital universe.</h2>
    <p class="text-[#474645] mb-6">Crafted with hairline inset strokes and quiet chrome.</p>
    <a href="#" class="text-[#ff3e00] underline font-medium">Watch the demo</a>
  </div>
  <div class="bg-black rounded-l-[24px] p-6 shadow-xl">
    <!-- Dark Action Card -->
  </div>
</div>`,
    codeHtml: `<section class="split-hero">...</section>`,
    features: [
      'Includes Family Asymmetric Dark Feature Card (#000000 with 24px left radius)',
      'Chromatic circle icon actions (#0086fc, #9f4fff, #00c978, #ff58ae)',
      'Ember orange (#ff3e00) inline demo link integration',
      'Mobile-ready responsive stack with clean fallbacks'
    ],
    included: ['React 19 JSX Component', 'Tailwind CSS classes', 'Figma vectors & tokens', 'Documentation']
  },

  // --------------------------------------------------------------------------
  // BENTO & METRICS GRIDS
  // --------------------------------------------------------------------------
  {
    id: 'sec-bento-01',
    slug: 'four-column-bento-matrix',
    name: 'Hairline 4-Column Bento Feature Matrix',
    category: 'bento',
    categoryLabel: 'Bento & Metrics',
    description: 'Balanced bento grid featuring hairline-bordered white cards (inset 0 0 0 1px #f2f0ed), live mascot status widgets, real-time counters, and ember orange inline watch links.',
    price: 39,
    isFree: false,
    framework: 'React 19 / Tailwind v4',
    style: 'Family Parchment',
    tags: ['Bento Grid', 'Metrics', 'Cards', 'Hairline'],
    featured: true,
    popular: true,
    rating: 5.0,
    reviewCount: 42,
    badge: 'Popular',
    previewHtml: `
      <div style="background: #fbfaf9; padding: 32px 20px; font-family: 'Inter', sans-serif;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px;">
          <!-- Card 1 -->
          <div style="background: #ffffff; border-radius: 10px; padding: 24px; box-shadow: inset 0 0 0 1px #f2f0ed;">
            <div style="display: inline-flex; width: 32px; height: 32px; border-radius: 50%; background: #ffcd6c; align-items: center; justify-content: center; margin-bottom: 16px;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#343433" stroke="#343433" stroke-width="1.5"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/></svg>
            </div>
            <h3 style="font-size: 18px; font-weight: 600; color: #343433; margin-bottom: 8px;">Instant Sync</h3>
            <p style="font-size: 14px; color: #474645; line-height: 1.45; margin-bottom: 14px;">Zero-latency local-first state engine synced to cloud.</p>
            <a href="#/sections" style="color: #ff3e00; font-size: 13px; font-weight: 500; text-decoration: underline;">Watch the demo</a>
          </div>
          <!-- Card 2 -->
          <div style="background: #ffffff; border-radius: 10px; padding: 24px; box-shadow: inset 0 0 0 1px #f2f0ed;">
            <div style="display: inline-flex; width: 32px; height: 32px; border-radius: 50%; background: #64c6ff; align-items: center; justify-content: center; margin-bottom: 16px;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#121212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 style="font-size: 18px; font-weight: 600; color: #343433; margin-bottom: 8px;">Zero-Leak Vault</h3>
            <p style="font-size: 14px; color: #474645; line-height: 1.45; margin-bottom: 14px;">Hardware enclave encryption guarding your keys.</p>
            <a href="#/sections" style="color: #ff3e00; font-size: 13px; font-weight: 500; text-decoration: underline;">Read security whitepaper</a>
          </div>
          <!-- Card 3 -->
          <div style="background: #ffffff; border-radius: 10px; padding: 24px; box-shadow: inset 0 0 0 1px #f2f0ed;">
            <div style="display: inline-flex; width: 32px; height: 32px; border-radius: 50%; background: #00c978; align-items: center; justify-content: center; margin-bottom: 16px;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#121212" stroke="#121212" stroke-width="1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <h3 style="font-size: 18px; font-weight: 600; color: #343433; margin-bottom: 8px;">0.00ms CLS</h3>
            <p style="font-size: 14px; color: #474645; line-height: 1.45; margin-bottom: 14px;">Optimized asset loading with zero cumulative layout shifts.</p>
            <a href="#/sections" style="color: #ff3e00; font-size: 13px; font-weight: 500; text-decoration: underline;">View benchmark tests</a>
          </div>
        </div>
      </div>
    `,
    codeReact: `import React from 'react';

export function BentoFeatureMatrix() {
  const cards = [
    { icon: 'sparkle', color: '#ffcd6c', title: 'Instant Sync', desc: 'Zero-latency local-first state engine synced smoothly to cloud.', link: 'Watch the demo' },
    { icon: 'shield', color: '#64c6ff', title: 'Zero-Leak Vault', desc: 'Hardware enclave encryption guarding secret operational keys.', link: 'Read security paper' },
    { icon: 'lightning', color: '#00c978', title: '0.00ms CLS', desc: 'Optimized asset pipeline guaranteeing zero cumulative layout shifts.', link: 'View benchmark tests' },
    { icon: 'heart', color: '#ff58ae', title: 'Delight First', desc: 'Handcrafted micro-animations and cheerful marker mascot accents.', link: 'Explore mascot library' }
  ];

  return (
    <section className="bg-[#fbfaf9] py-20 px-6 max-w-[1200px] mx-auto">
      <div className="text-center max-w-xl mx-auto mb-14">
        <h2 className="text-3xl lg:text-4xl font-medium text-[#343433] tracking-tight mb-4">
          Engineered with intentional simplicity.
        </h2>
        <p className="text-[#474645] text-base">
          Defined by interior hairline borders rather than heavy drop shadows, giving a flat pressed-into-paper quality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {cards.map((c, i) => (
          <div 
            key={i} 
            className="bg-white rounded-[10px] p-8 shadow-[inset_0_0_0_1px_#f2f0ed] hover:shadow-[inset_0_0_0_1px_#e5d5c3] transition-all flex flex-col justify-between"
          >
            <div>
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg mb-6 border border-[#343433]/15" 
                style={{ backgroundColor: c.color }}
              >
                {c.icon}
              </div>
              <h3 className="text-[23px] font-medium text-[#343433] mb-3 leading-snug">
                {c.title}
              </h3>
              <p className="text-[#474645] text-[16px] leading-[1.5] mb-6">
                {c.desc}
              </p>
            </div>
            <a href="#demo" className="text-[#ff3e00] text-[14px] font-medium underline underline-offset-4 mt-auto">
              {c.link}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}`,
    codeTailwind: `<div class="grid grid-cols-1 md:grid-cols-4 gap-3">...</div>`,
    codeHtml: `<div class="bento-grid">...</div>`,
    features: [
      'Strict 10px radius on all cards per Family token scale',
      'Interior hairline border (inset 0 0 0 1px #f2f0ed) - zero heavy elevation',
      'Accent colors: Sun Yellow, Sky Blue, Mint Green, Coral Pink',
      'Responsive flex & auto-fitting columns'
    ],
    included: ['React JSX Component', 'Tailwind Classes', 'HTML Template']
  },

  // --------------------------------------------------------------------------
  // PRICING TABLES
  // --------------------------------------------------------------------------
  {
    id: 'sec-pricing-01',
    slug: 'three-tier-storybook-pricing',
    name: '3-Tier Storybook Pricing Spread',
    category: 'pricing',
    categoryLabel: 'Pricing Tables',
    description: 'Clean, paper-aesthetic pricing table with monthly/annual toggle, highlighted popular tier featuring a mint #00ca48 status badge, hairline inset borders, and dark pill CTAs.',
    price: 34,
    isFree: false,
    framework: 'React 19 / Tailwind v4',
    style: 'Family Parchment',
    tags: ['Pricing', 'SaaS', 'Bestseller', 'Conversion'],
    featured: true,
    popular: true,
    rating: 4.9,
    reviewCount: 51,
    badge: 'High Conversion',
    previewHtml: `
      <div style="background: #fbfaf9; padding: 36px 20px; font-family: 'Inter', sans-serif;">
        <div style="text-align: center; margin-bottom: 28px;">
          <h3 style="font-size: 26px; font-weight: 600; color: #121212; margin-bottom: 8px;">Simple, transparent licensing.</h3>
          <p style="font-size: 14px; color: #474645;">Pay once, own forever. No recurring SaaS fees.</p>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; max-width: 800px; margin: 0 auto;">
          <!-- Tier 1 -->
          <div style="background: #ffffff; border-radius: 10px; padding: 24px; box-shadow: inset 0 0 0 1px #f2f0ed; display: flex; flex-direction: column;">
            <div style="font-size: 16px; font-weight: 600; color: #343433; margin-bottom: 4px;">Single Section</div>
            <div style="font-size: 28px; font-weight: 700; color: #121212; margin-bottom: 12px;">$29 <span style="font-size: 12px; font-weight: 400; color: #7e7e7d;">one-time</span></div>
            <ul style="font-size: 13px; color: #474645; line-height: 1.8; margin-bottom: 20px; list-style: none; padding: 0;">
              <li style="display: flex; align-items: center; gap: 6px;">${Icons.check(13, '#00ca48')} Full React 19 JSX code</li>
              <li style="display: flex; align-items: center; gap: 6px;">${Icons.check(13, '#00ca48')} Tailwind CSS v4 styling</li>
              <li style="display: flex; align-items: center; gap: 6px;">${Icons.check(13, '#00ca48')} Perpetual commercial license</li>
            </ul>
            <a href="#/cart" style="margin-top: auto; background: #f6f4ef; color: #121212; padding: 10px; border-radius: 32px; text-align: center; font-size: 13px; font-weight: 600; text-decoration: none;">Choose Single</a>
          </div>
          <!-- Tier 2 (Highlighted) -->
          <div style="background: #ffffff; border-radius: 10px; padding: 24px; box-shadow: inset 0 0 0 2px #121212; position: relative; display: flex; flex-direction: column;">
            <div style="position: absolute; top: -10px; right: 20px; background: #00ca48; color: #121212; font-size: 10px; font-weight: 700; padding: 3px 10px; border-radius: 9999px;">MOST POPULAR</div>
            <div style="font-size: 16px; font-weight: 600; color: #343433; margin-bottom: 4px;">All-Access Pass</div>
            <div style="font-size: 28px; font-weight: 700; color: #121212; margin-bottom: 12px;">$99 <span style="font-size: 12px; font-weight: 400; color: #7e7e7d;">lifetime</span></div>
            <ul style="font-size: 13px; color: #474645; line-height: 1.8; margin-bottom: 20px; list-style: none; padding: 0;">
              <li style="display: flex; align-items: center; gap: 6px;">${Icons.check(13, '#00ca48')} All 16+ website sections</li>
              <li style="display: flex; align-items: center; gap: 6px;">${Icons.check(13, '#00ca48')} Free lifetime updates</li>
              <li style="display: flex; align-items: center; gap: 6px;">${Icons.check(13, '#00ca48')} Complete Figma file included</li>
              <li style="display: flex; align-items: center; gap: 6px;">${Icons.check(13, '#00ca48')} Section Mixer Builder tool</li>
            </ul>
            <a href="#/cart" style="margin-top: auto; background: #121212; color: #ffffff; padding: 10px; border-radius: 32px; text-align: center; font-size: 13px; font-weight: 600; text-decoration: none;">Get Lifetime Pass</a>
          </div>
        </div>
      </div>
    `,
    codeReact: `import React, { useState } from 'react';

export function FamilyPricingTable() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="bg-[#fbfaf9] py-24 px-6 max-w-[1200px] mx-auto">
      <div className="text-center max-w-xl mx-auto mb-16">
        <h2 className="text-4xl font-medium text-[#121212] tracking-tight mb-4">
          Simple, transparent licensing.
        </h2>
        <p className="text-[#474645] text-lg">
          Pay once, own forever. Build infinite commercial projects without recurring fees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Tier cards */}
      </div>
    </section>
  );
}`,
    codeTailwind: `<div class="grid grid-cols-1 md:grid-cols-3 gap-6">...</div>`,
    codeHtml: `<div class="pricing-table">...</div>`,
    features: [
      'Toggleable billing periods with smooth state transition',
      'Status badge pill highlighting most popular selection',
      'Clean typography with Inter font tokens',
      'Zero elevation bloat — crisp inset borders'
    ],
    included: ['React JSX Component', 'Tailwind Classes', 'Figma Autolayout Node']
  },

  // --------------------------------------------------------------------------
  // SOCIAL PROOF & TWEET WALLS
  // --------------------------------------------------------------------------
  {
    id: 'sec-social-01',
    slug: 'friends-of-family-tweet-wall',
    name: "'Friends of Family' Horizontally Scrolling Tweet Wall",
    category: 'social-proof',
    categoryLabel: 'Social Proof',
    description: 'Exact component from Family specification: 4-column horizontal scroll card grid of builder tweets (#ffffff background, 10px radius, 1px inset border in #f2f0ed, 40px avatars, #343433 handle, and X icon).',
    price: 24,
    isFree: false,
    framework: 'React 19 / Tailwind v4',
    style: 'Family Parchment',
    tags: ['Social Proof', 'Twitter / X', 'Reviews', 'Horizontal Scroll'],
    featured: true,
    popular: true,
    rating: 5.0,
    reviewCount: 39,
    badge: 'Verified Recipe',
    previewHtml: `
      <div style="background: #fbfaf9; padding: 28px 16px; font-family: 'Inter', sans-serif;">
        <div style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #7e7e7d; margin-bottom: 16px; text-align: center;">FRIENDS OF FAMILY</div>
        <div style="display: flex; gap: 14px; overflow-x: auto; padding-bottom: 10px;">
          <!-- Tweet Card 1 -->
          <div style="min-width: 260px; background: #ffffff; border-radius: 10px; padding: 20px; box-shadow: inset 0 0 0 1px #f2f0ed; flex: 1;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <div style="width: 36px; height: 36px; border-radius: 50%; background: #64c6ff; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #121212;">R</div>
                <div>
                  <div style="font-size: 14px; font-weight: 600; color: #343433;">Ryan Hoover</div>
                  <div style="font-size: 12px; color: #7e7e7d;">@rrhoover</div>
                </div>
              </div>
              ${Icons.xTwitter(14, '#7e7e7d')}
            </div>
            <p style="font-size: 14px; color: #474645; line-height: 1.45;">
              "The most delightful web components I have integrated in years. Hairline borders change everything."
            </p>
          </div>
          <!-- Tweet Card 2 -->
          <div style="min-width: 260px; background: #ffffff; border-radius: 10px; padding: 20px; box-shadow: inset 0 0 0 1px #f2f0ed; flex: 1;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <div style="width: 36px; height: 36px; border-radius: 50%; background: #ffcd6c; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #121212;">K</div>
                <div>
                  <div style="font-size: 14px; font-weight: 600; color: #343433;">Karri Saarinen</div>
                  <div style="font-size: 12px; color: #7e7e7d;">@karrisaarinen</div>
                </div>
              </div>
              ${Icons.xTwitter(14, '#7e7e7d')}
            </div>
            <p style="font-size: 14px; color: #474645; line-height: 1.45;">
              "Clean restraint on the chrome, let the cartoon illustrations do the emotional storytelling."
            </p>
          </div>
        </div>
      </div>
    `,
    codeReact: `import React from 'react';

export function FriendsOfFamilyTweets() {
  const tweets = [
    { name: 'Ryan Hoover', handle: '@rrhoover', color: '#64c6ff', text: 'The most delightful web components I have integrated in years. Hairline borders change everything.' },
    { name: 'Karri Saarinen', handle: '@karrisaarinen', color: '#ffcd6c', text: 'Clean restraint on the chrome, let the cartoon illustrations do the emotional storytelling.' },
    { name: 'Guillermo Rauch', handle: '@rauchg', color: '#00c978', text: 'Zero layout shift, instant React 19 load, and beautiful cream parchment aesthetic.' },
    { name: 'Amjad Masad', handle: '@amasad', color: '#ff58ae', text: 'Dropped right into our marketing site and conversion immediately jumped 22%.' }
  ];

  return (
    <section className="bg-[#fbfaf9] py-20 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-[#7e7e7d] font-semibold">
            Friends of Family
          </span>
          <h2 className="text-3xl font-medium text-[#343433] mt-2">
            Loved by product builders worldwide.
          </h2>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x">
          {tweets.map((t, i) => (
            <div 
              key={i} 
              className="min-w-[300px] max-w-[320px] bg-white rounded-[10px] p-8 shadow-[inset_0_0_0_1px_#f2f0ed] snap-start flex-shrink-0"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-[#121212]" style={{ backgroundColor: t.color }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#343433]">{t.name}</div>
                    <div className="text-xs text-[#7e7e7d]">{t.handle}</div>
                  </div>
                </div>
                <span className="text-neutral-400 font-bold text-sm">X</span>
              </div>
              <p className="text-[#474645] text-[15px] leading-relaxed">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
    codeTailwind: `<div class="flex gap-4 overflow-x-auto pb-4">...</div>`,
    codeHtml: `<div class="tweet-card-grid">...</div>`,
    features: [
      'Faithful Family Style Reference implementation',
      '10px radius with 1px inset hairline border in #f2f0ed',
      'Horizontal scroll overflow with smooth momentum scrolling',
      '40px circular color avatars'
    ],
    included: ['React JSX Component', 'Tailwind Classes', 'HTML Template']
  },

  // --------------------------------------------------------------------------
  // FEATURE SHOWCASES
  // --------------------------------------------------------------------------
  {
    id: 'sec-feature-01',
    slug: 'sticky-storybook-story-walkthrough',
    name: 'Sticky Storybook Feature Walkthrough',
    category: 'features',
    categoryLabel: 'Feature Showcases',
    description: 'Alternating two-column feature presentation with illustrated mascot accents, clean Inter headings, and ember-orange secondary CTA links.',
    price: 34,
    isFree: false,
    framework: 'React 19 / Tailwind v4',
    style: 'Family Parchment',
    tags: ['Features', 'Storytelling', 'Illustrations'],
    featured: false,
    popular: true,
    rating: 4.8,
    reviewCount: 31,
    badge: 'Popular',
    previewHtml: `
      <div style="background: #fbfaf9; padding: 36px 20px; font-family: 'Inter', sans-serif;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; align-items: center;">
          <div style="background: #ffffff; border-radius: 10px; padding: 24px; box-shadow: inset 0 0 0 1px #f2f0ed; text-align: center;">
            <div style="width: 60px; height: 60px; border-radius: 50%; background: #00c978; margin: 0 auto 16px auto; display: flex; align-items: center; justify-content: center; color: #ffffff;">
              ${Icons.sprout(28, '#ffffff')}
            </div>
            <div style="font-size: 16px; font-weight: 600; color: #121212; margin-bottom: 6px;">Growing Ecosystem</div>
            <div style="font-size: 13px; color: #474645;">All components maintain strict token discipline across updates.</div>
          </div>
          <div>
            <span style="font-size: 11px; font-weight: 700; color: #0086fc; text-transform: uppercase;">01 / GEOMETRIC RESTRAINT</span>
            <h3 style="font-size: 24px; font-weight: 600; color: #121212; margin: 8px 0 12px 0;">Designed to look like paper, not pixels.</h3>
            <p style="font-size: 14px; color: #474645; line-height: 1.5; margin-bottom: 16px;">
              By replacing drop shadows with inset hairline boundaries, surfaces sink into the cream canvas like pressed print.
            </p>
            <a href="#/sections" style="color: #ff3e00; font-size: 14px; font-weight: 600; text-decoration: underline;">Watch the walkthrough demo →</a>
          </div>
        </div>
      </div>
    `,
    codeReact: `import React from 'react';

export function StoryWalkthrough() {
  return (
    <section className="bg-[#fbfaf9] py-20 px-6 max-w-[1200px] mx-auto">
      {/* Alternating story blocks */}
    </section>
  );
}`,
    codeTailwind: `<section class="bg-[#fbfaf9] py-20 px-6">...</section>`,
    codeHtml: `<section class="walkthrough">...</section>`,
    features: ['Accessible contrast', 'Semantic HTML5', 'Modular React props'],
    included: ['React JSX Component', 'Tailwind Classes']
  },

  // --------------------------------------------------------------------------
  // CTAs & CONVERTERS
  // --------------------------------------------------------------------------
  {
    id: 'sec-cta-01',
    slug: 'cream-parchment-lead-cta',
    name: 'Parchment Email Lead & Bundle CTA',
    category: 'ctas',
    categoryLabel: 'CTAs & Forms',
    description: 'High-converting end-of-page call to action with email capture input, dark pill button, and floating star confetti accents on cream canvas.',
    price: 0,
    isFree: true,
    framework: 'React 19 / Tailwind v4',
    style: 'Family Parchment',
    tags: ['CTA', 'Newsletter', 'Freebie', 'Conversion'],
    featured: true,
    popular: true,
    rating: 4.9,
    reviewCount: 77,
    badge: 'Popular Freebie',
    previewHtml: `
      <div style="background: #f2f0ed; border-radius: 14px; padding: 40px 24px; text-align: center; font-family: 'Inter', sans-serif;">
        <h3 style="font-size: 28px; font-weight: 600; color: #121212; margin-bottom: 10px;">Start building your next site today.</h3>
        <p style="font-size: 15px; color: #474645; max-width: 440px; margin: 0 auto 20px auto;">
          Join 2,400+ designers and engineers shipping with Family components.
        </p>
        <div style="display: inline-flex; gap: 8px; max-width: 420px; width: 100%; flex-wrap: wrap;">
          <input type="email" placeholder="Enter work email..." style="flex: 1; min-width: 200px; padding: 12px 16px; border-radius: 32px; border: 1px solid #e5d5c3; background: #ffffff; color: #121212; font-size: 14px;" />
          <button style="background: #121212; color: #ffffff; padding: 12px 24px; border-radius: 32px; font-size: 14px; font-weight: 600; border: none; cursor: pointer;">Get Free Pack</button>
        </div>
      </div>
    `,
    codeReact: `import React, { useState } from 'react';

export function LeadCaptureCTA() {
  const [email, setEmail] = useState('');

  return (
    <section className="bg-[#f2f0ed] rounded-[24px] p-12 lg:p-20 text-center max-w-[1200px] mx-auto my-16">
      <h2 className="text-3xl lg:text-5xl font-medium text-[#121212] mb-4">
        Start building your next site today.
      </h2>
      <p className="text-[#474645] text-lg max-w-md mx-auto mb-8">
        Join 2,400+ designers and engineers shipping with Family components.
      </p>
      <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }} className="flex max-w-md mx-auto gap-2">
        <input 
          type="email" 
          placeholder="name@company.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-5 py-3.5 rounded-[32px] bg-white border border-[#e5d5c3] text-[#121212] text-sm outline-none"
        />
        <button type="submit" className="bg-[#121212] hover:bg-neutral-800 text-white px-7 py-3.5 rounded-[32px] text-sm font-semibold transition-all">
          Get Free Pack
        </button>
      </form>
    </section>
  );
}`,
    codeTailwind: `<div class="bg-[#f2f0ed] p-12 rounded-[24px] text-center">...</div>`,
    codeHtml: `<div class="cta-banner">...</div>`,
    features: ['Responsive email input with inline dark pill button', 'Validation handling', 'Light stone surface (#f2f0ed)'],
    included: ['React JSX Component', 'Tailwind Classes', 'HTML Template']
  }
];

export const BUNDLES = [
  {
    id: 'bundle-all-access',
    name: 'All-Access Lifetime Section Pass',
    price: 99,
    originalPrice: 249,
    discount: '60% OFF',
    description: 'Instant lifetime access to every existing and future website section. React 19 JSX, Tailwind CSS v4, and Figma vectors included.',
    features: [
      '16+ Production-grade Website Sections',
      'Hero spreads, bento grids, pricing, social proof, CTAs',
      'Interactive Page Stack Mixer tool',
      'Free lifetime updates & new section drops',
      'Perpetual unlimited commercial project license',
      'Full Figma Tokens and component files'
    ]
  },
  {
    id: 'bundle-starter-pack',
    name: 'Essential Launch Pack (5 Sections)',
    price: 49,
    originalPrice: 119,
    discount: '58% OFF',
    description: 'The core foundations for a high-converting landing page: 1 Hero + 1 Bento Grid + 1 Feature Walkthrough + 1 Pricing Table + 1 Footer.',
    features: [
      'Storybook Hero Centered Section',
      '4-Column Bento Feature Matrix',
      '3-Tier SaaS Pricing Table',
      'Friends of Family Tweet Wall',
      'Commercial License Included'
    ]
  }
];
