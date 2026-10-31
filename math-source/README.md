# Ganit Darshan / गणित दर्शन

A standalone, bilingual Class 9 mathematics study site, using the requested 15-chapter NCERT sequence and Vigyan Darshan's cream/green visual design. The Science site and its saved progress are untouched.

## Run and edit

Serve `dist/` over HTTP/HTTPS. No npm runtime dependencies, CDN, Three.js or framework is used. `npm run build` combines `content-a.json` and `content-b.json`, adds scene metadata and missions, and regenerates the offline cache. Run it after editing anything in `dist/` or either content file. `npm test` checks the mathematical calculations and content contracts.

- `dist/js/app.js`: five tabs, search, quiz feedback, mistake notebook, device-local progress, preferences and lazy engine routing.
- `dist/js/math.js`: polynomial real roots, intersection classification, polygon measurements, Heron, weighted statistics and solid formulas.
- `dist/js/engines/base.js`: shared SVG drawing, pointer capture, keyboard controls and listener cleanup.
- `dist/js/engines/graph.js`: graphs, point interaction, frequency charts and animated experiments.
- `dist/js/engines/geometry.js`: draggable plane geometry and compass/ruler proof steps.
- `dist/js/engines/solid.js`: fresh orthographic 3D mesh renderer with face sorting, directional lighting, rotation and zoom.
- `dist/data/chapters.json`: all 15 chapters; each owns an `engine` field, notes, examples, quizzes, scenes, missions and revision map.
- `scripts/build.mjs`: reproducible JSON and service-worker generation.

The five tabs are Visual Lab, Detailed Notes, Solved Examples, Practice & Test, and Revision Map. Lesson Plan/Homework and key-term boxes remain excluded, following the user's most recent Science-site preference.

## Coverage

| Chapter | Interactive visual |
| --- | --- |
| 01 Number Systems | Draggable real-number point; sequential √2 and √3 construction |
| 02 Polynomials | Four coefficients; live cubic/lower-degree curve; real zeroes in gold |
| 03 Coordinate Geometry | Click/drop or keyboard/drag 2 points; distance and midpoint |
| 04 Linear Equations | One or two lines; live intersection; parallel/coincident/degenerate cases |
| 05 Euclid's Geometry | Six-step proof using given facts and a whole/parts argument |
| 06 Lines and Angles | Draggable transversal; all 8 angles; 3 pair-highlighting modes |
| 07 Triangles | Live sides, angles, area; SSS reference checker with matching control |
| 08 Quadrilaterals | Free vertices; square/rectangle/parallelogram/rhombus templates; angle sum |
| 09 Areas | Sliding parallelogram with fixed base/height; half-area triangle |
| 10 Circles | Central/inscribed angles; chord midpoint and perpendicular from centre |
| 11 Constructions | Six-step perpendicular bisector and equilateral constructions |
| 12 Heron's Formula | Draggable triangle; semiperimeter, factors and area substitutions |
| 13 Surface Areas/Volumes | Cuboid/cylinder/cone/sphere meshes; appropriate dimensions; TSA/V |
| 14 Statistics | Editable five-row table; discrete mean/median/mode; equal-width histogram |
| 15 Probability | Fair coin/die trials; relative-frequency bars and theoretical reference line |

24 scenes, 48 auto-checking missions, 60 bilingual note sections with in-text questions, 45 worked examples, 150 MCQs with 600 option explanations, and 15 revision maps. Written tests contain 6 questions of 2 marks, with hints, per chapter.

## Interaction and accessibility

Gold vertices support pointer dragging and focused arrow-key movement (Shift increases the step). Clearing the coordinate scene lets students place up to 2 points by clicking. Solids support drag rotation, arrow-key rotation, scroll and +/− zoom. Construction/proof scenes use only a Next step control. Animations start paused; reduced-motion users see the same static initial state. Leaving the Visual tab or hiding the page pauses an active experiment or solid animation. Low power mode reduces the solid mesh and draw cadence. Speed choices are 0.25×, 0.5×, 1×, 2×.

Bilingual headings are English-first; body text defaults to Hindi. English/Hindi-only modes, font size, theme, low power, speed, completion, best quiz scores, mistakes and last chapter persist under `ganit-darshan-v1`. Science uses a different key. No student information is sent to a server. Print includes notes, examples, written test hints and revision.

## Scope and model limits

This follows the user's explicitly requested 15-chapter sequence, rather than claiming to reproduce the latest revised NCERT table of contents. Coordinate distance/midpoint, two-line intersection and theoretical probability are identified as enrichment. Content is original study support, not verbatim textbook text.

The histogram model uses equal-width intervals only; arbitrary unequal-width input is not implemented. An unequal-bin worked example explains frequency density. Exact discrete statistics are marked in bar mode; grouped histogram data do not claim an exact mean/median/mode. The SSS checker uses a 0.025-unit display tolerance. Numerical geometry is illustrative and is not presented as a proof. The solid viewer is a software SVG mesh renderer, not WebGL.

The offline service worker pre-caches all local runtime assets, fonts, content and three engines after first load on a secure origin. Cache versions derive from content hashes. Actual offline installation and physical phone/browser performance require device verification; no 60 fps or memory benchmark is claimed.

See `TESTING.md` for completed checks and verification limits.
