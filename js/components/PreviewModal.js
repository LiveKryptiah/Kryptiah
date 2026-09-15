/**
 * PreviewModal Component — Family Style Reference
 * Fullscreen Interactive Section Previewer:
 * - Device Switcher: Desktop (1200px), Tablet (768px), Mobile (375px)
 * - Multi-Framework Code Copier: React 19 JSX, Tailwind v4, HTML/CSS
 * - Direct Add to Cart & Stack Mixer triggers
 */

import { state } from '../state.js';

export function renderPreviewModal() {
  const section = state.previewSection;
  if (!section) return '';

  const activeDevice = state.previewDevice;
  const activeTab = state.activeCodeTab;
  const inMixer = state.mixerStack.includes(section.id);

  let currentCode = section.codeReact;
  if (activeTab === 'tailwind') currentCode = section.codeTailwind;
  if (activeTab === 'html') currentCode = section.codeHtml;

  return `
    <div class="modal-backdrop" onclick="window.azarelCloseModal(event)">
      <div class="modal-container" onclick="event.stopPropagation()">
        <!-- Modal Top Navigation Bar -->
        <div class="modal-header">
          <!-- Left: Section Title & Archetype -->
          <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
            <div style="display: flex; flex-direction: column;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <h3 style="font-size: 18px; font-weight: 600; color: #121212; margin: 0;">${section.name}</h3>
                <span class="badge-status ${section.isFree ? 'badge-mint' : 'badge-honey'}">
                  ${section.isFree ? 'Freebie' : `$${section.price}`}
                </span>
              </div>
              <span style="font-size: 12px; color: #7e7e7d;">${section.categoryLabel} • ${section.framework}</span>
            </div>
          </div>

          <!-- Center: Device Switcher (Desktop, Tablet, Mobile) -->
          <div class="device-switcher">
            <button 
              type="button" 
              onclick="window.azarelSetDevice('desktop')" 
              class="device-btn ${activeDevice === 'desktop' ? 'active' : ''}" 
              title="Desktop View (1200px)"
            >
              🖥 Desktop
            </button>
            <button 
              type="button" 
              onclick="window.azarelSetDevice('tablet')" 
              class="device-btn ${activeDevice === 'tablet' ? 'active' : ''}" 
              title="Tablet View (768px)"
            >
              📱 Tablet
            </button>
            <button 
              type="button" 
              onclick="window.azarelSetDevice('mobile')" 
              class="device-btn ${activeDevice === 'mobile' ? 'active' : ''}" 
              title="Mobile View (375px)"
            >
              📲 Mobile
            </button>
          </div>

          <!-- Right: Actions & Close -->
          <div style="display: flex; align-items: center; gap: 10px;">
            <button 
              type="button" 
              onclick="window.azarelToggleMixer('${section.id}')" 
              class="btn-sand-pill" 
              style="font-size: 13px; padding: 7px 14px;"
            >
              ${inMixer ? '✓ In Stack' : '+ Stack Section'}
            </button>

            <button 
              type="button" 
              onclick="window.azarelAddToCart('${section.id}')" 
              class="btn-dark-pill" 
              style="font-size: 13px; padding: 7px 16px;"
            >
              ${section.isFree ? 'Download Freebie' : `Buy Section ($${section.price})`}
            </button>

            <button 
              type="button" 
              onclick="window.azarelCloseModal()" 
              class="btn-ghost" 
              style="font-size: 24px; color: #7e7e7d; line-height: 1; padding: 4px 8px;"
              aria-label="Close Preview"
            >
              ✕
            </button>
          </div>
        </div>

        <!-- Modal Body: Split into Interactive Viewport and Code Copier -->
        <div class="modal-body-scroll">
          <!-- Device Viewport Container -->
          <div class="viewport-canvas-wrapper">
            <div class="viewport-frame viewport-${activeDevice}">
              <div class="viewport-content">
                ${section.previewHtml}
              </div>
            </div>
          </div>

          <!-- Code Inspector & Asset Details Section -->
          <div class="code-inspector-card">
            <!-- Tabs -->
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
                  📄 Vanilla HTML &amp; CSS
                </button>
              </div>

              <!-- Copy Code Button -->
              <button 
                type="button" 
                onclick="window.azarelCopyCode('${section.id}')" 
                class="btn-sand-pill" 
                style="display: flex; align-items: center; gap: 6px; padding: 6px 14px; font-size: 12px;"
              >
                📋 Copy Code Snippet
              </button>
            </div>

            <!-- Code Snippet Area -->
            <pre class="code-snippet-box"><code>${escapeHtml(currentCode)}</code></pre>

            <!-- Metadata Features -->
            <div style="margin-top: 16px; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; font-size: 13px;">
              <div style="background: #ffffff; padding: 12px; border-radius: 8px; box-shadow: inset 0 0 0 1px #f2f0ed;">
                <div style="font-weight: 600; color: #121212; margin-bottom: 4px;">Included with License:</div>
                <div style="color: #474645;">${section.included.join(' • ')}</div>
              </div>
              <div style="background: #ffffff; padding: 12px; border-radius: 8px; box-shadow: inset 0 0 0 1px #f2f0ed;">
                <div style="font-weight: 600; color: #121212; margin-bottom: 4px;">Design Standard:</div>
                <div style="color: #474645;">Family Design Tokens • Inter Font • Hairline Borders</div>
              </div>
            </div>
          </div>
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

// Global Handlers
window.azarelCloseModal = (e) => {
  if (!e || e.target === e.currentTarget || e.target.getAttribute('aria-label') === 'Close Preview' || e.target.innerText === '✕') {
    state.closePreview();
  }
};
window.azarelSetDevice = (device) => state.setPreviewDevice(device);
window.azarelSetCodeTab = (tab) => state.setActiveCodeTab(tab);
window.azarelCopyCode = (id) => {
  const section = state.previewSection;
  if (!section) return;
  let code = section.codeReact;
  if (state.activeCodeTab === 'tailwind') code = section.codeTailwind;
  if (state.activeCodeTab === 'html') code = section.codeHtml;

  navigator.clipboard.writeText(code).then(() => {
    state.notifyToast(`Copied ${state.activeCodeTab.toUpperCase()} code to clipboard!`);
  }).catch(() => {
    state.notifyToast('Copied to clipboard');
  });
};
