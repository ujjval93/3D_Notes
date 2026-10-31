# Class 10 Mathematics in the existing website

Ganit Darshan now provides Class 9 and Class 10 in the existing `/math/index.html` book on the original Vigyan Darshan origin. The shared subject chooser also links directly to Class 10 Maths. The current Class 10 book uses the 14-chapter NCERT sequence and the UP Board 2026–27 syllabus; the requested Class 9 sequence is retained.

| Chapter | Interactive scenes |
| --- | --- |
| Real Numbers | Prime factors, HCF/LCM, irrationality proof steps |
| Polynomials | Zeroes, coefficients, changing degree |
| Pair of Linear Equations | Unique solution, parallel/coincident lines, elimination |
| Quadratic Equations | Discriminant, factors, rectangular area |
| Arithmetic Progressions | nth term, term pairing, savings |
| Triangles | Similarity, BPT, converse |
| Coordinate Geometry | Distance, internal division, midpoint |
| Introduction to Trigonometry | Six ratios, unit-circle identity, standard angles |
| Applications of Trigonometry | Elevation, eye height, depression |
| Circles | Number of tangents, equal tangents, perpendicular radius |
| Areas Related to Circles | Sector/arc, minor segment, circular ring |
| Surface Areas and Volumes | Cone/cylinder, hemisphere/cylinder, hemispherical cavity |
| Statistics | Grouped mean, median class, modal class |
| Probability | Coin simulation, ordered dice pairs, complements |

Each chapter has 8 detailed bilingual note sections with questions/answers, at least 1200 words in each language, 5 worked examples, 10 MCQs with reasons for every option, 6 written questions, common mistakes, a concept map and 5 revision points. There are 42 scenes and 84 missions, 70 worked examples, 140 MCQs/560 option explanations and 84 written questions. Lesson plans/homework and separate key-term boxes are absent.

## Implementation

Source is in `math10-source/`. `scripts/build-maths10.mjs` builds `dist/math/data/class-10.json`, wraps the unchanged Class 9 data as `class-9.json`, and supplies empty class placeholders. `scripts/build-offline.mjs` discovers both books' class catalogues and caches all local assets. Add future Maths class JSON files and rebuild to expose them without changing the app.

The new local engines are `ten-graph.js`, `ten-geometry.js` and `ten-solid.js`, sharing the existing SVG interaction base through `ten-base.js`. Numerical calculations live in `dist/math/js/ten-math.js`. Geometry vertices support pointer drag and keyboard arrows; solids support rotation, wheel/pinch zoom and explicit Play/Pause. Reduced-motion users begin with static views. Animations stop on hidden tabs, and switching scenes disposes listeners and animation frames. The existing 3 Class 9 engines remain unchanged.

`ganit-darshan-v1` stays unchanged. Legacy Class 9 completion/scores use their existing numeric keys; Class 10 uses `10:<chapter-id>`, and mistakes carry a class ID. Last chapter is tracked per class. State never migrates or clears existing Class 9 progress.

The models explicitly distinguish theorem proof from measurement, real from nonreal roots, undefined trigonometric ratios, tangent-count cases, hidden interfaces from exposed surfaces, class-based statistical estimates from raw exact values, and equally likely ordered outcomes from unequally likely sums. The cavity uses a cutaway with artificial cut faces excluded from the actual surface formula.

See `math10-curriculum-research.md`, `math10-content-audit.json`, and the latest `TESTING.md` entry for verification and limits.
