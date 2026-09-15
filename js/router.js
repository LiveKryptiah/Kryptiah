/**
 * Client-Side Router for Azarel Website Sections Marketplace
 * Handles hash routing for instant navigation without page reloads.
 */

import { renderHomeView } from './views/HomeView.js';
import { renderMarketplaceView } from './views/MarketplaceView.js';
import { renderProductDetailView } from './views/ProductDetailView.js';
import { renderPricingView } from './views/PricingView.js';
import { renderAboutView } from './views/AboutView.js';
import { renderMixerSectionView } from './views/MixerSectionView.js';
import { renderNavbar, attachNavbarEvents } from './components/Navbar.js';
import { renderFooter } from './components/Footer.js';
import { renderPreviewModal } from './components/PreviewModal.js';
import { renderCartDrawer } from './components/CartDrawer.js';
import { state } from './state.js';

export function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  // Initial route
  handleRoute();
}

export function handleRoute() {
  const hash = window.location.hash.slice(1) || '/';
  const appElement = document.getElementById('app');
  if (!appElement) return;

  // Scroll to top on navigation
  window.scrollTo({ top: 0, behavior: 'instant' });

  let viewHtml = '';

  if (hash === '/' || hash === '') {
    viewHtml = renderHomeView();
  } else if (hash.startsWith('/section/')) {
    const slug = hash.replace('/section/', '');
    viewHtml = renderProductDetailView(slug);
  } else if (hash.startsWith('/product/')) {
    const slug = hash.replace('/product/', '');
    viewHtml = renderProductDetailView(slug);
  } else if (hash === '/sections') {
    viewHtml = renderMarketplaceView();
  } else if (hash === '/mixer') {
    viewHtml = renderMixerSectionView();
  } else if (hash === '/pricing') {
    viewHtml = renderPricingView();
  } else if (hash === '/about') {
    viewHtml = renderAboutView();
  } else {
    // Default fallback
    viewHtml = renderMarketplaceView();
  }

  // Render full layout
  appElement.innerHTML = `
    ${renderNavbar(hash)}
    <main id="main-content" style="flex-grow: 1;">
      ${viewHtml}
    </main>
    ${renderFooter()}
    <div id="modal-mount">
      ${renderPreviewModal()}
    </div>
  `;

  // Render Cart Drawer
  renderCartDrawer();

  attachNavbarEvents();
}
