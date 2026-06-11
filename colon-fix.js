(function () {
  function fixColons() {
    document.querySelectorAll('.hl-name').forEach(function (el) {
      if (el.dataset.cf === '1') return;
      var t = el.textContent;
      if (!t.endsWith(':')) { el.dataset.cf = '1'; return; }
      el.textContent = '';
      var n = document.createElement('span');
      n.textContent = t.slice(0, -1);
      n.style.color = el.style.color;
      var c = document.createElement('span');
      c.textContent = ':';
      c.style.setProperty('color', '#ffffff', 'important');
      c.style.setProperty('-webkit-text-fill-color', '#ffffff', 'important');
      el.appendChild(n);
      el.appendChild(c);
      el.dataset.cf = '1';
    });
  }
  new MutationObserver(fixColons).observe(document.documentElement, { childList: true, subtree: true });
  fixColons();
})();
