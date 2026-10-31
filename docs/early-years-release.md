# LKG and UKG release

Integrated into the existing Vigyan Darshan subject hub, with 20 lessons per class: English, Hindi, Maths, Our World and Art & Play, each containing 4 lessons.

## Content and activities

- 40 original bilingual lessons, 321 picture/letter/number cards.
- 320 explained play MCQs across the 32 non-Art lessons; 40 discussion/observation questions across 8 Art lessons. Art has no MCQs.
- English A–Z, Hindi vowels/consonants, counting through 50, comparisons, shapes, bounded addition/subtraction, everyday surroundings and guided drawing.
- Five tabs: Look & Listen, Simple Notes, Play & Practice, Draw & Trace, Revision Card.
- Touch counting, live arithmetic, local-voice reading when supported, keyboard drawing/stamps, PNG export and printable revision cards.
- Shared progress key remains `vigyan-darshan-v3`; existing student records are preserved. No external runtime libraries or CDN requests.

These are original play-based companion lessons, not a claim of an officially prescribed NCERT LKG/UKG chapter sequence. Notes are intentionally short for children and adults reading together. Speech uses available installed local voices; a read-together fallback appears when unavailable. Drawings can be exported but are not automatically retained after leaving a lesson.

## Verification

757 automated tests passed, 0 failed. Chrome preview opened all 40 lessons; checked quiz feedback/retry, first-attempt scores, counting, arithmetic bounds, language/theme settings, legacy class links and preservation of older Science progress. PNG export produced a valid 800×500 image. Responsive layouts were checked at 360, 768 and 1366px, including 50 counting dots and 19px font size. No application console errors were observed. English numerals only were verified in the data.

Real Android, Edge, Firefox, physical printing, installed-PWA offline operation and long-run performance/memory profiling remain unverified. Successful local voice playback could not be checked in the preview environment; its unavailable-voice fallback was checked.

## Authoring

Edit the five subject files in `early-source/`, then run `npm run build`. Runtime files are under `dist/early/`. The build regenerates offline cache entries. Content counts are recorded in `early-years-content-audit.json`.
