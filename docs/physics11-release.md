# Class 11 Physics

Added to the original Vigyan Darshan Science reader, not a separate website. Open `science.html#class-11/physics11-01`, or choose Class 11 within Science. Existing Science, Maths, Social Science, English and Art routes remain available.

## Curriculum and content

- Official UPMSP Physics syllabus, academic session 2026–27: https://upmsp.edu.in/Downloads/Syllabus/Class11/151-Physics-Class-11.pdf
- NCERT Physics Part I: https://ncert.nic.in/textbook.php?keph1=0-7
- NCERT Physics Part II: https://ncert.nic.in/textbook.php?keph2=0-7

The current 14-chapter sequence starts with Units and Measurements and ends with Waves. Part I covers chapters 1–7; Part II covers chapters 8–14. Notes and exercises are original explanations, not copied textbook text. Each chapter has 8 bilingual sections, at least 1200 note words in each language, 5 worked examples, 10 MCQs with every-option reasons, 6 written questions and 3 visual scenes. Formula cards, assumptions, common mistakes, concept maps, in-text-style checks and revision summaries accompany the notes. The user's removed lesson-plan/homework/key-term sections remain absent.

The prescribed textbook and school practicals remain necessary; this is not a substitute laboratory or a verbatim NCERT exercise answer key. UPMSP's Physics assessment includes practical work beyond these screen simulations.

## Implementation

- `physics11-source/`: editable bilingual chapter content and the 42-scene specification.
- `scripts/build-physics11.mjs`: merges authored content, scene controls, graph axes and balanced quiz option positions; emits `dist/data/class-11.json` and the content audit.
- `dist/js/physics11-math.js`: SI calculations and NCERT half-even rounding.
- `dist/js/scenes/eleven-physics.js`: dependency-free Canvas diagrams using the existing shaded-sphere/line/graph engine. A numeric scene mode chooses each model. Only the current scene runs.
- Existing language, theme, font-size, power, playback-speed, print, accessibility and offline features are retained. Class 11 progress uses the existing `vigyan-darshan-v3` store with class-prefixed chapter IDs, separate from Class 9/10 progress.

Models explicitly state idealisations: no air drag in projectile motion, frictionless banking, isolated one-dimensional elastic collisions, constant elastic moduli, ideal steady fluids, insulated calorimetry, ideal gases, reversible isothermal processes, the Carnot upper bound, small-angle pendulums and ideal strings. Screen sizes/deformations and repeated animation cycles are schematic. Numerical readouts use the stated SI assumptions. Parameter graphs plot the labelled input/output relationship, not necessarily time. Pause stops the shared animation clock and graph; slider changes deliberately reset the clock for a fresh observation.

## Validation

Scientific checks include momentum/kinetic-energy conservation in elastic collisions, complementary projectile ranges, friction thresholds, disk/ring inertia ratios, inverse-square gravity, escape/circular-speed ratios, wire-area scaling, continuity, Bernoulli pressure sums, calorimetry balance, the first law, ideal-gas relations, SHM energy conservation, string harmonics and beat frequencies. Renderer checks sweep parameter extremes and multiple times in both power modes. Content checks validate bilingual fields, minimum length, distinct paragraphs, answer indices, reachable missions, English digits and offline assets.

Real Android hardware, Edge/Firefox, installed-PWA offline execution, physical print output and memory profiling require their respective environments; numerical tests or Chrome preview do not establish those results.
