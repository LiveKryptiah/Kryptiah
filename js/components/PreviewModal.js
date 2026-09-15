/**
 * PreviewModal Component — Linear Style Reference (design.md)
 * Fullscreen Interactive Section & Specification Inspector:
 * - View Mode Switcher: [ Preview | design.md Spec | Split ]
 * - Responsive Device Switcher: Desktop (1200px), Tablet (768px), Mobile (375px)
 * - Pure Design System Specification Viewer (Zero Code Blocks)
 * - Direct Add to Cart & Stack Mixer triggers
 */

import { state } from '../state.js';
import { Icons } from './Icons.js';
import { renderSpecInspector } from './SpecInspector.js';

export function renderPreviewModal() {
  const section = state.previewSection;
  if (!section) return '';

  const activeDevice = state.previewDevice;
  const viewMode = state.modalViewMode || 'split';
  const inMixer = state.mixerStack.includes(section.id);

  return `
    <div class="modal-backdrop" onclick="window.azarelCloseModal(event)">
      <div class="modal-container" onclick="event.stopPropagation()">
        <!-- Modal Top Navigation Bar -->
        <div class="modal-header">
          <!-- Left: Section Title & Spec Archetype -->
          <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
            <div style="display: flex; flex-direction: column;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <h3 style="font-size: 18px; font-weight: 600; color: #121212; margin: 0;">${section.name}</h3>
                <span class="badge-status ${section.isFree ? 'badge-mint' : 'badge-honey'}">
                  ${section.isFree ? 'Freebie' : `$${section.price}`}
                </span>
              </div>
              <div style="display: flex; align-items: center; gap: 6px; font-size: 12px; color: #7e7e7d; margin-top: 2px;">
                <span>${section.categoryLabel}</span>
                <span>•</span>
                <span style="color: #08090a; font-weight: 500;">design.md Standard</span>
              </div>
            </div>
          </div>

          <!-- Center: View Mode & Device Switcher -->
          <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap; justify-content: center;">
            <!-- Primary Mode Switcher: Preview vs design.md vs Split -->
            <div style="display: inline-flex; background: #f2f0ed; padding: 3px; border-radius: 9999px; gap: 2px;">
              <button 
                type="button" 
                onclick="window.azarelSetModalViewMode('preview')" 
                class="mode-pill-btn ${viewMode === 'preview' ? 'active' : ''}"
                title="Interactive Visual Viewport"
              >
                Preview
              </button>
              <button 
                type="button" 
                onclick="window.azarelSetModalViewMode('spec')" 
                class="mode-pill-btn ${viewMode === 'spec' ? 'active' : ''}"
                title="design.md Specification"
              >
                design.md
              </button>
              <button 
                type="button" 
                onclick="window.azarelSetModalViewMode('split')" 
                class="mode-pill-btn ${viewMode === 'split' ? 'active' : ''}"
                title="Split View (Preview + Spec)"
              >
                Split
              </button>
            </div>

            <!-- Device Switcher (Visible when viewport is active) -->
            ${viewMode !== 'spec' ? `
              <div class="device-switcher">
                <button 
                  type="button" 
                  onclick="window.azarelSetDevice('desktop')" 
                  class="device-btn ${activeDevice === 'desktop' ? 'active' : ''}" 
                  title="Desktop View (1200px)"
                  style="display: inline-flex; align-items: center; gap: 6px;"
                >
                  ${Icons.desktop(14)}
                  <span>Desktop</span>
                </button>
                <button 
                  type="button" 
                  onclick="window.azarelSetDevice('tablet')" 
                  class="device-btn ${activeDevice === 'tablet' ? 'active' : ''}" 
                  title="Tablet View (768px)"
                  style="display: inline-flex; align-items: center; gap: 6px;"
                >
                  ${Icons.tablet(14)}
                  <span>Tablet</span>
                </button>
                <button 
                  type="button" 
                  onclick="window.azarelSetDevice('mobile')" 
                  class="device-btn ${activeDevice === 'mobile' ? 'active' : ''}" 
                  title="Mobile View (375px)"
                  style="display: inline-flex; align-items: center; gap: 6px;"
                >
                  ${Icons.mobile(14)}
                  <span>Mobile</span>
                </button>
              </div>
            ` : ''}
          </div>

          <!-- Right: Actions & Close -->
          <div style="display: flex; align-items: center; gap: 10px;">
            <button 
              type="button" 
              onclick="window.azarelToggleMixer('${section.id}')" 
              class="btn-sand-pill" 
              style="font-size: 13px; padding: 7px 14px; display: inline-flex; align-items: center; gap: 4px;"
            >
              ${inMixer ? `${Icons.check(12, '#00ca48')} <span>In Stack</span>` : '<span>+ Stack Section</span>'}
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
              style="padding: 4px; display: flex; align-items: center; justify-content: center; color: #7e7e7d;"
              aria-label="Close Preview"
            >
              ${Icons.close(18, '#7e7e7d')}
            </button>
          </div>
        </div>

        <!-- Modal Body: Interactive Viewport and/or design.md Spec -->
        <div class="modal-body-scroll">
          <!-- 1. Viewport Canvas (Shown in preview and split modes) -->
          ${viewMode !== 'spec' ? `
            <div class="viewport-canvas-wrapper" style="${viewMode === 'preview' ? 'min-height: 520px;' : ''}">
              <div class="viewport-frame viewport-${activeDevice}">
                <div class="viewport-content">
                  ${section.previewHtml}
                </div>
              </div>
            </div>
          ` : ''}

          <!-- 2. design.md Specification Inspector (Zero Code Blocks) -->
          ${viewMode !== 'preview' ? `
            <div style="${viewMode === 'spec' ? 'max-width: 1100px; margin: 0 auto;' : 'margin-top: 20px;'}">
              ${renderSpecInspector(section, state.activeSpecTab)}
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}

// Global Handlers
window.azarelCloseModal = (e) => {
  if (!e || e.target === e.currentTarget || e.target.getAttribute?.('aria-label') === 'Close Preview' || e.target.closest?.('button[aria-label="Close Preview"]')) {
    state.closePreview();
  }
};
window.azarelSetDevice = (device) => state.setPreviewDevice(device);
window.azarelSetModalViewMode = (mode) => state.setModalViewMode(mode);
