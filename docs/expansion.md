> Historical starter-release record. Social Science and Drawing have since been completed; see [the current release](completed-social-art.md). English remains at its first lesson.

# Social Science, English and Art starter release

These sections are part of the existing Vigyan Darshan website, alongside Science and Maths. No separate Site was created for this release.

## Released content only

| Section | Released lesson | English note words | Hindi note words | Practice |
| --- | --- | ---: | ---: | --- |
| Samajik Darshan / History | 1. The French Revolution | 1324 | 1391 | 8 MCQs, 5 short answers, 2 original teaching-source questions |
| Samajik Darshan / Geography | 1. India – Size and Location | 1271 | 1273 | 8 MCQs, 5 short answers, 2 map questions |
| Angrezi Darshan / Beehive | 1. The Fun They Had | 876 | 955 | 8 MCQs, 3 short answers, 2 extract questions, 4 adverb items, guided writing |
| Kala Darshan / Still Life | 1. Clay Pot | 644 | 690 | 5 observation questions, 2 technique questions, 5-line description; no MCQs |

Counts refer to note section bodies. English additionally has a 30-entry difficult-word list, an exhaustive 118-token reader lexicon and a labelled original study extract. Every MCQ option has a reason. Each content lesson has 3 examples; Art examples are rendered at Beginner, Intermediate and Good levels with annotations.

Only these 4 lessons are released. Later Social Science, Beehive, poetry, Moments and Art lessons are listed as Coming soon and await the user's approval. Other classes are placeholders. Chapter catalogues retain the requested legacy NCERT book sequence, rather than pretending that the scene examples in the brief match the official chapter numbers. Clay Pot is the user's selected opening topic, not a claim that UP Board names it Chapter 1.

## Runtime and authoring

- `dist/social/index.html`, `dist/english/index.html`, `dist/art/index.html` use a shared bilingual shell in `dist/learn/app.js` and `dist/learn/style.css`.
- `dist/learn/engines/map.js`: SVG India and World bases, zoom/pan, keyboard controls, selectable features and river/range highlighting.
- `timeline.js`: event cause/effect/people cards, drag scrolling, true decade filtering, sequential play.
- `chart.js`: JSON-driven bar/pie/line rendering, series checkboxes and an optional weighted below-threshold count. Built and tested using explicitly illustrative QA data; no Economics chapter is released yet.
- `text.js`: timed/manual sentence highlighting, any-word English/Hindi meanings, draggable/keyboard character boxes, relationship arrows, plot jumps, future poetry line/device support and Moments theme choices.
- `writing.js`: persistent drafts, live word count, structure guide and a user-triggered model answer.
- `art.js`: 10 Canvas pot stages, play/pause/speed, tonal palette with highlighted usage regions and thumbnail rendering.
- `geodraw.js`: locked sequential compass pattern, colour fill and PNG generation. Built and tested separately; Geometric Drawing lessons remain unreleased.
- `expansion-source/*.json` are original content assets. `scripts/build-expansion.mjs` builds the release catalogue, missions and local runtime JSON.
- `npm run build` regenerates all subjects and the shared offline worker. `node scripts/build-offline.mjs` refreshes its assets after any direct runtime edit.

The existing Science and Maths storage keys remain unchanged. New keys are `samajik-darshan-v1`, `angrezi-darshan-v1`, and `kala-darshan-v1`. Each saves its own progress, best quiz scores, mistakes, last lesson, selected class, language/theme/font/power/speed preferences and drafts. New course pages register the existing root service worker. Assets and fonts are local; external sources are ordinary user-clicked links.

## Reading and map provenance

The English reader contains a short original analytical companion passage, not a copy or close paraphrase of the full copyrighted story. The official NCERT/CIET Beehive page is linked for the original reading. Original extracts are labelled as teaching text rather than invented historical or literary quotations. English model answers, instructions and notes show English before Hindi in bilingual mode.

The India outline is from Survey of India, downloaded from `https://surveyofindia.gov.in/documents/Outline_of_India.zip`. It retains Survey of India copyright. The official notice (`https://www.surveyofindia.gov.in/documents/ibd-vectorformat.pdf`) allows the stated educational/web uses and excludes commercial use. Attribution and a notice link appear on the map and its printable sheet. The outline is projected to longitude/latitude and simplified for display; river/range overlays are explicitly approximate study aids. State markers do not pretend to be state boundaries. World land/coastlines are Natural Earth public-domain data. Complete provenance is embedded in `map-base.json`.

## Verification

`npm test`: 97 passing tests. Tests include the existing Science/Maths suite, four-lesson-only release gates, word targets, all 96 new MCQ option explanations, complete reader dictionary coverage, map projection/provenance, chronology/decade boundaries, weighted chart counts, pattern geometry and storage/routes.

Chrome preview checks completed:

- All 5 hub subjects and reciprocal same-origin subject links.
- History 12 events; selecting 3 events and decade mode completes both missions. Decade 1780–1789 shows precisely the 4 dated 1789 cards. Cause/effect/people cards update.
- Geography map loads; Ganga and Himalaya selection updates live text and completes both missions. The print sheet contains the official outline.
- Geography quiz: 8 questions, score out of 8, 32 option explanations; retry clears selections.
- English 10 sentences, gold vocabulary, lookup of 3 different words, 3-sentence mission, keyboard character movement and both missions. Writing word count for a 6-word draft is 6; model answer appears on request and includes English in bilingual mode. Draft persisted across page loads in the same preview session.
- Art core-shadow stage and correct highlight choice complete both missions. No Art MCQs; 7 observation/technique questions plus the description exercise. Reference sheet renders 10 thumbnail stages. Palette selection identifies and highlights the darker right side.
- Chart fixture: bar/pie/line modes, optional threshold count changes correctly. Geometric fixture: Next and Download initially disabled, each prior step unlocks the next, final PNG link has a valid `data:image/png;base64,iVBORw0K` prefix and a filename. Browser download-event capture was not reliable, so a visible native download link is also retained.
- 360px Social Science and Art, and 768px English iframe layouts. An Art select overflow was found and fixed. Art Visual/Notes/Examples/Practice/Sheet tabs now all have root scroll width equal to client width at 360px. Mobile chapter drawer opens/closes. Selecting Class 8 shows Coming soon without a hanging loading message.
- No app-origin JavaScript errors during the verified production-route checks. Browser-extension metadata errors and temporary QA-page lifecycle requests are not app errors. Temporary QA pages were removed before packaging.

Print styles and one-page layouts are implemented, but physical printing/PDF output has not been verified. Installed-offline end-to-end behavior, physical Android, Edge/Firefox, screen-reader sessions, 60 fps and long-run memory benchmarks remain unverified. Only the four starter lessons are offered for content approval; none of the later lessons is claimed complete.
