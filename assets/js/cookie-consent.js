/* ==========================================================
   CHIBO DEV · CONSENTIMENTO DE COOKIES (LGPD)
   - Banner de primeiro acesso (aceitar / recusar / personalizar)
   - Modal de preferências por categoria
   - Persistência em localStorage
   - Link "Preferências de cookies" no rodapé reabre o modal
   - API: window.CookieConsent.onChange(cb) para acionar analytics
   ========================================================== */
(function () {
  'use strict';

  var KEY = 'chibo-cookie-consent';
  var VERSION = 1;
  var CATS = ['analytics', 'functionality']; // 'necessary' é sempre true
  var listeners = [];
  var state = null;
  var lastFocus = null;

  /* ---------- Persistência ---------- */
  function read() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return null;
      var obj = JSON.parse(raw);
      if (!obj || obj.v !== VERSION) return null;
      return obj;
    } catch (e) { return null; }
  }

  function write(consent) {
    consent.necessary = true;
    consent.v = VERSION;
    consent.ts = new Date().toISOString();
    try { localStorage.setItem(KEY, JSON.stringify(consent)); } catch (e) {}
    state = consent;
    fire();
  }

  function fire() {
    try { document.dispatchEvent(new CustomEvent('chibo:cookieconsent', { detail: state })); } catch (e) {}
    listeners.forEach(function (cb) { try { cb(state); } catch (e) {} });
  }

  /* ---------- Markup ---------- */
  var ICON_COOKIE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-4-4 4 4 0 0 1-4-4 2 2 0 0 0-2-2z"/><circle cx="9" cy="11" r="1" fill="currentColor" stroke="none"/><circle cx="14" cy="15" r="1" fill="currentColor" stroke="none"/><circle cx="16" cy="9" r="1" fill="currentColor" stroke="none"/></svg>';
  var ICON_X = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 6l12 12M18 6L6 18"/></svg>';

  function bannerHTML() {
    return '' +
      '<div class="cc-banner" id="ccBanner" role="dialog" aria-live="polite" aria-label="Aviso de cookies">' +
        '<div class="cc-banner__title">' + ICON_COOKIE + 'Cookies por aqui</div>' +
        '<p class="cc-banner__text">Uso cookies pra lembrar suas preferências e entender como o site é usado. Você escolhe o que aceitar. Detalhes na <a href="politica-de-cookies.html">Política de Cookies</a>.</p>' +
        '<div class="cc-banner__actions">' +
          '<button type="button" class="cc-btn cc-btn--primary" data-cc="accept-all">Aceitar todos</button>' +
          '<div class="cc-banner__row">' +
            '<button type="button" class="cc-btn cc-btn--ghost" data-cc="reject">Recusar não essenciais</button>' +
            '<button type="button" class="cc-btn cc-btn--text" data-cc="customize">Personalizar</button>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function modalHTML() {
    return '' +
      '<div class="cc-modal" id="ccModal" role="dialog" aria-modal="true" aria-labelledby="ccModalTitle" hidden>' +
        '<div class="cc-modal__backdrop" data-cc-close></div>' +
        '<div class="cc-modal__panel" role="document">' +
          '<div class="cc-modal__head">' +
            '<div>' +
              '<h2 class="cc-modal__title" id="ccModalTitle">Preferências de cookies</h2>' +
              '<p class="cc-modal__sub">Ative ou desative cada categoria. Os essenciais mantêm o site funcionando e ficam sempre ligados.</p>' +
            '</div>' +
            '<button type="button" class="cc-modal__close" data-cc-close aria-label="Fechar">' + ICON_X + '</button>' +
          '</div>' +
          '<div class="cc-modal__body">' +
            cat('Necessários', 'Garantem o básico: lembram seu tema (claro/escuro), idioma e o próprio registro do seu consentimento. Não podem ser desativados.', null, true) +
            cat('Desempenho e análise', 'Ajudam a entender como o site é usado — páginas visitadas, origem do acesso — pra melhorar a experiência. Só ativam com a sua autorização.', 'analytics', false) +
            cat('Funcionalidade', 'Habilitam recursos extras e conteúdos de terceiros incorporados. Sem eles, algumas partes podem não funcionar como esperado.', 'functionality', false) +
          '</div>' +
          '<div class="cc-modal__foot">' +
            '<button type="button" class="cc-btn cc-btn--primary" data-cc="save">Salvar preferências</button>' +
            '<div class="cc-modal__foot-row">' +
              '<button type="button" class="cc-btn cc-btn--ghost" data-cc="reject">Recusar não essenciais</button>' +
              '<button type="button" class="cc-btn cc-btn--ghost" data-cc="accept-all">Aceitar todos</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function cat(name, desc, key, always) {
    var input = always
      ? '<input type="checkbox" checked disabled aria-label="' + name + ' (sempre ativos)">'
      : '<input type="checkbox" data-cc-cat="' + key + '" aria-label="' + name + '">';
    return '' +
      '<div class="cc-cat">' +
        '<div class="cc-cat__info">' +
          '<div class="cc-cat__name">' + name + '</div>' +
          '<p class="cc-cat__desc">' + desc + '</p>' +
        '</div>' +
        '<label class="cc-switch">' + input + '<span class="cc-switch__track"></span></label>' +
      '</div>';
  }

  /* ---------- Elementos ---------- */
  var banner, modal, panel;

  function inject() {
    var wrap = document.createElement('div');
    wrap.innerHTML = bannerHTML() + modalHTML();
    while (wrap.firstChild) document.body.appendChild(wrap.firstChild);
    banner = document.getElementById('ccBanner');
    modal = document.getElementById('ccModal');
    panel = modal.querySelector('.cc-modal__panel');
    bind();
  }

  /* ---------- Banner ---------- */
  function showBanner() { if (banner) requestAnimationFrame(function () { banner.classList.add('is-visible'); }); }
  function hideBanner() { if (banner) banner.classList.remove('is-visible'); }

  /* ---------- Modal ---------- */
  function syncToggles() {
    CATS.forEach(function (key) {
      var input = modal.querySelector('[data-cc-cat="' + key + '"]');
      if (input) input.checked = !!(state && state[key]);
    });
  }

  function openModal() {
    syncToggles();
    lastFocus = document.activeElement;
    modal.hidden = false;
    requestAnimationFrame(function () { modal.classList.add('is-open'); });
    document.body.style.overflow = 'hidden';
    setTimeout(function () {
      var f = modal.querySelector('.cc-modal__close');
      if (f) f.focus();
    }, 80);
  }

  function closeModal() {
    if (modal.hidden) return;
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(function () { modal.hidden = true; }, 320);
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }

  function readToggles() {
    var consent = { necessary: true };
    CATS.forEach(function (key) {
      var input = modal.querySelector('[data-cc-cat="' + key + '"]');
      consent[key] = !!(input && input.checked);
    });
    return consent;
  }

  /* ---------- Ações ---------- */
  function acceptAll() { write({ necessary: true, analytics: true, functionality: true }); hideBanner(); closeModal(); }
  function rejectNonEssential() { write({ necessary: true, analytics: false, functionality: false }); hideBanner(); closeModal(); }
  function savePrefs() { write(readToggles()); hideBanner(); closeModal(); }

  /* ---------- Bind ---------- */
  function bind() {
    document.addEventListener('click', function (e) {
      var t = e.target.closest('[data-cc]');
      if (t) {
        var action = t.getAttribute('data-cc');
        if (action === 'accept-all') acceptAll();
        else if (action === 'reject') rejectNonEssential();
        else if (action === 'customize') openModal();
        else if (action === 'save') savePrefs();
        return;
      }
      if (e.target.closest('[data-cc-close]')) { closeModal(); return; }
      if (e.target.closest('[data-cookie-prefs]')) { e.preventDefault(); openModal(); return; }
    });

    document.addEventListener('keydown', function (e) {
      if (modal.hidden) return;
      if (e.key === 'Escape') { closeModal(); return; }
      if (e.key === 'Tab') {
        var f = panel.querySelectorAll('button, input:not([disabled]), a[href]');
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  /* ---------- API pública ---------- */
  window.CookieConsent = {
    get: function () { return state ? Object.assign({}, state) : null; },
    openPreferences: function () { openModal(); },
    acceptAll: acceptAll,
    rejectAll: rejectNonEssential,
    onChange: function (cb) {
      if (typeof cb !== 'function') return;
      listeners.push(cb);
      if (state) { try { cb(state); } catch (e) {} }
    }
  };

  /* ---------- Init ---------- */
  function init() {
    inject();
    state = read();
    if (state) fire();      // já decidiu antes — aplica e dispara onChange
    else showBanner();      // primeiro acesso
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
