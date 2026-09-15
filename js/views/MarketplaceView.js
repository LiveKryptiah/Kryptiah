/**
 * MarketplaceView Component — Family Style Reference
 * Dedicated catalog for browsing and filtering website sections.
 */

import { SECTION_CATEGORIES, FRAMEWORKS } from '../data/products.js';
import { renderProductCard } from '../components/ProductCard.js';
import { state } from '../state.js';
import { Icons } from '../components/Icons.js';

export function renderMarketplaceView() {
  const filteredSections = state.getFilteredSections();
  const activeCategory = state.activeCategory;
  const priceFilter = state.priceFilter;
  const currentFw = state.frameworkFilter;
  const currentSort = state.sortBy;

  return `
    <div class="marketplace-page" style="padding: 48px 0 80px 0; min-height: calc(100vh - 64px);">
      <div class="container">
        <!-- Marketplace Title Area -->
        <div style="margin-bottom: 36px; text-align: center;">
          <div style="display: inline-flex; align-items: center; gap: 6px; background: #f2f0ed; padding: 4px 14px; border-radius: 9999px; margin-bottom: 12px;">
            <span style="font-size: 11px; font-weight: 700; color: #ff3e00; text-transform: uppercase;">FAMILY SECTIONS CATALOG</span>
          </div>
          <h1 class="text-display" style="font-size: 48px; margin-bottom: 12px;">
            Website Sections
          </h1>
          <p class="text-body" style="max-width: 580px; margin: 0 auto;">
            Filter by archetype, test across responsive viewports, and copy production React 19 or Tailwind v4 code in seconds.
          </p>
        </div>

        <!-- Search & Filter Controls -->
        <div style="background: #ffffff; border-radius: 12px; padding: 20px; box-shadow: inset 0 0 0 1px #f2f0ed; margin-bottom: 32px;">
          <!-- Top Row: Search Input & Dropdowns -->
          <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 16px;">
            <div style="flex: 1; min-width: 240px; position: relative; display: flex; align-items: center;">
              <div style="position: absolute; left: 14px; color: #7e7e7d; display: flex; align-items: center; pointer-events: none;">
                ${Icons.search(16, '#7e7e7d')}
              </div>
              <input 
                type="text" 
                placeholder="Search sections by name, keyword, or tag..." 
                value="${state.searchQuery}"
                oninput="window.azarelSearch(this.value)"
                style="width: 100%; padding: 10px 16px 10px 40px; border-radius: 32px; border: 1px solid #e5d5c3; background: #fbfaf9; color: #121212; font-size: 14px; outline: none;"
              />
              ${state.searchQuery ? `
                <button 
                  type="button" 
                  onclick="window.azarelSearch('')" 
                  style="position: absolute; right: 12px; top: 10px; color: #7e7e7d; font-size: 14px; display: flex; align-items: center;"
                >
                  ${Icons.close(14, '#7e7e7d')}
                </button>
              ` : ''}
            </div>

            <!-- Framework Filter -->
            <select 
              onchange="window.azarelSetFramework(this.value)"
              style="padding: 10px 16px; border-radius: 32px; border: 1px solid #e5d5c3; background: #ffffff; font-size: 13px; color: #343433; outline: none; cursor: pointer;"
            >
              <option value="all" ${currentFw === 'all' ? 'selected' : ''}>All Frameworks</option>
              <option value="React 19" ${currentFw === 'React 19' ? 'selected' : ''}>React 19</option>
              <option value="Tailwind v4" ${currentFw === 'Tailwind v4' ? 'selected' : ''}>Tailwind v4</option>
              <option value="HTML/CSS" ${currentFw === 'HTML/CSS' ? 'selected' : ''}>Vanilla HTML/CSS</option>
            </select>

            <!-- Sort By -->
            <select 
              onchange="window.azarelSetSort(this.value)"
              style="padding: 10px 16px; border-radius: 32px; border: 1px solid #e5d5c3; background: #ffffff; font-size: 13px; color: #343433; outline: none; cursor: pointer;"
            >
              <option value="popular" ${currentSort === 'popular' ? 'selected' : ''}>Most Popular</option>
              <option value="rating" ${currentSort === 'rating' ? 'selected' : ''}>Highest Rated</option>
              <option value="price-asc" ${currentSort === 'price-asc' ? 'selected' : ''}>Price: Low to High</option>
              <option value="price-desc" ${currentSort === 'price-desc' ? 'selected' : ''}>Price: High to Low</option>
            </select>
          </div>

          <!-- Bottom Row: Category Chips & Free/Paid toggle -->
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
            <!-- Category Chips -->
            <div class="filter-tabs">
              ${SECTION_CATEGORIES.map(cat => `
                <button 
                  type="button" 
                  onclick="window.azarelSetCat('${cat.id}')"
                  class="filter-chip ${activeCategory === cat.id ? 'active' : ''}"
                >
                  ${cat.name} (${cat.count})
                </button>
              `).join('')}
            </div>

            <!-- Free/Paid Filter -->
            <div style="display: inline-flex; background: #f2f0ed; padding: 3px; border-radius: 32px; gap: 2px;">
              <button 
                type="button" 
                onclick="window.azarelSetPrice('all')" 
                style="padding: 5px 12px; border-radius: 28px; font-size: 12px; font-weight: 500; border: none; cursor: pointer; background: ${priceFilter === 'all' ? '#121212' : 'transparent'}; color: ${priceFilter === 'all' ? '#ffffff' : '#343433'};"
              >
                All
              </button>
              <button 
                type="button" 
                onclick="window.azarelSetPrice('free')" 
                style="padding: 5px 12px; border-radius: 28px; font-size: 12px; font-weight: 500; border: none; cursor: pointer; background: ${priceFilter === 'free' ? '#121212' : 'transparent'}; color: ${priceFilter === 'free' ? '#ffffff' : '#343433'};"
              >
                Freebies
              </button>
              <button 
                type="button" 
                onclick="window.azarelSetPrice('paid')" 
                style="padding: 5px 12px; border-radius: 28px; font-size: 12px; font-weight: 500; border: none; cursor: pointer; background: ${priceFilter === 'paid' ? '#121212' : 'transparent'}; color: ${priceFilter === 'paid' ? '#ffffff' : '#343433'};"
              >
                Premium
              </button>
            </div>
          </div>
        </div>

        <!-- Section Results Count & Active Stack Indicator -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; font-size: 14px; color: #7e7e7d;">
          <div>
            Showing <strong>${filteredSections.length}</strong> website sections
          </div>
          <div style="display: flex; align-items: center; gap: 10px;">
            <span>Mixer Stack: <strong>${state.mixerStack.length} sections</strong></span>
            <a href="#/mixer" class="link-demo" style="font-size: 13px;">Preview Stack Page →</a>
          </div>
        </div>

        <!-- Sections Grid -->
        ${filteredSections.length === 0 ? `
          <div style="background: #ffffff; border-radius: 12px; padding: 60px 24px; text-align: center; box-shadow: inset 0 0 0 1px #f2f0ed;">
            <div style="display: flex; justify-content: center; margin-bottom: 16px; color: #a1a1aa;">
              ${Icons.search(44, '#a1a1aa')}
            </div>
            <h3 style="font-size: 20px; font-weight: 600; color: #121212; margin-bottom: 8px;">No website sections matched your criteria</h3>
            <p style="font-size: 14px; color: #474645; margin-bottom: 20px;">Try clearing your search terms or filters.</p>
            <button type="button" onclick="window.azarelResetFilters()" class="btn-dark-pill">
              Reset Filters
            </button>
          </div>
        ` : `
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
            ${filteredSections.map(sec => renderProductCard(sec)).join('')}
          </div>
        `}
      </div>
    </div>
  `;
}

// Global Filter Handlers
window.azarelSearch = (val) => state.setSearchQuery(val);
window.azarelSetCat = (cat) => state.setCategory(cat);
window.azarelSetPrice = (p) => state.setPriceFilter(p);
window.azarelSetFramework = (fw) => state.setFrameworkFilter(fw);
window.azarelSetSort = (s) => state.setSortBy(s);
window.azarelResetFilters = () => {
  state.searchQuery = '';
  state.activeCategory = 'all';
  state.priceFilter = 'all';
  state.frameworkFilter = 'all';
  state.notify();
};
