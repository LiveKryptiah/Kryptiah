/**
 * Navbar Component
 * Adheres strictly to design.md:
 * - Sticky header with translucent blur
 * - 14px Cosmica/DM Sans typography
 * - 10000px pill CTA button
 * - Clean brand mark, search shortcut trigger, and responsive mobile drawer
 */

import { state } from '../state.js';

export function renderNavbar(currentPath) {
  const favCount = state.favorites.length;
  
  const navItems = [
    { label: 'Sections', href: '#/sections', key: 'sections' },
    { label: 'Components', href: '#/components', key: 'components' },
    { label: 'Icons', href: '#/icons', key: 'icons' },
    { label: 'Templates', href: '#/templates', key: 'templates' },
    { label: 'Resources', href: '#/resources', key: 'resources' },
    { label: 'Pricing', href: '#/pricing', key: 'pricing' },
    { label: 'About', href: '#/about', key: 'about' }
  ];

  return `
    <header class="site-header">
      <div class="container">
        <div class="header-inner">
          <!-- Logo -->
          <a href="#/" class="logo-link" style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 32px; height: 32px; background: #09090b; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 16px;">
              A
            </div>
            <span style="font-size: 19px; font-weight: 700; letter-spacing: -0.02em; color: #09090b;">
              Azarel
            </span>
            <span class="badge-ember" style="font-size: 10px; padding: 2px 6px; border-radius: 8px;">
              YC W24
            </span>
          </a>

          <!-- Desktop Navigation Links -->
          <nav class="desktop-nav" style="display: none;">
            <ul class="nav-links">
              ${navItems.map(item => `
                <li>
                  <a href="${item.href}" class="nav-link ${currentPath.includes(item.key) ? 'active' : ''}">
                    ${item.label}
                  </a>
                </li>
              `).join('')}
            </ul>
          </nav>

          <!-- Right Actions -->
          <div class="header-actions" style="display: flex; align-items: center; gap: 12px;">
            <!-- Search trigger -->
            <a href="#/search" class="btn-ghost" style="padding: 8px 14px; border-radius: var(--radius-buttons); font-size: 13px; gap: 6px;" title="Search digital assets (Cmd+K)">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <span class="search-label" style="display: none;">Search...</span>
              <kbd style="background: #f4f4f5; padding: 1px 5px; border-radius: 6px; font-size: 10px; color: #71717a; border: 1px solid #ececee;">⌘K</kbd>
            </a>

            <!-- Saved / Favorites link -->
            <a href="#/favorites" class="btn-ghost" style="padding: 8px 12px; border-radius: var(--radius-buttons); font-size: 13px;" title="Saved Assets">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="${favCount > 0 ? '#ef4444' : 'none'}" stroke="${favCount > 0 ? '#ef4444' : 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              ${favCount > 0 ? `<span class="badge-count ember">${favCount}</span>` : ''}
            </a>

            <!-- 10000px Pill Primary CTA -->
            <a href="#/sections" class="btn-pill-dark" style="padding: 9px 18px; font-size: 13.5px;">
              Explore Assets
            </a>

            <!-- Mobile Hamburger Toggle -->
            <button id="mobile-menu-toggle" class="btn-ghost mobile-only" style="padding: 8px 10px; border-radius: 10px;" aria-label="Toggle Navigation Menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Drawer -->
        <div id="mobile-drawer" style="display: none; padding: 16px 0 24px 0; border-top: 1px solid var(--color-cloud);">
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 14px;">
            ${navItems.map(item => `
              <li>
                <a href="${item.href}" class="nav-link ${currentPath.includes(item.key) ? 'active' : ''}" style="font-size: 16px; display: block; padding: 6px 0;">
                  ${item.label}
                </a>
              </li>
            `).join('')}
            <li style="padding-top: 12px;">
              <a href="#/sections" class="btn-primary" style="width: 100%; border-radius: 14px;">
                Browse All 50+ Assets
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <style>
      @media (min-width: 860px) {
        .desktop-nav { display: block !important; }
        .search-label { display: inline !important; }
        .mobile-only { display: none !important; }
      }
    </style>
  `;
}

export function attachNavbarEvents() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  if (toggleBtn && drawer) {
    toggleBtn.onclick = () => {
      drawer.style.display = drawer.style.display === 'none' ? 'block' : 'none';
    };
  }
}
