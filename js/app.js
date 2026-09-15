/**
 * Azarel Main Application Bootstrap — Family Design System
 * Website Sections Marketplace
 */

import { state } from './state.js';
import { initRouter, handleRoute } from './router.js';
import { renderCartDrawer } from './components/CartDrawer.js';
import { renderPreviewModal } from './components/PreviewModal.js';

// --- Toast Notification Manager ---
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
      <span style="color: #00ca48; font-weight: bold; font-size: 14px;">✓</span>
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

// --- Keyboard Shortcuts ---
function initKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (state.previewSection) {
        state.closePreview();
      }
      if (state.isCartOpen) {
        state.toggleCart(false);
      }
      if (state.isCheckoutOpen) {
        state.closeCheckout();
      }
    }
  });
}

// --- Subscribe to AppState Changes ---
state.subscribe(() => {
  // Re-render modal if open
  const modalMount = document.getElementById('modal-mount');
  if (modalMount) {
    modalMount.innerHTML = renderPreviewModal();
  }

  // Re-render cart drawer
  renderCartDrawer();

  // Re-render current page route
  handleRoute();
});

// --- Initialize App ---
document.addEventListener('DOMContentLoaded', () => {
  initToasts();
  initKeyboardShortcuts();
  initRouter();
});
