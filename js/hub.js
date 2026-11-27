// Hub pages: draws the project cards for this page from js/links.js and js/art.js, and runs the
// theme button and presentation mode. Each page names itself with <body data-page="main|other">.
(function () {
  'use strict';

  var page = document.body.dataset.page || 'main';
  var links = (window.HubLinks || []).filter(function (link) { return (link.page || 'main') === page; });
  var ART = window.HubArt || {};

  // Each card's key bar takes the next series colour.
  var KEYS = ['var(--series-a)', 'var(--series-b)', 'var(--series-c)', 'var(--series-d)'];

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  var groups = new Map();
  links.forEach(function (link) {
    if (!groups.has(link.group)) groups.set(link.group, []);
    groups.get(link.group).push(link);
  });

  // Project sections go before anything already in <main> (the main page's Other Topics card).
  var main = document.getElementById('main');
  var after = main.firstElementChild;
  var groupIndex = 0, cardIndex = 0;
  groups.forEach(function (items, name) {
    var headingId = 'group-' + (++groupIndex);
    var section = el('section', 'group');
    section.setAttribute('aria-labelledby', headingId);
    var h2 = el('h2', '', name);
    h2.id = headingId;
    section.append(h2);
    var grid = el('div', 'grid');

    items.forEach(function (item) {
      var card = el('article', 'card');

      if (item.art && ART[item.art]) {
        var art = el('div', 'art');
        art.setAttribute('aria-hidden', 'true');
        art.innerHTML = ART[item.art];           // trusted constants from js/art.js, not user input
        var svg = art.querySelector('svg');
        svg.setAttribute('aria-hidden', 'true');
        svg.setAttribute('focusable', 'false');
        art.querySelectorAll('.label, .formula').forEach(function (t) { t.setAttribute('paint-order', 'stroke'); });
        card.append(art);
      }

      var key = el('span', 'key');
      key.style.setProperty('--key', KEYS[cardIndex++ % KEYS.length]);
      key.setAttribute('aria-hidden', 'true');
      card.append(key);

      if (item.topic) card.append(el('p', 'eyebrow', item.topic));

      var h3 = el('h3');
      var a = el('a', '', item.title);
      a.href = item.url;
      h3.append(a);

      var actions = el('div', 'card-actions');
      var open = el('span', 'btn primary', 'Open');
      open.setAttribute('aria-hidden', 'true');
      actions.append(open);

      card.append(h3, el('p', 'desc', item.desc), actions);
      grid.append(card);
    });

    section.append(grid);
    main.insertBefore(section, after);
  });

  // Marker radius follows --chart-marker, which grows in presentation mode.
  function refreshArt() {
    var r = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--chart-marker')) || 5;
    document.querySelectorAll('.art .dot, .art .ring').forEach(function (c) { c.setAttribute('r', r); });
  }
  refreshArt();
  if (window.matchMedia) {
    // The presentation sizes apply only at 900 px and wider.
    var wide = window.matchMedia('(min-width: 900px)');
    if (wide.addEventListener) wide.addEventListener('change', refreshArt);
  }

  // Theme: auto → light → dark, stored for the hub pages.
  var themes = ['auto', 'light', 'dark'];
  var themeBtn = document.getElementById('theme');
  function applyTheme(name) {
    if (name === 'auto') delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = name;
    themeBtn.textContent = 'Theme: ' + name;
    try { localStorage.setItem('links-theme', name); } catch (e) { /* storage unavailable */ }
  }
  themeBtn.textContent = 'Theme: ' + (document.documentElement.dataset.theme || 'auto');
  themeBtn.addEventListener('click', function () {
    var cur = document.documentElement.dataset.theme || 'auto';
    applyTheme(themes[(themes.indexOf(cur) + 1) % themes.length]);
  });

  // Presentation mode: same page, larger and decluttered for projecting. Not stored.
  var presentBtn = document.getElementById('present');
  var presentStatus = document.getElementById('present-status');

  function isPresent() { return document.documentElement.hasAttribute('data-present'); }

  function setPresent(on) {
    document.documentElement.toggleAttribute('data-present', on);
    presentBtn.setAttribute('aria-pressed', String(on));
    presentStatus.textContent = on ? 'Presentation mode on. Press Escape to exit.' : 'Presentation mode off.';
    refreshArt();
    var root = document.documentElement;
    if (on && document.fullscreenEnabled && !document.fullscreenElement && root.requestFullscreen) {
      root.requestFullscreen().catch(function () { /* refused: the mode still applies */ });
    } else if (!on && document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  presentBtn.addEventListener('click', function () { setPresent(!isPresent()); });

  document.addEventListener('keydown', function (e) {
    if (e.altKey && e.shiftKey && e.code === 'KeyP') { e.preventDefault(); setPresent(!isPresent()); return; }
    if (e.key === 'Escape' && isPresent()) setPresent(false);
  });

  document.addEventListener('fullscreenchange', function () {
    if (!document.fullscreenElement && isPresent()) setPresent(false);
  });

  if (new URLSearchParams(location.search).get('present') === '1') setPresent(true);

  window.app = { page: page, links: links, setPresent: setPresent };   // console handle for checks
})();
