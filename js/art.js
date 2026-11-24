// ── Card graphics for the hub pages ──
// Each key is a project's "art" value in js/links.js; each value is an SVG string drawn with the
// classes in css/styles.css ("Visuals (card graphics)").
(function () {
  'use strict';
  // Decorative: the card title and description carry the meaning. Colours and line,
  // marker and text sizes come from the CSS tokens, so they follow the theme and
  // presentation mode.
  var ART = {
    // Face-centered cubic cell in oblique view (front face 80 wide, depth +44/−28): hidden
    // edges dashed, corner atoms blue and face-centre atoms green as in the explorer,
    // drawn back to front.
    unitcell:
      '<svg viewBox="0 0 320 146">' +
        '<path class="guide" d="M142 100H222M142 100V20M98 128L142 100"/>' +
        '<circle class="atom tc" cx="142" cy="100" r="9"/>' +
        '<circle class="atom ta" cx="182" cy="60" r="9"/>' +
        '<circle class="atom ta" cx="120" cy="74" r="9"/>' +
        '<circle class="atom ta" cx="160" cy="114" r="9"/>' +
        '<path class="curve thin total" d="M98 128H178V48H98ZM98 48L142 20H222L178 48M222 20V100L178 128"/>' +
        '<circle class="atom tc" cx="142" cy="20" r="9"/>' +
        '<circle class="atom tc" cx="222" cy="100" r="9"/>' +
        '<circle class="atom tc" cx="222" cy="20" r="9"/>' +
        '<circle class="atom ta" cx="200" cy="74" r="9"/>' +
        '<circle class="atom ta" cx="160" cy="34" r="9"/>' +
        '<circle class="atom tc" cx="98" cy="128" r="9"/>' +
        '<circle class="atom tc" cx="178" cy="128" r="9"/>' +
        '<circle class="atom tc" cx="98" cy="48" r="9"/>' +
        '<circle class="atom tc" cx="178" cy="48" r="9"/>' +
        '<circle class="atom ta" cx="138" cy="88" r="9"/>' +
      '</svg>',

    // Weak acid (Ka 1.8e-5) titrated with strong base: buffer region shaded,
    // ring at the half-equivalence point (pH = pKa), dot at the equivalence point.
    titration:
      '<svg viewBox="0 0 320 146">' +
        '<rect class="buffer" x="49" y="16" width="120" height="112"/>' +
        '<line class="neutral" x1="34" y1="74" x2="304" y2="74"/>' +
        '<path class="axis" d="M34 16V128H304"/>' +
        '<line class="guide" x1="184" y1="60.7" x2="184" y2="128"/>' +
        '<path class="curve a" d="M34,105.8 L37,103.4 L41.5,101 L49,98.7 L56.5,97.2 L64,96 L79,94.2 L94,92.8 L109,91.4 L124,90 L139,88.6 L154,86.8 L161.5,85.6 L169,84 L173.5,82.7 L178,80.7 L181,78.4 L182.5,76 L183.2,73.7 L184,60.7 L184.7,47.8 L185.5,45.5 L187,43.2 L190,40.9 L194.5,39.1 L199,37.9 L206.5,36.6 L214,35.7 L229,34.5 L244,33.7 L259,33.1 L274,32.6 L289,32.2"/>' +
        '<circle class="ring" cx="109" cy="91.4" r="5"/>' +
        '<circle class="dot" cx="184" cy="60.7" r="5"/>' +
        '<text class="label" x="28" y="24" text-anchor="end">pH</text>' +
        '<text class="label" x="28" y="77" text-anchor="end">7</text>' +
        '<text class="label" x="109" y="121" text-anchor="middle">buffer</text>' +
        '<text class="label" x="192" y="66">equivalence</text>' +
        '<text class="label" x="304" y="142" text-anchor="end">base added</text>' +
      '</svg>',

    // H = A + B/u + C·u with the three terms in the Van Deemter Explorer's colours
    // and a ring at the optimum velocity.
    vandeemter:
      '<svg viewBox="0 0 320 146">' +
        '<path class="axis" d="M34 16V128H304"/>' +
        '<line class="guide" x1="122" y1="78.2" x2="122" y2="128"/>' +
        '<line class="curve thin a" x1="51.6" y1="111.4" x2="298" y2="111.4"/>' +
        '<path class="curve thin b" d="M51.6,44.9 L53.8,54.2 L56,61.5 L60.4,72.6 L64.8,80.5 L69.2,86.5 L73.6,91.1 L78,94.8 L86.8,100.3 L95.6,104.3 L104.4,107.2 L113.2,109.5 L122,111.4 L135.2,113.6 L148.4,115.2 L166,116.9 L188,118.5 L210,119.7 L232,120.6 L254,121.4 L276,122 L298,122.5"/>' +
        '<line class="curve thin c" x1="34" y1="128" x2="298" y2="78.2"/>' +
        '<path class="curve total" d="M51.6,25 L53.8,33.8 L56,40.8 L60.4,51 L64.8,58.1 L69.2,63.2 L73.6,67 L78,69.8 L86.8,73.7 L95.6,76 L104.4,77.3 L113.2,78 L122,78.2 L135.2,77.8 L148.4,77 L166,75.4 L188,72.8 L210,69.8 L232,66.6 L254,63.2 L276,59.7 L298,56"/>' +
        '<circle class="ring" cx="122" cy="78.2" r="5"/>' +
        '<text class="formula" x="304" y="26" text-anchor="end">H = <tspan class="ta">A</tspan> + <tspan class="tb">B/u</tspan> + <tspan class="tc">C·u</tspan></text>' +
        '<text class="label" x="28" y="24" text-anchor="end">H</text>' +
        '<text class="label" x="304" y="142" text-anchor="end">u</text>' +
      '</svg>',

    // Reflection grating (1200 /mm) with a beam arriving at θ = 40°: the 0th order mirrors it,
    // and the 1st order splits blue, green and red at −6.3°, −0.2° and +6.7° from the normal.
    grating: (function () {
      var s = '<svg viewBox="0 0 320 146">';
      s += '<path class="axis" d="';
      for (var x = 60; x <= 266; x += 8) s += 'M' + x + ' 127l-6 7';
      s += '"/>';
      s += '<line class="curve total" x1="50" y1="124" x2="270" y2="124"/>';
      s += '<line class="curve thin total" x1="95.7" y1="47.4" x2="160" y2="124"/>';
      s += '<path class="arrow" d="M121.5 85.8L131.8 90.3L129.1 79.4"/>';
      s += '<line class="curve thin total" x1="160" y1="124" x2="224.3" y2="47.4"/>';
      s += '<line class="curve thin c" x1="160" y1="124" x2="171" y2="24.6"/>';
      s += '<line class="curve thin a" x1="160" y1="124" x2="160.3" y2="24"/>';
      s += '<line class="curve thin b" x1="160" y1="124" x2="148.3" y2="24.7"/>';
      s += '<text class="formula" x="304" y="16" text-anchor="end">mλ = d(sin θ + sin φ)</text>';
      s += '<text class="label" x="89" y="50" text-anchor="end">incident</text>';
      s += '<text class="label" x="231" y="50">0th order</text>';
      s += '<text class="label" x="143" y="27" text-anchor="end">1st order</text>';
      s += '<text class="label" x="270" y="144" text-anchor="end">grating</text>';
      return s + '</svg>';
    })(),

    // Millikan: the charges of twelve timed drops, one row each, along a charge axis running 0 to
    // 5.5 e over 270 px; they fall on the dashed multiples of e = 1.602e-19 C, each with the 0.1 e
    // or so of scatter that Brownian motion gives a timing.
    millikan:
      '<svg viewBox="0 0 320 146">' +
        '<path class="axis" d="M34 16V128H304"/>' +
        '<line class="guide" x1="83.1" y1="16" x2="83.1" y2="128"/>' +
        '<line class="guide" x1="132.2" y1="16" x2="132.2" y2="128"/>' +
        '<line class="guide" x1="181.3" y1="16" x2="181.3" y2="128"/>' +
        '<line class="guide" x1="230.4" y1="16" x2="230.4" y2="128"/>' +
        '<line class="guide" x1="279.5" y1="16" x2="279.5" y2="128"/>' +
        '<circle class="dot" cx="127.5" cy="30" r="5"/><circle class="dot" cx="82.2" cy="38.2" r="5"/>' +
        '<circle class="dot" cx="178.2" cy="46.4" r="5"/><circle class="dot" cx="131.6" cy="54.6" r="5"/>' +
        '<circle class="dot" cx="225.2" cy="62.8" r="5"/><circle class="dot" cx="179.4" cy="71" r="5"/>' +
        '<circle class="dot" cx="84.1" cy="79.2" r="5"/><circle class="dot" cx="278" cy="87.4" r="5"/>' +
        '<circle class="dot" cx="133.3" cy="95.6" r="5"/><circle class="dot" cx="179.6" cy="103.8" r="5"/>' +
        '<circle class="dot" cx="228.1" cy="112" r="5"/><circle class="dot" cx="135.3" cy="120.2" r="5"/>' +
        '<text class="formula" x="40" y="27">q = n·e</text>' +
        '<text class="label" x="28" y="24" text-anchor="end">drop</text>' +
        '<text class="label" x="304" y="142" text-anchor="end">q</text>' +
      '</svg>',

    // FTIR Interferometer Explorer: the instrument's interferogram for its broadband source
    // (1500 K) with the holder empty, computed from that page's own model over δ = 0 to 12 µm
    // (22.5 px per µm; y: 112 px per 100 % of the signal, 0 at y = 128). The centerburst at
    // zero path difference, where every wavenumber is in step, settles to half the signal (dashed).
    interferometer:
      '<svg viewBox="0 0 320 146">' +
        '<line class="neutral" x1="34" y1="72" x2="304" y2="72"/>' +
        '<path class="axis" d="M34 16V128H304"/>' +
        '<path class="curve c" d="M34,16 L36.3,16.9 L38.5,19.6 L40.8,23.8 L45.3,36.5 L58.8,85 L63.3,96.2 L65.5,99.9 L67.8,102.1 L70,103 L72.3,102.6 L74.5,101 L79,95.1 L90.3,75.4 L94.8,70 L97,68.3 L99.3,67.4 L101.5,67.1 L106,68.4 L119.5,77.1 L124,78.3 L128.5,78 L146.5,69.5 L151,68.6 L157.7,69.4 L173.5,74.7 L180.2,75 L200.5,70.1 L209.5,70.3 L227.5,73.5 L256.7,70.6 L286,72.7 L304,71.2"/>' +
        '<text class="label" x="46" y="22">centerburst</text>' +
        '<text class="label" x="28" y="24" text-anchor="end">I</text>' +
        '<text class="label" x="304" y="142" text-anchor="end">path difference δ</text>' +
      '</svg>',

    // The two parts of the Op Amp Demo side by side.
    // Left, Op Amp Basics: the open-loop transfer curve, gain 1e5 and a ±15 V supply with
    // 1.5 V of headroom, so the output saturates at ±13.5 V once V+ − V− passes ±135 µV
    // (x: ±400 µV across 130 px, 0 at x = 85; y: 40 px per 13.5 V, 0 at y = 76).
    // Right, DAC/ADC Builder: both ADCs converting vi = 6.5 V with a 4-bit, 1 V-step DAC,
    // 15.5 px per clock step: the staircase (blue) counts 0 to 7 and stops (dot); successive
    // approximation (green, thin) tries 8, 4, 6, 7 (result 6). y: 11 px per volt, 0 V at y = 128.
    opampdemo:
      '<svg viewBox="0 0 320 146">' +
        '<line class="neutral" x1="20" y1="76" x2="150" y2="76"/>' +
        '<line class="neutral" x1="85" y1="24" x2="85" y2="128"/>' +
        '<path class="axis" d="M20 24V128H150"/>' +
        '<path class="curve c" d="M20,116 L63.1,116 L106.9,36 L150,36"/>' +
        '<text class="label" x="14" y="32" text-anchor="end">vₒ</text>' +
        '<text class="label" x="150" y="142" text-anchor="end">V₊ − V₋</text>' +
        '<path class="axis" d="M176 24V128H306"/>' +
        '<line class="guide" x1="176" y1="56.5" x2="306" y2="56.5"/>' +
        '<path class="curve thin a" d="M180,128 H195.5 V40 H211 V84 H226.5 V62 H242 V51 H257.5"/>' +
        '<path class="curve c" d="M180,128 H195.5 V117 H211 V106 H226.5 V95 H242 V84 H257.5 V73 H273 V62 H288.5 V51 H304"/>' +
        '<circle class="dot" cx="296.25" cy="51" r="5"/>' +
        '<text class="label" x="172" y="32" text-anchor="end">V</text>' +
        '<text class="label" x="172" y="60" text-anchor="end">vᵢ</text>' +
        '<text class="label" x="306" y="142" text-anchor="end">clock steps</text>' +
      '</svg>',

    // Two octaves of keys with the I chord (C–E–G) lit, under an I–IV–V–I progression.
    piano: (function () {
      var s = '<svg viewBox="0 0 320 146">';
      var chords = ['I', 'IV', 'V', 'I'];
      chords.forEach(function (name, i) {
        var x = 42 + i * 64, on = i === 0 ? ' on' : '';
        s += '<rect class="pill' + on + '" x="' + x + '" y="6" width="44" height="22" rx="11"/>';
        s += '<text class="pill-text' + on + '" x="' + (x + 22) + '" y="17">' + name + '</text>';
        if (i < chords.length - 1) {
          var ax = x + 48;
          s += '<path class="arrow" d="M' + ax + ' 17H' + (ax + 11) + 'M' + (ax + 7) + ' 13L' + (ax + 11) + ' 17L' + (ax + 7) + ' 21"/>';
        }
      });
      var lit = [0, 2, 4];                       // C, E, G
      for (var i = 0; i < 14; i++) {
        var on = lit.indexOf(i) !== -1 ? ' on' : '';
        s += '<rect class="wkey' + on + '" x="' + (20 + i * 20) + '" y="40" width="20" height="100" rx="3"/>';
      }
      [0, 1, 3, 4, 5, 7, 8, 10, 11, 12].forEach(function (i) {
        s += '<rect class="bkey" x="' + (34 + i * 20) + '" y="40" width="12" height="60" rx="2"/>';
      });
      lit.forEach(function (i) {
        s += '<circle class="tc" cx="' + (30 + i * 20) + '" cy="126" r="4.5"/>';
      });
      return s + '</svg>';
    })(),

    // The Weather app's temperature chart: three days of bars running from the low to the
    // high, using the app's sample forecast for Springfield (80/61, 74/58, 67/50 °F), between
    // the arrows that move the chart. y = 36 + (80 − T) × 64/30, so 80° is at 36 and 50° at 100.
    weather: (function () {
      var days = [['Today', 80, 61], ['Tomorrow', 74, 58], ['Monday', 67, 50]];
      var s = '<svg viewBox="0 0 320 146">';
      function y(t) { return Math.round((36 + (80 - t) * 64 / 30) * 10) / 10; }
      days.forEach(function (d, i) {
        var x = 70 + i * 90, top = y(d[1]), bottom = y(d[2]);
        s += '<rect class="tc" x="' + (x - 7) + '" y="' + top + '" width="14" height="' + (bottom - top) + '" rx="7"/>';
        s += '<text class="formula" x="' + x + '" y="' + (top - 7) + '" text-anchor="middle">' + d[1] + '°</text>';
        s += '<text class="formula" x="' + x + '" y="' + (bottom + 18) + '" text-anchor="middle">' + d[2] + '°</text>';
        s += '<text class="label" x="' + x + '" y="142" text-anchor="middle">' + d[0] + '</text>';
      });
      s += '<path class="arrow" d="M22 58L10 70L22 82Z"/>';
      s += '<path class="arrow" d="M298 58L310 70L298 82Z"/>';
      return s + '</svg>';
    })()
  };
  window.HubArt = ART;
})();
