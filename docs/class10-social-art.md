# Class 10 Social Science and Art

Integrated into the existing subject hub. Social Science keeps `samajik-darshan-v1`; Art keeps `kala-darshan-v1`. Existing Class 9 chapter IDs and progress remain intact. Class 10 uses distinct `ten-` IDs and per-class last-lesson memory. Class catalogues live under `classes.10` in the existing learning catalogue.

## Curriculum basis

- UPMSP Social Science, academic session 2026–27: https://upmsp.edu.in/Downloads/Syllabus/Class10/932-Social-Science-Class-10.pdf
- UPMSP Art (Drawing), academic session 2026–27: https://upmsp.edu.in/Downloads/Syllabus/Class10/936-Art(drawing)-Class-10.pdf
- NCERT Class 10: History jess301–305; Geography jess101–107; Democratic Politics II jess401–405; Understanding Economic Development jess201–205. Each lesson links its relevant official source.

Social Science includes the prescribed 5 History, 7 Geography, 5 Civics and 5 Economics chapters. It uses original bilingual explanatory notes and practice questions rather than reproducing textbook passages. Historical/source exercises explicitly identify original teaching extracts. Economics charts label illustrative data. Map locations are approximate study markers, not boundaries or authoritative thematic surveys.

Art uses 12 teaching units covering materials and Indian art, natural scenery, circular and quadrilateral design, technical drawing and memory drawing. These unit numbers are a teaching arrangement, not asserted NCERT textbook chapter numbers. The official Art paper includes objective questions; the site's practice deliberately retains the user's observation/description format. Art reference drawings are original stylised teaching illustrations. Screen geometry is not a physical centimetre scale.

## Code and build

- `social10-source/` and `art10-source/`: original lesson assets.
- `scripts/build-learn10.mjs`: validates expected source presence and writes lesson JSON/catalogue.
- `dist/learn/app.js`: shared grade selection, class-specific sidebar, variable quiz counts and isolated revision mistakes.
- `dist/learn/engines/art10.js`: 12 progressive drawing plates and exact circle tangent-point geometry.
- `dist/learn/engines/art.js`: guided progression, technical-stage seeking restrictions and local PNG download.

Run `npm run build` and `npm test`. The final build updates the offline service-worker asset list. No runtime packages or CDN assets were added.

## Verification limits

Real-device Android testing, Edge/Firefox testing, hardware performance measurements, installed-PWA offline behavior and physical print output require their respective environments; do not infer these from automated data tests.

## Browser checks on 25 October 2026

Chrome preview: Art and Geography at 360, 768 and 1366 CSS-pixel iframe widths had no document horizontal overflow. Economics chart type and dataset changes both completed their missions; the practice form rendered 10 questions / 40 options. Prior checks exercised chapter/class switching, quiz scoring/retry and Art construction steps/reference thumbnails. Art tangent PNG download was verified as a valid 1200 × 800 image. Preview console inspection found no application errors (browser-extension metadata errors are unrelated). These checks do not establish performance on physical devices or other browsers.
