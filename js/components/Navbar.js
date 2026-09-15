/**
 * Navbar Component — Family Style Reference
 * Minimal top bar: Logo left, center links, and ghost + dark pill buttons right-aligned.
 * Cream parchment background (#fbfaf9), hairline inset bottom border.
 */

import { state } from '../state.js';

export function renderNavbar(currentPath = '') {
  const cartCount = state.cart.length;

  const navItems = [
    { label: 'Sections', href: '#/sections', key: 'sections' },
    { label: 'Page Mixer', href: '#/mixer', key: 'mixer' },
    { label: 'Bundles & Pricing', href: '#/pricing', key: 'pricing' },
    { label: 'About', href: '#/about', key: 'about' }
  ];

  return `
    <header class="site-header">
      <div class="container">
        <div class="header-inner">
          <!-- Logo -->
          <a href="#/" class="logo-link" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">
            <!-- Cheerful mini mascot badge -->
            <div style="width: 34px; height: 34px; background: #64c6ff; border-radius: 10px; display: flex; align-items: center; justify-content: center; border: 1.5px solid #343433; box-shadow: 1px 1px 0px #343433;">
              <span style="font-size: 18px; line-height: 1;">✦</span>
            </div>
            <span style="font-size: 20px; font-weight: 600; letter-spacing: -0.02em; color: #121212;">
              Azarel
            </span>
            <span style="font-size: 11px; font-weight: 600; color: #ff3e00; background: #f2f0ed; padding: 2px 8px; border-radius: 9999px; letter-spacing: 0.02em;">
              SECTIONS
            </span>
          </a>

          <!-- Center Navigation Links -->
          <nav class="desktop-nav">
            <ul class="nav-links" style="display: flex; list-style: none; gap: 24px; margin: 0; padding: 0;">
              ${navItems.map(item => `
                <li>
                  <a 
                    href="${item.href}" 
                    class="nav-link ${currentPath.includes(item.key) ? 'active' : ''}"
                    style="font-size: 14px; font-weight: 500; color: #343433; text-decoration: none; padding: 6px 4px; transition: color 0.15s ease;"
                  >
                    ${item.label}
                  </a>
                </li>
              `).join('')}
            </ul>
          </nav>

          <!-- Right Actions -->
          <div class="header-actions" style="display: flex; align-items: center; gap: 12px;">
            <!-- Cart Trigger -->
            <button 
              type="button" 
              onclick="window.azarelToggleCart(true)" 
              class="btn-cart-trigger" 
              style="display: flex; align-items: center; gap: 6px; background: #f2f0ed; padding: 8px 14px; border-radius: 32px; font-size: 13px; font-weight: 500; color: #343433; border: none; cursor: pointer;"
              aria-label="View Cart"
            >
              <span>🛍️ Cart</span>
              ${cartCount > 0 ? `
                <span style="background: #ff3e00; color: white; font-size: 11px; font-weight: 700; width: 18px; height: 18px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center;">
                  ${cartCount}
                </span>
              ` : ''}
            </button>

            <!-- Ghost Nav Button (Log In) -->
            <button 
              type="button" 
              onclick="window.dispatchEvent(new CustomEvent('azarel:toast', { detail: { message: 'Demo mode: All section licenses instant-unlocked!' } }))" 
              class="btn-ghost-nav"
              style="background: transparent; border: none; color: #343433; font-size: 14px; font-weight: 400; padding: 8px 10px; cursor: pointer;"
            >
              Log In
            </button>

            <!-- Dark Pill Button (Primary CTA) -->
            <a 
              href="#/pricing" 
              class="btn-dark-pill" 
              style="text-decoration: none; display: inline-flex; align-items: center; justify-content: center;"
            >
              Get Lifetime Pass ($99)
            </a>
          </div>
        </div>
      </div>
    </header>
  `;
}

export function attachNavbarEvents() {
  // Any navbar-specific dynamic listeners
}
