/**
 * SpecInspector Component — Linear Style Reference (design.md)
 * Midnight Precision Instrument Specification Viewer:
 * - Directives: Surfaces, Elevation, Geometry, and Do's & Don'ts
 * - Tokens: 16-Color Palette swatches, tokens, and system roles
 * - Typography: Inter Variable OpenType scale & Berkeley Mono metadata table
 * - Agent Prompt: Ready-to-use LLM instruction guide for section generation
 * - Raw design.md: Complete formatted design markdown
 * Zero Code Blocks (React 19 JSX / Tailwind classes removed per design.md requirement)
 */

import { state } from '../state.js';
import { LINEAR_TOKENS, getSectionDesignMd, getSectionAgentPrompt, DESIGN_MD_FULL } from '../data/designSpec.js';
import { Icons } from './Icons.js';

export function renderSpecInspector(section, activeTab = 'directives', isDetail = false) {
  if (!section) return '';

  return `
    <div class="spec-inspector-card">
      <!-- Spec Tabs Header -->
      <div class="spec-tabs-header">
        <div style="display: flex; gap: 6px; flex-wrap: wrap; align-items: center;">
          <button 
            type="button" 
            onclick="window.azarelSetSpecTab('directives')" 
            class="spec-tab ${activeTab === 'directives' ? 'active' : ''}"
          >
            Directives
          </button>
          <button 
            type="button" 
            onclick="window.azarelSetSpecTab('tokens')" 
            class="spec-tab ${activeTab === 'tokens' ? 'active' : ''}"
          >
            Design Tokens
          </button>
          <button 
            type="button" 
            onclick="window.azarelSetSpecTab('typography')" 
            class="spec-tab ${activeTab === 'typography' ? 'active' : ''}"
          >
            Typography Scale
          </button>
          <button 
            type="button" 
            onclick="window.azarelSetSpecTab('prompt')" 
            class="spec-tab ${activeTab === 'prompt' ? 'active' : ''}"
          >
            Agent Prompt Guide
          </button>
          <button 
            type="button" 
            onclick="window.azarelSetSpecTab('raw')" 
            class="spec-tab ${activeTab === 'raw' ? 'active' : ''}"
          >
            Raw design.md
          </button>
        </div>

        <!-- Copy Action Button (Acid Lime Flashlight) -->
        <button 
          type="button" 
          onclick="window.azarelCopySpec('${activeTab}', '${section.id}')" 
          class="btn-acid-lime"
          style="font-size: 12px; padding: 6px 14px;"
          title="Copy design specification to clipboard"
        >
          ${Icons.copy(13, '#08090a')}
          <span>${activeTab === 'prompt' ? 'Copy Agent Prompt' : activeTab === 'raw' ? 'Copy design.md' : 'Copy Spec (.md)'}</span>
        </button>
      </div>

      <!-- Tab Content Area -->
      <div class="spec-tab-content">
        ${renderTabBody(section, activeTab)}
      </div>

      <!-- Specification Metadata Strip -->
      <div style="margin-top: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; font-size: 12px;">
        <div style="background: #161718; padding: 12px 14px; border-radius: 8px; box-shadow: inset 0 0 0 1px #23252a;">
          <div style="font-weight: 510; color: #ffffff; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
            <span style="width: 6px; height: 6px; border-radius: 50%; background: #e4f222;"></span>
            <span>Design Standard:</span>
          </div>
          <div style="color: #8a8f98; font-family: ui-monospace, monospace;">design.md · Linear Midnight Instrument</div>
        </div>

        <div style="background: #161718; padding: 12px 14px; border-radius: 8px; box-shadow: inset 0 0 0 1px #23252a;">
          <div style="font-weight: 510; color: #ffffff; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
            <span style="width: 6px; height: 6px; border-radius: 50%; background: #27a644;"></span>
            <span>Surface &amp; Geometry:</span>
          </div>
          <div style="color: #8a8f98; font-family: ui-monospace, monospace;">Level 1 Carbon · 12px Card · 6px Button</div>
        </div>

        <div style="background: #161718; padding: 12px 14px; border-radius: 8px; box-shadow: inset 0 0 0 1px #23252a;">
          <div style="font-weight: 510; color: #ffffff; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
            <span style="width: 6px; height: 6px; border-radius: 50%; background: #02b8cc;"></span>
            <span>Format Guarantee:</span>
          </div>
          <div style="color: #8a8f98; font-family: ui-monospace, monospace;">Pure Specification · Zero Raw Code Dumps</div>
        </div>
      </div>
    </div>
  `;
}

function renderTabBody(section, tab) {
  switch (tab) {
    case 'tokens':
      return renderTokensTab();
    case 'typography':
      return renderTypographyTab();
    case 'prompt':
      return renderPromptTab(section);
    case 'raw':
      return renderRawTab();
    case 'directives':
    default:
      return renderDirectivesTab(section);
  }
}

function renderDirectivesTab(section) {
  const spec = getSectionDesignMd(section);
  return `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
      <!-- Surfaces & Elevation -->
      <div style="background: #161718; border-radius: 8px; padding: 16px; box-shadow: inset 0 0 0 1px #23252a;">
        <h4 style="font-size: 13px; font-weight: 510; color: #ffffff; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.04em;">
          Surface Hierarchy &amp; Elevation
        </h4>
        <div style="display: flex; flex-direction: column; gap: 8px; font-size: 12px;">
          <div style="display: flex; justify-content: space-between; padding: 8px; background: #08090a; border-radius: 6px; box-shadow: inset 0 0 0 1px #23252a;">
            <span style="color: #ffffff; font-weight: 500;">Level 0: Void</span>
            <span style="color: #8a8f98; font-family: ui-monospace, monospace;">#08090a · Canvas Base</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding: 8px; background: #0f1011; border-radius: 6px; box-shadow: inset 0 0 0 1px #23252a;">
            <span style="color: #ffffff; font-weight: 500;">Level 1: Carbon</span>
            <span style="color: #8a8f98; font-family: ui-monospace, monospace;">#0f1011 · Card Container</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding: 8px; background: #161718; border-radius: 6px; box-shadow: inset 0 0 0 1px #23252a;">
            <span style="color: #ffffff; font-weight: 500;">Level 2: Obsidian</span>
            <span style="color: #8a8f98; font-family: ui-monospace, monospace;">#161718 · Elevated Panels</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding: 8px; background: #23252a; border-radius: 6px;">
            <span style="color: #ffffff; font-weight: 500;">Level 3: Graphite</span>
            <span style="color: #d0d6e0; font-family: ui-monospace, monospace;">#23252a · Hairline Edges</span>
          </div>
        </div>
        <p style="margin: 12px 0 0 0; font-size: 12px; color: #8a8f98; line-height: 1.5;">
          Elevation comes from surface tone shifts and 0.5px hairline borders, rather than layered ambient drop shadows.
        </p>
      </div>

      <!-- Geometry & Radii -->
      <div style="background: #161718; border-radius: 8px; padding: 16px; box-shadow: inset 0 0 0 1px #23252a;">
        <h4 style="font-size: 13px; font-weight: 510; color: #ffffff; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.04em;">
          Geometry &amp; Radii Rules
        </h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 12px;">
          <div style="padding: 10px; background: #08090a; border-radius: 6px; box-shadow: inset 0 0 0 1px #23252a;">
            <div style="color: #8a8f98; font-size: 11px;">Cards / Panels</div>
            <div style="color: #ffffff; font-weight: 510; font-size: 14px; font-family: ui-monospace, monospace;">12px radius</div>
          </div>
          <div style="padding: 10px; background: #08090a; border-radius: 6px; box-shadow: inset 0 0 0 1px #23252a;">
            <div style="color: #8a8f98; font-size: 11px;">Buttons / Inputs</div>
            <div style="color: #ffffff; font-weight: 510; font-size: 14px; font-family: ui-monospace, monospace;">6px radius</div>
          </div>
          <div style="padding: 10px; background: #08090a; border-radius: 6px; box-shadow: inset 0 0 0 1px #23252a;">
            <div style="color: #8a8f98; font-size: 11px;">Status Pills / Tags</div>
            <div style="color: #ffffff; font-weight: 510; font-size: 14px; font-family: ui-monospace, monospace;">9999px pill</div>
          </div>
          <div style="padding: 10px; background: #08090a; border-radius: 6px; box-shadow: inset 0 0 0 1px #23252a;">
            <div style="color: #8a8f98; font-size: 11px;">Hairline Borders</div>
            <div style="color: #ffffff; font-weight: 510; font-size: 14px; font-family: ui-monospace, monospace;">0.5px / 1px inset</div>
          </div>
        </div>
        <p style="margin: 12px 0 0 0; font-size: 12px; color: #8a8f98; line-height: 1.5;">
          Three radii form the entire geometric vocabulary. Large radii (16px+) are strictly disallowed.
        </p>
      </div>

      <!-- Do's & Don'ts -->
      <div style="background: #161718; border-radius: 8px; padding: 16px; box-shadow: inset 0 0 0 1px #23252a; grid-column: 1 / -1;">
        <h4 style="font-size: 13px; font-weight: 510; color: #ffffff; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.04em;">
          System Invariants &amp; Rules
        </h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
          <div>
            <div style="color: #27a644; font-size: 12px; font-weight: 510; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
              ${Icons.check(13, '#27a644')}
              <span>MANDATORY DIRECTIVES (DO)</span>
            </div>
            <ul style="margin: 0; padding-left: 18px; font-size: 12px; color: #d0d6e0; line-height: 1.6;">
              ${LINEAR_TOKENS.rules.dos.slice(0, 4).map(d => `<li>${d}</li>`).join('')}
            </ul>
          </div>
          <div>
            <div style="color: #eb5757; font-size: 12px; font-weight: 510; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
              ${Icons.close(13, '#eb5757')}
              <span>SYSTEM PROHIBITIONS (DON'T)</span>
            </div>
            <ul style="margin: 0; padding-left: 18px; font-size: 12px; color: #d0d6e0; line-height: 1.6;">
              ${LINEAR_TOKENS.rules.donts.slice(0, 4).map(d => `<li>${d}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderTokensTab() {
  return `
    <div>
      <div style="margin-bottom: 12px; font-size: 13px; color: #8a8f98;">
        Color palette extracted directly from <strong style="color: #ffffff;">design.md</strong>. Applied across all midnight surfaces and accents:
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 10px;">
        ${LINEAR_TOKENS.colors.map(c => `
          <div style="background: #161718; border-radius: 8px; padding: 10px; box-shadow: inset 0 0 0 1px #23252a; display: flex; align-items: center; gap: 12px;">
            <div style="width: 32px; height: 32px; border-radius: 6px; background-color: ${c.value}; box-shadow: inset 0 0 0 1px rgba(255,255,255,0.15); flex-shrink: 0;"></div>
            <div style="overflow: hidden;">
              <div style="display: flex; align-items: baseline; gap: 6px;">
                <span style="color: #ffffff; font-weight: 510; font-size: 12px;">${c.name}</span>
                <span style="color: #8a8f98; font-size: 11px; font-family: ui-monospace, monospace;">${c.value}</span>
              </div>
              <div style="color: #e4f222; font-size: 10px; font-family: ui-monospace, monospace; margin-top: 1px;">${c.token}</div>
              <div style="color: #8a8f98; font-size: 11px; margin-top: 2px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;" title="${c.role}">
                ${c.role}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderTypographyTab() {
  const { primary, mono, scale } = LINEAR_TOKENS.typography;
  return `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <!-- Typeface specifications -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
        <div style="background: #161718; border-radius: 8px; padding: 14px; box-shadow: inset 0 0 0 1px #23252a;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <h4 style="margin: 0; font-size: 14px; font-weight: 510; color: #ffffff;">${primary.name}</h4>
            <span style="font-size: 11px; color: #e4f222; font-family: ui-monospace, monospace;">${primary.token}</span>
          </div>
          <div style="font-size: 12px; color: #8a8f98; margin-bottom: 4px;">Primary UI &amp; Headings · Weights: ${primary.weights}</div>
          <div style="font-size: 11px; color: #d0d6e0; font-family: ui-monospace, monospace; background: #08090a; padding: 6px 8px; border-radius: 4px;">
            Features: ${primary.features} · Tracking: -0.022em
          </div>
        </div>

        <div style="background: #161718; border-radius: 8px; padding: 14px; box-shadow: inset 0 0 0 1px #23252a;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <h4 style="margin: 0; font-size: 14px; font-weight: 510; color: #ffffff;">${mono.name}</h4>
            <span style="font-size: 11px; color: #e4f222; font-family: ui-monospace, monospace;">${mono.token}</span>
          </div>
          <div style="font-size: 12px; color: #8a8f98; margin-bottom: 4px;">Code-adjacent UI, badges &amp; shortcuts · Weights: ${mono.weights}</div>
          <div style="font-size: 11px; color: #d0d6e0; font-family: ui-monospace, monospace; background: #08090a; padding: 6px 8px; border-radius: 4px;">
            Features: ${mono.features} · Tracking: ${mono.tracking}
          </div>
        </div>
      </div>

      <!-- Type Scale Table -->
      <div style="background: #161718; border-radius: 8px; padding: 14px; box-shadow: inset 0 0 0 1px #23252a; overflow-x: auto;">
        <h4 style="margin: 0 0 10px 0; font-size: 13px; font-weight: 510; color: #ffffff; text-transform: uppercase; letter-spacing: 0.04em;">
          Type Scale Ladder
        </h4>
        <table style="width: 100%; border-collapse: collapse; font-size: 12px; text-align: left;">
          <thead>
            <tr style="border-bottom: 1px solid #23252a; color: #8a8f98; font-size: 11px; text-transform: uppercase;">
              <th style="padding: 8px 10px;">Role</th>
              <th style="padding: 8px 10px;">Size</th>
              <th style="padding: 8px 10px;">Line Height</th>
              <th style="padding: 8px 10px;">Tracking</th>
              <th style="padding: 8px 10px;">Token</th>
            </tr>
          </thead>
          <tbody>
            ${scale.map(s => `
              <tr style="border-bottom: 1px solid #1a1b1d;">
                <td style="padding: 8px 10px; color: #ffffff; font-weight: 500;">${s.role}</td>
                <td style="padding: 8px 10px; color: #d0d6e0; font-family: ui-monospace, monospace;">${s.size}</td>
                <td style="padding: 8px 10px; color: #8a8f98;">${s.lh}</td>
                <td style="padding: 8px 10px; color: #8a8f98; font-family: ui-monospace, monospace;">${s.ls}</td>
                <td style="padding: 8px 10px; color: #e4f222; font-family: ui-monospace, monospace; font-size: 11px;">${s.token}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderPromptTab(section) {
  const promptText = getSectionAgentPrompt(section);
  return `
    <div style="background: #161718; border-radius: 8px; padding: 18px; box-shadow: inset 0 0 0 1px #23252a;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <span style="font-size: 13px; font-weight: 510; color: #ffffff; display: flex; align-items: center; gap: 6px;">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: #e4f222;"></span>
          Agent Prompt for Section Generation
        </span>
        <span style="font-size: 11px; color: #8a8f98; font-family: ui-monospace, monospace;">Target: Claude / GPT-4o / Gemini</span>
      </div>

      <div 
        id="spec-agent-prompt-text"
        style="background: #08090a; border-radius: 6px; padding: 16px; box-shadow: inset 0 0 0 1px #23252a; color: #d0d6e0; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 13px; line-height: 1.6; white-space: pre-wrap; word-break: break-word;"
      >${promptText}</div>

      <div style="margin-top: 14px; font-size: 12px; color: #8a8f98; line-height: 1.5;">
        Paste this prompt directly into your AI coding agent. It instructs the LLM to generate the section with the exact Linear tokens, surface levels, and geometric constraints defined in <strong style="color: #ffffff;">design.md</strong> without inventing arbitrary styles.
      </div>
    </div>
  `;
}

function renderRawTab() {
  return `
    <div style="background: #161718; border-radius: 8px; padding: 18px; box-shadow: inset 0 0 0 1px #23252a;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="font-size: 13px; font-weight: 510; color: #ffffff;">Complete design.md Specification</span>
        <span style="font-size: 11px; color: #8a8f98; font-family: ui-monospace, monospace;">Linear — Style Reference</span>
      </div>
      <pre 
        id="spec-raw-md-text"
        style="background: #08090a; border-radius: 6px; padding: 16px; box-shadow: inset 0 0 0 1px #23252a; color: #d0d6e0; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 12px; line-height: 1.6; max-height: 380px; overflow-y: auto; white-space: pre-wrap; word-break: break-word;"
      >${DESIGN_MD_FULL}</pre>
    </div>
  `;
}

// Global Handlers
window.azarelSetSpecTab = (tab) => state.setActiveSpecTab(tab);
window.azarelCopySpec = (tab, sectionId) => {
  const section = state.previewSection || (state.getFilteredSections ? state.getFilteredSections().find(s => s.id === sectionId) : null);
  let text = '';
  let toastMsg = 'Copied specification to clipboard!';

  if (tab === 'prompt') {
    text = section ? getSectionAgentPrompt(section) : 'Linear design.md prompt';
    toastMsg = 'Copied Agent Prompt Guide!';
  } else if (tab === 'raw') {
    text = DESIGN_MD_FULL;
    toastMsg = 'Copied full design.md specification!';
  } else {
    text = section ? getSectionDesignMd(section) : DESIGN_MD_FULL;
    toastMsg = `Copied ${section ? section.name : ''} design.md spec!`;
  }

  navigator.clipboard.writeText(text).then(() => {
    state.notifyToast(toastMsg);
  }).catch(() => {
    state.notifyToast('Copied to clipboard');
  });
};
