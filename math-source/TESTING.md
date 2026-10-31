# Verification

## Automated checks

`npm test`: 23 passing tests. Checks include real roots of cubic/lower-degree polynomials including repeated roots, Heron versus coordinate area, convex/concave angle sums, line-intersection classes, weighted statistics and every solid formula. Data checks cover all 15 chapter engine assignments, 150 unique chapter-level MCQs with 4 bilingual option explanations each, scene missions and local-only assets. A digit scan rejects Devanagari digits in the chapter JSON.

## Browser QA completed

Managed Chrome preview:

- Opened all 24 scenes in all 15 chapters; every scene produced SVG content and a live readout.
- Changed polynomial coefficient and observed new real zeroes; Quick Check appeared only after interaction.
- Moved a coordinate point twice by keyboard; coordinates changed and keyboard focus survived the redraw.
- Advanced a proof through all 6 steps; both mission ticks completed.
- Edited a frequency to 10; mean/median/mode and both mission ticks updated.
- Completed a 100-toss coin experiment and observed 100 completed / 0 remaining; the Play button returned to paused.
- Started a 1000-toss experiment, left the Visual tab, and verified the count stayed fixed on returning.
- Verified circle initial central angle 120°, inscribed angle 60°, and half-chord length 2.598.
- Changed cuboid length by 0.25 cm; TSA and volume substitutions updated to 98.5 cm² and 65 cm³.
- Verified solid face shading after fixing inward normals and selected an above-solid default view.
- Submitted 10 quiz choices: score out of 10 and 40 option explanations displayed. Retry cleared every selection.
- English and Hindi chapter searches each returned the matching chapter.
- Switched English-only mode and back; language attributes updated.
- At 360px and 768px iframe viewport widths, root scroll width equalled its client width; inspected the corresponding mobile/drawer and tablet layout. Desktop preview also had no root horizontal overflow.
- Scanned rendered page text: no Devanagari digits.
- No app-origin console errors in the final preview. Browser-extension metadata errors were excluded.

The screenshot in `docs/preview.jpg` shows the final solid viewer.

## Limits

No physical Android, Edge or Firefox run, prolonged memory-growth benchmark, 60 fps benchmark, assistive-technology session, printer/PDF render or installed-offline end-to-end test was performed. Secure-origin service-worker behavior must be checked on the published site. Responsive iframe inspection is not a physical-phone test. No claims of passing those checks are made.
