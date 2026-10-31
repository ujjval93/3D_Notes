# Complete Social Science and Drawing release

The original Vigyan Darshan site now contains all 20 chapters in the requested legacy NCERT Class 9 Social Science sequence and all 9 user-selected Drawing topics. Science, Maths and the existing first English lesson are retained at the same paths and with the same localStorage keys. This is an educational companion, not a replacement for the school-prescribed textbook or a claim that the 2026 book sequence is unchanged.

## Content

- History: French Revolution; Socialism in Europe and the Russian Revolution; Nazism and the Rise of Hitler; Forest Society and Colonialism; Pastoralists in the Modern World.
- Geography: India—Size and Location; Physical Features; Drainage; Climate; Natural Vegetation and Wildlife; Population.
- Civics: What Is Democracy? Why Democracy?; Constitutional Design; Electoral Politics; Working of Institutions; Democratic Rights.
- Economics: The Story of Village Palampur; People as Resource; Poverty as a Challenge; Food Security in India.
- Drawing: Clay Pot, Fruit Study, Jug Study, Drapery, Decorative Borders, Poster Design, Lettering, Geometric Patterns and Rangoli-style Design.

Every Social Science chapter has at least 1200 note words in each language, 8 sections, 8 MCQs with a reason for each of the 4 options, 5 short-answer questions and 3 worked examples. History adds 2 explicitly original teaching-source tasks and a dated cause/effect/people timeline. Geography adds 2 map questions and topic-specific map features. Drawing topics have at least 600 note words in each language, 3 annotated finished examples, 5 observation questions, 2 technique questions, a 5-line description, palette and printable construction thumbnails. Drawing has no MCQs.

## Interactions

- Timelines derive their decade list from each chapter's dates, support drag, keyboard arrows and decade focus, and state that card spacing is not proportional to time. Empty decades show a message.
- Maps use the existing official Survey of India outline and Natural Earth world land base. River/range/vegetation/season overlays are schematic. State density points are location markers, not state boundaries. Census 2011 values remain explicitly dated. Layers and selection update the live explanation.
- Civics has annotated diagram cards and directed connections; selecting cards and following links complete the missions.
- Economics has selectable illustrative datasets, series filters, bar/pie/line views, accessible text tables, axes, units and data provenance. The poverty threshold is a classroom model, not a current official poverty estimate. Pie shares use displayed values; they must not be interpreted as a population statistic.
- Each Drawing topic has a separate deterministic local Canvas illustration. Steps, live tips, colour swatches and observation checks are topic-specific. Geometric drawings use locked construction steps, colour selection and generated PNG download links.
- The same five-tab shell, preferences, completion rings, mistake notebook, local drafts and root offline service worker are retained.

## Authoring and build

Edit `expansion-source/<lesson-id>.json`. `scripts/build-expansion.mjs` discovers the additional Social/Art lesson files, builds the runtime JSON and marks their catalogue entries available. Use `npm run build`, which also regenerates the offline cache. No npm runtime packages or CDN scripts are used.

`docs/completed-content-audit.json` records the final per-chapter word counts and exercise totals. Runtime JSON in `dist/learn/data/` is included in the downloadable source ZIP.

## Provenance and limits

Each chapter carries primary-source further-reading links. Historical accounts and source exercises are original study explanations, not fabricated quotations. The detailed Survey of India educational/non-commercial usage notice and Natural Earth public-domain provenance remain in `docs/expansion.md` and `map-base.json`.

Automated checks validate coverage, word targets, bilingual fields, exercises, chronology, map coordinates, diagram references, chart values and offline cache inclusion. Browser checks cover representative interactions of each engine and responsive layouts. Physical Android, Edge/Firefox, installed-PWA offline use, actual printer output, screen-reader sessions and long-run performance benchmarks are not claimed verified. English chapters after Beehive 1 and classes other than Class 9 remain outside this release.

## Geometric workshop correction

Geometric Drawing now provides a working animated compass/ruler sequence, per-step locks and review, a live two-colour preview, and a clean final PNG export even when an earlier step is displayed. Play/Pause, Previous and Restart have distinct behavior. Reset view and Low Power preserve the completed steps. The two exported PNG fixtures in `docs/` were downloaded through the actual browser and verified at 1200 × 800. See TESTING.md for detailed verification and remaining device/print limits.
