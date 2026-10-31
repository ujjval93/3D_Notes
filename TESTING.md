# Verification — 2026-10-22 update

## Passed

- `npm run build` and `npm test`: 58 tests passed, no failures.
- Requested `grep -P '[०-९]' dist/data/chapters.json`: no matches, exit 1. Automated checks also inspect every public text/code/JSON file.
- Class 9 data has 12 chapters and 44 scenes. Catalogue has LKG, UKG and Classes 1–12. All 13 placeholder classes have empty chapters and nonempty bilingual planned-subject lists.
- Every scene has exactly 2 missions (88 total). Every target is within slider bounds and attainable at its step size; live guidance covers all reachable primary-slider values.
- Expanded Chapter 1: 8 note sections and 8 in-text Q&A pairs, 10 MCQs, 5 worked examples, bilingual concept-map strings. Word counts pass the requested bounds for both languages.
- Direct comparison with the original committed JSON confirmed Chapter notes/examples/formulas/summaries/written tests unchanged in this cleanup. Existing MCQs retained in order, with new questions appended. Removed planning/homework/key-term fields are intentionally omitted from public data.
- Existing scientific checks cover electron shells, heating plateaus, signs of work, buoyancy, energy conservation and finite geometry/readouts at slider extremes.
- Directional shading test compares light-facing/dark-facing sphere normals. Speed-clock test verifies the 2× and 0.25× multipliers and pause behaviour.
- Resource test switches renderers 100 times while retaining one animation callback, then verifies listener/observer cleanup. Trace and shading caches are bounded in source.
- Service-worker test verifies all cached assets exist and navigation falls back to the cached book offline. Cache now contains 71 assets; the duplicate legacy export is intentionally excluded.
- Chrome UI exercised all 44 scenes with a free slider change. Each had 2 missions, nonempty live guidance and a revealed Quick Check. All 13 scenes across Chapters 7–10 showed their mini-graph.
- Browser checks covered mission ticks, Why explanation, 3-state Compare, settings/size/theme/speed persistence, class selection persistence and English/Hindi chapter search.
- Chapter 1 quiz displayed 10 questions, score, 37 per-option explanations and a notebook badge; notebook was in its own tab. Retry cleared selections. Quiz ring reflected its saved quiz proportion, and marking complete made it full/gold.
- Graph data remained frozen while paused, including after opening/closing Why and settings; changing a slider while paused reset it to the selected initial state without advancing time.
- Fully loaded responsive fixtures at 360, 768 and 1366 CSS-pixel frame widths, using the largest 19px font and dark theme: no document horizontal overflow or visible text clipping. On the narrow frame, class bar scrolled, settings opened, and the drawer/search worked with keyboard.
- No application-origin console errors appeared in browser scene checks. The automation browser extension emitted unrelated metadata errors.

## Verification limits

- Edge, Firefox, physical Android touch/pinch and end-to-end browser PWA installation/airplane-mode reload were not available here. The managed preview is HTTP; the deployed site is HTTPS.
- No mid-range hardware frame-rate guarantee or browser heap-profile claim is made. Lifecycle/array/cache bounds were verified, not a garbage-collection benchmark.
- Full screen-reader and printed-paper audits were not performed. Existing semantic controls, text descriptions, focus rings, reduced motion and print styles are retained.

## Retesting responsive layout

Temporarily copy `tests/responsive.html` next to `dist/index.html` and serve the site. Wait for each iframe's chapter content to load. Remove the temporary fixture from production. After public-file edits, regenerate the offline cache.

## Latest cleanup

- Exactly 10 MCQs in every chapter: 120 total, all options with bilingual reasons.
- Four chapter tabs remain; keyboard Home/End/arrow navigation uses the actual tab count.
- No lesson-plan/homework tab, study-plan button/dialog, period chip or key-term box in the UI or print renderer.
- Public chapter JSON omits retired planning/homework fields and note term lists.
- Existing quiz order and score denominators are retained; legacy Class 9 scores without a stored denominator use their original 3-question basis.

## Unified subject navigation

83 tests pass after merging both subjects, including the existing Science suite, Maths calculations/content suite, reciprocal subject links and offline navigation to the specific requested subject. Chrome preview verified hub → Science (12 chapters) → Maths (15 chapters) → Chapter 13 solid readout → Science → All subjects. Both subjects remained on the same origin, with no app-origin console errors during these checks. Other browser/device and offline-installation verification limits noted above still apply.

## Five-subject starter release

97 automated tests pass. The new course routes, timeline interactions, clickable map, complete reading dictionary, writing drafts, drawing stages and palette, quizzes/retry, one-page sheet contents, mobile drawer and responsive Art tabs were checked in Chrome preview. Reusable chart and geometric-drawing engines were tested using temporary labelled fixtures that were removed before packaging. Full detail and remaining verification limits are in `docs/expansion.md`.

## Complete Social Science and Drawing release

- `npm run build` succeeds; `npm test`: **129 passed, 0 failed**.
- Content audit validates all 20 Social Science chapters and 9 Drawing topics, 160 MCQs with all 640 option reasons, 100 Social short answers, 87 total worked/annotated examples, 10 History source tasks, 12 Geography map tasks, 45 Drawing observation questions and 18 Drawing technique questions.
- All 29 chapter visual routes opened in Chrome preview with 2 missions each and no app-origin JavaScript console errors. History decade ranges are chapter-specific.
- Civics card and connection missions pass; quiz returns a score and all 32 option explanations. Economics bar/pie/line, series filtering, selectable datasets and the weighted fictional poverty threshold respond live.
- All 9 Drawing canvases opened. Poster final stage and observation missions pass. Geometric construction locks Next/PNG initially, completes 8 steps, passes its observation check and produces a valid PNG data link with the lesson-specific filename; the 8-thumbnail sheet renders.
- At 360/768/1366 CSS-pixel frame widths, actual content widths were 345/753/1351 due to scrollbars, with matching scrollWidth (no page overflow). All 5 tabs were checked on the 360 Drawing and Population routes; the mobile drawer opened/closed. Seasonal map selection shows 2 southwest-monsoon arrow paths.
- Literal required `grep -P '[०-९]' dist/data/chapters.json` and the new lesson JSON scan returned no matches.
- Temporary responsive QA page removed before packaging; root offline cache regenerated.
- Physical Android, Edge/Firefox, installed-PWA offline testing, actual printer output and long-run frame/memory benchmarks remain unverified.

## Art topic discovery and update fix

Art opens with a bilingual overview listing all 9 topics across 3 sections. All 3 sidebar sections are expanded. Selecting Jug from the overview opens its drawing and collapses the grid; All 9 Art Topics restores the grid. Browser checks confirmed 9 topic buttons, 3 open sections and correct route selection. 130 automated tests pass. The additional offline test verifies that a versioned catalogue request refreshes from the network and falls back to that same canonical cache entry offline. Precache requests bypass the HTTP cache; no student progress is cleared.

## Geometric Drawing behavior repair

The earlier geometric engine's Play control was a no-op, its canvas began blank, colour choices had no visible effect before the last step, and there was no Previous control. The repaired 8-step workshop uses real equal-radius circular arcs for petals, animated compass/ruler guides, locked numbered step controls, working autoplay/pause, Previous, keyboard controls, two live colours with a final preview, zoom, and progress-preserving Reset view / Low Power changes. Restart begins a new construction.

Both Geometric Patterns and Rangoli were run to 8/8 in Chrome preview. Browser checks covered initial locks, manual Draw then Next, Play/Pause, previous-step review, preserved progress, low-power operation, colour changes invalidating stale exports, Restart restoring 0/8 and 7 locked steps, both missions, and 8 reference thumbnails. Actual browser downloads succeeded for both PNG links after moving from data URLs to revocable Blob URLs; Pillow verified both PNGs at 1200 × 800. The final export is rendered independently of the reviewed step and excludes tool/label overlays. Export fixtures are `docs/geometric-pattern-export.png` and `docs/rangoli-export.png`.

At 360/768 CSS-pixel frame widths the workshop scrollWidth matched its content viewport (345/753 with scrollbars). Temporary QA page removed. `npm run build` and all **133 tests** pass, including locked-step progression, frame-interval consistency, and equal-radius geometry invariants used by the renderer. The required numeral scan had no matches. Physical devices, Firefox/Edge, print hardware and reduced-motion browser emulation remain unverified.

## Class 10 Science release

- `npm run build` succeeds. All **180 tests** pass, including all Class 9, Maths, Social/English/Art and geometric-workshop regressions.
- 13 Class 10 chapters: 104 bilingual note sections (at least 1200 words in each language per chapter), 65 worked examples, 130 MCQs / 520 option reasons, 78 written questions, 41 scenes and 82 reachable missions. Per-chapter counts are in `docs/class10-content-audit.json`.
- All 41 scene renderers opened in Chrome preview, with two missions, a live slider, nonempty numeric/bilingual readout and a Quick Check after movement. Every slider range and selector combination was also rendered numerically (2852 combinations), including optical focal settings, without non-finite geometry.
- Browser QA exposed two transition issues: first draw previously omitted scene parameters, and a frame timestamp could precede a just-rescheduled clock sample. Scene parameters now apply before the first draw; animation dt cannot be negative; path markers wrap safely. A loading scene hides the old canvas/readout and defers slider rendering until its own renderer is ready. The final 41-scene rerun had zero app-origin console errors.
- Quiz submission produced score 0/10, all 40 option explanations and the selected wrong answer in the notebook; retry cleared every selection. Eight note sections and five examples rendered. English mode displayed English text; the DOM numeral scan found no Devanagari digits.
- Class 10 completion was saved separately (1/13) while Class 9 remained 0/12, and persisted after reload. Class 10 home exposes all 13 chapter cards. Tested the shared storage key without migrating/deleting prior data.
- The Ohm graph retained the same simulation time while paused and resetting view. Its axes describe current (A) and voltage (V) in both languages.
- Responsive iframe widths 360/768/1366 yielded 345/753/1351 CSS pixels after scrollbars; scrollWidth matched each. All four Class 10 tabs passed at phone width. Keyboard drawer access and Hindi/English chapter search worked. Temporary QA page removed before packaging.
- New data, shared numerical utilities and every lazy renderer are included in the offline cache. Worker network/canonical-cache fallback tests pass. Physical Android, Firefox/Edge, installed-PWA offline use, actual printing and sustained hardware FPS/memory benchmarks remain unverified.

## Class 10 Mathematics release

- `npm run build` and all **203 tests** pass, including every existing subject regression.
- All 14 current Class 10 chapters have 8 detailed bilingual sections (at least 1200 body words per language), 5 examples, 10 MCQs with 40 option reasons, 6 written questions, 5 revision points and 3 scenes. Totals: 42 scenes, 84 missions, 70 examples, 140 MCQs, 560 option reasons and 84 written questions. Counts: `docs/math10-content-audit.json`.
- Chrome preview opened all 42 scenes and moved every slider to both ends. Each scene had 2 missions, a nonempty readout, finite SVG geometry and a Quick Check after movement. The final scene run had zero app-origin console errors. Keyboard navigation across chapters/scenes and direct pointer chapter navigation worked.
- Verified vertex keyboard movement, 100 coin trials completing both missions, solid rotation across animation frames, Pause and 2× speed, editable grouped frequencies and tied modal-class handling.
- Quiz returned 0/10, all 40 option reasons and a saved wrong question; Retry cleared all selections. Notes/examples/written counts were 8/5/6. English-only mode and absence of Devanagari digits were checked.
- Class 10 completion (1/14) remained separate from Class 9 (0/15) and persisted on reload. The overview lists all 14 chapters. The existing storage key and legacy Class 9 keys remain unchanged.
- Responsive 360/768/1366 frames had 345/753/1351 CSS-pixel content widths after scrollbars, with matching scrollWidth. All 5 tabs passed at phone width; the mobile menu and Hindi/English search worked. Temporary QA fixture removed before packaging.
- Pure-math tests cover prime factorisation, HCF/LCM, polynomial roots and degeneracies, APs, section formula, trigonometric identities and undefined endpoints, tangents, sectors/segments, composite exposed surfaces and cavities, grouped statistics and 36 ordered dice outcomes. Class catalogues and offline assets are checked.
- Physical Android, Edge/Firefox, installed-PWA offline use, actual printing and sustained hardware FPS/memory benchmarks remain unverified. Worker fallback tests pass; no new external runtime dependencies or CDN assets.

## Class 10 Social Science and Art

- Added content/engine/offline tests in `tests/learn10.test.mjs` for 22 Social Science chapters and 12 Art units. Tests enforce bilingual note lengths, distinct paragraphs, English digits, question counts, valid timelines/map coordinates/diagram links/chart rows, and tangent geometry.
- Chrome preview: Art and Geography fit 360/768/1366 widths without document overflow. Economics chart type/dataset missions complete; practice renders 40 options, scores answers, explains options and clears selections on retry.
- Art Class 10 completion saved as 1/12 while Class 9 stayed 0/9; returned to the previous Class 10 lesson and persisted on reload. Test completion cleared afterward.
- Art drawing Next/Previous, terminal step disabling, reference thumbnails and PNG export checked. Download verified as a valid 1200 × 800 PNG.
- No application console errors in tested routes. Real Android hardware, Edge/Firefox, physical printing, installed-PWA offline execution and frame-rate/memory profiling remain unverified.
- Final full build and test run: 240 tests passed, 0 failed. Required Devanagari-digit scans returned no matches; temporary QA page removed. Final counts are in `docs/class10-social-art-audit.json`.

## Class 11 Physics release

- Full course: 14 chapters, 42 scenes, 112 bilingual note sections (≥1200 words in each language per chapter),70 worked examples, 140 MCQs / 560 option reasons, 84 written questions and 84 reachable missions. Counts: `docs/physics11-content-audit.json`.
- Final automated suite:302 tests passed, 0 failed. Includes renderer extrema, NCERT half-even rounding, projectile symmetry, exact-zero right-angle work, collision conservation, friction, rotation, gravity, elasticity, flow, heat, gas and SHM/wave relationships.
- Chrome preview: all 42 scene IDs loaded, each with finite live readouts; no application console errors. Browser-extension metadata errors were unrelated. One running scene reported 59.6 fps; this is not a physical-device benchmark.
- At 360/768/1366 iframe widths, document scrollWidth matched clientWidth 345/753/1351 after scrollbars. Pause held the canvas and graph clock; slider changes reset it as intended. Work at 180° showed −20 J. Practice showed 10 questions / 40 option reasons; retry cleared all choices.
- Class 11 completion 1/14 persisted after reload while Class 9 remained 0/12; Class 11 home listed 14 chapters and continued Waves. Test completion cleared afterward.
- Real Android, Edge/Firefox, installed-PWA offline behavior, physical print and memory profiling remain unverified. Temporary QA page removed before final build.

## Class 11 Chemistry release

- 9 chapters, 27 scenes, 72 bilingual note sections (≥1200 words per language/chapter), 45 worked examples, 90 MCQs / 360 option reasons, 54 written questions and 54 missions. Counts: `docs/chemistry11-content-audit.json`.
- Final suite:347 tests pass, 0 fail. Checks cover content, reachable controls, finite geometry, stoichiometric atom conservation, dilution, hydrogen energy, matter waves, orbital capacity, periodic exceptions, dipoles, chemistry first-law signs, Hess/Gibbs relations, weak-acid/common-ion roots, redox, Rf and hydrocarbon formulas/conformations.
- Two visual science regressions fixed and tested: higher Hydrogen energy levels appear above ground; equilibrium particle sample ratio matches displayed concentrations.
- Chrome preview opened all 27 scene IDs with live readouts and no application console errors. Browser-extension metadata errors were unrelated. Practice rendered 40 options / 40 reasons, scored correctly and cleared choices on retry; Mistake Notebook saved and cleared the test error.
- Physics/Chemistry selector opens 14/9 chapter overviews. Chemistry completion persisted on reload while Physics progress remained separate; test completion was cleared. Active-book mistake filtering and per-book last-chapter memory retain the existing storage key.
- At 360/768/1366 iframe widths, document scrollWidth equalled clientWidth 345/753/1351 after scrollbars. Temporary QA page removed before packaging.
- Real Android, Edge/Firefox, installed-PWA offline execution, physical printing and memory/performance profiling remain unverified.

Class 11 Biology/Maths release: `tests/biology-math11.test.mjs` verifies all 33 chapter packages, 57 biological scene stages, 42 mathematical model ranges, counting identities, exceptional limits, variance transformations, probability normalisation and offline entries. Chrome UI checks covered all scenes and responsive widths360/768/1366. See `docs/biology-math11-release.md` for untested platforms.

Class12 release: `tests/science12.test.mjs` adds104tests for24chapter packages,72scene ranges,SI conversions,Coulomb/Faraday/optical identities,Nernst/electrolysis/kinetics and molecular counts. ChromeUI checks covered all72scenes,quiz feedback/retry/notebook,subject/class preference isolation and360/768/1366layouts. Final full suite:588passed. Realdevice/platform/performance limits are listed in `docs/science12-release.md`.

Class 12 Mathematics: `tests/maths12.test.mjs` covers all 13 chapter content contracts, 39 scene calculations and finite SVG geometry at full control ranges, singular matrix and branch cases, calculus/DE identities, vector/spatial properties, LP ties and probability normalisation. Full suite: 650 passing tests. Chrome interaction and responsive checks are recorded in `docs/math12-release.md`; other browser/device limits are stated there.

Class 12 Biology: `tests/biology12.test.mjs` adds 13 chapter contracts, 39 renderer checks at categorical stages/quantitative extrema, and independent genetics/PCR/population/ecology identities. Full suite: 710 passing tests. Browser interaction, subject progress and responsive verification limits are documented in `docs/biology12-release.md`.

LKG/UKG: final full suite 757 passed, 0 failed. All 40 lessons opened in Chrome; touch counting, arithmetic, quiz retry, PNG export, legacy redirects, shared progress preservation and responsive widths 360/768/1366 checked. Platform and voice verification limits: `docs/early-years-release.md`.
