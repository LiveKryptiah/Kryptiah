/**
 * PricingView Component
 * Transparent pricing tiers for Azarel digital assets:
 * - Community Free ($0)
 * - Pro Solo ($29/mo or $240/yr)
 * - Team All-Access ($79/mo or $690/yr)
 * - Feature comparison matrix & FAQs
 */

export function renderPricingView() {
  return `
    <div class="pricing-page">
      <!-- Pricing Hero -->
      <section class="section-gap" style="background-color: var(--color-paper); border-bottom: 1px solid var(--color-cloud); text-align: center;">
        <div class="container" style="max-width: 800px;">
          <span class="badge-ember" style="margin-bottom: 16px;">TRANSPARENT LICENSING</span>
          <h1 class="text-display" style="margin-bottom: 16px;">
            Invest once. Ship indefinitely.
          </h1>
          <p class="text-body-lg" style="margin-bottom: 32px;">
            No recurring user seats or restrictive runtime royalties. Choose a plan or purchase individual assets perpetually.
          </p>

          <!-- Toggle: Annual vs Monthly -->
          <div style="display: inline-flex; align-items: center; gap: 8px; background: white; padding: 6px 8px; border-radius: 10000px; border: 1px solid var(--color-cloud);">
            <button 
              id="billing-annual-btn" 
              onclick="window.azarelSetBilling('annual')" 
              class="btn-primary" 
              style="padding: 8px 18px; font-size: 13px; border-radius: 10000px;"
            >
              Annual Billing (Save 25%)
            </button>
            <button 
              id="billing-monthly-btn" 
              onclick="window.azarelSetBilling('monthly')" 
              class="btn-ghost" 
              style="padding: 8px 18px; font-size: 13px; border-radius: 10000px; border: none;"
            >
              Monthly
            </button>
          </div>
        </div>
      </section>

      <!-- Pricing Cards Grid -->
      <section class="section-gap">
        <div class="container">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 28px; align-items: stretch;">
            <!-- Plan 1: Community Free -->
            <div class="card-awesomic" style="padding: 40px; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span class="tag-pill" style="margin-bottom: 12px;">Open Source</span>
                <h3 style="font-size: 24px; font-weight: 700; color: var(--color-obsidian); margin-bottom: 8px;">Community</h3>
                <p style="font-size: 14px; color: var(--color-steel); line-height: 1.5; margin-bottom: 24px;">
                  Ideal for indie developers, students, and open-source hobby projects.
                </p>

                <div style="margin-bottom: 28px;">
                  <span style="font-size: 48px; font-weight: 700; color: var(--color-obsidian);">$0</span>
                  <span style="font-size: 14px; color: var(--color-steel);"> / forever</span>
                </div>

                <ul style="list-style: none; display: flex; flex-direction: column; gap: 12px; font-size: 14px; color: var(--color-graphite); margin-bottom: 32px;">
                  <li style="display: flex; gap: 10px;">✓ Access to all Free sections and icons</li>
                  <li style="display: flex; gap: 10px;">✓ Community Discord access</li>
                  <li style="display: flex; gap: 10px;">✓ MIT licensed starter code</li>
                  <li style="display: flex; gap: 10px; color: var(--color-fog);">✕ No Figma tokens Studio variables</li>
                  <li style="display: flex; gap: 10px; color: var(--color-fog);">✕ No private GitHub repository access</li>
                </ul>
              </div>

              <a href="#/resources" class="btn-ghost" style="width: 100%; text-align: center; border-radius: 14px;">
                Download Free Assets
              </a>
            </div>

            <!-- Plan 2: Pro Solo (Highlighted) -->
            <div class="card-awesomic" style="padding: 40px; border-color: var(--color-obsidian); position: relative; display: flex; flex-direction: column; justify-content: space-between; box-shadow: var(--shadow-md);">
              <span class="badge-ember" style="position: absolute; top: 16px; right: 20px;">
                MOST POPULAR
              </span>

              <div>
                <span class="tag-pill" style="margin-bottom: 12px; background: #f4f4f5;">Individual Pro</span>
                <h3 style="font-size: 24px; font-weight: 700; color: var(--color-obsidian); margin-bottom: 8px;">Pro Designer</h3>
                <p style="font-size: 14px; color: var(--color-steel); line-height: 1.5; margin-bottom: 24px;">
                  Complete design system &amp; component library for solo builders and freelancers.
                </p>

                <div style="margin-bottom: 28px;">
                  <span id="price-pro" style="font-size: 48px; font-weight: 700; color: var(--color-obsidian);">$24</span>
                  <span id="period-pro" style="font-size: 14px; color: var(--color-steel);"> / month (billed annually)</span>
                </div>

                <ul style="list-style: none; display: flex; flex-direction: column; gap: 12px; font-size: 14px; color: var(--color-graphite); margin-bottom: 32px;">
                  <li style="display: flex; gap: 10px;">✓ <strong>All 50+ sections &amp; UI components</strong></li>
                  <li style="display: flex; gap: 10px;">✓ React 19 + Tailwind v4 Source Code</li>
                  <li style="display: flex; gap: 10px;">✓ Figma Variables &amp; AutoLayout 5.0</li>
                  <li style="display: flex; gap: 10px;">✓ Unlimited commercial client projects</li>
                  <li style="display: flex; gap: 10px;">✓ Lifetime weekly updates</li>
                </ul>
              </div>

              <button 
                onclick="window.azarelPurchaseAsset('plan-pro', 'Pro Designer Plan', 24)" 
                class="btn-primary" 
                style="width: 100%; border-radius: 14px; padding: 13px;"
              >
                Get Started with Pro
              </button>
            </div>

            <!-- Plan 3: Team All-Access -->
            <div class="card-awesomic" style="padding: 40px; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span class="tag-pill" style="margin-bottom: 12px;">Enterprise</span>
                <h3 style="font-size: 24px; font-weight: 700; color: var(--color-obsidian); margin-bottom: 8px;">Team All-Access</h3>
                <p style="font-size: 14px; color: var(--color-steel); line-height: 1.5; margin-bottom: 24px;">
                  Scale your product engineering org with shared licenses and dedicated support.
                </p>

                <div style="margin-bottom: 28px;">
                  <span id="price-team" style="font-size: 48px; font-weight: 700; color: var(--color-obsidian);">$69</span>
                  <span id="period-team" style="font-size: 14px; color: var(--color-steel);"> / month (up to 10 seats)</span>
                </div>

                <ul style="list-style: none; display: flex; flex-direction: column; gap: 12px; font-size: 14px; color: var(--color-graphite); margin-bottom: 32px;">
                  <li style="display: flex; gap: 10px;">✓ Everything in Pro Designer</li>
                  <li style="display: flex; gap: 10px;">✓ Private GitHub repository access</li>
                  <li style="display: flex; gap: 10px;">✓ Up to 10 team seats included</li>
                  <li style="display: flex; gap: 10px;">✓ Custom token integration advisory</li>
                  <li style="display: flex; gap: 10px;">✓ Priority SLA support (under 4 hrs)</li>
                </ul>
              </div>

              <button 
                onclick="window.azarelPurchaseAsset('plan-team', 'Team All-Access Plan', 69)" 
                class="btn-primary" 
                style="width: 100%; border-radius: 14px; padding: 13px; background: var(--color-slate);"
              >
                Start Team Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- License Comparison Table -->
      <section class="section-gap" style="background-color: #ffffff; border-top: 1px solid var(--color-cloud);">
        <div class="container">
          <div style="text-align: center; max-width: 600px; margin: 0 auto 48px auto;">
            <h2 class="text-heading">Detailed Feature Comparison</h2>
            <p class="text-body" style="color: var(--color-steel); margin-top: 8px;">
              Everything included in each tier, verified against design.md guidelines.
            </p>
          </div>

          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; text-align: left;">
              <thead>
                <tr style="border-bottom: 2px solid var(--color-cloud);">
                  <th style="padding: 16px; font-weight: 600; color: var(--color-obsidian);">Capability</th>
                  <th style="padding: 16px; font-weight: 600; color: var(--color-obsidian);">Community</th>
                  <th style="padding: 16px; font-weight: 600; color: var(--color-obsidian);">Pro Designer</th>
                  <th style="padding: 16px; font-weight: 600; color: var(--color-obsidian);">Team All-Access</th>
                </tr>
              </thead>
              <tbody style="color: var(--color-graphite);">
                <tr style="border-bottom: 1px solid var(--color-cloud);">
                  <td style="padding: 16px; font-weight: 500;">Marketing Hero Sections</td>
                  <td style="padding: 16px;">1 Section</td>
                  <td style="padding: 16px;">All 8+ Sections</td>
                  <td style="padding: 16px;">All + Future Drops</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--color-cloud);">
                  <td style="padding: 16px; font-weight: 500;">Interactive UI Components</td>
                  <td style="padding: 16px;">2 Components</td>
                  <td style="padding: 16px;">All 12+ Components</td>
                  <td style="padding: 16px;">All + Private Staging</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--color-cloud);">
                  <td style="padding: 16px; font-weight: 500;">24px Precision Icons</td>
                  <td style="padding: 16px;">40 SVGs</td>
                  <td style="padding: 16px;">180+ SVGs &amp; React</td>
                  <td style="padding: 16px;">Full Source + AI Vector</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--color-cloud);">
                  <td style="padding: 16px; font-weight: 500;">Commercial Client Licenses</td>
                  <td style="padding: 16px;">Non-commercial only</td>
                  <td style="padding: 16px;">Unlimited Commercial</td>
                  <td style="padding: 16px;">Enterprise Perpetual</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  `;
}
