/**
 * Azarel Design Asset Data Architecture
 * Dark Mode Default UI Previews
 * Strongly typed structure representing premium design assets across:
 * - sections, components, icons, templates, illustrations, resources
 */

export const CATEGORIES = [
  { id: 'sections', name: 'Sections', count: 8, icon: 'grid', desc: 'Pre-built landing page and marketing sections' },
  { id: 'components', name: 'Components', count: 12, icon: 'layers', desc: 'Atomic, accessible, and reactive UI primitives' },
  { id: 'icons', name: 'Icons', count: 6, icon: 'feather', desc: 'Pixel-perfect 24px zinc line and solid icon sets' },
  { id: 'templates', name: 'Templates', count: 6, icon: 'layout', desc: 'Complete production-ready web application & site templates' },
  { id: 'illustrations', name: 'Illustrations', count: 5, icon: 'image', desc: 'Editorial zinc isometric and vector compositions' },
  { id: 'resources', name: 'Resources', count: 7, icon: 'box', desc: 'Design system kits, tokens, and developer tooling' }
];

export const FRAMEWORKS = ['React', 'Tailwind CSS', 'Vue', 'Figma', 'HTML/CSS'];
export const STYLES = ['Editorial Zinc', 'Minimal', 'Bento Grid', 'Modern Dark'];

export const PRODUCTS = [
  // --- SECTIONS ---
  {
    id: 'sec-01',
    slug: 'editorial-split-hero',
    name: 'Editorial Split Hero Grid',
    category: 'sections',
    description: 'High-impact editorial hero section with 64px display typography, inline rotating capability badges, compact email capture input, and client trust metrics.',
    price: 0,
    isFree: true,
    framework: 'React / Tailwind',
    style: 'Editorial Zinc',
    theme: 'dark',
    tags: ['Hero', 'Landing Page', 'Editorial', 'Conversion'],
    featured: true,
    popular: true,
    rating: 4.9,
    reviewCount: 38,
    badge: 'Popular Freebie',
    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" fill="%230d0d10"><rect width="600" height="400" fill="%230d0d10"/><rect x="40" y="50" width="120" height="24" rx="12" fill="%23ff5a00"/><text x="50" y="66" fill="%23ffffff" font-family="sans-serif" font-size="11" font-weight="bold">YC BATCH TAG</text><text x="40" y="125" fill="%23f4f4f5" font-family="sans-serif" font-size="36" font-weight="700">Digital Systems</text><text x="40" y="165" fill="%23f4f4f5" font-family="sans-serif" font-size="36" font-weight="700">Engineered for Scale.</text><rect x="40" y="200" width="300" height="12" rx="6" fill="%233f3f46"/><rect x="40" y="222" width="220" height="12" rx="6" fill="%2327272a"/><rect x="40" y="260" width="260" height="44" rx="14" fill="%2316161a" stroke="%2327272a"/><rect x="310" y="260" width="110" height="44" rx="14" fill="%23f4f4f5"/><circle cx="500" cy="180" r="70" fill="%2318181b" stroke="%233f3f46" stroke-width="2"/><circle cx="500" cy="180" r="40" fill="%2327272a"/></svg>',
    previewHtml: `
      <div style="padding: 40px; background: #0d0d10; color: #f4f4f5; font-family: var(--font-cosmica);">
        <div style="display: inline-block; background: #ff5a00; color: white; font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 12px; margin-bottom: 16px;">YC W24 BATCH VERIFIED</div>
        <h1 style="font-size: 38px; font-weight: 700; color: #f4f4f5; line-height: 1.15; margin-bottom: 14px; max-width: 540px;">Engineering clarity into complex interfaces.</h1>
        <p style="font-size: 15px; color: #a1a1aa; max-width: 480px; line-height: 1.5; margin-bottom: 24px;">Architectural grade UI infrastructure built with zinc geometry, hairline borders, and zero chromatic clutter.</p>
        <div style="display: flex; gap: 10px; max-width: 420px;">
          <input type="text" placeholder="Enter work email..." style="flex: 1; padding: 12px 16px; border-radius: 14px; border: 1px solid #27272a; background: #16161a; color: white;" />
          <button style="background: #f4f4f5; color: #09090b; padding: 12px 20px; border-radius: 14px; font-weight: 600;">Get Started</button>
        </div>
      </div>
    `,
    codeSnippet: `import React from 'react';

export function EditorialHero() {
  return (
    <section className="bg-[#09090b] py-20 px-6 lg:px-12 border-b border-[#27272a]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <span className="inline-flex items-center px-2.5 py-1 rounded-xl bg-[#ff5a00] text-white text-xs font-semibold tracking-wide uppercase mb-6">
            YC BATCH VERIFIED
          </span>
          <h1 className="text-4xl sm:text-6xl font-semibold text-[#f4f4f5] tracking-tight leading-[1.12] mb-6">
            Engineering clarity into complex interfaces.
          </h1>
          <p className="text-[#a1a1aa] text-lg max-w-xl leading-relaxed mb-8">
            Architectural grade UI infrastructure built with zinc geometry, hairline borders, and zero chromatic clutter.
          </p>
          <form className="flex max-w-md gap-2 bg-[#121215] p-1.5 rounded-[18px] border border-[#27272a]">
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="flex-1 px-4 py-2.5 text-sm text-white bg-transparent outline-none" 
            />
            <button className="bg-white text-[#09090b] font-semibold px-5 py-2.5 rounded-[14px] text-sm transition-all">
              Book demo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}`,
    features: [
      'Built strictly according to design.md tokens',
      'Dark mode native elevation with hairline borders',
      'Fully responsive for Mobile, Tablet, and Desktop',
      'Accessible semantic form validation states',
      'Zero layout shift (CLS 0.00)'
    ],
    included: ['React JSX Component', 'Tailwind CSS Utility Classes', 'Figma AutoLayout Node', 'HTML & Vanilla CSS Template']
  },

  {
    id: 'sec-02',
    slug: 'bento-metrics-grid',
    name: 'Bento Metrics & Proof Matrix',
    category: 'sections',
    description: 'A 4-column balanced bento grid presenting core platform statistics, partner badges, telemetry metrics, and live micro-cards.',
    price: 39,
    isFree: false,
    framework: 'React / Tailwind',
    style: 'Bento Grid',
    theme: 'dark',
    tags: ['Bento', 'Stats', 'Metrics', 'Social Proof'],
    featured: true,
    popular: true,
    rating: 4.8,
    reviewCount: 24,
    badge: 'Trending',
    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" fill="%230d0d10"><rect width="600" height="400" fill="%230d0d10"/><rect x="30" y="40" width="250" height="150" rx="24" fill="%2316161a" stroke="%2327272a"/><text x="50" y="90" fill="%23f4f4f5" font-family="sans-serif" font-size="32" font-weight="700">99.98%</text><text x="50" y="120" fill="%23a1a1aa" font-family="sans-serif" font-size="13">Uptime reliability guaranteed</text><rect x="300" y="40" width="270" height="150" rx="24" fill="%231f1f24" stroke="%2327272a"/><text x="325" y="90" fill="%23ffffff" font-family="sans-serif" font-size="28" font-weight="700">Zero Latency</text><text x="325" y="120" fill="%23a1a1aa" font-family="sans-serif" font-size="13">Edge propagation in &lt;14ms</text><rect x="30" y="210" width="540" height="150" rx="24" fill="%2316161a" stroke="%2327272a"/><circle cx="80" cy="285" r="28" fill="%23ff5a00"/><text x="130" y="280" fill="%23f4f4f5" font-family="sans-serif" font-size="20" font-weight="600">Enterprise Verified Security</text><text x="130" y="305" fill="%2371717a" font-family="sans-serif" font-size="13">SOC2 Type II + GDPR Compliant Infrastructure</text></svg>',
    previewHtml: `
      <div style="padding: 32px; background: #0d0d10; display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; font-family: var(--font-cosmica);">
        <div style="background: #16161a; border: 1px solid #27272a; border-radius: 28px; padding: 24px;">
          <div style="font-size: 38px; font-weight: 700; color: #f4f4f5;">99.99%</div>
          <div style="font-size: 14px; color: #a1a1aa; margin-top: 6px;">Global cluster availability</div>
        </div>
        <div style="background: #1f1f24; border: 1px solid #27272a; border-radius: 28px; padding: 24px; color: white;">
          <div style="font-size: 38px; font-weight: 700; color: #ffffff;">&lt;12ms</div>
          <div style="font-size: 14px; color: #a1a1aa; margin-top: 6px;">Global edge response times</div>
        </div>
      </div>
    `,
    codeSnippet: `export function BentoStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto my-12">
      <div className="bg-[#121215] border border-[#27272a] p-7 rounded-[36px]">
        <span className="text-4xl font-bold text-[#f4f4f5]">20,000+</span>
        <p className="text-sm text-[#a1a1aa] mt-2">Active production deployments</p>
      </div>
      <div className="bg-[#18181b] border border-[#27272a] p-7 rounded-[36px] text-white">
        <span className="text-4xl font-bold text-white">99.99%</span>
        <p className="text-sm text-[#a1a1aa] mt-2">Guaranteed global availability</p>
      </div>
      <div className="bg-[#121215] border border-[#27272a] p-7 rounded-[36px]">
        <span className="text-4xl font-bold text-[#f4f4f5]">140+</span>
        <p className="text-sm text-[#a1a1aa] mt-2">Enterprise integrations</p>
      </div>
    </div>
  );
}`,
    features: ['Modular responsive bento grid', 'Hairline border elevation', 'Dark and light surface variants', 'Figma autolayout included'],
    included: ['React Component', 'Vue 3 Template', 'Figma File', 'Tailwind Config']
  },

  {
    id: 'sec-03',
    slug: 'dark-pain-point-feature',
    name: 'Inverted Dark Pain-Point Feature',
    category: 'sections',
    description: 'Inverted #27272a deep dark surface block with high-contrast Cosmica headings and signature right-arrow list item accents.',
    price: 29,
    isFree: false,
    framework: 'React / HTML',
    style: 'Modern Dark',
    theme: 'dark',
    tags: ['Feature Block', 'Dark Surface', 'Comparison', 'List'],
    featured: true,
    popular: false,
    rating: 4.7,
    reviewCount: 16,
    badge: 'Design.md Spec',
    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" fill="%23121215"><rect width="600" height="400" fill="%23121215"/><text x="50" y="80" fill="%23ffffff" font-family="sans-serif" font-size="28" font-weight="700">Why Legacy UI Slows Teams Down</text><line x1="50" y1="120" x2="550" y2="120" stroke="%2327272a"/><path d="M60 160 L75 160 M70 155 L75 160 L70 165" stroke="%23ff5a00" stroke-width="2.5" fill="none"/><text x="95" y="165" fill="%23e4e4e7" font-family="sans-serif" font-size="17">Inconsistent design tokens and fragmented style sheets</text><line x1="50" y1="200" x2="550" y2="200" stroke="%2327272a"/><path d="M60 240 L75 240 M70 235 L75 240 L70 245" stroke="%23ff5a00" stroke-width="2.5" fill="none"/><text x="95" y="245" fill="%23e4e4e7" font-family="sans-serif" font-size="17">Heavy shadow-based elevation creating visual noise</text><line x1="50" y1="280" x2="550" y2="280" stroke="%2327272a"/><path d="M60 320 L75 320 M70 315 L75 320 L70 325" stroke="%23ff5a00" stroke-width="2.5" fill="none"/><text x="95" y="325" fill="%23e4e4e7" font-family="sans-serif" font-size="17">Multi-color clutter distracting from core product workflows</text></svg>',
    previewHtml: `
      <div style="background: #121215; padding: 36px; border-radius: 28px; color: white; font-family: var(--font-cosmica); border: 1px solid #27272a;">
        <h3 style="font-size: 26px; font-weight: 700; margin-bottom: 20px;">The friction of bloated UI kits</h3>
        <div style="border-top: 1px solid #27272a; padding: 14px 0; display: flex; align-items: center; gap: 12px;">
          <span style="color: #ff5a00; font-size: 20px;">→</span>
          <span style="font-size: 15px; color: #d4d4d8;">Over-styled drop shadows fighting content hierarchy</span>
        </div>
        <div style="border-top: 1px solid #27272a; padding: 14px 0; display: flex; align-items: center; gap: 12px;">
          <span style="color: #ff5a00; font-size: 20px;">→</span>
          <span style="font-size: 15px; color: #d4d4d8;">Random corner radii creating visual dissonance</span>
        </div>
      </div>
    `,
    codeSnippet: `export function DarkFeatureCard() {
  const points = [
    "Over-styled drop shadows fighting content hierarchy",
    "Inconsistent corner radii creating layout dissonance",
    "Arbitrary brand colors obscuring functional signals"
  ];
  return (
    <div className="bg-[#121215] rounded-[36px] p-10 border border-[#27272a] text-white">
      <h3 className="text-3xl font-bold mb-8">Why engineering teams switch to zinc</h3>
      <div className="space-y-4">
        {points.map((p, i) => (
          <div key={i} className="flex items-center gap-4 py-3 border-b border-[#27272a] last:border-b-0">
            <span className="text-[#ff5a00] font-bold text-xl">→</span>
            <span className="text-lg font-medium text-white">{p}</span>
          </div>
        ))}
      </div>
    </div>
  );
}`,
    features: ['Strict design.md dark block layout', 'Orange accent bullet icons', 'Deep contrast without pure black', 'Keyboard accessible'],
    included: ['React Component', 'HTML & Tailwind Snippet']
  },

  // --- UI COMPONENTS ---
  {
    id: 'cmp-01',
    slug: 'command-palette-modal',
    name: 'Zinc Command Palette (Cmd+K)',
    category: 'components',
    description: 'Fast, keyboard-navigable search and command modal with grouped results, recent actions, and hairline divider accents.',
    price: 0,
    isFree: true,
    framework: 'React / Tailwind',
    style: 'Editorial Zinc',
    theme: 'dark',
    tags: ['Modal', 'Navigation', 'Search', 'Keyboard'],
    featured: true,
    popular: true,
    rating: 5.0,
    reviewCount: 42,
    badge: 'Staff Pick',
    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" fill="%230d0d10"><rect width="600" height="400" fill="%230d0d10"/><rect x="80" y="50" width="440" height="300" rx="28" fill="%2316161a" stroke="%2327272a"/><rect x="110" y="80" width="380" height="42" rx="12" fill="%231f1f24"/><text x="130" y="106" fill="%23a1a1aa" font-family="sans-serif" font-size="14">Type a command or search assets...</text><rect x="440" y="90" width="38" height="22" rx="6" fill="%2327272a" stroke="%233f3f46"/><text x="448" y="105" fill="%23d4d4d8" font-family="sans-serif" font-size="11">⌘K</text><line x1="110" y1="145" x2="490" y2="145" stroke="%2327272a"/><rect x="110" y="165" width="380" height="48" rx="12" fill="%2327272a"/><text x="130" y="195" fill="%23ffffff" font-family="sans-serif" font-size="14" font-weight="600">Browse Component Marketplace</text><rect x="110" y="225" width="380" height="48" rx="12" fill="%2316161a"/><text x="130" y="255" fill="%23a1a1aa" font-family="sans-serif" font-size="14">Download Figma Token Kit</text></svg>',
    previewHtml: `
      <div style="background: #16161a; border: 1px solid #27272a; border-radius: 24px; padding: 24px; max-width: 460px; margin: 0 auto;">
        <input type="text" placeholder="Search components, sections, tokens..." style="width: 100%; padding: 12px 16px; border-radius: 14px; border: 1px solid #27272a; background: #0d0d10; color: white; outline: none; margin-bottom: 16px; font-size: 14px;" value="Editorial Hero" />
        <div style="font-size: 12px; color: #71717a; text-transform: uppercase; margin-bottom: 8px;">Sections</div>
        <div style="background: #27272a; padding: 10px 14px; border-radius: 12px; font-size: 14px; font-weight: 500; color: #ffffff;">Editorial Split Hero Grid</div>
      </div>
    `,
    codeSnippet: `export function CommandPalette({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-[#09090b]/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-[#121215] rounded-[28px] border border-[#27272a] shadow-2xl max-w-lg w-full overflow-hidden">
        <div className="p-4 border-b border-[#27272a] flex items-center gap-3">
          <input 
            type="text" 
            placeholder="Type a command or search..." 
            className="w-full text-sm outline-none text-[#f4f4f5] placeholder-[#71717a] bg-transparent" 
            autoFocus 
          />
          <kbd className="px-2 py-0.5 text-xs bg-[#18181b] border border-[#27272a] rounded-md text-[#a1a1aa]">ESC</kbd>
        </div>
      </div>
    </div>
  );
}`,
    features: ['Full keyboard accessibility (Arrow keys, Enter, Esc)', 'Fuzzy search matching algorithm', 'Tailwind CSS classes', 'Zero bundle bloat'],
    included: ['React Hook & Component', 'Vue 3 Composable', 'Vanilla JS Wrapper']
  },

  {
    id: 'cmp-02',
    slug: 'pill-segmented-control',
    name: '10000px Pill Segmented Control',
    category: 'components',
    description: 'Smooth sliding tab switch featuring the signature 10000px pill radius and hairline active shadow.',
    price: 19,
    isFree: false,
    framework: 'React / Tailwind',
    style: 'Editorial Zinc',
    theme: 'dark',
    tags: ['Pill', 'Tabs', 'Navigation', 'Micro-interaction'],
    featured: false,
    popular: true,
    rating: 4.9,
    reviewCount: 19,
    badge: '10000px Radius',
    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" fill="%230d0d10"><rect width="600" height="400" fill="%230d0d10"/><rect x="100" y="160" width="400" height="60" rx="30" fill="%2316161a" stroke="%2327272a"/><rect x="106" y="166" width="124" height="48" rx="24" fill="%23f4f4f5"/><text x="145" y="196" fill="%2309090b" font-family="sans-serif" font-size="14" font-weight="700">Preview</text><text x="260" y="196" fill="%23a1a1aa" font-family="sans-serif" font-size="14">Components</text><text x="390" y="196" fill="%23a1a1aa" font-family="sans-serif" font-size="14">Changelog</text></svg>',
    previewHtml: `
      <div style="padding: 20px; display: flex; justify-content: center; background: #121215;">
        <div style="background: #18181b; padding: 6px; border-radius: 10000px; display: inline-flex; gap: 4px; border: 1px solid #27272a;">
          <button style="background: #f4f4f5; color: #09090b; padding: 8px 18px; border-radius: 10000px; font-size: 13px; font-weight: 600;">Preview</button>
          <button style="background: transparent; color: #a1a1aa; padding: 8px 18px; border-radius: 10000px; font-size: 13px; font-weight: 500;">Code</button>
          <button style="background: transparent; color: #a1a1aa; padding: 8px 18px; border-radius: 10000px; font-size: 13px; font-weight: 500;">History</button>
        </div>
      </div>
    `,
    codeSnippet: `export function PillSegmentedControl({ items, activeIndex, onChange }) {
  return (
    <div className="inline-flex p-1 bg-[#18181b] rounded-full border border-[#27272a]">
      {items.map((item, idx) => (
        <button
          key={item}
          onClick={() => onChange(idx)}
          className={\`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 \${
            activeIndex === idx 
              ? 'bg-[#f4f4f5] text-[#09090b] font-semibold' 
              : 'text-[#a1a1aa] hover:text-white'
          }\`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}`,
    features: ['10000px pill radius geometry', 'Accessible ARIA tab roles', 'Framer Motion sliding indicator option', 'Keyboard left/right arrow navigation'],
    included: ['React Component', 'CSS Module', 'Tailwind Config']
  },

  {
    id: 'cmp-03',
    slug: 'interactive-filter-bar',
    name: 'Multi-Criteria Filter Pill Bar',
    category: 'components',
    description: 'Compact marketplace filter bar with count chips, active indicators, and collapsible secondary facets.',
    price: 24,
    isFree: false,
    framework: 'React / Tailwind',
    style: 'Editorial Zinc',
    theme: 'dark',
    tags: ['Filter', 'Marketplace', 'E-commerce', 'Search'],
    featured: false,
    popular: false,
    rating: 4.7,
    reviewCount: 11,
    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" fill="%230d0d10"><rect width="600" height="400" fill="%230d0d10"/><rect x="60" y="160" width="100" height="40" rx="20" fill="%23f4f4f5"/><text x="90" y="185" fill="%2309090b" font-family="sans-serif" font-size="13" font-weight="700">All (42)</text><rect x="175" y="160" width="120" height="40" rx="20" fill="%2316161a" stroke="%2327272a"/><text x="200" y="185" fill="%23d4d4d8" font-family="sans-serif" font-size="13">Free Only</text><rect x="310" y="160" width="110" height="40" rx="20" fill="%2316161a" stroke="%2327272a"/><text x="335" y="185" fill="%23d4d4d8" font-family="sans-serif" font-size="13">React</text><rect x="435" y="160" width="105" height="40" rx="20" fill="%2316161a" stroke="%2327272a"/><text x="455" y="185" fill="%23d4d4d8" font-family="sans-serif" font-size="13">Tailwind</text></svg>',
    previewHtml: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap; padding: 20px; background: #121215; border-radius: 16px;">
        <button style="background: #f4f4f5; color: #09090b; padding: 6px 14px; border-radius: 999px; font-size: 13px; font-weight: 600;">All Assets (24)</button>
        <button style="background: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 6px 14px; border-radius: 999px; font-size: 13px;">Free Only</button>
        <button style="background: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 6px 14px; border-radius: 999px; font-size: 13px;">React</button>
        <button style="background: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 6px 14px; border-radius: 999px; font-size: 13px;">Tailwind</button>
      </div>
    `,
    codeSnippet: `export function FilterBar({ filters, active, onChange }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2">
      {filters.map(f => (
        <button
          key={f.id}
          onClick={() => onChange(f.id)}
          className={\`px-4 py-2 text-xs font-medium rounded-full border transition \${
            active === f.id
              ? 'bg-white text-[#09090b] font-semibold border-white'
              : 'bg-[#18181b] text-[#d4d4d8] border-[#27272a] hover:border-[#3f3f46]'
          }\`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}`,
    features: ['Dynamic query param sync', 'Mobile scrollable overflow', 'Badge counts integration'],
    included: ['React Component', 'TypeScript definitions']
  },

  // --- ICONS ---
  {
    id: 'ico-01',
    slug: 'precision-zinc-line-icons',
    name: '24px Precision Zinc Line Icons',
    category: 'icons',
    description: 'A curated collection of 180+ razor-sharp 24px line icons constructed on a 2px geometric grid with consistent stroke weight.',
    price: 0,
    isFree: true,
    framework: 'SVG / React Icons',
    style: 'Editorial Zinc',
    theme: 'dark',
    tags: ['Icons', 'SVG', 'Line Icons', 'System Icons'],
    featured: true,
    popular: true,
    rating: 5.0,
    reviewCount: 56,
    badge: '100% Free',
    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" fill="%230d0d10"><rect width="600" height="400" fill="%230d0d10"/><g stroke="%23f4f4f5" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="100" cy="120" r="28"/><rect x="220" y="92" width="56" height="56" rx="14"/><path d="M370 120 L410 120 M390 100 L410 120 L390 140"/><path d="M500 95 L535 145 L465 145 Z"/><circle cx="100" cy="270" r="28"/><path d="M90 270 L98 278 L114 262"/><rect x="220" y="242" width="56" height="56" rx="28"/><circle cx="390" cy="270" r="14"/><path d="M480 250 L520 290 M520 250 L480 290"/></g></svg>',
    previewHtml: `
      <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px; padding: 28px; background: #121215; text-align: center; color: white;">
        <div style="border: 1px solid #27272a; border-radius: 16px; padding: 14px; font-size: 20px;">⚡</div>
        <div style="border: 1px solid #27272a; border-radius: 16px; padding: 14px; font-size: 20px;">⌕</div>
        <div style="border: 1px solid #27272a; border-radius: 16px; padding: 14px; font-size: 20px;">⌘</div>
        <div style="border: 1px solid #27272a; border-radius: 16px; padding: 14px; font-size: 20px;">↗</div>
        <div style="border: 1px solid #27272a; border-radius: 16px; padding: 14px; font-size: 20px;">⚙</div>
        <div style="border: 1px solid #27272a; border-radius: 16px; padding: 14px; font-size: 20px;">★</div>
      </div>
    `,
    codeSnippet: `export function ArrowRightIcon({ size = 24, color = "currentColor", ...props }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}`,
    features: ['Pixel-snapped 24x24 viewBox', 'Uniform 1.5px & 2px stroke weights', 'Zero extraneous anchor points', 'Figma Icon Component Library'],
    included: ['180+ SVG Source Files', 'React Lucide-compatible bundle', 'Figma .fig Asset File']
  },

  {
    id: 'ico-02',
    slug: 'developer-framework-badges',
    name: 'Developer Framework & Tool Glyphs',
    category: 'icons',
    description: 'Precision monochrome brand glyphs for React, Next.js, Vite, TypeScript, Tailwind, GraphQL, and Figma.',
    price: 15,
    isFree: false,
    framework: 'SVG / Figma',
    style: 'Minimal',
    theme: 'dark',
    tags: ['Tech Stack', 'Logos', 'Frameworks', 'Monochrome'],
    featured: false,
    popular: true,
    rating: 4.8,
    reviewCount: 22,
    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" fill="%230d0d10"><rect width="600" height="400" fill="%230d0d10"/><rect x="80" y="100" width="80" height="80" rx="20" fill="%2316161a" stroke="%2327272a"/><text x="110" y="150" font-family="sans-serif" font-size="28" fill="%23f4f4f5" font-weight="700">⚛</text><rect x="200" y="100" width="80" height="80" rx="20" fill="%2316161a" stroke="%2327272a"/><text x="225" y="150" font-family="sans-serif" font-size="22" fill="%23f4f4f5" font-weight="700">TS</text><rect x="320" y="100" width="80" height="80" rx="20" fill="%2316161a" stroke="%2327272a"/><text x="345" y="150" font-family="sans-serif" font-size="24" fill="%23f4f4f5" font-weight="700">▲</text><rect x="440" y="100" width="80" height="80" rx="20" fill="%2316161a" stroke="%2327272a"/><text x="465" y="150" font-family="sans-serif" font-size="24" fill="%23f4f4f5" font-weight="700">V</text></svg>',
    previewHtml: `
      <div style="display: flex; justify-content: center; gap: 16px; padding: 24px; background: #121215; color: white;">
        <span style="border: 1px solid #27272a; border-radius: 12px; padding: 8px 14px; font-weight: 600; font-size: 14px;">Next.js</span>
        <span style="border: 1px solid #27272a; border-radius: 12px; padding: 8px 14px; font-weight: 600; font-size: 14px;">React 19</span>
        <span style="border: 1px solid #27272a; border-radius: 12px; padding: 8px 14px; font-weight: 600; font-size: 14px;">Tailwind v4</span>
        <span style="border: 1px solid #27272a; border-radius: 12px; padding: 8px 14px; font-weight: 600; font-size: 14px;">TypeScript</span>
      </div>
    `,
    codeSnippet: `<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#18181b] border border-[#27272a] text-xs font-semibold text-[#f4f4f5]">
  <ReactIcon className="w-3.5 h-3.5" /> React 19 Ready
</span>`,
    features: ['Standardized 24px and 32px scales', 'Monochrome zinc styling', 'No color banding'],
    included: ['SVG Glyphs', 'React JSX components']
  },

  // --- TEMPLATES ---
  {
    id: 'tpl-01',
    slug: 'azarel-editorial-saas-template',
    name: 'Azarel Editorial SaaS Template',
    category: 'templates',
    description: 'The definitive editorial zinc SaaS landing page and product dashboard template. 12 responsive pages with hairline borders and Cosmica typography.',
    price: 79,
    isFree: false,
    framework: 'Next.js 15 / React / Tailwind',
    style: 'Editorial Zinc',
    theme: 'dark',
    tags: ['SaaS', 'Full Template', 'Landing Page', 'Dashboard'],
    featured: true,
    popular: true,
    rating: 4.9,
    reviewCount: 68,
    badge: 'Best Seller',
    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" fill="%230d0d10"><rect width="600" height="400" fill="%230d0d10"/><rect x="50" y="40" width="500" height="320" rx="36" fill="%2316161a" stroke="%2327272a"/><rect x="70" y="60" width="460" height="40" rx="16" fill="%231f1f24"/><circle cx="90" cy="80" r="6" fill="%23ff5a00"/><text x="110" y="85" fill="%23ffffff" font-family="sans-serif" font-size="12" font-weight="600">azarel.system / editorial-saas</text><rect x="70" y="120" width="220" height="24" rx="8" fill="%23f4f4f5"/><rect x="70" y="155" width="160" height="12" rx="4" fill="%2371717a"/><rect x="70" y="180" width="100" height="36" rx="14" fill="%23ffffff"/><rect x="330" y="120" width="200" height="140" rx="20" fill="%231f1f24" stroke="%2327272a"/><circle cx="430" cy="180" r="30" fill="%2327272a"/><text x="415" y="185" fill="%23ffffff" font-family="sans-serif" font-size="14">▶</text></svg>',
    previewHtml: `
      <div style="background: #121215; border-radius: 28px; border: 1px solid #27272a; padding: 32px; font-family: var(--font-cosmica); color: white;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
          <div style="font-weight: 700; font-size: 20px;">AZAREL.OS</div>
          <button style="background: #f4f4f5; color: #09090b; padding: 8px 18px; border-radius: 14px; font-size: 13px; font-weight: 600;">Live Preview ↗</button>
        </div>
        <p style="color: #a1a1aa; font-size: 15px;">Complete SaaS infrastructure with authentication flows, billing tables, and telemetry charts.</p>
      </div>
    `,
    codeSnippet: `// App Router page.tsx
import { HeroSection } from '@/components/HeroSection';
import { BentoMetrics } from '@/components/BentoMetrics';
import { PricingCards } from '@/components/PricingCards';

export default function SaaSPage() {
  return (
    <main className="min-h-screen bg-[#09090b]">
      <HeroSection />
      <BentoMetrics />
      <PricingCards />
    </main>
  );
}`,
    features: [
      '12 pre-built pages (Landing, Pricing, Docs, Auth, Settings, Analytics)',
      'Next.js 15 App Router + Server Components',
      'Strict adherence to design.md geometry (36px cards, 14px buttons)',
      'Built-in light and dark inverted blocks'
    ],
    included: ['Complete Next.js Source Code', 'Tailwind CSS v4 Configuration', 'Figma Production File', 'Commercial License']
  },

  {
    id: 'tpl-02',
    slug: 'developer-portfolio-minimal',
    name: 'Staff Engineer Portfolio & Writing Canvas',
    category: 'templates',
    description: 'Clean, fast, markdown-ready personal portfolio built for senior software engineers, founders, and technical architects.',
    price: 49,
    isFree: false,
    framework: 'React / Astro / Tailwind',
    style: 'Minimal',
    theme: 'dark',
    tags: ['Portfolio', 'Developer', 'Blog', 'Minimal'],
    featured: false,
    popular: true,
    rating: 4.8,
    reviewCount: 31,
    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" fill="%230d0d10"><rect width="600" height="400" fill="%230d0d10"/><rect x="60" y="50" width="480" height="300" rx="36" fill="%2316161a" stroke="%2327272a"/><text x="90" y="110" font-family="sans-serif" font-size="28" font-weight="700" fill="%23f4f4f5">Alex Vance</text><text x="90" y="140" font-family="sans-serif" font-size="14" fill="%23a1a1aa">Principal Systems Architect · San Francisco</text><line x1="90" y1="170" x2="510" y2="170" stroke="%2327272a"/><text x="90" y="210" font-family="sans-serif" font-size="16" font-weight="600" fill="%23ffffff">Selected Works</text><text x="90" y="240" font-family="sans-serif" font-size="13" fill="%23a1a1aa">01 / Distributed Consensus Engine in Rust</text><text x="90" y="270" font-family="sans-serif" font-size="13" fill="%23a1a1aa">02 / High-Throughput Realtime Event Stream</text></svg>',
    previewHtml: `
      <div style="background: #16161a; padding: 28px; border-radius: 24px; border: 1px solid #27272a; color: white;">
        <h4 style="font-size: 20px; font-weight: 700; color: #f4f4f5;">Alex Vance</h4>
        <p style="font-size: 13px; color: #a1a1aa; margin-bottom: 16px;">Principal Systems Architect</p>
        <p style="font-size: 14px; color: #d4d4d8; line-height: 1.6;">Writing about distributed systems, type safety, and ergonomic interface engineering.</p>
      </div>
    `,
    codeSnippet: `export function PortfolioLayout({ children }) {
  return (
    <div className="max-w-[760px] mx-auto px-6 py-20 font-sans">
      <header className="mb-16">
        <h1 className="text-3xl font-bold text-white">Staff Portfolio</h1>
        <p className="text-sm text-[#a1a1aa] mt-2">Writing, artifacts, and systems.</p>
      </header>
      <main>{children}</main>
    </div>
  );
}`,
    features: ['100/100 Lighthouse Performance score', 'Built-in MDX blog engine', 'SEO meta tag generator', 'Zero CSS dependencies'],
    included: ['Astro + React codebase', 'Markdown templates', 'Figma layout']
  },

  // --- ILLUSTRATIONS ---
  {
    id: 'ill-01',
    slug: 'zinc-isometric-wireframes',
    name: 'Zinc Isometric System Wireframes',
    category: 'illustrations',
    description: '24 technical isometric vector illustrations depicting cloud nodes, microservices, databases, and UI layers.',
    price: 35,
    isFree: false,
    framework: 'SVG / Illustrator / Figma',
    style: 'Editorial Zinc',
    theme: 'dark',
    tags: ['Illustrations', 'Isometric', 'Vector', 'Architecture'],
    featured: false,
    popular: true,
    rating: 4.8,
    reviewCount: 15,
    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" fill="%230d0d10"><rect width="600" height="400" fill="%230d0d10"/><polygon points="300,100 450,180 300,260 150,180" fill="%2318181b" stroke="%233f3f46" stroke-width="2"/><polygon points="300,260 450,180 450,220 300,300" fill="%2327272a" stroke="%233f3f46" stroke-width="2"/><polygon points="150,180 300,260 300,300 150,220" fill="%231f1f24" stroke="%233f3f46" stroke-width="2"/><circle cx="300" cy="180" r="16" fill="%23ff5a00"/></svg>',
    previewHtml: `
      <div style="display: flex; justify-content: center; align-items: center; padding: 30px; background: #16161a; border-radius: 24px; border: 1px solid #27272a;">
        <div style="font-weight: 600; color: #f4f4f5;">Isometric Vector Preview · Technical Architectural Layers</div>
      </div>
    `,
    codeSnippet: `<img src="/assets/isometric-cloud-node.svg" alt="Distributed Node" className="w-full max-w-sm mx-auto" />`,
    features: ['Infinitely scalable vector SVG', 'Layers grouped by elevation', 'Compatible with Figma, Illustrator, Sketch'],
    included: ['24 SVG Files', 'Figma Vector Component File']
  },

  // --- RESOURCES ---
  {
    id: 'res-01',
    slug: 'design-md-figma-tokens-kit',
    name: 'Awesomic Design System Figma Kit',
    category: 'resources',
    description: 'The complete official Figma Variables and Token library replicating all tokens from design.md: colors, typography scales, 36px card geometry, and button variants.',
    price: 0,
    isFree: true,
    framework: 'Figma Variables / JSON',
    style: 'Editorial Zinc',
    theme: 'dark',
    tags: ['Design System', 'Figma Tokens', 'Variables', 'Open Source'],
    featured: true,
    popular: true,
    rating: 5.0,
    reviewCount: 94,
    badge: 'Essential Resource',
    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" fill="%230d0d10"><rect width="600" height="400" fill="%230d0d10"/><rect x="60" y="60" width="100" height="100" rx="36" fill="%2318181b" stroke="%2327272a"/><text x="85" y="118" font-family="sans-serif" font-size="28" fill="%23ffffff" font-weight="700">36</text><rect x="180" y="60" width="100" height="100" rx="14" fill="%23ff5a00"/><text x="210" y="118" font-family="sans-serif" font-size="28" fill="%23ffffff" font-weight="700">14</text><rect x="300" y="60" width="240" height="100" rx="50" fill="%2318181b" stroke="%233f3f46"/><text x="360" y="118" font-family="sans-serif" font-size="20" fill="%23ffffff">10000px Pill</text><text x="60" y="240" font-family="sans-serif" font-size="26" fill="%23ffffff" font-weight="700">Cosmica &amp; DM Sans Scale</text><text x="60" y="275" font-family="sans-serif" font-size="14" fill="%23a1a1aa">Figma Tokens Studio + Native Variables compatible export</text></svg>',
    previewHtml: `
      <div style="background: #18181b; color: white; padding: 28px; border-radius: 24px; font-family: var(--font-cosmica); border: 1px solid #27272a;">
        <div style="font-size: 18px; font-weight: 600; margin-bottom: 8px;">Figma Tokens System</div>
        <p style="font-size: 13px; color: #a1a1aa; line-height: 1.5;">Includes 12 Color modes, 8 Typography steps, 6 Radius variants, and 5 Elevation insets.</p>
      </div>
    `,
    codeSnippet: `// tokens.json export structure
{
  "color": {
    "obsidian": { "value": "#09090b" },
    "graphite": { "value": "#18181b" },
    "ember": { "value": "#ff5a00" }
  },
  "borderRadius": {
    "cards": { "value": "36px" },
    "buttons": { "value": "14px" },
    "pills": { "value": "10000px" }
  }
}`,
    features: ['Native Figma Variables', 'Figma Tokens Studio ready', 'Style Dictionary JSON format', 'AutoLayout 5.0 components'],
    included: ['Figma Community File (.fig)', 'JSON Token Manifest', 'Tailwind Config Integration Guide']
  },

  {
    id: 'res-02',
    slug: 'tailwind-v4-preset-config',
    name: 'Tailwind CSS v4 Zinc Preset Pack',
    category: 'resources',
    description: 'Drop-in `@theme` file and CSS custom properties implementing the Awesomic typography hierarchy, radii, and hairline border shadows.',
    price: 0,
    isFree: true,
    framework: 'Tailwind CSS v4',
    style: 'Editorial Zinc',
    theme: 'dark',
    tags: ['Tailwind', 'CSS', 'Configuration', 'Preset'],
    featured: false,
    popular: true,
    rating: 4.9,
    reviewCount: 29,
    badge: 'Free Utility',
    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" fill="%230d0d10"><rect width="600" height="400" fill="%230d0d10"/><rect x="60" y="70" width="480" height="260" rx="28" fill="%2316161a" stroke="%2327272a"/><text x="100" y="125" fill="%23a1a1aa" font-family="monospace" font-size="14">@theme {</text><text x="120" y="160" fill="%23ffffff" font-family="monospace" font-size="14">--color-obsidian: #f4f4f5;</text><text x="120" y="195" fill="%23ff5a00" font-family="monospace" font-size="14">--color-ember: #ff5a00;</text><text x="120" y="230" fill="%23ffffff" font-family="monospace" font-size="14">--radius-cards: 36px;</text><text x="100" y="265" fill="%23a1a1aa" font-family="monospace" font-size="14">}</text></svg>',
    previewHtml: `
      <div style="background: #16161a; color: #a1a1aa; font-family: monospace; padding: 24px; border-radius: 20px; font-size: 13px; border: 1px solid #27272a;">
        <div><span style="color: #ff5a00;">@theme</span> {</div>
        <div style="padding-left: 16px; color: white;">--color-obsidian: #f4f4f5;</div>
        <div style="padding-left: 16px; color: white;">--radius-cards: 36px;</div>
        <div>}</div>
      </div>
    `,
    codeSnippet: `@theme {
  --color-obsidian: #f4f4f5;
  --color-graphite: #e4e4e7;
  --color-ember: #ff5a00;
  --radius-cards: 36px;
  --radius-buttons: 14px;
}`,
    features: ['Pre-compiled CSS and raw @theme definitions', 'Zero dependencies', 'Instant setup in Vite, Next.js, and Remix'],
    included: ['theme.css', 'tokens.css', 'Quickstart Guide']
  }
];

export const TESTIMONIALS = [
  {
    quote: "Azarel’s zinc editorial grid allowed us to ship our Series A product marketing site in 3 days instead of 4 weeks. The 36px geometry and restrained contrast are unmatched.",
    author: "Elena Rostova",
    role: "Head of Product Design, Kinetic Labs",
    batch: "YC W23"
  },
  {
    quote: "Finally, a marketplace that respects visual hierarchy. No cartoon illustrations, no muddy gradient blobs — just razor-sharp typography and hairline elevation.",
    author: "Marcus Chen",
    role: "Founder & CTO, HyperScale Infrastructure",
    batch: "YC S22"
  },
  {
    quote: "Copying the React & Tailwind snippets directly into our Next.js codebase saved hundreds of engineering hours. The code quality is exemplary.",
    author: "Sarah Lindqvist",
    role: "Staff Frontend Architect, Vespera",
    batch: "YC W24"
  }
];

export const FAQS = [
  {
    q: "Can I use Azarel components in commercial customer projects?",
    a: "Yes! All purchased assets and free resources come with our perpetual commercial license. You can use them in unlimited client deliverables, commercial SaaS apps, and internal company tools."
  },
  {
    q: "What design files and code formats are included?",
    a: "Every product includes production React components (JSX/TSX), clean Tailwind CSS utility classes, vanilla HTML/CSS fallback markups, and organized Figma variables/AutoLayout files."
  },
  {
    q: "How does the typography work if I don't have Cosmica installed?",
    a: "The system provides full fallback support for Google Fonts 'DM Sans', which matches the geometric proportions, display weights (600/700), and compact body sizing seamlessly without extra licensing fees."
  },
  {
    q: "Do you offer refunds if a template doesn't fit my stack?",
    a: "We provide a 14-day hassle-free refund policy. If an asset fails to meet the specifications described in design.md or in the preview, our support team will refund you immediately."
  }
];
