/**
 * PreviewModal Component
 * Full-fidelity interactive preview modal with responsive preview controls,
 * syntax code copy, and direct product detail links.
 */

import { state } from '../state.js';

export function renderPreviewModal() {
  const product = state.previewProduct;
  if (!product) return '';

  return `
    <div id="preview-modal" class="modal-overlay active" onclick="if(event.target === this) window.azarelClosePreview()">
      <div class="modal-card">
        <!-- Modal Header -->
        <div style="padding: 20px 28px; border-bottom: 1px solid var(--color-cloud); display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <span class="badge-ember" style="font-size: 11px;">LIVE PREVIEW</span>
            <h2 style="font-size: 18px; font-weight: 600; color: var(--color-obsidian);">${product.name}</h2>
          </div>

          <div style="display: flex; align-items: center; gap: 10px;">
            <a href="#/product/${product.slug}" onclick="window.azarelClosePreview()" class="btn-ghost" style="padding: 7px 14px; font-size: 13px;">
              Full Details ↗
            </a>
            <button onclick="window.azarelClosePreview()" class="btn-ghost" style="padding: 7px 12px; font-size: 14px;" aria-label="Close modal">
              ✕
            </button>
          </div>
        </div>

        <!-- Modal Content -->
        <div style="padding: 28px;">
          <!-- Simulated Live Viewport -->
          <div style="border: 1px solid var(--color-cloud); border-radius: 20px; overflow: hidden; background: #ffffff; margin-bottom: 24px;">
            <div style="background: #f4f4f5; padding: 10px 16px; border-bottom: 1px solid var(--color-cloud); display: flex; align-items: center; justify-content: space-between;">
              <div style="display: flex; gap: 6px;">
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #d4d4d8;"></span>
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #d4d4d8;"></span>
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #d4d4d8;"></span>
              </div>
              <span style="font-size: 12px; color: var(--color-steel); font-family: monospace;">azarel.system/preview/${product.slug}</span>
              <span class="tag-pill" style="font-size: 11px;">${product.framework || 'React'}</span>
            </div>
            <div style="min-height: 240px; max-height: 380px; overflow-y: auto;">
              ${product.previewHtml || `<div style="padding: 40px; text-align: center;"><img src="${product.image}" style="max-height: 220px; border-radius: 12px;" /></div>`}
            </div>
          </div>

          <!-- Code Snippet Box -->
          <div class="code-preview-box">
            <div class="code-header">
              <span style="font-size: 12px; color: #a1a1aa; font-family: monospace;">component.tsx</span>
              <button 
                type="button"
                onclick="navigator.clipboard.writeText(decodeURIComponent('${encodeURIComponent(product.codeSnippet)}')); window.dispatchEvent(new CustomEvent('azarel:toast', { detail: { message: 'Code copied to clipboard!' } }))" 
                class="btn-primary" 
                style="padding: 6px 14px; font-size: 12px; border-radius: 10px; background: #27272a; border-color: #3f3f46;"
              >
                Copy Code
              </button>
            </div>
            <pre class="code-content"><code>${escapeHtml(product.codeSnippet)}</code></pre>
          </div>
        </div>

        <!-- Modal Footer -->
        <div style="padding: 16px 28px; background: #fafafa; border-top: 1px solid var(--color-cloud); display: flex; align-items: center; justify-content: space-between; border-radius: 0 0 36px 36px;">
          <div style="display: flex; gap: 8px;">
            ${product.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
          </div>
          <div style="display: flex; gap: 12px; align-items: center;">
            <span style="font-size: 18px; font-weight: 700; color: var(--color-obsidian);">
              ${product.isFree ? 'Free' : `$${product.price}`}
            </span>
            <a 
              href="#/product/${product.slug}" 
              onclick="window.azarelClosePreview()" 
              class="btn-primary" 
              style="padding: 9px 18px; font-size: 13.5px;"
            >
              ${product.isFree ? 'Download Freebie' : 'Purchase License'}
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
