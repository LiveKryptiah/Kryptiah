/**
 * Azarel Website Sections Application State
 * Centralized state for:
 * - Cart & Checkout (Single Section purchases, Bundles, Total, Discounts)
 * - Page Stack Mixer (Stacking website sections for custom live page previews)
 * - Responsive Device Preview (Desktop, Tablet, Mobile)
 * - Code Viewer (React 19, Tailwind v4, Vanilla HTML)
 * - Category Filters & Search
 * - Favorites & Toast Notifications
 */

import { SECTIONS_DATA, BUNDLES } from './data/products.js';

class AppState {
  constructor() {
    this.searchQuery = '';
    this.activeCategory = 'all'; // 'all' | 'heroes' | 'bento' | 'features' | 'pricing' | 'social-proof' | 'ctas'
    this.priceFilter = 'all'; // 'all' | 'free' | 'paid'
    this.frameworkFilter = 'all';
    this.sortBy = 'popular'; // 'popular' | 'rating' | 'price-asc' | 'price-desc'

    // Cart Management
    this.cart = this.loadCart();
    this.isCartOpen = false;

    // Page Stack Mixer (default 3 sections)
    this.mixerStack = ['sec-hero-01', 'sec-bento-01', 'sec-social-01', 'sec-cta-01'];

    // Active Section Preview Modal & Design Spec
    this.previewSection = null;
    this.previewDevice = 'desktop'; // 'desktop' | 'tablet' | 'mobile'
    this.activeSpecTab = 'directives'; // 'directives' | 'tokens' | 'typography' | 'prompt' | 'raw'
    this.modalViewMode = 'split'; // 'split' | 'spec' | 'preview'
    this.cardModes = {}; // sectionId -> 'preview' | 'design'
    this.showcaseMode = 'preview'; // 'preview' | 'design'

    // Checkout Modal
    this.isCheckoutOpen = false;
    this.completedOrder = null;

    // Saved Favorites
    this.favorites = this.loadFavorites();

    // Event Listeners
    this.listeners = new Set();
  }

  // --- Persistence ---
  loadCart() {
    try {
      const saved = localStorage.getItem('azarel_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem('azarel_cart', JSON.stringify(this.cart));
    } catch (e) {
      console.warn('Could not persist cart', e);
    }
  }

  loadFavorites() {
    try {
      const saved = localStorage.getItem('azarel_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  saveFavorites() {
    try {
      localStorage.setItem('azarel_favorites', JSON.stringify(this.favorites));
    } catch (e) {
      console.warn('Could not persist favorites', e);
    }
  }

  // --- Cart Actions ---
  addToCart(item) {
    const exists = this.cart.find(c => c.id === item.id);
    if (!exists) {
      this.cart.push({
        id: item.id,
        name: item.name,
        price: item.price || 0,
        isBundle: item.isBundle || false,
        category: item.category || 'section',
        framework: item.framework || 'React 19 / Tailwind'
      });
      this.saveCart();
      this.notifyToast(`Added "${item.name}" to cart`);
    } else {
      this.notifyToast(`"${item.name}" is already in your cart`);
    }
    this.isCartOpen = true;
    this.notify();
  }

  removeFromCart(itemId) {
    this.cart = this.cart.filter(c => c.id !== itemId);
    this.saveCart();
    this.notifyToast('Removed item from cart');
    this.notify();
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
    this.notify();
  }

  toggleCart(openState = null) {
    this.isCartOpen = openState !== null ? openState : !this.isCartOpen;
    this.notify();
  }

  getCartTotal() {
    // If bundle is in cart, flat bundle price
    const hasBundle = this.cart.find(c => c.isBundle);
    if (hasBundle) {
      return hasBundle.price;
    }
    return this.cart.reduce((sum, item) => sum + (item.price || 0), 0);
  }

  // --- Page Stack Mixer Actions ---
  addToMixer(sectionId) {
    if (!this.mixerStack.includes(sectionId)) {
      this.mixerStack.push(sectionId);
      this.notifyToast('Added section to Page Stack Previewer');
      this.notify();
    } else {
      this.notifyToast('Section already in current preview stack');
    }
  }

  removeFromMixer(sectionId) {
    this.mixerStack = this.mixerStack.filter(id => id !== sectionId);
    this.notifyToast('Removed section from Stack');
    this.notify();
  }

  resetMixer() {
    this.mixerStack = ['sec-hero-01', 'sec-bento-01', 'sec-social-01', 'sec-cta-01'];
    this.notify();
  }

  // --- Preview Modal & Design Spec Actions ---
  openPreview(sectionId, initialTab = 'preview', initialSpecTab = 'directives') {
    const sec = SECTIONS_DATA.find(s => s.id === sectionId || s.slug === sectionId);
    if (sec) {
      this.previewSection = sec;
      if (initialTab === 'design' || initialTab === 'spec') {
        this.modalViewMode = 'spec';
      } else {
        this.modalViewMode = 'split';
      }
      this.activeSpecTab = initialSpecTab;
      this.notify();
    }
  }

  closePreview() {
    this.previewSection = null;
    this.notify();
  }

  setPreviewDevice(device) {
    this.previewDevice = device;
    this.notify();
  }

  setActiveSpecTab(tab) {
    this.activeSpecTab = tab;
    this.notify();
  }

  setModalViewMode(mode) {
    this.modalViewMode = mode;
    this.notify();
  }

  // --- Per-Card & Showcase View Modes ---
  getCardMode(sectionId) {
    return this.cardModes[sectionId] || this.showcaseMode || 'preview';
  }

  setCardMode(sectionId, mode) {
    this.cardModes[sectionId] = mode;
    this.notify();
  }

  toggleCardMode(sectionId) {
    const current = this.getCardMode(sectionId);
    this.cardModes[sectionId] = current === 'preview' ? 'design' : 'preview';
    this.notify();
  }

  setShowcaseMode(mode) {
    this.showcaseMode = mode;
    // apply to all cards
    SECTIONS_DATA.forEach(s => {
      this.cardModes[s.id] = mode;
    });
    this.notify();
  }

  // --- Checkout Simulation ---
  openCheckout() {
    if (this.cart.length === 0) {
      this.notifyToast('Your cart is empty. Add a section first!');
      return;
    }
    this.isCartOpen = false;
    this.isCheckoutOpen = true;
    this.notify();
  }

  closeCheckout() {
    this.isCheckoutOpen = false;
    this.notify();
  }

  completeCheckout(email) {
    const orderId = 'AZL-' + Math.random().toString(36).substring(2, 9).toUpperCase();
    this.completedOrder = {
      orderId,
      email,
      date: new Date().toLocaleDateString(),
      items: [...this.cart],
      total: this.getCartTotal(),
      licenseKey: 'AZL-LIC-' + Math.random().toString(36).substring(2, 8).toUpperCase() + '-PERPETUAL'
    };
    this.clearCart();
    this.isCheckoutOpen = false;
    this.notify();
  }

  dismissOrderConfirmation() {
    this.completedOrder = null;
    this.notify();
  }

  // --- Favorites ---
  isFavorited(sectionId) {
    return this.favorites.includes(sectionId);
  }

  toggleFavorite(sectionId) {
    if (this.isFavorited(sectionId)) {
      this.favorites = this.favorites.filter(id => id !== sectionId);
      this.notifyToast('Removed from saved sections');
    } else {
      this.favorites.push(sectionId);
      this.notifyToast('Saved section to collection');
    }
    this.saveFavorites();
    this.notify();
  }

  // --- Filter Actions ---
  setSearchQuery(q) {
    this.searchQuery = q.trim();
    this.notify();
  }

  setCategory(cat) {
    this.activeCategory = cat;
    this.notify();
  }

  setPriceFilter(price) {
    this.priceFilter = price;
    this.notify();
  }

  setFrameworkFilter(fw) {
    this.frameworkFilter = fw;
    this.notify();
  }

  setSortBy(sort) {
    this.sortBy = sort;
    this.notify();
  }

  // --- Filter Computation ---
  getFilteredSections() {
    let result = [...SECTIONS_DATA];

    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      result = result.filter(s =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    if (this.activeCategory !== 'all') {
      result = result.filter(s => s.category === this.activeCategory);
    }

    if (this.priceFilter === 'free') {
      result = result.filter(s => s.isFree);
    } else if (this.priceFilter === 'paid') {
      result = result.filter(s => !s.isFree);
    }

    if (this.frameworkFilter !== 'all') {
      result = result.filter(s => s.framework.includes(this.frameworkFilter));
    }

    if (this.sortBy === 'popular') {
      result.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
    } else if (this.sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (this.sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }

  // --- Subscriber Pattern ---
  subscribe(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  notify() {
    this.listeners.forEach(fn => fn());
  }

  notifyToast(message) {
    window.dispatchEvent(new CustomEvent('azarel:toast', { detail: { message } }));
  }
}

export const state = new AppState();
