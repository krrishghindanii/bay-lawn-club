// header/footer, crest, court svg, menu, waitlist form etc
(function () {
  // painted ladies badge. unique ids per copy or the textPaths clash
  var crestN = 0;
  function crest() {
    crestN++;
    return '<svg class="crest-mark" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<circle cx="50" cy="50" r="48" stroke-width="1.4"/><circle cx="50" cy="50" r="31" stroke-width=".7"/><defs><path id="crest-t-@" d="M13.5 50 A36.5 36.5 0 0 1 86.5 50"/><path id="crest-b-@" d="M7.5 50 A42.5 42.5 0 0 0 92.5 50"/></defs><text font-family="Jost" font-size="7.2" letter-spacing="2.2" fill="currentColor" stroke="none" opacity="1" text-anchor="middle"><textPath href="#crest-t-@" startOffset="50%">THE BAY LAWN CLUB</textPath></text><text font-family="Jost" font-size="6.12" letter-spacing="2.2" fill="currentColor" stroke="none" opacity="1" text-anchor="middle"><textPath href="#crest-b-@" startOffset="50%">SAN FRANCISCO</textPath></text><g transform="translate(50 50) scale(.56) translate(-50 -50)"><path d="M12 72.4 V52.400000000000006 L18.5 44.9 L25 52.400000000000006 V72.4 Z" stroke-width="1.9"/><path d="M11 52.900000000000006 L18.5 43.7 L26 52.900000000000006" stroke-width="1.52"/><circle cx="18.5" cy="49.5" r="1.43" stroke-width="1.14"/><path d="M14.3 56.3 h4.4 v6.4 h-4.4 Z M14.3 64.0 h4.4 v4.4 h-4.4 Z" stroke-width="1.04"/><path d="M20.3 72.4 v-6.8 h2.6 v6.8" stroke-width="1.04"/><path d="M27 69.80000000000001 V49.80000000000001 L33.5 42.3 L40 49.80000000000001 V69.80000000000001 Z" stroke-width="1.9"/><path d="M26 50.30000000000001 L33.5 41.1 L41 50.30000000000001" stroke-width="1.52"/><circle cx="33.5" cy="46.9" r="1.43" stroke-width="1.14"/><path d="M29.3 53.7 h4.4 v6.4 h-4.4 Z M29.3 61.4 h4.4 v4.4 h-4.4 Z" stroke-width="1.04"/><path d="M35.3 69.80000000000001 v-6.8 h2.6 v6.8" stroke-width="1.04"/><path d="M42 67.2 V47.2 L48.5 39.7 L55 47.2 V67.2 Z" stroke-width="1.9"/><path d="M41 47.7 L48.5 38.5 L56 47.7" stroke-width="1.52"/><circle cx="48.5" cy="44.3" r="1.43" stroke-width="1.14"/><path d="M44.3 51.1 h4.4 v6.4 h-4.4 Z M44.3 58.8 h4.4 v4.4 h-4.4 Z" stroke-width="1.04"/><path d="M50.3 67.2 v-6.8 h2.6 v6.8" stroke-width="1.04"/><path d="M57 64.60000000000001 V44.60000000000001 L63.5 37.1 L70 44.60000000000001 V64.60000000000001 Z" stroke-width="1.9"/><path d="M56 45.10000000000001 L63.5 35.9 L71 45.10000000000001" stroke-width="1.52"/><circle cx="63.5" cy="41.7" r="1.43" stroke-width="1.14"/><path d="M59.3 48.5 h4.4 v6.4 h-4.4 Z M59.3 56.2 h4.4 v4.4 h-4.4 Z" stroke-width="1.04"/><path d="M65.3 64.60000000000001 v-6.8 h2.6 v6.8" stroke-width="1.04"/><path d="M72 62.00000000000001 V42.00000000000001 L78.5 34.5 L85 42.00000000000001 V62.00000000000001 Z" stroke-width="1.9"/><path d="M71 42.50000000000001 L78.5 33.3 L86 42.50000000000001" stroke-width="1.52"/><circle cx="78.5" cy="39.1" r="1.43" stroke-width="1.14"/><path d="M74.3 45.9 h4.4 v6.4 h-4.4 Z M74.3 53.6 h4.4 v4.4 h-4.4 Z" stroke-width="1.04"/><path d="M80.3 62.00000000000001 v-6.8 h2.6 v6.8" stroke-width="1.04"/><circle cx="78" cy="24" r="6" fill="#D7F24A" stroke="none"/><path d="M73.20 21.30 Q78 24 73.20 26.70 M82.80 21.30 Q78 24 82.80 26.70" stroke="#fff" stroke-width="0.72" fill="none"/><path d="M8 82 H92" stroke-width="2.6"/><path d="M50 82 V76" stroke-width="1.8"/></g>'.replace(/@/g, crestN) + '</svg>';
  }

  // doubles court, to scale (23.77 x 10.97m)
  var COURT = '<svg class="court-lines" viewBox="-300 -160 2977 1417" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
    '<rect class="surface" x="0" y="0" width="2377" height="1097"/>' +
    '<rect class="l" x="0" y="0" width="2377" height="1097"/>' +
    '<path class="l" d="M0 137 H2377 M0 960 H2377 M548 137 V960 M1829 137 V960 M548 548 H1829 M0 548 H22 M2355 548 H2377"/>' +
    '<path class="net" d="M1188 -60 V1157"/>' +
    '<rect class="alley-b" x="0" y="960" width="2377" height="137" fill="none" stroke="none"/></svg>';

  // cable car bg for the home hero
  var BRIDGE = '<svg class="bridge-art" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice" aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M40 778 V668 L100.0 614 L160 668 V778 M90.0 650 a10 10 0 1 0 20 0 a10 10 0 1 0 -20 0 M64 696 h34 v37 h-34 Z M114 778 v-44 h24 v44 M220 740 V630 L280.0 576 L340 630 V740 M270.0 612 a10 10 0 1 0 20 0 a10 10 0 1 0 -20 0 M244 658 h34 v37 h-34 Z M294 740 v-44 h24 v44 M1120 549 V439 L1180.0 385 L1240 439 V549 M1170.0 421 a10 10 0 1 0 20 0 a10 10 0 1 0 -20 0 M1144 467 h34 v37 h-34 Z M1194 549 v-44 h24 v44 " stroke-width="1.8"/><path d="M-40 806 L1640 449 M-40 828 L1640 471" stroke-width="2.2"/><g stroke-width="2.4"><g transform="translate(1420 489.6674199617677) rotate(-12) scale(0.6)"><rect x="-170" y="-130" width="340" height="120" rx="8"/><path d="M-196 -130 H196 M-184 -146 H184 M-170 -146 V-130 M170 -146 V-130 M-150 -146 Q0 -168 150 -146"/><rect x="-150" y="-114" width="40" height="46" rx="4"/><rect x="-98" y="-114" width="40" height="46" rx="4"/><rect x="-46" y="-114" width="40" height="46" rx="4"/><rect x="6" y="-114" width="40" height="46" rx="4"/><rect x="58" y="-114" width="40" height="46" rx="4"/><rect x="110" y="-114" width="40" height="46" rx="4"/><path d="M-170 -52 H170 M-110 -52 V-10 M110 -52 V-10 M-196 -10 H196"/><circle cx="-110" cy="4" r="14"/><circle cx="110" cy="4" r="14"/><path d="M-40 -168 V-196 M40 -168 V-196 M-40 -196 H40"/><path d="M-40 -82 h24 M16 -82 h24"/></g></g></svg>';

  var BALL = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#D7F24A"/>' +
    '<path d="M3 6 Q10 12 3 18 M21 6 Q14 12 21 18" stroke="#fff" stroke-width="1.4" fill="none"/></svg>';

  var PAGES = [
    ["index.html", "Home"],
    ["manifesto.html", "Manifesto"],
    ["weekly-meet.html", "The Weekly Meet"],
    ["founder.html", "The Story"],
    ["membership.html", "Membership"],
    ["get-involved.html", "Get Involved"]
  ];
  var here = location.pathname.split("/").pop() || "index.html";
  var links = PAGES.map(function (p) {
    return '<a href="' + p[0] + '"' + (p[0] === here ? ' aria-current="page"' : "") + ">" + p[1] + "</a>";
  }).join("");

  var header = document.getElementById("site-header");
  if (header) {
    header.innerHTML =
      '<div class="wrap"><a class="brand logo-only" href="index.html" aria-label="The Bay Lawn Club, home">' + crest() + "</a>" +
      '<div class="header-actions"><nav class="nav" id="nav">' + links + "</nav>" +
      '<button class="theme-toggle" type="button" id="theme-toggle"></button>' +
      '<button class="menu-toggle" type="button" id="menu-toggle" aria-expanded="false" aria-controls="nav">Menu</button></div></div>';
  }

  // theme toggle (dark default), saved in localStorage
  var root = document.documentElement;
  var MOON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>';
  var SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/></svg>';
  var themeBtn = document.getElementById("theme-toggle");
  function paintToggle() {
    if (!themeBtn) return;
    var dark = root.getAttribute("data-theme") === "dark";
    themeBtn.innerHTML = (dark ? SUN : MOON) + "<span>" + (dark ? "Light" : "Dark") + "</span>";
    themeBtn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  }
  paintToggle();
  if (themeBtn) themeBtn.addEventListener("click", function () {
    var dark = root.getAttribute("data-theme") !== "dark";
    if (dark) root.setAttribute("data-theme", "dark"); else root.removeAttribute("data-theme");
    try { localStorage.setItem("blc-theme", dark ? "dark" : "light"); } catch (e) {}
    paintToggle();
  });
  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML =
      '<div class="wrap"><div><a class="brand" href="index.html">' + crest() + "<span>The Bay Lawn Club</span></a>" +
      '<p style="margin-top:14px">San Francisco · once a week<br><a href="mailto:contact@baylawnclub.com">contact@baylawnclub.com</a></p></div>' +
      "<nav>" + links + "</nav></div>" +
      '<div class="wrap footer-legal"><a href="privacy.html">Privacy Policy</a><a href="terms.html">Terms &amp; Waiver</a></div>' +
      (document.querySelector(".photo-bg") ? '<div class="wrap photo-credit">Golden Gate photo: <a href="https://commons.wikimedia.org/wiki/File:GoldenGateBridge-001.jpg" rel="noopener">Rich Niewiroski Jr.</a>, <a href="https://creativecommons.org/licenses/by/2.5/" rel="noopener">CC BY 2.5</a></div>' : "");
  }
  document.querySelectorAll(".crest-slot").forEach(function (el) { el.outerHTML = crest(); });
  document.querySelectorAll(".court-hero").forEach(function (el) {
    el.insertAdjacentHTML("afterbegin", (el.classList.contains("bridge-bg") ? BRIDGE : "") + COURT + '<div class="bounce">' + BALL + "</div>");
  });
  // put the home buttons in the bottom alley, either side of the net
  var alleyRow = document.querySelector(".court-hero .btn-row.in-alley");
  if (alleyRow) {
    var aHero = alleyRow.closest(".court-hero");
    var placeInAlley = function () {
      var alley = aHero.querySelector(".alley-b").getBoundingClientRect();
      var hero = aHero.getBoundingClientRect();
      alleyRow.style.top = (alley.top - hero.top + alley.height / 2) + "px";
      // the tagline sits halfway between the club name and the buttons
      var lede = aHero.querySelector(".lede.in-mid"), title = aHero.querySelector("h1");
      if (lede && title) {
        var gapTop = title.getBoundingClientRect().bottom - parseFloat(getComputedStyle(title).fontSize) * 0.3, gapBottom = alleyRow.getBoundingClientRect().top;
        lede.style.top = ((gapTop + gapBottom) / 2 - hero.top) + "px";
      }
    };
    placeInAlley();
    window.addEventListener("resize", placeInAlley);
    window.addEventListener("load", placeInAlley);
  }
  // get involved crew - uses the court's viewBox so positions line up
  var crewHero = document.querySelector(".court-hero.crew");
  if (crewHero) {
    var SK = ["#F1D3B5", "#E0B48C", "#C68C5E", "#A0683F", "#7A4A2A"];
    var si = 0;
    function skin() { si = (si + 2) % SK.length; return SK[si]; }
    function judge(x, y, flip, cls) {
      var k = skin();
      return '<g class="judge ' + (cls || "") + '" transform="translate(' + x + ' ' + y + ') scale(' + (flip ? -1.15 : 1.15) + ' 1.15)">' +
        '<rect x="-9" y="-40" width="7" height="40" fill="#16243A"/><rect x="2" y="-40" width="7" height="40" fill="#16243A"/>' +
        '<path d="M-16 -38 L-14 -78 Q0 -84 14 -78 L16 -38 Z" fill="#F3ECDD"/>' +
        '<path d="M-3 -80 L0 -66 L3 -80 Z" fill="#4B2A63"/>' +
        '<rect x="-21" y="-77" width="6" height="32" rx="3" fill="#F3ECDD"/>' +
        '<g class="arm"><rect x="15" y="-77" width="6" height="32" rx="3" fill="#F3ECDD"/><circle cx="18" cy="-44" r="4" fill="' + k + '"/></g>' +
        '<circle cx="0" cy="-94" r="12" fill="' + k + '"/>' +
        '<path d="M-12 -97 Q-12 -110 0 -110 Q12 -110 12 -97 Z" fill="#1F4D2B"/><rect x="0" y="-99" width="18" height="4" rx="2" fill="#1F4D2B"/>' +
        "</g>";
    }
    function ballKid(x, y, cls) {
      var k = skin();
      return '<g class="kid ' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ') scale(1.15)">' +
        '<path d="M-14 0 L-10 -18 L-2 -18 L-6 0 Z M14 0 L10 -18 L2 -18 L6 0 Z" fill="' + k + '"/>' +
        '<rect x="-15" y="-30" width="30" height="14" rx="3" fill="#1F4D2B"/>' +
        '<path d="M-14 -28 Q-14 -58 0 -58 Q14 -58 14 -28 Z" fill="#4B2A63"/>' +
        '<circle cx="-15" cy="-28" r="4" fill="' + k + '"/><circle cx="15" cy="-28" r="4" fill="' + k + '"/>' +
        '<circle cx="0" cy="-70" r="11" fill="' + k + '"/>' +
        '<path d="M-11 -73 Q-11 -84 0 -84 Q11 -84 11 -73 Z" fill="#4B2A63"/><rect x="0" y="-75" width="16" height="4" rx="2" fill="#4B2A63"/>' +
        "</g></g>";
    }
    function photographer(x, y) {
      var k = skin();
      return '<g class="photog" transform="translate(' + x + ' ' + y + ') scale(1.15)">' +
        '<path d="M-16 0 Q-18 -20 -10 -22 L10 -22 Q18 -20 16 0 Z" fill="#2B2B2B"/>' +
        '<path d="M-15 -20 Q-15 -54 0 -56 Q15 -54 15 -20 Z" fill="#3A3F4A"/>' +
        '<circle cx="0" cy="-68" r="11" fill="' + k + '"/>' +
        '<path d="M-11 -70 Q-11 -81 0 -81 Q11 -81 11 -70 Z" fill="#111"/>' +
        '<rect x="-12" y="-72" width="24" height="15" rx="2" fill="#111"/><circle cx="0" cy="-64.5" r="5.5" fill="#333" stroke="#777" stroke-width="1"/>' +
        '<rect x="-6" y="-80" width="12" height="7" fill="#222"/>' +
        '<g class="flash"><circle cx="0" cy="-78" r="70" fill="url(#flashGlow)"/>' +
        '<path d="M0 -112 V-96 M0 -60 V-44 M-34 -78 H-18 M18 -78 H34 M-24 -102 L-13 -91 M13 -65 L24 -54 M24 -102 L13 -91 M-13 -65 L-24 -54" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>' +
        '<circle cx="0" cy="-78" r="9" fill="#fff"/></g>' +
        "</g>";
    }
    // zoomed out so the baseline judges fit
    var VB = "-520 -230 3417 1557";
    var courtSvg = crewHero.querySelector(".court-lines");
    courtSvg.setAttribute("viewBox", VB);
    courtSvg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    var crewSvg = '<svg class="crew-layer" viewBox="' + VB + '" preserveAspectRatio="xMidYMid meet" aria-hidden="true">' +
      '<defs><radialGradient id="flashGlow"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset=".35" stop-color="#fff" stop-opacity=".45"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>' +
      // photographers along both sidelines
      photographer(330, -40) + photographer(760, -40) + photographer(1620, -40) + photographer(2060, -40) +
      photographer(520, 1290) + photographer(1880, 1290) +
      // line judges behind each baseline
      judge(-190, 330, false, "caller") + judge(-190, 900, false) +
      judge(2567, 330, true) + judge(2567, 900, true, "caller2") +
      // ball kids at the net posts, take turns running across
      ballKid(1120, -40, "runner r1") + ballKid(1256, 1200, "runner r2") +
      "</svg>";
    crewHero.insertAdjacentHTML("afterbegin", crewSvg);

    if (!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
      crewHero.querySelectorAll(".photog").forEach(function (p) {
        (function fire() {
          setTimeout(function () {
            p.classList.add("pop");
            setTimeout(function () { p.classList.remove("pop"); }, 160);
            fire();
          }, 1800 + Math.random() * 4200);
        })();
      });
      ["r1", "r2"].forEach(function (c, i) {
        var kid = crewHero.querySelector("." + c);
        function run() {
          kid.classList.add("at-net");
          setTimeout(function () { kid.classList.remove("at-net"); }, 3400);
        }
        setTimeout(function () { run(); setInterval(run, 9000); }, 1200 + i * 4500);
      });
      ["caller", "caller2"].forEach(function (c, i) {
        var j = crewHero.querySelector("." + c);
        setInterval(function () {
          j.classList.add("call");
          setTimeout(function () { j.classList.remove("call"); }, 1400);
        }, 7000 + i * 3500);
      });
    }
  }

  // scroll cue on full screen heroes
  document.querySelectorAll(".court-hero, .box-hero").forEach(function (el) {
    var next = el.nextElementSibling && el.nextElementSibling.nextElementSibling;
    if (next && !next.id) next.id = "details";
    var target = next ? next.id : "details";
    el.insertAdjacentHTML("beforeend", '<a class="scroll-cue" href="#' + target + '" aria-label="Scroll to details">' + BALL + "<span>scroll</span></a>");
  });

  // royal box crowd, stands + claps
  var box = document.getElementById("royal-box");
  var ovation = function () {};
  if (box) {
    var SKIN = ["#F1D3B5", "#E0B48C", "#C68C5E", "#A0683F", "#7A4A2A", "#5A3520"];
    var COATS = ["#1F4D2B", "#4B2A63", "#16243A", "#F3ECDD", "#2B2B2B", "#6B1F2E", "#1F4D2B", "#4B2A63"];
    var HATS = ["#E9DFC7", "#F3ECDD", "#1F4D2B", "#4B2A63"];
    var seed = 7;
    function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
    function pick(a) { return a[Math.floor(rnd() * a.length)]; }
    var W = 1100, svg = '<svg viewBox="0 0 ' + W + ' 400" role="img"><title>The Royal Box</title>';
    svg += '<rect x="0" y="40" width="' + W + '" height="360" style="fill:var(--box-inside)"/>';
    // awning
    svg += '<rect x="0" y="0" width="' + W + '" height="56" style="fill:var(--awning)"/><rect x="0" y="0" width="' + W + '" height="3" fill="#C9A24A"/>';
    for (var s = 0; s < W; s += 50) svg += '<rect x="' + s + '" y="0" width="25" height="56" fill="#F6F1E7" opacity=".92"/>';
    var scallop = "M0 56";
    for (var x = 0; x < W; x += 50) scallop += " q25 26 50 0";
    svg += '<path d="' + scallop + ' V56 Z" style="fill:var(--awning)"/><path d="' + scallop + '" fill="none" stroke="#C9A24A" stroke-width="2"/>';
    // 3 rows back to front
    var rows = [{ y: 120, n: 13, s: .9 }, { y: 215, n: 12, s: .95 }, { y: 310, n: 11, s: 1 }];
    var k = 0;
    rows.forEach(function (row, ri) {
      var gap = W / row.n;
      for (var i = 0; i < row.n; i++) {
        var cx = gap * i + gap / 2 + (ri % 2 ? gap / 4 : 0) - (ri % 2 ? gap / 8 : 0);
        var coat = pick(COATS), skin = pick(SKIN), sc = row.s;
        var d = (k * 37 % 900) + "ms", cd = (rnd() * -.2).toFixed(2) + "s";
        var g = '<g class="fan" style="--d:' + d + ';--cd:' + cd + '"><g transform="translate(' + cx.toFixed(1) + ' ' + row.y + ') scale(' + sc + ')">';
        g += '<path d="M-30 55 Q-30 18 0 16 Q30 18 30 55 Z" fill="' + coat + '"/>';
        g += '<path d="M-7 17 L0 34 L7 17 Z" fill="' + (coat === "#F3ECDD" ? "#1F4D2B" : "#F6F1E7") + '"/>';
        g += '<circle cx="0" cy="0" r="14" fill="' + skin + '"/>';
        var h = rnd();
        if (h < .3) g += '<g class="hat"><ellipse cx="0" cy="-9" rx="22" ry="4.5" fill="' + pick(HATS) + '"/><path d="M-11 -9 Q-11 -24 0 -24 Q11 -24 11 -9 Z" fill="' + pick(HATS) + '"/><rect x="-11" y="-13" width="22" height="3" fill="#4B2A63"/></g>';
        else if (h < .55) g += '<path d="M-14 -2 Q-15 -17 0 -17 Q15 -17 14 -2 Q8 -11 0 -11 Q-8 -11 -14 -2 Z" fill="#2A1A12"/>';
        else if (h < .7) g += '<path d="M-15 4 Q-17 -18 0 -17 Q17 -18 15 4 L15 22 Q8 14 8 0 Q0 -8 -8 0 Q-8 14 -15 22 Z" fill="#3A2416"/>';
        g += '<circle class="hand l" cx="-6" cy="24" r="5" fill="' + skin + '"/><circle class="hand r" cx="6" cy="24" r="5" fill="' + skin + '"/>';
        g += "</g></g>";
        svg += g; k++;
      }
      var ledge = row.y + 30;
      svg += '<rect x="0" y="' + ledge + '" width="' + W + '" height="' + (ri === 2 ? 60 : 55) + '" fill="#3B2316"/>';
      svg += '<rect x="0" y="' + ledge + '" width="' + W + '" height="3" fill="#C9A24A"/>';
    });
    svg += '<text x="' + W / 2 + '" y="378" text-anchor="middle" fill="#C9A24A" font-family="Bodoni Moda, Didot, serif" font-size="17" letter-spacing="6">THE BAY LAWN CLUB</text>';
    svg += "</svg>";
    box.innerHTML = svg;

    var timers = [];
    ovation = function (long) {
      timers.forEach(clearTimeout); timers = [];
      box.classList.add("standing");
      timers.push(setTimeout(function () { box.classList.add("clapping"); }, 900));
      timers.push(setTimeout(function () { box.classList.remove("clapping"); }, long ? 6000 : 3600));
      timers.push(setTimeout(function () { box.classList.remove("standing"); }, long ? 7000 : 4600));
    };
    setTimeout(function () { ovation(false); }, 500);
    // clap again when you scroll back up
    if ("IntersectionObserver" in window) {
      var left = false;
      new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting) left = true;
        else if (left) { left = false; ovation(false); }
      }, { threshold: 0.4 }).observe(box);
    }
  }

  var menu = document.getElementById("menu-toggle"), nav = document.getElementById("nav");
  if (menu && nav) menu.addEventListener("click", function () {
    menu.setAttribute("aria-expanded", nav.classList.toggle("open"));
  });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  // waitlist -> google sheet via apps script (apps-script/Code.gs)
  // no-cors so the response is opaque, just treat it as success
  var form = document.getElementById("waitlist-form");
  if (form) form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var status = document.getElementById("form-status");
    if (form.action.indexOf("YOUR_SCRIPT_ID") !== -1) {
      status.textContent = "The form isn't connected yet.";
      return;
    }
    var button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    status.textContent = "Sending…";
    fetch(form.action, { method: "POST", mode: "no-cors", body: new URLSearchParams(new FormData(form)) })
      .then(function () {
        form.reset();
        status.textContent = "got it. i'll read it myself and get back to you.";
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(function () { ovation(true); }, 600);
      })
      .catch(function () { status.textContent = "Network error. Please try again."; })
      .then(function () { button.disabled = false; });
  });
})();
