(function () {
  var f = document.createElement('link');
  f.rel = 'stylesheet';
  f.href = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700;800&display=swap';
  document.head.appendChild(f);

  var css = `
    html body { background: transparent !important; background-color: transparent !important; overflow: hidden !important; margin: 0 !important; }
    html body .highlight-chat { background: transparent !important; box-shadow: none !important; border: none !important; padding: 1px 4px !important; margin: 0 !important; }
    html body .highlight-chat .hl-message { background: transparent !important; box-shadow: none !important; display: flex !important; flex-wrap: wrap !important; align-items: center !important; font-family: 'Open Sans', sans-serif !important; font-size: 14px !important; gap: 0 !important; }
    html body .highlight-chat .hl-message .hl-badges { margin: 0 2px 0 0 !important; padding: 0 !important; gap: 1px !important; display: inline-flex !important; align-items: center !important; background: transparent !important; }
    html body .highlight-chat .hl-message .hl-badges img,
    html body .highlight-chat .hl-message img.hl-badge {
      height: 13px !important; max-height: 13px !important; min-height: 0 !important;
      width: auto !important; max-width: 13px !important;
      vertical-align: middle !important; margin: 0 1px 0 0 !important; padding: 0 !important;
    }
    html body .highlight-chat .hl-message .hl-name { font-family: 'Open Sans', sans-serif !important; font-size: 14px !important; font-weight: 800 !important; background: transparent !important; padding: 0 !important; margin: 0 4px 0 0 !important; -webkit-text-stroke: 0.4px currentColor !important; text-shadow: 1px 1px 2px rgba(0,0,0,.95), -1px -1px 2px rgba(0,0,0,.95) !important; }
    html body .highlight-chat .hl-message .hl-name span { font-size: 14px !important; font-weight: 800 !important; -webkit-text-stroke: 0.4px currentColor !important; }
    html body .highlight-chat .hl-message .hl-content { color: #fff !important; -webkit-text-fill-color: #fff !important; font-family: 'Open Sans', sans-serif !important; font-size: 14px !important; font-weight: 800 !important; -webkit-text-stroke: 0.4px #fff !important; text-shadow: 1px 1px 2px rgba(0,0,0,.95), -1px -1px 2px rgba(0,0,0,.95) !important; }
    html body .highlight-chat .hl-message .hl-content img { height: 26px !important; width: auto !important; vertical-align: middle !important; }
  `;
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

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
