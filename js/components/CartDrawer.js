/**
 * CartDrawer Component — Family Design System
 * Slide-over shopping cart, bundle discounts, and instant simulated checkout modal.
 * Clean SVG icons (zero emojis).
 */

import { state } from '../state.js';
import { BUNDLES } from '../data/products.js';
import { Icons } from './Icons.js';

export function renderCartDrawer() {
  const container = document.getElementById('cart-drawer-root');
  if (!container) return;

  const isOpen = state.isCartOpen;
  const isCheckout = state.isCheckoutOpen;
  const completedOrder = state.completedOrder;
  const cartItems = state.cart;
  const total = state.getCartTotal();

  // If order completed, render order modal
  if (completedOrder) {
    container.innerHTML = `
      <div class="cart-backdrop active" onclick="window.azarelDismissOrder()">
        <div class="checkout-modal" onclick="event.stopPropagation()">
          <div style="text-align: center; margin-bottom: 20px;">
            <div style="width: 56px; height: 56px; border-radius: 50%; background: #00ca48; color: #121212; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 14px;">
              ${Icons.check(28, '#121212')}
            </div>
            <h2 style="font-size: 24px; font-weight: 600; color: #121212; margin-bottom: 6px;">Thank you for your purchase!</h2>
            <p style="font-size: 14px; color: #474645;">Your commercial license and source packages are ready.</p>
          </div>

          <div style="background: #fbfaf9; border-radius: 10px; padding: 18px; box-shadow: inset 0 0 0 1px #f2f0ed; margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 8px;">
              <span style="color: #7e7e7d;">Order Reference:</span>
              <strong style="color: #121212;">${completedOrder.orderId}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 8px;">
              <span style="color: #7e7e7d;">License Key:</span>
              <code style="background: #f2f0ed; padding: 2px 6px; border-radius: 4px; font-size: 12px; color: #ff3e00;">${completedOrder.licenseKey}</code>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 13px;">
              <span style="color: #7e7e7d;">Delivered to:</span>
              <strong style="color: #121212;">${completedOrder.email}</strong>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            <button 
              type="button" 
              onclick="window.azarelDownloadMockZip()" 
              class="btn-dark-pill" 
              style="width: 100%; padding: 12px; font-size: 14px; text-align: center; justify-content: center; display: inline-flex; align-items: center; gap: 8px;"
            >
              ${Icons.download(16, '#ffffff')}
              <span>Download Source Bundle (.ZIP)</span>
            </button>
            <button 
              type="button" 
              onclick="window.azarelDismissOrder()" 
              class="btn-sand-pill" 
              style="width: 100%; padding: 10px; font-size: 13px; text-align: center; justify-content: center;"
            >
              Back to Marketplace
            </button>
          </div>
        </div>
      </div>
    `;
    return;
  }

  // If checkout modal open
  if (isCheckout) {
    container.innerHTML = `
      <div class="cart-backdrop active" onclick="window.azarelCloseCheckout()">
        <div class="checkout-modal" onclick="event.stopPropagation()">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; border-bottom: 1px solid #f2f0ed; padding-bottom: 12px;">
            <h3 style="font-size: 20px; font-weight: 600; color: #121212;">Express Checkout</h3>
            <button onclick="window.azarelCloseCheckout()" style="background: none; border: none; cursor: pointer; color: #7e7e7d;">
              ${Icons.close(20, '#7e7e7d')}
            </button>
          </div>

          <form onsubmit="event.preventDefault(); window.azarelSubmitCheckout(this);">
            <div style="margin-bottom: 14px;">
              <label style="display: block; font-size: 13px; font-weight: 500; color: #343433; margin-bottom: 6px;">Email address for file delivery</label>
              <input type="email" name="email" required placeholder="name@company.com" style="width: 100%; padding: 10px 14px; border-radius: 10px; border: 1px solid #e5d5c3; background: #ffffff; color: #121212; outline: none; font-size: 14px;" />
            </div>

            <div style="margin-bottom: 16px;">
              <label style="display: block; font-size: 13px; font-weight: 500; color: #343433; margin-bottom: 6px;">Payment Method</label>
              <div style="background: #ffffff; border: 1px solid #e5d5c3; border-radius: 10px; padding: 12px; display: flex; align-items: center; justify-content: space-between;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  ${Icons.creditCard(18, '#343433')}
                  <span style="font-size: 13px; color: #343433; font-weight: 500;">Test Card (Instant Approval)</span>
                </div>
                <span style="font-size: 11px; background: #f2f0ed; padding: 2px 8px; border-radius: 6px; color: #7e7e7d;">Sandbox Demo</span>
              </div>
            </div>

            <!-- Summary -->
            <div style="background: #fbfaf9; border-radius: 10px; padding: 14px; box-shadow: inset 0 0 0 1px #f2f0ed; margin-bottom: 18px;">
              <div style="display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 6px;">
                <span style="color: #474645;">Items (${cartItems.length}):</span>
                <span style="font-weight: 600; color: #121212;">$${total}</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 14px; font-weight: 700; border-top: 1px solid #f2f0ed; padding-top: 8px; margin-top: 8px;">
                <span>Total Due:</span>
                <span style="color: #121212;">$${total}</span>
              </div>
            </div>

            <button type="submit" class="btn-dark-pill" style="width: 100%; padding: 12px; font-size: 14px; text-align: center; justify-content: center;">
              Complete Purchase ($${total})
            </button>
          </form>
        </div>
      </div>
    `;
    return;
  }

  // Slide-over cart drawer
  container.innerHTML = `
    <div class="cart-backdrop ${isOpen ? 'active' : ''}" onclick="window.azarelToggleCart(false)">
      <div class="cart-drawer ${isOpen ? 'open' : ''}" onclick="event.stopPropagation()">
        <!-- Header -->
        <div class="cart-header">
          <div>
            <h3 style="font-size: 19px; font-weight: 600; color: #121212;">Your Section Cart</h3>
            <span style="font-size: 13px; color: #7e7e7d;">${cartItems.length} ${cartItems.length === 1 ? 'section' : 'sections'} selected</span>
          </div>
          <button onclick="window.azarelToggleCart(false)" class="btn-ghost" style="padding: 4px; display: flex; align-items: center; justify-content: center;" aria-label="Close Cart">
            ${Icons.close(18, '#7e7e7d')}
          </button>
        </div>

        <!-- Body -->
        <div class="cart-body">
          ${cartItems.length === 0 ? `
            <div style="text-align: center; padding: 60px 20px;">
              <div style="display: flex; justify-content: center; margin-bottom: 14px; color: #a1a1aa;">
                ${Icons.cart(48, '#a1a1aa')}
              </div>
              <h4 style="font-size: 17px; font-weight: 600; color: #121212; margin-bottom: 6px;">Your cart is empty</h4>
              <p style="font-size: 14px; color: #7e7e7d; max-width: 240px; margin: 0 auto 20px auto;">
                Explore our catalog of production-ready website sections to add to your project.
              </p>
              <a href="#/sections" onclick="window.azarelToggleCart(false)" class="btn-dark-pill" style="display: inline-block; padding: 8px 18px; font-size: 13px;">
                Browse Sections
              </a>
            </div>
          ` : `
            <div style="display: flex; flex-direction: column; gap: 10px;">
              ${cartItems.map(item => `
                <div class="cart-item-card">
                  <div style="flex: 1;">
                    <div style="font-size: 14px; font-weight: 600; color: #121212; margin-bottom: 3px;">${item.name}</div>
                    <div style="font-size: 12px; color: #7e7e7d;">${item.framework} • Perpetual License</div>
                  </div>
                  <div style="text-align: right; margin-left: 12px;">
                    <div style="font-size: 15px; font-weight: 700; color: #121212; margin-bottom: 4px;">
                      ${item.price === 0 ? 'Free' : `$${item.price}`}
                    </div>
                    <button 
                      onclick="window.azarelRemoveFromCart('${item.id}')" 
                      style="font-size: 11px; color: #ff2b3a; text-decoration: underline; background: none; border: none; cursor: pointer;"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Upsell Banner -->
            <div style="margin-top: 20px; background: #fbfaf9; border-radius: 10px; padding: 14px; box-shadow: inset 0 0 0 1px #f2f0ed;">
              <div style="display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 700; color: #00ca48; margin-bottom: 4px;">
                ${Icons.sparkle(14, '#00ca48')}
                <span>ALL-ACCESS UPGRADE</span>
              </div>
              <div style="font-size: 13px; color: #343433; margin-bottom: 8px;">
                Get all 16+ sections for <strong>$99 lifetime</strong> instead of paying single item rates.
              </div>
              <button 
                onclick="window.azarelAddBundleToCart('bundle-all-access')" 
                style="background: #121212; color: white; padding: 6px 14px; border-radius: 9999px; font-size: 12px; font-weight: 600; cursor: pointer;"
              >
                Upgrade to All-Access Pass ($99)
              </button>
            </div>
          `}
        </div>

        <!-- Footer -->
        ${cartItems.length > 0 ? `
          <div class="cart-footer">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <span style="font-size: 14px; color: #474645;">Total:</span>
              <span style="font-size: 22px; font-weight: 700; color: #121212;">$${total}</span>
            </div>
            <button 
              onclick="window.azarelOpenCheckout()" 
              class="btn-dark-pill" 
              style="width: 100%; padding: 12px; font-size: 14px; text-align: center; justify-content: center;"
            >
              Proceed to Checkout →
            </button>
            <div style="display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 10px; font-size: 12px; color: #7e7e7d;">
              ${Icons.lock(12, '#7e7e7d')}
              <span>Instant digital download • Perpetual license</span>
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

// Global Handlers
window.azarelToggleCart = (stateVal) => state.toggleCart(stateVal);
window.azarelRemoveFromCart = (id) => state.removeFromCart(id);
window.azarelOpenCheckout = () => state.openCheckout();
window.azarelCloseCheckout = () => state.closeCheckout();
window.azarelSubmitCheckout = (form) => {
  const email = form.email.value;
  state.completeCheckout(email);
};
window.azarelDismissOrder = () => state.dismissOrderConfirmation();
window.azarelDownloadMockZip = () => {
  state.notifyToast('Downloading Azarel-Sections-Source.zip...');
  setTimeout(() => {
    state.notifyToast('Download completed! Check your downloads folder.');
  }, 1000);
};
window.azarelAddBundleToCart = (bundleId) => {
  const b = BUNDLES.find(item => item.id === bundleId);
  if (b) {
    state.addToCart({
      id: b.id,
      name: b.name,
      price: b.price,
      isBundle: true,
      framework: 'Full Suite'
    });
  }
};
