/**
 * Azarel Application State Manager
 * Handles search, filters, favorites (localStorage), preview modal, and toast messages.
 */

class AppState {
  constructor() {
    this.searchQuery = '';
    this.activeCategory = 'all'; // 'all' | 'sections' | 'components' | 'icons' | 'templates' | 'illustrations' | 'resources'
    this.priceFilter = 'all'; // 'all' | 'free' | 'paid'
    this.frameworkFilter = 'all';
    this.sortBy = 'popular'; // 'popular' | 'rating' | 'price-asc' | 'price-desc'
    
    // Favorites in localStorage
    this.favorites = this.loadFavorites();
    
    // Active preview product for modal
    this.previewProduct = null;
    
    // Listeners
    this.listeners = new Set();
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
      console.warn('Could not save favorites to localStorage', e);
    }
  }

  isFavorited(productId) {
    return this.favorites.includes(productId);
  }

  toggleFavorite(productId) {
    if (this.isFavorited(productId)) {
      this.favorites = this.favorites.filter(id => id !== productId);
      this.notifyToast('Removed from saved assets');
    } else {
      this.favorites.push(productId);
      this.notifyToast('Saved to your assets collection');
    }
    this.saveFavorites();
    this.notify();
  }

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

  resetFilters() {
    this.searchQuery = '';
    this.activeCategory = 'all';
    this.priceFilter = 'all';
    this.frameworkFilter = 'all';
    this.sortBy = 'popular';
    this.notify();
  }

  openPreview(product) {
    this.previewProduct = product;
    this.notify();
  }

  closePreview() {
    this.previewProduct = null;
    this.notify();
  }

  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notify() {
    for (const listener of this.listeners) {
      listener(this);
    }
  }

  notifyToast(message) {
    const event = new CustomEvent('azarel:toast', { detail: { message } });
    window.dispatchEvent(event);
  }
}

export const state = new AppState();
