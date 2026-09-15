/**
 * Azarel Main Application Bootstrap
 * Connects global UI actions, state subscriptions, toast notifications, and router.
 */

import { state } from './state.js';
import { initRouter, handleRoute } from './router.js';
import { PRODUCTS } from './data/products.js';
import { renderPreviewModal } from './components/PreviewModal.js';

// --- Toast Manager ---
function initToasts() {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  window.addEventListener('azarel:toast', (e) => {
    const msg = e.detail?.message || 'Action completed';
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span style="color: var(--color-ember); font-weight: bold;">✓</span>
      <span>${msg}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.2s ease';
      setTimeout(() => toast.remove(), 250);
    }, 2800);
  });
}

// --- Keyboard Shortcuts (Cmd+K / Ctrl+K) ---
function initKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      window.location.hash = '#/search';
    }
    if (e.key === 'Escape' && state.previewProduct) {
      window.azarelClosePreview();
    }
  });
}

// --- Global UI Window Actions ---
window.azarelToggleFav = (productId, event) => {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  state.toggleFavorite(productId);
};

window.azarelQuickPreview = (productId, event) => {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const product = PRODUCTS.find(p => p.id === productId);
  if (product) {
    state.openPreview(product);
  }
};

window.azarelClosePreview = () => {
  state.closePreview();
};

window.azarelSetSearch = (query) => {
  state.setSearchQuery(query);
};

window.azarelSetSort = (sort) => {
  state.setSortBy(sort);
};

window.azarelChangeCategory = (cat) => {
  if (window.location.hash === '#/favorites') {
    state.setCategory(cat);
  } else if (cat === 'all') {
    window.location.hash = '#/sections';
    state.setCategory('all');
  } else {
    window.location.hash = `#/${cat}`;
    state.setCategory(cat);
  }
};

window.azarelSetPrice = (price) => {
  state.setPriceFilter(price);
};

window.azarelSetFramework = (fw) => {
  state.setFrameworkFilter(fw);
};

window.azarelResetFilters = () => {
  state.resetFilters();
  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) searchInput.value = '';
};

// --- Product Detail Actions ---
window.azarelSetViewportWidth = (width) => {
  const frame = document.getElementById('simulated-preview-frame');
  const btnDesktop = document.getElementById('view-mode-desktop');
  const btnTablet = document.getElementById('view-mode-tablet');
  const btnMobile = document.getElementById('view-mode-mobile');

  if (frame) {
    frame.style.maxWidth = width;
  }

  // Update button active styles
  [btnDesktop, btnTablet, btnMobile].forEach(b => {
    if (b) {
      b.style.background = 'transparent';
      b.style.color = 'var(--color-iron)';
    }
  });

  if (width === '100%' && btnDesktop) {
    btnDesktop.style.background = '#09090b';
    btnDesktop.style.color = 'white';
  } else if (width === '768px' && btnTablet) {
    btnTablet.style.background = '#09090b';
    btnTablet.style.color = 'white';
  } else if (width === '375px' && btnMobile) {
    btnMobile.style.background = '#09090b';
    btnMobile.style.color = 'white';
  }
};

window.azarelTogglePreviewTheme = () => {
  const frame = document.getElementById('simulated-preview-frame');
  if (!frame) return;
  const isDark = frame.getAttribute('data-theme') === 'dark';
  if (isDark) {
    frame.setAttribute('data-theme', 'light');
    frame.style.backgroundColor = '#ffffff';
    frame.style.color = '#09090b';
    state.notifyToast('Preview switched to Light theme');
  } else {
    frame.setAttribute('data-theme', 'dark');
    frame.style.backgroundColor = '#18181b';
    frame.style.color = '#f4f4f5';
    state.notifyToast('Preview switched to Dark theme');
  }
};

window.azarelSwitchTab = (tabName, btnElement) => {
  const tabs = ['code', 'features', 'reviews'];
  tabs.forEach(t => {
    const el = document.getElementById(`tab-content-${t}`);
    if (el) el.style.display = t === tabName ? 'block' : 'none';
  });

  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
};

window.azarelToggleAccordion = (idx) => {
  const body = document.getElementById(`faq-body-${idx}`);
  const icon = document.getElementById(`faq-icon-${idx}`);
  if (body) {
    const isHidden = body.style.display === 'none' || body.style.display === '';
    body.style.display = isHidden ? 'block' : 'none';
    if (icon) icon.textContent = isHidden ? '−' : '+';
  }
};

window.azarelPurchaseAsset = (id, name, price) => {
  if (price === 0) {
    state.notifyToast(`Downloading ${name} (.zip bundle)...`);
  } else {
    state.notifyToast(`Added ${name} ($${price}) to checkout!`);
  }
};

window.azarelSetBilling = (mode) => {
  const btnAnnual = document.getElementById('billing-annual-btn');
  const btnMonthly = document.getElementById('billing-monthly-btn');
  const proPrice = document.getElementById('price-pro');
  const proPeriod = document.getElementById('period-pro');
  const teamPrice = document.getElementById('price-team');
  const teamPeriod = document.getElementById('period-team');

  if (mode === 'annual') {
    if (btnAnnual) {
      btnAnnual.className = 'btn-primary';
      btnAnnual.style.border = '1.5px solid rgb(44, 46, 52)';
    }
    if (btnMonthly) {
      btnMonthly.className = 'btn-ghost';
      btnMonthly.style.border = 'none';
    }
    if (proPrice) proPrice.textContent = '$24';
    if (proPeriod) proPeriod.textContent = ' / month (billed annually)';
    if (teamPrice) teamPrice.textContent = '$69';
    if (teamPeriod) teamPeriod.textContent = ' / month (billed annually)';
    state.notifyToast('Switched to Annual Billing (25% Savings)');
  } else {
    if (btnAnnual) {
      btnAnnual.className = 'btn-ghost';
      btnAnnual.style.border = 'none';
    }
    if (btnMonthly) {
      btnMonthly.className = 'btn-primary';
      btnMonthly.style.border = '1.5px solid rgb(44, 46, 52)';
    }
    if (proPrice) proPrice.textContent = '$32';
    if (proPeriod) proPeriod.textContent = ' / month (billed monthly)';
    if (teamPrice) teamPrice.textContent = '$89';
    if (teamPeriod) teamPeriod.textContent = ' / month (billed monthly)';
    state.notifyToast('Switched to Monthly Billing');
  }
};

// --- Boot Application ---
document.addEventListener('DOMContentLoaded', () => {
  initToasts();
  initKeyboardShortcuts();
  initRouter();

  // Re-render when state changes (e.g. search, filters, favorites, preview)
  state.subscribe((s) => {
    // If modal open/close only
    const modalMount = document.getElementById('modal-mount');
    if (modalMount) {
      modalMount.innerHTML = renderPreviewModal();
    }
    // Update active route if on marketplace
    const hash = window.location.hash.slice(1) || '/';
    if (hash.startsWith('/sections') || hash.startsWith('/components') || hash.startsWith('/icons') || hash.startsWith('/templates') || hash.startsWith('/resources') || hash.startsWith('/search') || hash.startsWith('/favorites')) {
      handleRoute();
    } else {
      // Update header favorite counters
      const favCounter = document.querySelector('.badge-count.ember');
      if (favCounter) {
        favCounter.textContent = s.favorites.length;
      }
    }
  });
});
