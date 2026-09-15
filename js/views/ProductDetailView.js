/**
 * ProductDetailView Component — Family Style Reference
 * In-depth section viewer with responsive viewport simulator, code tabs, and license checkout.
 */

import { SECTIONS_DATA } from '../data/products.js';
import { state } from '../state.js';

export function renderProductDetailView(slug) {
  const section = SECTIONS_DATA.find(s => s.slug === slug || s.id === slug) || SECTIONS_DATA[0];
  const activeDevice = state.previewDevice;
  const activeTab = state.activeCodeTab;
  const inMixer = state.mixerStack.includes(section.id);

  let currentCode = section.codeReact;
  if (activeTab === 'tailwind') currentCode = section.codeTailwind;
  if (activeTab === 'html') currentCode = section.codeHtml;

  return `
    <div class="product-detail-page" style="padding: 40px 0 80px 0;">
      <div class="container">
        <!-- Breadcrumb & Back -->
        <div style="margin-bottom: 24px; display: flex; align-items: center; gap: 8px; font-size: 13px; color: #7e7e7d;">
          <a href="#/sections" style="color: #343433; text-decoration: underline;">Sections</a>
          <span>/</span>
          <span>${section.categoryLabel}</span>
          <span>/</span>
          <span style="color: #121212; font-weight: 500;">${section.name}</span>
        </div>

        <!-- Section Title Bar & Quick Buy -->
        <div style="background: #ffffff; border-radius: 14px; padding: 24px 32px; box-shadow: inset 0 0 0 1px #f2f0ed; margin-bottom: 32px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
          <div>
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
              <h1 style="font-size: 28px; font-weight: 600; color: #121212; margin: 0;">${section.name}</h1>
              <span class="badge-status ${section.isFree ? 'badge-mint' : 'badge-honey'}">
                ${section.isFree ? 'Freebie' : `$${section.price}`}
              </span>
            </div>
            <p style="font-size: 15px; color: #474645; max-width: 600px; margin: 0;">
              ${section.description}
            </p>
          </div>

          <div style="display: flex; align-items: center; gap: 12px;">
            <button 
              type="button" 
              onclick="window.azarelToggleMixer('${section.id}')" 
              class="btn-sand-pill"
              style="padding: 10px 18px; font-size: 14px;"
            >
              ${inMixer ? '✓ In Page Mixer' : '+ Add to Page Mixer'}
            </button>
            <button 
              type="button" 
              onclick="window.azarelAddToCart('${section.id}')" 
              class="btn-dark-pill"
              style="padding: 10px 24px; font-size: 14px;"
            >
              ${section.isFree ? 'Download Freebie' : `Buy Section ($${section.price})`}
            </button>
          </div>
        </div>

        <!-- Interactive Viewport Canvas -->
        <div style="margin-bottom: 32px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #7e7e7d;">
              LIVE RESPONSIVE VIEWPORT
            </span>
            <div class="device-switcher">
              <button 
                type="button" 
                onclick="window.azarelSetDevice('desktop')" 
                class="device-btn ${activeDevice === 'desktop' ? 'active' : ''}"
              >
                🖥 Desktop (1200px)
              </button>
              <button 
                type="button" 
                onclick="window.azarelSetDevice('tablet')" 
                class="device-btn ${activeDevice === 'tablet' ? 'active' : ''}"
              >
                📱 Tablet (768px)
              </button>
              <button 
                type="button" 
                onclick="window.azarelSetDevice('mobile')" 
                class="device-btn ${activeDevice === 'mobile' ? 'active' : ''}"
              >
                📲 Mobile (375px)
              </button>
            </div>
          </div>

          <div class="viewport-canvas-wrapper" style="padding: 24px 16px;">
            <div class="viewport-frame viewport-${activeDevice}">
              ${section.previewHtml}
            </div>
          </div>
        </div>

        <!-- Code Snippet Copier & Specs -->
        <div class="code-inspector-card">
          <div class="code-tabs-header">
            <div style="display: flex; gap: 8px;">
              <button 
                type="button" 
                onclick="window.azarelSetCodeTab('react')" 
                class="code-tab ${activeTab === 'react' ? 'active' : ''}"
              >
                ⚛ React 19 JSX
              </button>
              <button 
                type="button" 
                onclick="window.azarelSetCodeTab('tailwind')" 
                class="code-tab ${activeTab === 'tailwind' ? 'active' : ''}"
              >
                🌊 Tailwind CSS v4
              </button>
              <button 
                type="button" 
                onclick="window.azarelSetCodeTab('html')" 
                class="code-tab ${activeTab === 'html' ? 'active' : ''}"
              >
                📄 Vanilla HTML/CSS
              </button>
            </div>

            <button 
              type="button" 
              onclick="navigator.clipboard.writeText(document.getElementById('detail-code-box').innerText); window.dispatchEvent(new CustomEvent('azarel:toast', { detail: { message: 'Code copied to clipboard!' } }))" 
              class="btn-sand-pill"
              style="padding: 6px 14px; font-size: 13px;"
            >
              📋 Copy Code
            </button>
          </div>

          <pre class="code-snippet-box"><code id="detail-code-box">${escapeHtml(currentCode)}</code></pre>
        </div>
      </div>
    </div>
  `;
}

function escapeHtml(text = '') {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
