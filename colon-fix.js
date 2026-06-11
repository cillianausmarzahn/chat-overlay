(function () {
  // 1) CSS per JS einspritzen (CSP-konform, da aus erlaubtem Script)
  var css = `
    body { background: transparent !important; overflow: hidden; margin: 0; }
    .highlight-chat { background: transparent !important; box-shadow: none !important; border: none !important; padding: 1px 4px !important; margin: 0 !important; }
    .highlight-chat .hl-message { background: transparent !important; box-shadow: none !important; display: flex !important; flex-wrap: wrap !important; align-items: center !important; font-family: 'Open Sans', sans-serif !important; }
    .highlight-chat .hl-message .hl-badges img { height: 20px !important; max-height: 20px !important; width: auto !important; vertical-align: middle !important; margin-right: 2px !important; }
    .highlight-chat .hl-message .hl-name { font-family: 'Open Sans', sans-serif !important; font-size: 17px !important; font-weight: 700 !important; background: transparent !important; padding: 0 !important; margin-right: 4px !important; text-shadow: 1px 1px 2px rgba(0,0,0,.9), -1px -1px 2px rgba(0,0,0,.9) !important; }
    .highlight-chat .hl-message .hl-content { color: #fff !important; -webkit-text-fill-color: #fff !important; font-family: 'Open Sans', sans-serif !important; font-size: 17px !important; font-weight: 700 !important; text-shadow: 1px 1px 2px rgba(0,0,0,.9), -1px -1px 2px rgba(0,0,0,.9) !important; }
    .highlight-chat .hl-message .hl-content img { height: 32px !important; width: auto !important; vertical-align: middle !important; }
  `;
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // 2) Doppelpunkt weiß
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
