// The projects on the hub pages. Shared by index.html (Interactives and Demos) and other-topics/index.html.
// ── Edit this list to add, remove, or regroup links. ──
// After any change, give every ?v= tag in both HTML pages a new value (see the comment above
// each page's stylesheet link), so browsers fetch the new list.
//   page   "other" puts the project on the Other Topics page; leave it out for the main page.
//   group  the section heading. Sections appear in the order they first show up in the list.
//   topic  the small line above each title.
//   art    picks a graphic from js/art.js (leave it out for none).
(function () {
  'use strict';
  window.HubLinks = [
    {
      group: "Chemistry",
      art: "unitcell",
      topic: "Solid State",
      title: "Unit Cell Explorer",
      url: "https://analyticalchem.github.io/unit-cell-explorer/",
      source: "https://github.com/analyticalchem/unit-cell-explorer",
      desc: "Rotate simple, body-centered and face-centered cubic cells in 3D, build blocks, add bonds and split layers."
    },
    {
      group: "Chemistry",
      art: "titration",
      topic: "Acid–Base Equilibria",
      title: "Weak Titration Explorer",
      url: "https://analyticalchem.github.io/weaktitration/",
      source: "https://github.com/analyticalchem/weaktitration",
      desc: "Drag along a titration curve to watch pH and species fractions change at each stage."
    },
    {
      group: "Chemistry",
      art: "interferometer",
      topic: "Infrared Spectroscopy",
      title: "FTIR Interferometer Explorer",
      url: "https://analyticalchem.github.io/interferometer/",
      source: "https://github.com/analyticalchem/interferometer",
      desc: "Move an FTIR's mirror to record an interferogram, then watch the Fourier transform build the spectrum."
    },
    {
      group: "Chemistry",
      art: "vandeemter",
      topic: "Liquid Chromatography",
      title: "Van Deemter Explorer",
      url: "https://analyticalchem.github.io/van-deemter-explorer/",
      source: "https://github.com/analyticalchem/van-deemter-explorer",
      desc: "See how flow rate, temperature, particle size and mass transfer shape plate height in liquid chromatography."
    },
    {
      group: "Physics",
      art: "millikan",
      topic: "Electron Charge",
      title: "Millikan Oil Drop Lab",
      url: "https://analyticalchem.github.io/millikan-oil-drop-lab/",
      source: "https://github.com/analyticalchem/millikan-oil-drop-lab",
      desc: "Time oil drops falling and rising in a 3D Millikan apparatus to find the charge of the electron."
    },
    {
      group: "Physics",
      art: "grating",
      topic: "Optical Spectroscopy",
      title: "Diffraction Grating Explorer",
      url: "https://analyticalchem.github.io/diffraction-grating-explorer/",
      source: "https://github.com/analyticalchem/diffraction-grating-explorer",
      desc: "See where laser and white-light orders leave a grating, and turn it like a monochromator to select wavelengths."
    },
    {
      // Two linked pages: this opens part 1, Op Amp Basics; its series links lead on to the
      // DAC/ADC Builder (https://analyticalchem.github.io/dac-adc-builder/) and back.
      group: "Electronics",
      art: "opampdemo",
      topic: "Op Amps · Two Parts",
      title: "Op Amp Demo",
      url: "https://analyticalchem.github.io/op-amp-basics/",
      source: "https://github.com/analyticalchem/op-amp-basics",
      desc: "Learn how an op amp works with a water model, then build a DAC and ADCs from op amps."
    },
    {
      page: "other",
      group: "Music",
      art: "piano",
      topic: "Music Theory",
      title: "Chord Progression Lab",
      url: "https://analyticalchem.github.io/chord-progression-lab/",
      source: "https://github.com/analyticalchem/chord-progression-lab",
      desc: "Build chord progressions in any key and hear them on piano, with harmonic function and the circle of fifths."
    },
    {
      page: "other",
      group: "Accessibility",
      art: "weather",
      topic: "Low Vision",
      title: "Weather",
      url: "https://analyticalchem.github.io/weather/",
      source: "https://github.com/analyticalchem/weather",
      desc: "Large, high-contrast weather with read-aloud for people with low vision."
    }
  ];
})();
