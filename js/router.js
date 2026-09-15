/**
 * Client-Side Router for Azarel Marketplace
 * Handles hash routing for instant navigation without page reloads.
 */

import { renderHomeView } from './views/HomeView.js';
import { renderMarketplaceView } from './views/MarketplaceView.js';
import { renderProductDetailView } from './views/ProductDetailView.js';
import { renderPricingView } from './views/PricingView.js';
import { renderAboutView } from './views/AboutView.js';
import { renderNavbar, attachNavbarEvents } from './components/Navbar.js';
import { renderFooter } from './components/Footer.js';
import { renderPreviewModal } from './components/PreviewModal.js';
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

  // Match route
  let viewHtml = '';

  if (hash === '/' || hash === '') {
    viewHtml = renderHomeView();
  } else if (hash.startsWith('/product/')) {
    const slug = hash.replace('/product/', '');
    viewHtml = renderProductDetailView(slug);
  } else if (hash === '/sections') {
    state.activeCategory = 'sections';
    viewHtml = renderMarketplaceView('sections');
  } else if (hash === '/components') {
    state.activeCategory = 'components';
    viewHtml = renderMarketplaceView('components');
  } else if (hash === '/icons') {
    state.activeCategory = 'icons';
    viewHtml = renderMarketplaceView('icons');
  } else if (hash === '/templates') {
    state.activeCategory = 'templates';
    viewHtml = renderMarketplaceView('templates');
  } else if (hash === '/illustrations') {
    state.activeCategory = 'illustrations';
    viewHtml = renderMarketplaceView('illustrations');
  } else if (hash === '/resources') {
    state.activeCategory = 'resources';
    viewHtml = renderMarketplaceView('resources');
  } else if (hash === '/pricing') {
    viewHtml = renderPricingView();
  } else if (hash === '/about') {
    viewHtml = renderAboutView();
  } else if (hash === '/search') {
    state.activeCategory = 'all';
    viewHtml = renderMarketplaceView('all');
    setTimeout(() => {
      const searchInput = document.getElementById('catalog-search-input');
      if (searchInput) searchInput.focus();
    }, 50);
  } else if (hash === '/favorites') {
    viewHtml = renderMarketplaceView('favorites', true);
  } else {
    // Fallback: search or all
    viewHtml = renderMarketplaceView('all');
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

  attachNavbarEvents();
}
