# Class 11 Biology and Mathematics

Integrated into the existing Vigyan Darshan site, not separate projects.

Biology: 19 chapters, 57 interactive schematic scenes, 152 note sections, 95 worked examples, 190 MCQs with 760 option explanations, 114 written questions. Biology uses the existing science reader with Physics / Chemistry / Biology book navigation and separate progress identities under the unchanged `vigyan-darshan-v3` key.

Mathematics: 14 chapters, 42 interactive SVG labs, 112 note sections, 70 worked examples, 140 MCQs with 560 option explanations, 84 written questions. Existing Ganit reader, class navigation, language/theme preferences and progress keys retained. All Hindi chapter notes contain at least 1200 words; English explanations accompany them. Notes include section questions and revision summaries, without lesson plans/homework or key-term boxes.

Sources: NCERT Biology kebo1 (19 chapters), Mathematics kemh1 (14 chapters); UPMSP 2026–27 Class 11 Biology 153 and Maths 131 official syllabus PDFs. Independent original explanations, not copied textbook passages. Optional/rationalised material (e.g. general trigonometric solutions, graphical half-planes, section formulas, AP revision and selected angiosperm material) is explicitly marked enrichment/prior learning. School textbook and practical work remain relevant.

Each new scene has free controls, two missions, live text, Why and a quick check after interaction. Biology uses categorical stage/concept controls and original schematic illustrations; it does not claim anatomical realism or measured kinetics. Mathematics uses exact calculations and rounded diagrams; its 3D coordinate scenes are oblique 2D projections. Notes links match topic sections. New quiz option order is deterministically rotated with reasons attached.

## Verification

- Full build and 484 automated tests pass, including all prior tests.
- Browser QA opened all 57 Biology and all 42 Maths scenes, exercised sliders and checked live results/quick-check visibility. Maths function scenes were rechecked after a browser locator scroll race; keyboard selection was reliable.
- Responsive iframe checks at 360, 768, 1366px show document scrollWidth equal to clientWidth for both readers; English digits checked in rendered DOM and JSON.
- No application console errors observed; unrelated browser-extension metadata errors excluded.
- Offline worker covers new data/renderers; no CDN or runtime dependency added.
- Real Android, Edge/Firefox, installed-PWA offline use, physical printing and long-run memory/performance were not independently tested.

Build order: existing builders → Physics → Chemistry → Biology/Maths → offline cache. Running only an earlier builder may temporarily remove the later book registry; use `npm run build` for a complete release.
