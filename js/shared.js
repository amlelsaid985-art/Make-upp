/**
 * AURÉLIA Maison de Beauté - Shared Application Engine
 * Handles State, Cart Drawer, Wishlist, Navigation, Search, and Firebase UI synchronization.
 */

// Global Product Catalog
window.AureliaProducts = [
  {
    id: 'lumiere-tint',
    category: 'face',
    title: 'Lumière Silk Skin Tint SPF 30',
    subtitle: 'Dewy, breathable medium coverage with zinc mineral shield',
    price: 38.00,
    rating: 4.9,
    reviews: 1842,
    badge: 'Bestseller',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDe8wLgpZEAeKtrhCt9tfEYVaJZPLx4aZmJpXGOaJiklYEMbunFFBYUJPTdGvgkB_rK-6mf9EHQ6qiHWsUnqng3ME9oBr5_oMK1uyAQovcAQ7yo501WTsFt4ly502dPGDZJy1IJbbJxZvF_ld5AS7iQV8OBiLE-O2jN6uRczEVARAo4pyJ3CfsvFk49OXzRJhKeOjkmlM7MB94-XgO_rQLOu0Ne7UJoTltM81FZWEQ',
    shades: [
      { name: '01 Alabaster (Cool)', hex: '#F7E6DC' },
      { name: '02 Bisque (Neutral)', hex: '#ECCEB8' },
      { name: '03 Warm Ochre (Warm)', hex: '#DEBA9D' },
      { name: '04 Dune (Warm)', hex: '#C8997A' },
      { name: '05 Amber Bronze (Warm)', hex: '#9F6848' },
      { name: '06 Rich Cacao (Neutral)', hex: '#543628' }
    ]
  },
  {
    id: 'peptide-glaze',
    category: 'lips',
    title: 'Peptide Glaze Lip Butter',
    subtitle: 'Ultra-glossy barrier repair packed with tri-peptides and murumuru butter',
    price: 22.00,
    rating: 4.8,
    reviews: 2410,
    badge: 'Selling Fast',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbk15yvCRcon_u4PZD_AUxrtfo2avJnsbOHG9WCBjQ9jVlir2Iy9cm9G1YOcDTDfvEhHiWkxET7TCMTRxDYYhN7CvjwaQ2L5-e-CmcEDNXmVjewtJA9WTO8OcmHa_TWNdmoVyg9LpCUoim_OVYFp5QjsS3O5DyeSHJKBxLr4uw4gWBtQW436rnVllec5el9MzlVIbvLvz8RV-cR0agAiOxdyK3vreQ9S-w_ijuBzY',
    shades: [
      { name: 'Salted Caramel', hex: '#C68B59' },
      { name: 'Rose Quartz', hex: '#E89EA3' },
      { name: 'Espresso Crème', hex: '#58362A' },
      { name: 'Vanilla Glaze', hex: '#FCEFE4' }
    ]
  },
  {
    id: 'velvet-blush',
    category: 'face',
    title: 'Velvet Cloud Melt-in Liquid Blush',
    subtitle: 'Weightless watercolor flush enriched with soothing snow mushroom extract',
    price: 26.00,
    rating: 5.0,
    reviews: 950,
    badge: 'Viral Hit',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3OzDFFLlncxtKwTpOp_XjTLXs6zAxOSD5qrfDLWyCDrMAL4Cfl2f5lhKdJCuasVKd0SfLReUE7aQi0uFMwzftJg7UkTes32F6_bdw9Bnk5_gmic-YkJRkCtoM814EVL1SEcxywb1cIM_Cj-kVL6oc2jkPRXLBm-y4sEbHlOCUbW1Tubx8Y717osmfguhlL3o0aFelNAGQ1TA5bcK5n9O10M-WQhNXGzY-rpB4z4Q',
    shades: [
      { name: 'Peony Dream', hex: '#F29F9D' },
      { name: 'Sunkissed Terracotta', hex: '#C56C51' },
      { name: 'Berry Aura', hex: '#943E4B' },
      { name: 'Nude Bloom', hex: '#CFA390' }
    ]
  },
  {
    id: 'glow-infusion',
    category: 'face',
    title: 'Luminous Glow Infusion Serum',
    subtitle: 'Triple-weight Hyaluronic acid & plant squalane radiance primer elixir',
    price: 44.00,
    rating: 4.9,
    reviews: 3120,
    badge: 'Multi-Award',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHvbEphryavGS3_0TUdfDmh35sWO03O1KsLSwmhRldDLhklLPGeuYskJsdRENT-y7QLokAqKqDmmmvZr3noqDgT7fsGlYs_vkeSB07O2hvqBOm3eFQWrfzQFS4XrjkPQCsx11-B1LjrAbUAs3zxec0r_qc7LNMmzWxM4TAyrgTyPgsVHbF3eiwHz6HM4YdeLrPKvOgY9x3ZfXlkhvCJLWisvU-Yv7KfUVs3FewXh8',
    shades: [
      { name: 'Universal Dew Finish (30ml)', hex: '#FDF7EB' },
      { name: 'Golden Hour Shimmer (30ml)', hex: '#EEDAA2' }
    ]
  },
  {
    id: 'dew-concealer',
    category: 'face',
    title: 'Pure Dew Luminous Concealer',
    subtitle: 'High-coverage corrective serum concealer with caffeine and niacinamide',
    price: 28.00,
    rating: 4.8,
    reviews: 1420,
    badge: 'Award Winner',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSuICEuwQgbyj6FU_dBO7B1gJtPbQV1DOJT4CnyWTMz7s-FGVgieBOohZyMeGbOUyRJ3A8DlvdQ0nxsHLUZVd_Zp2CAEEqq_6bme2r6tfDj6NDuipPfx7GPKAL27vOOt6nsN3hRu0-CvSfd3roTIobWpH6W6ihZ4zfjMai4IbY38E_AkQD7V_SSsWBuUZXehQfvgSRxDVeD_PsnhGhpwJM5g7mL4pC9EgAAEt3LJQ',
    shades: [
      { name: 'Fair 02 Lightening', hex: '#F9EBE0' },
      { name: 'Light 04 Natural', hex: '#E8CDBD' },
      { name: 'Medium 08 Golden', hex: '#CBA285' },
      { name: 'Deep 12 Espresso', hex: '#633B26' }
    ]
  },
  {
    id: 'velvet-matte-lip',
    category: 'lips',
    title: 'Velvet Matte Lip Suede',
    subtitle: 'Feather-light blurred pigment with hyaluronic filling spheres',
    price: 28.00,
    rating: 4.9,
    reviews: 820,
    badge: 'Iconic',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5hG4wTOhzF-q0m4vaDuvShGkACvlc5O2xdJYV2_LhovCbFVj3BEp4VwrOYBj1jnUjdt0qUPwlWpEBhJm3ffex4qQbhRAgncEYU7DbWoVAJCPCUNfEGnVZ0TKgBLKbdBfb_AaP0BVO6hGcSsT9xjt5K_2yG2lAnCP4eqBC_tY0rwZmnrdfe8vLxJ35ha_HWA1-hdT5PSc5-m9e9yhIqm2uV-2cgVeax07gCA_8dUE',
    shades: [
      { name: 'Maison Nude', hex: '#BA7A65' },
      { name: 'French Dahlia', hex: '#87333B' },
      { name: 'Warm Terracotta', hex: '#A8513E' },
      { name: 'Vintage Petal', hex: '#C28286' }
    ]
  },
  {
    id: 'eyeshadow-quad',
    category: 'eyes',
    title: 'Velvet Cloud Eyeshadow Quad',
    subtitle: 'Sensorial creamy powder quad with satin, velvet matte, and molten metallic finishes',
    price: 48.00,
    rating: 4.9,
    reviews: 640,
    badge: 'Limited Edition',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAK2IPiSahC6Zt_YYcYn3LKkOJGpim4L-ysG3Bc2Q00XEJR9bE1tBQMGtYjyRTi3fk5YtZYMjoTOJE21byCzHFFuzt30UCE9afaflIyX4JufSF4L3NYjuW_UwqbqjT3DvCQrmg7_vZ_tGRKqB_so9HcqVJ3XMu5OdsIwzOn84NTvGadw91fP9xZxJ5qpen8rhVyDxnWTSwQkQFm7rNwEv5Xn9Ubt_ak13aLTGH-woo',
    shades: [
      { name: 'Amber Sunset', hex: '#B26F4A' },
      { name: 'Rose Cashmere', hex: '#C59599' },
      { name: 'Smoky Espresso', hex: '#44312B' }
    ]
  },
  {
    id: 'botanical-mascara',
    category: 'eyes',
    title: 'Botanical Peptide Mascara',
    subtitle: 'Ultra-defining tubing formula infused with biotin and wild castor oil',
    price: 26.00,
    rating: 4.8,
    reviews: 1190,
    badge: 'Clean Formula',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBT7DEoo4J-MqWCUG8s04_v7wc2gSrrQ9KTSCkg3T6Sa7c7Wjr0S_KBM37ZIjZPRgoejKaOfjZFtKOQMlUnCh2o9zveLeRTYC7fgd7jwKZy9jhBepakKMQWMGytDk27noEMFEZs-xzUMQ4lI-feRmASOHJgP4QFIlcNMQBRcmxbojvKqsHiJNgMd4UnYVN1UrqwPSzAUE45OYdgWWC4DOJuWbOudYtryE9i_4a2L0',
    shades: [
      { name: 'Noir Obsidienne', hex: '#1C1A1A' },
      { name: 'Chocolat Profond', hex: '#3B2923' }
    ]
  }
];

// App State Management
window.AureliaApp = {
  cart: [],
  wishlist: [],
  currentUser: null,
  isFirebaseReady: false,

  // Initialize
  init: function() {
    this.loadLocalStorage();
    this.setupEventListeners();
    this.updateHeaderUI();
    this.renderCartDrawer();
  },

  loadLocalStorage: function() {
    try {
      const savedCart = localStorage.getItem('aurelia_cart');
      if (savedCart) {
        this.cart = JSON.parse(savedCart);
      } else {
        // Default seed items for luxury preview
        this.cart = [
          {
            id: 'cart-init-1',
            productId: 'lumiere-tint',
            title: 'Lumière Silk Skin Tint SPF 30',
            shade: '04 Dune (Warm)',
            price: 38.00,
            quantity: 1,
            image: window.AureliaProducts[0].image
          },
          {
            id: 'cart-init-2',
            productId: 'peptide-glaze',
            title: 'Peptide Glaze Lip Butter',
            shade: 'Salted Caramel',
            price: 22.00,
            quantity: 1,
            image: window.AureliaProducts[1].image
          }
        ];
        this.saveCart();
      }

      const savedWishlist = localStorage.getItem('aurelia_wishlist');
      if (savedWishlist) {
        this.wishlist = JSON.parse(savedWishlist);
      } else {
        this.wishlist = ['lumiere-tint', 'velvet-blush'];
        this.saveWishlist();
      }
    } catch (e) {
      console.warn('Storage access notice:', e);
    }
  },

  saveCart: function() {
    try {
      localStorage.setItem('aurelia_cart', JSON.stringify(this.cart));
    } catch(e) {}
    this.updateHeaderUI();
  },

  saveWishlist: function() {
    try {
      localStorage.setItem('aurelia_wishlist', JSON.stringify(this.wishlist));
    } catch(e) {}
    this.updateHeaderUI();
  },

  // Firebase Bridge Initialization
  initFirebase: function() {
    this.isFirebaseReady = true;
    console.log('Firebase services linked successfully to AURÉLIA.');

    if (window.FirebaseServices && window.FirebaseServices.auth) {
      const { auth, authMethods } = window.FirebaseServices;
      authMethods.onAuthStateChanged(auth, (user) => {
        this.currentUser = user;
        this.updateHeaderUI();
        if (user) {
          this.showToast(`Welcome back, ${user.displayName || user.email.split('@')[0]}!`, 'success');
          // Dispatch auth update
          window.dispatchEvent(new CustomEvent('aurelia-auth-change', { detail: user }));
        } else {
          window.dispatchEvent(new CustomEvent('aurelia-auth-change', { detail: null }));
        }
      });
    }
  },

  // Toast Notification System
  showToast: function(message, type = 'info', duration = 3500) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let iconName = 'info';
    if (type === 'success') iconName = 'check_circle';
    if (type === 'error') iconName = 'error';

    toast.innerHTML = `
      <span class="material-symbols-outlined text-[20px] text-secondary">${iconName}</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  // Cart Operations
  addToCart: function(productOrId, shadeName, price, imgThumb) {
    let product;
    if (typeof productOrId === 'string') {
      product = window.AureliaProducts.find(p => p.id === productOrId);
    } else {
      product = productOrId;
    }

    const finalTitle = product ? product.title : productOrId;
    const finalShade = shadeName || (product && product.shades ? product.shades[0].name : 'Default');
    const finalPrice = parseFloat(price || (product ? product.price : 30.00));
    const finalImg = imgThumb || (product ? product.image : '');

    // Check if item already exists in cart with same shade
    const existingIndex = this.cart.findIndex(item => item.title === finalTitle && item.shade === finalShade);
    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += 1;
    } else {
      this.cart.unshift({
        id: 'cart-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
        productId: product ? product.id : 'custom',
        title: finalTitle,
        shade: finalShade,
        price: finalPrice,
        quantity: 1,
        image: finalImg
      });
    }

    this.saveCart();
    this.renderCartDrawer();
    this.openCartDrawer();
    this.showToast(`Added ${finalTitle} to your Bag`, 'success');
  },

  removeFromCart: function(cartItemId) {
    this.cart = this.cart.filter(item => item.id !== cartItemId);
    this.saveCart();
    this.renderCartDrawer();
    this.showToast('Item removed from Bag', 'info');
  },

  updateCartQuantity: function(cartItemId, delta) {
    const item = this.cart.find(i => i.id === cartItemId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeFromCart(cartItemId);
    } else {
      this.saveCart();
      this.renderCartDrawer();
    }
  },

  getCartSubtotal: function() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  getCartCount: function() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  },

  openCartDrawer: function() {
    const drawer = document.getElementById('cart-drawer');
    const backdrop = document.getElementById('cart-drawer-backdrop');
    if (drawer && backdrop) {
      backdrop.classList.remove('pointer-events-none', 'opacity-0');
      backdrop.classList.add('opacity-100');
      drawer.classList.remove('translate-x-full');
    }
  },

  closeCartDrawer: function() {
    const drawer = document.getElementById('cart-drawer');
    const backdrop = document.getElementById('cart-drawer-backdrop');
    if (drawer && backdrop) {
      backdrop.classList.add('opacity-0', 'pointer-events-none');
      backdrop.classList.remove('opacity-100');
      drawer.classList.add('translate-x-full');
    }
  },

  renderCartDrawer: function() {
    const listEl = document.getElementById('cart-items-list');
    const subtotalEl = document.getElementById('cart-subtotal');
    const totalCountEl = document.getElementById('cart-total-count');
    const shippingStatusEl = document.getElementById('shipping-status-text');
    const shippingProgressEl = document.getElementById('shipping-progress-fill');

    const subtotal = this.getCartSubtotal();
    const count = this.getCartCount();

    if (subtotalEl) subtotalEl.innerText = `$${subtotal.toFixed(2)}`;
    if (totalCountEl) totalCountEl.innerText = count;

    if (shippingStatusEl && shippingProgressEl) {
      if (subtotal >= 65) {
        shippingStatusEl.innerText = 'Complimentary Bespoke Delivery Unlocked!';
        shippingProgressEl.style.width = '100%';
      } else {
        const diff = (65 - subtotal).toFixed(2);
        shippingStatusEl.innerText = `You are $${diff} away from Complimentary Shipping!`;
        const pct = Math.min(100, Math.max(0, (subtotal / 65) * 100));
        shippingProgressEl.style.width = `${pct}%`;
      }
    }

    if (!listEl) return;

    if (this.cart.length === 0) {
      listEl.innerHTML = `
        <div class="text-center py-12 space-y-space-sm">
          <span class="material-symbols-outlined text-[48px] text-outline-variant">shopping_bag</span>
          <p class="font-title-md text-title-md text-on-surface">Your Bag is Empty</p>
          <p class="font-body-sm text-body-sm text-on-surface-variant max-w-xs mx-auto">Explore our pure botanical formulas and indulge your skin.</p>
          <a href="shop.html" onclick="AureliaApp.closeCartDrawer()" class="inline-block mt-space-sm px-space-lg py-2 bg-inverse-surface hover:bg-on-surface text-inverse-on-surface font-label-md text-label-md uppercase tracking-wider rounded-full transition-colors">Discover Best Sellers</a>
        </div>
      `;
      return;
    }

    listEl.innerHTML = this.cart.map(item => `
      <div class="flex gap-space-md pb-space-md border-b-0 bg-surface-container-low p-space-sm rounded-xl transition-all">
        <div class="w-20 h-20 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
          <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
        </div>
        <div class="flex-1 flex flex-col justify-between min-w-0">
          <div class="flex items-start justify-between gap-space-xs">
            <div class="truncate">
              <h4 class="font-title-md text-title-md text-on-surface truncate">${item.title}</h4>
              <p class="font-body-sm text-body-sm text-on-surface-variant">${item.shade}</p>
            </div>
            <button onclick="AureliaApp.removeFromCart('${item.id}')" class="text-on-surface-variant hover:text-error transition-colors p-1" aria-label="Remove item">
              <span class="material-symbols-outlined text-[16px]">delete</span>
            </button>
          </div>
          <div class="flex items-center justify-between">
            <span class="font-title-md text-title-md text-on-surface">$${(item.price * item.quantity).toFixed(2)}</span>
            <div class="flex items-center gap-space-xs bg-surface px-2 py-0.5 rounded-full border border-outline-variant/30">
              <button onclick="AureliaApp.updateCartQuantity('${item.id}', -1)" class="text-on-surface-variant hover:text-on-surface font-bold px-1 text-sm">-</button>
              <span class="font-label-sm text-label-sm text-on-surface font-semibold px-1">${item.quantity}</span>
              <button onclick="AureliaApp.updateCartQuantity('${item.id}', 1)" class="text-on-surface-variant hover:text-on-surface font-bold px-1 text-sm">+</button>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  },

  // Checkout with Firebase Firestore
  checkout: async function() {
    if (this.cart.length === 0) {
      this.showToast('Your bag is currently empty', 'error');
      return;
    }

    const subtotal = this.getCartSubtotal();
    const orderData = {
      orderId: 'AUR-' + Math.floor(100000 + Math.random() * 900000),
      items: this.cart,
      subtotal: subtotal,
      shipping: subtotal >= 65 ? 0 : 8.00,
      total: subtotal >= 65 ? subtotal : subtotal + 8.00,
      userId: this.currentUser ? this.currentUser.uid : 'guest',
      userEmail: this.currentUser ? this.currentUser.email : 'guest@aurelia.com',
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };

    // Try saving to Firebase Firestore
    let savedToFirebase = false;
    if (window.FirebaseServices && window.FirebaseServices.db) {
      try {
        const { db, firestoreMethods } = window.FirebaseServices;
        await firestoreMethods.addDoc(firestoreMethods.collection(db, 'orders'), orderData);
        savedToFirebase = true;
      } catch (err) {
        console.warn('Firebase order save notice (will store locally):', err);
      }
    }

    // Always store in local orders history as backup
    try {
      const localOrders = JSON.parse(localStorage.getItem('aurelia_orders') || '[]');
      localOrders.unshift(orderData);
      localStorage.setItem('aurelia_orders', JSON.stringify(localOrders));
    } catch(e) {}

    // Clear cart
    this.cart = [];
    this.saveCart();
    this.renderCartDrawer();
    this.closeCartDrawer();

    const firebaseMsg = savedToFirebase ? ' & saved to your Firebase cloud account!' : '!';
    this.showToast(`Order ${orderData.orderId} Confirmed${firebaseMsg}`, 'success', 5000);

    // If on account page, refresh orders
    window.dispatchEvent(new CustomEvent('aurelia-order-placed', { detail: orderData }));
  },

  // Wishlist Operations
  toggleWishlist: function(productId, btnElement) {
    const index = this.wishlist.indexOf(productId);
    let added = false;

    if (index > -1) {
      this.wishlist.splice(index, 1);
      this.showToast('Removed from Wishlist', 'info');
    } else {
      this.wishlist.push(productId);
      this.showToast('Saved to your Curated Wishlist', 'success');
      added = true;
    }

    this.saveWishlist();

    // Update button visual if passed
    if (btnElement) {
      const icon = btnElement.querySelector('.material-symbols-outlined');
      if (icon) {
        if (added) {
          icon.style.fontVariationSettings = "'FILL' 1";
          btnElement.classList.add('text-error');
        } else {
          icon.style.fontVariationSettings = "'FILL' 0";
          btnElement.classList.remove('text-error');
        }
      }
    }

    // Sync to Firebase if user is logged in
    if (this.currentUser && window.FirebaseServices && window.FirebaseServices.db) {
      try {
        const { db, firestoreMethods } = window.FirebaseServices;
        firestoreMethods.setDoc(
          firestoreMethods.doc(db, 'user_wishlists', this.currentUser.uid),
          { items: this.wishlist, updatedAt: new Date().toISOString() },
          { merge: true }
        );
      } catch (e) {
        console.warn('Firebase wishlist sync notice:', e);
      }
    }

    window.dispatchEvent(new CustomEvent('aurelia-wishlist-change', { detail: this.wishlist }));
  },

  isInWishlist: function(productId) {
    return this.wishlist.includes(productId);
  },

  // Newsletter Subscription to Firebase Firestore
  subscribeNewsletter: async function(emailInputEl) {
    const email = emailInputEl ? emailInputEl.value.trim() : '';
    if (!email || !email.includes('@')) {
      this.showToast('Please enter a valid email address', 'error');
      return;
    }

    let saved = false;
    if (window.FirebaseServices && window.FirebaseServices.db) {
      try {
        const { db, firestoreMethods } = window.FirebaseServices;
        await firestoreMethods.addDoc(firestoreMethods.collection(db, 'newsletter_subscribers'), {
          email: email,
          subscribedAt: new Date().toISOString(),
          source: 'Website Footer'
        });
        saved = true;
      } catch (err) {
        console.warn('Newsletter save notice:', err);
      }
    }

    if (emailInputEl) emailInputEl.value = '';
    this.showToast('Welcome to the Inner Circle! 15% VIP code sent to your email.', 'success', 5000);
  },

  // Header State
  updateHeaderUI: function() {
    // Update Cart Badge
    const cartBadges = document.querySelectorAll('.cart-badge');
    const count = this.getCartCount();
    cartBadges.forEach(b => {
      b.innerText = count;
      b.style.display = count > 0 ? 'flex' : 'none';
    });

    // Update Wishlist Badge
    const wishlistBadges = document.querySelectorAll('.wishlist-badge');
    const wishCount = this.wishlist.length;
    wishlistBadges.forEach(b => {
      b.innerText = wishCount;
      b.style.display = wishCount > 0 ? 'flex' : 'none';
    });

    // Update Account Avatar
    const accountAvatars = document.querySelectorAll('.user-account-avatar');
    accountAvatars.forEach(av => {
      if (this.currentUser) {
        const initial = (this.currentUser.displayName || this.currentUser.email || 'U')[0].toUpperCase();
        av.innerHTML = `
          <div class="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-xs ring-2 ring-secondary-container">
            ${initial}
          </div>
        `;
      } else {
        av.innerHTML = `
          <div class="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface">
            <span class="material-symbols-outlined text-[18px]">person</span>
          </div>
        `;
      }
    });
  },

  // Event Listeners for Header / Drawer
  setupEventListeners: function() {
    // Wire up Cart buttons
    document.querySelectorAll('.open-cart-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openCartDrawer();
      });
    });

    // Search Trigger
    document.querySelectorAll('.open-search-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openSearchModal();
      });
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  },

  // Quick Search Modal
  openSearchModal: function() {
    let modal = document.getElementById('search-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'search-modal';
      modal.className = 'fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-md flex items-start justify-center pt-24 px-4';
      modal.innerHTML = `
        <div class="bg-surface-container-lowest w-full max-w-2xl rounded-2xl shadow-2xl p-space-lg space-y-space-md border border-outline-variant/30 animate-in fade-in zoom-in duration-200">
          <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
            <div class="flex items-center gap-space-sm flex-1">
              <span class="material-symbols-outlined text-secondary text-[24px]">search</span>
              <input id="quick-search-input" type="text" placeholder="Search foundations, lip glaze, tones..." class="w-full bg-transparent text-on-surface font-title-md text-title-md outline-none placeholder:text-outline">
            </div>
            <button onclick="document.getElementById('search-modal').remove()" class="p-1 rounded-full text-on-surface-variant hover:text-on-surface">
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          <div id="search-results-box" class="max-h-80 overflow-y-auto space-y-space-xs">
            <p class="font-body-sm text-body-sm text-on-surface-variant text-center py-6">Type to discover luxury complexion & botanical formulations...</p>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      const input = document.getElementById('quick-search-input');
      input.focus();
      input.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const resultsBox = document.getElementById('search-results-box');
        if (!query) {
          resultsBox.innerHTML = '<p class="font-body-sm text-body-sm text-on-surface-variant text-center py-6">Type to discover luxury complexion & botanical formulations...</p>';
          return;
        }

        const matches = window.AureliaProducts.filter(p => 
          p.title.toLowerCase().includes(query) || 
          p.category.toLowerCase().includes(query) || 
          p.subtitle.toLowerCase().includes(query)
        );

        if (matches.length === 0) {
          resultsBox.innerHTML = '<p class="font-body-sm text-body-sm text-on-surface-variant text-center py-6">No matching formulas found.</p>';
        } else {
          resultsBox.innerHTML = matches.map(p => `
            <a href="shop.html?search=${encodeURIComponent(p.title)}" class="flex items-center gap-space-md p-space-sm rounded-xl hover:bg-surface-container transition-colors">
              <img src="${p.image}" class="w-12 h-12 rounded-lg object-cover">
              <div class="flex-1 min-w-0">
                <p class="font-title-md text-title-md text-on-surface truncate">${p.title}</p>
                <p class="font-body-sm text-body-sm text-on-surface-variant truncate">${p.subtitle}</p>
              </div>
              <span class="font-title-md text-title-md text-on-surface">$${p.price.toFixed(2)}</span>
            </a>
          `).join('');
        }
      });

      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
      });
    }
  }
};

// Initialize App when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.AureliaApp.init();
});

// Listen for Firebase Ready event
window.addEventListener('firebase-ready', () => {
  window.AureliaApp.initFirebase();
});
