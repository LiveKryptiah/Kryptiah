/**
 * MarketplaceView Component
 * Dark Mode Default & Full Window Height Layout
 * Unified catalog view handling:
 * - /sections, /components, /icons, /templates, /resources, /search, and /favorites
 * - Multi-criteria live filtering (Search, Category, Price, Framework, Style)
 * - Sorting by popularity, rating, price
 * - Clean empty states and active facet chips
 */

import { PRODUCTS, CATEGORIES, FRAMEWORKS } from '../data/products.js';
import { renderProductCard } from '../components/ProductCard.js';
import { state } from '../state.js';

export function renderMarketplaceView(routeCategory = 'all', isFavoritesView = false) {
  // Determine active category from route or state
  const currentCategory = isFavoritesView ? 'favorites' : (routeCategory !== 'all' ? routeCategory : state.activeCategory);
  
  // Filter products
  let filtered = PRODUCTS.filter(p => {
    // Favorites view constraint
    if (isFavoritesView) {
      return state.isFavorited(p.id);
    }

    // Category filter
    if (currentCategory !== 'all' && p.category !== currentCategory) {
      return false;
    }

    // Price filter
    if (state.priceFilter === 'free' && !p.isFree) return false;
    if (state.priceFilter === 'paid' && p.isFree) return false;

    // Framework filter
    if (state.frameworkFilter !== 'all') {
      if (!p.framework || !p.framework.toLowerCase().includes(state.frameworkFilter.toLowerCase())) {
        return false;
      }
    }

    // Search query
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchTags = p.tags.some(t => t.toLowerCase().includes(q));
      const matchCategory = p.category.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchTags && !matchCategory) return false;
    }

    return true;
  });

  // Sort
  if (state.sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else {
    // popular
    filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
  }

  const categoryTitle = getCategoryTitle(currentCategory, isFavoritesView);
  const categoryDescription = getCategoryDescription(currentCategory, isFavoritesView);

  return `
    <div class="marketplace-page" style="min-height: calc(100vh - 68px); display: flex; flex-direction: column;">
      <!-- Catalog Header Banner -->
      <section style="background-color: var(--surface-canvas); border-bottom: 1px solid var(--color-cloud); padding: 40px 0;">
        <div class="container">
          <div style="max-width: 820px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
              <span class="badge-ember">${isFavoritesView ? 'SAVED' : 'MARKETPLACE'}</span>
              <span class="tag-pill">${filtered.length} Assets Found</span>
            </div>
            <h1 class="text-heading-lg" style="margin-bottom: 12px;">
              ${categoryTitle}
            </h1>
            <p class="text-body-lg" style="color: var(--color-steel);">
              ${categoryDescription}
            </p>
          </div>
        </div>
      </section>

      <!-- Main Marketplace Grid & Filter Section (Fills remaining screen height) -->
      <section style="padding: 48px 0; flex-grow: 1;">
        <div class="container">
          <!-- Live Toolbar: Search Bar + Sort Dropdown -->
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; margin-bottom: 28px;">
            <!-- Search input with icon -->
            <div style="position: relative; max-width: 440px; width: 100%;">
              <input 
                type="text" 
                id="catalog-search-input"
                placeholder="Search by keyword, tag, or framework..." 
                value="${state.searchQuery}"
                class="input-field" 
                style="padding-left: 42px; border-radius: 14px; background: var(--surface-card);"
                oninput="window.azarelSetSearch(this.value)"
              />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-steel)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%);">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              ${state.searchQuery ? `
                <button onclick="window.azarelSetSearch('')" style="position: absolute; right: 12px; top: 50%; transform: translateY(-50%); color: var(--color-steel); font-size: 14px;">✕</button>
              ` : ''}
            </div>

            <!-- Sort dropdown -->
            <div style="display: flex; align-items: center; gap: 12px;">
              <span style="font-size: 13.5px; color: var(--color-steel);">Sort by:</span>
              <select 
                class="input-field" 
                style="padding: 8px 14px; font-size: 13.5px; border-radius: 12px; width: auto; background: var(--surface-card);"
                onchange="window.azarelSetSort(this.value)"
              >
                <option value="popular" ${state.sortBy === 'popular' ? 'selected' : ''}>Most Popular</option>
                <option value="rating" ${state.sortBy === 'rating' ? 'selected' : ''}>Highest Rated</option>
                <option value="price-asc" ${state.sortBy === 'price-asc' ? 'selected' : ''}>Price: Low to High</option>
                <option value="price-desc" ${state.sortBy === 'price-desc' ? 'selected' : ''}>Price: High to Low</option>
              </select>
            </div>
          </div>

          <!-- Active Filter Chips -->
          ${renderActiveChips(currentCategory, isFavoritesView)}

          <!-- Split Layout: Filters Sidebar + Products Grid -->
          <div class="marketplace-layout">
            <!-- Filter Sidebar -->
            <aside class="filter-sidebar">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
                <span style="font-size: 14px; font-weight: 700; color: var(--color-obsidian);">Filters</span>
                <button onclick="window.azarelResetFilters()" style="font-size: 12px; color: var(--color-steel); text-decoration: underline;">
                  Reset all
                </button>
              </div>

              <!-- Categories -->
              ${!isFavoritesView ? `
                <div class="filter-section">
                  <div class="filter-title">Category</div>
                  <label class="filter-option">
                    <input type="radio" name="cat" value="all" ${currentCategory === 'all' ? 'checked' : ''} onchange="window.azarelChangeCategory('all')" />
                    <span>All Assets</span>
                  </label>
                  ${CATEGORIES.map(cat => `
                    <label class="filter-option">
                      <input type="radio" name="cat" value="${cat.id}" ${currentCategory === cat.id ? 'checked' : ''} onchange="window.azarelChangeCategory('${cat.id}')" />
                      <span>${cat.name} (${cat.count})</span>
                    </label>
                  `).join('')}
                </div>
              ` : ''}

              <!-- Pricing filter -->
              <div class="filter-section">
                <div class="filter-title">Pricing</div>
                <label class="filter-option">
                  <input type="radio" name="price" value="all" ${state.priceFilter === 'all' ? 'checked' : ''} onchange="window.azarelSetPrice('all')" />
                  <span>All Prices</span>
                </label>
                <label class="filter-option">
                  <input type="radio" name="price" value="free" ${state.priceFilter === 'free' ? 'checked' : ''} onchange="window.azarelSetPrice('free')" />
                  <span>Free Only</span>
                </label>
                <label class="filter-option">
                  <input type="radio" name="price" value="paid" ${state.priceFilter === 'paid' ? 'checked' : ''} onchange="window.azarelSetPrice('paid')" />
                  <span>Commercial Paid</span>
                </label>
              </div>

              <!-- Framework filter -->
              <div class="filter-section">
                <div class="filter-title">Framework &amp; Tool</div>
                <label class="filter-option">
                  <input type="radio" name="fw" value="all" ${state.frameworkFilter === 'all' ? 'checked' : ''} onchange="window.azarelSetFramework('all')" />
                  <span>Any Framework</span>
                </label>
                ${FRAMEWORKS.map(fw => `
                  <label class="filter-option">
                    <input type="radio" name="fw" value="${fw}" ${state.frameworkFilter === fw ? 'checked' : ''} onchange="window.azarelSetFramework('${fw}')" />
                    <span>${fw}</span>
                  </label>
                `).join('')}
              </div>

              <!-- Commercial License Guarantee -->
              <div style="background: var(--surface-subtle-card); border: 1px solid var(--color-cloud); border-radius: 16px; padding: 14px; font-size: 12px; color: var(--color-steel); line-height: 1.5;">
                <strong style="color: var(--color-obsidian); display: block; margin-bottom: 4px;">Perpetual Rights</strong>
                Zero recurring royalties. Every asset includes unrestricted production rights.
              </div>
            </aside>

            <!-- Products Content Area -->
            <main>
              ${filtered.length > 0 ? `
                <div class="product-grid">
                  ${filtered.map(product => renderProductCard(product)).join('')}
                </div>
              ` : `
                <!-- Empty State -->
                <div class="card-awesomic" style="text-align: center; padding: 64px 20px;">
                  <div style="font-size: 40px; margin-bottom: 16px; opacity: 0.7;">⌕</div>
                  <h3 style="font-size: 20px; font-weight: 600; color: var(--color-obsidian); margin-bottom: 8px;">
                    ${isFavoritesView ? 'No saved assets yet' : 'No matching digital assets found'}
                  </h3>
                  <p style="font-size: 14.5px; color: var(--color-steel); max-width: 420px; margin: 0 auto 24px auto;">
                    ${isFavoritesView 
                      ? 'Click the heart icon on any component, section, or icon to build your personal collection.'
                      : 'Try broadening your search query, or clear your category and pricing filters to see all available items.'
                    }
                  </p>
                  <button onclick="window.azarelResetFilters()" class="btn-primary" style="padding: 10px 20px;">
                    Reset All Filters
                  </button>
                </div>
              `}
            </main>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderActiveChips(currentCategory, isFavoritesView) {
  const chips = [];
  if (currentCategory !== 'all' && !isFavoritesView) {
    chips.push({ label: `Category: ${currentCategory}`, action: "window.azarelChangeCategory('all')" });
  }
  if (state.priceFilter !== 'all') {
    chips.push({ label: `Price: ${state.priceFilter}`, action: "window.azarelSetPrice('all')" });
  }
  if (state.frameworkFilter !== 'all') {
    chips.push({ label: `Framework: ${state.frameworkFilter}`, action: "window.azarelSetFramework('all')" });
  }
  if (state.searchQuery) {
    chips.push({ label: `Search: "${state.searchQuery}"`, action: "window.azarelSetSearch('')" });
  }

  if (chips.length === 0) return '';

  return `
    <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 24px;">
      <span style="font-size: 12px; color: var(--color-fog); font-weight: 600; text-transform: uppercase;">Active:</span>
      ${chips.map(chip => `
        <span class="tag-pill" style="background: var(--surface-card); border-color: var(--color-mist); display: inline-flex; align-items: center; gap: 6px;">
          ${chip.label}
          <button onclick="${chip.action}" style="color: var(--color-fog); font-weight: 700; cursor: pointer;">✕</button>
        </span>
      `).join('')}
    </div>
  `;
}

function getCategoryTitle(cat, isFav) {
  if (isFav) return 'Your Saved Assets Collection';
  switch (cat) {
    case 'sections': return 'Website Sections Marketplace';
    case 'components': return 'Production UI Components';
    case 'icons': return 'Precision Zinc Icon Library';
    case 'templates': return 'Full Website & App Templates';
    case 'illustrations': return 'Isometric & Vector Illustrations';
    case 'resources': return 'Design System Kits & Freebies';
    case 'search': return 'Search Catalog';
    default: return 'The Complete Digital Asset Marketplace';
  }
}

function getCategoryDescription(cat, isFav) {
  if (isFav) return 'All components, templates, and sections you have marked for your active projects.';
  switch (cat) {
    case 'sections': return 'Pre-engineered marketing hero sections, bento grids, pricing matrices, and testimonial bands.';
    case 'components': return 'Atomic, accessible React and Tailwind controls built with 14px buttons and hairline borders.';
    case 'icons': return 'Consistent 24px zinc line and monochrome glyphs crafted for digital tools.';
    case 'templates': return 'End-to-end Next.js and Tailwind website templates designed for high-conversion applications.';
    case 'illustrations': return 'Architectural isometric vectors and zinc wireframe compositions.';
    case 'resources': return 'Figma tokens studio libraries, CSS custom property presets, and open source starter files.';
    case 'search': return 'Real-time multi-criteria filtering across all available sections, components, and tools.';
    default: return 'Explore 50+ modular sections, UI components, icons, and templates designed to help engineering teams ship faster.';
  }
}
