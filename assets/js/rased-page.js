/* =============================================================
   rased-page.js — Interactivity for the Rased / Elm / ISO page
   - Tamm pricing tier slider + tier buttons (re-rendered on language change)
   - ISO standards category filter
   - Floating WhatsApp link (data-whatsapp attribute swap)
   - Lazy reveal animations (respects prefers-reduced-motion)
   - Lucide icon refresh after dynamic content
   ============================================================= */

(function () {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /** Single company WhatsApp — update digits only (no + or spaces) */
    const SHABAKAH_WHATSAPP = '966920033465';
    const WA_MSG_EN = 'Hello, I need help with Elm services (Muqeem / Tamm / Rased) from SHABAKAH.';
    const WA_MSG_AR = 'مرحباً، أحتاج المساعدة في خدمات علم (مقيم / تم / راصد) من شبكة التقنية.';
    const ELM_IMG_FALLBACK = 'assets/images/Raqeeb.png';

    function getWhatsAppUrl() {
        const lang = getCurrentLang();
        const text = encodeURIComponent(lang === 'ar' ? WA_MSG_AR : WA_MSG_EN);
        return 'https://wa.me/' + SHABAKAH_WHATSAPP + '?text=' + text;
    }

    window.getShabakahWhatsAppUrl = getWhatsAppUrl;

    // ---------- Helpers ----------
    function refreshLucide() {
        if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
            try { lucide.createIcons(); } catch (e) { /* noop */ }
        }
    }

    function getCurrentLang() {
        return (localStorage.getItem('language') || 'en');
    }

    function formatNumber(n, lang) {
        try {
            const locale = lang === 'ar' ? 'ar-SA' : 'en-US';
            return new Intl.NumberFormat(locale).format(n);
        } catch (e) {
            return String(n);
        }
    }

    // ---------- Tamm Pricing Slider ----------
    function getTammData() {
        if (window.__tammPricingData) return window.__tammPricingData;
        // Fallback: pull EN defaults from page's HTML if i18n hasn't fired yet
        return {
            pricingTierLabel: 'Tier',
            pricingRangeLabel: 'Vehicles',
            pricingPriceLabel: 'Annual price',
            pricingTiers: [
                { tier: 1, range: '0 – 9 vehicles', short: '0–9', price: 1800 },
                { tier: 2, range: '10 – 49 vehicles', short: '10–49', price: 3300 },
                { tier: 3, range: '50 – 99 vehicles', short: '50–99', price: 4800 },
                { tier: 4, range: '100 – 249 vehicles', short: '100–249', price: 7300 },
                { tier: 5, range: '250 – 499 vehicles', short: '250–499', price: 9800 },
                { tier: 6, range: '500 – 999 vehicles', short: '500–999', price: 12300 },
                { tier: 7, range: '1,000 – 4,999 vehicles', short: '1k–5k', price: 16300 },
                { tier: 8, range: '5,000 – 9,999 vehicles', short: '5k–10k', price: 20300 }
            ],
            currency: 'SAR',
            perYear: '/ year'
        };
    }

    function renderTammPricing() {
        const root = document.getElementById('tamm-pricing');
        if (!root) return;
        const data = getTammData();
        const lang = getCurrentLang();
        const tiers = Array.isArray(data.pricingTiers) ? data.pricingTiers : [];
        if (!tiers.length) return;

        const slider = root.querySelector('.tamm-pricing-slider');
        const ticksWrap = root.querySelector('.tamm-pricing-ticks');
        const tiersGrid = root.querySelector('.tamm-pricing-tiers-grid');

        // Slider min/max
        if (slider) {
            slider.min = '1';
            slider.max = String(tiers.length);
            slider.step = '1';
        }

        // Ticks (short labels above the slider line)
        if (ticksWrap) {
            ticksWrap.innerHTML = '';
            tiers.forEach((t) => {
                const span = document.createElement('span');
                span.textContent = t.short || ('T' + t.tier);
                ticksWrap.appendChild(span);
            });
        }

        // Tier button cards
        if (tiersGrid) {
            tiersGrid.innerHTML = '';
            tiers.forEach((t) => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'tamm-pricing-tier-btn';
                btn.setAttribute('role', 'tab');
                btn.setAttribute('data-tier', String(t.tier));

                const num = document.createElement('span');
                num.className = 'tamm-pricing-tier-btn-num';
                num.textContent = (data.pricingTierLabel || 'Tier') + ' ' + t.tier;

                const sht = document.createElement('span');
                sht.className = 'tamm-pricing-tier-btn-short';
                sht.textContent = t.short || t.range;

                const pr = document.createElement('span');
                pr.className = 'tamm-pricing-tier-btn-price';
                pr.textContent = formatNumber(t.price, lang) + ' ' + (data.currency || 'SAR');

                btn.appendChild(num);
                btn.appendChild(sht);
                btn.appendChild(pr);
                btn.addEventListener('click', () => setTammTier(t.tier));
                tiersGrid.appendChild(btn);
            });
        }

        // Initial display sync to current slider value
        const initialTier = slider ? parseInt(slider.value, 10) || 1 : 1;
        setTammTier(initialTier);
    }

    function setTammTier(tierNum) {
        const root = document.getElementById('tamm-pricing');
        if (!root) return;
        const data = getTammData();
        const lang = getCurrentLang();
        const tiers = Array.isArray(data.pricingTiers) ? data.pricingTiers : [];
        const tier = tiers.find(t => t.tier === tierNum) || tiers[0];
        if (!tier) return;

        const slider = root.querySelector('.tamm-pricing-slider');
        if (slider && parseInt(slider.value, 10) !== tier.tier) {
            slider.value = String(tier.tier);
        }

        const tierValue = root.querySelector('.tamm-pricing-tier-value');
        const rangeValue = root.querySelector('.tamm-pricing-range-value');
        const amount = root.querySelector('.tamm-pricing-amount');
        const currency = root.querySelector('.tamm-pricing-currency');
        const period = root.querySelector('.tamm-pricing-period');

        if (tierValue) tierValue.textContent = String(tier.tier);
        if (rangeValue) rangeValue.textContent = tier.range;
        if (amount) amount.textContent = formatNumber(tier.price, lang);
        if (currency && data.currency) currency.textContent = data.currency;
        if (period && data.perYear) period.textContent = data.perYear;

        const buttons = root.querySelectorAll('.tamm-pricing-tier-btn');
        buttons.forEach(btn => {
            const n = parseInt(btn.getAttribute('data-tier'), 10);
            const active = n === tier.tier;
            btn.classList.toggle('is-active', active);
            btn.setAttribute('aria-selected', active ? 'true' : 'false');
        });
    }

    function bindTammSlider() {
        const slider = document.querySelector('#tamm-pricing .tamm-pricing-slider');
        if (!slider) return;
        slider.addEventListener('input', (e) => {
            const n = parseInt(e.target.value, 10);
            if (!isNaN(n)) setTammTier(n);
        });
    }

    // Expose for language-complete.js to re-render after i18n swap
    window.renderTammPricing = renderTammPricing;

    // ---------- ISO Standards Category Filter ----------
    function bindIsoFilter() {
        const chips = document.querySelectorAll('.iso-filter-chip');
        if (!chips.length) return;
        const cards = document.querySelectorAll('.iso-standard-card');

        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                const category = chip.getAttribute('data-category');
                chips.forEach(c => {
                    const active = c === chip;
                    c.classList.toggle('is-active', active);
                    c.setAttribute('aria-selected', active ? 'true' : 'false');
                });
                cards.forEach(card => {
                    const cat = card.getAttribute('data-category');
                    const visible = category === 'all' || cat === category;
                    card.classList.toggle('is-hidden', !visible);
                });
            });
        });
    }

    // ---------- Floating WhatsApp + hero/support WA links ----------
    function bindFloatingWhatsapp() {
        const url = getWhatsAppUrl();
        document.querySelectorAll('[data-whatsapp], .js-whatsapp-link').forEach(el => {
            el.setAttribute('href', url);
            el.setAttribute('target', '_blank');
            el.setAttribute('rel', 'noopener noreferrer');
        });
        document.querySelectorAll('[data-whatsapp]').forEach(el => {
            el.setAttribute('data-whatsapp', SHABAKAH_WHATSAPP);
        });
    }

    function bindElmImageFallbacks() {
        document.querySelectorAll('.elm-product-img[data-fallback]').forEach(img => {
            if (img.dataset.fallbackBound) return;
            img.dataset.fallbackBound = '1';
            img.addEventListener('error', function onErr() {
                if (img.src.indexOf(ELM_IMG_FALLBACK) === -1) {
                    img.src = img.getAttribute('data-fallback') || ELM_IMG_FALLBACK;
                }
            });
        });
    }

    // ---------- FAQ category filter ----------
    function bindFaqFilter() {
        const chips = document.querySelectorAll('.faq-filter-chip');
        if (!chips.length) return;
        const items = document.querySelectorAll('.faq-item[data-faq-category]');

        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                const category = chip.getAttribute('data-category');
                chips.forEach(c => {
                    const active = c === chip;
                    c.classList.toggle('is-active', active);
                    c.setAttribute('aria-selected', active ? 'true' : 'false');
                });
                items.forEach(item => {
                    const cat = item.getAttribute('data-faq-category');
                    const visible = category === 'all' || cat === category;
                    item.classList.toggle('is-hidden', !visible);
                });
            });
        });
    }

    // ---------- Reveal-on-scroll Animations ----------
    function bindReveals() {
        if (prefersReducedMotion) return;
        const targets = document.querySelectorAll(
            '.service-pillar-card, .elm-product-card, .iso-standard-card, ' +
            '.iso-step, .smart-gate-benefit, .support-channel, .faq-item, ' +
            '.feature-card-iot, .value-card-iot, .gallery-item-iot, .platform-card, ' +
            '.rased-module-card, .guide-card, .activation-step, .why-shabakah-item, .official-link-card'
        );
        if (!targets.length || !('IntersectionObserver' in window)) return;

        targets.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(14px)';
            el.style.transition = 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
            el.style.willChange = 'opacity, transform';
        });

        // Group targets by parent so siblings get a 60ms stagger.
        const parentMap = new WeakMap();
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const parent = el.parentElement;
                let delay = 0;
                if (parent) {
                    const idx = parentMap.get(parent) || 0;
                    delay = Math.min(idx, 7) * 60;
                    parentMap.set(parent, idx + 1);
                }
                el.style.transitionDelay = delay + 'ms';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                io.unobserve(el);
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        targets.forEach(el => io.observe(el));
    }

    // ---------- Rased Sub-Nav (scroll-spy + smooth-scroll) ----------
    function getHeaderOffset() {
        const cssVar = getComputedStyle(document.documentElement)
            .getPropertyValue('--header-height').trim();
        const fromVar = parseInt(cssVar, 10);
        if (!isNaN(fromVar) && fromVar > 0) return fromVar;
        const header = document.querySelector('header, .header, .site-header, .navbar');
        if (header && header.offsetHeight) return header.offsetHeight;
        return 80;
    }

    function bindRasedSubNav() {
        const nav = document.querySelector('.rased-subnav');
        if (!nav) return;
        const tabs = Array.from(nav.querySelectorAll('.rased-subnav-tab'));
        if (!tabs.length) return;

        const blocks = tabs
            .map(t => {
                const targetId = t.getAttribute('data-target') || (t.getAttribute('href') || '').replace(/^#/, '');
                return { tab: t, block: document.getElementById(targetId) };
            })
            .filter(x => x.block);
        if (!blocks.length) return;

        // Smooth-scroll click handler with header + sticky-nav offset
        function setActive(targetTab) {
            tabs.forEach(t => {
                const active = t === targetTab;
                t.classList.toggle('is-active', active);
                t.setAttribute('aria-selected', active ? 'true' : 'false');
            });
        }

        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                const id = tab.getAttribute('data-target') || (tab.getAttribute('href') || '').replace(/^#/, '');
                const target = document.getElementById(id);
                if (!target) return;
                e.preventDefault();

                const headerOffset = getHeaderOffset();
                const subnavOffset = nav.offsetHeight || 56;
                const rect = target.getBoundingClientRect();
                const targetY = rect.top + window.pageYOffset - headerOffset - subnavOffset - 16;

                window.scrollTo({
                    top: targetY,
                    behavior: prefersReducedMotion ? 'auto' : 'smooth'
                });
                setActive(tab);
                history.replaceState(null, '', '#' + id);
            });
        });

        // Scroll-spy via IntersectionObserver
        if (!('IntersectionObserver' in window)) return;

        const headerOffset = getHeaderOffset();
        const navHeight = 64;
        const io = new IntersectionObserver((entries) => {
            // Pick the entry that's most visible / closest to top
            const visible = entries
                .filter(e => e.isIntersecting)
                .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

            if (visible.length) {
                const id = visible[0].target.id;
                const match = blocks.find(b => b.block.id === id);
                if (match) setActive(match.tab);
            }
        }, {
            rootMargin: `-${headerOffset + navHeight + 16}px 0px -55% 0px`,
            threshold: [0, 0.1, 0.3]
        });

        blocks.forEach(b => io.observe(b.block));
    }

    // ---------- Init ----------
    function init() {
        renderTammPricing();
        bindTammSlider();
        bindIsoFilter();
        bindFloatingWhatsapp();
        bindFaqFilter();
        bindElmImageFallbacks();
        bindRasedSubNav();
        bindReveals();
        refreshLucide();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Re-render Tamm pricing after every language toggle (language-complete.js
    // dispatches no native event; we hook into setLanguage by re-rendering when
    // the language storage changes via the toggle).
    window.addEventListener('storage', (e) => {
        if (e.key === 'language') {
            renderTammPricing();
            bindFloatingWhatsapp();
            refreshLucide();
        }
    });
})();
