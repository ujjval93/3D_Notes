# Class 10 Science in the existing Vigyan Darshan site

The Science book now supports Class 9 and Class 10 on the same origin. The class bar opens Class 10; the subject hub also links directly to its first chapter. Class 10's overview exposes all chapters. Other subject books remain unchanged.

## Content and scenes

| Chapter | Scenes |
| --- | --- |
| Chemical Reactions and Equations | Balancing, reaction types, rusting |
| Acids, Bases and Salts | pH, neutralisation, water of crystallisation |
| Metals and Non-metals | Displacement, ionic bonding, protection |
| Carbon and its Compounds | Homologous series, bonds, soap |
| Life Processes | Digestion, photosynthesis, circulation, respiration, nephron |
| Control and Coordination | Reflex arc, phototropism, insulin feedback |
| How do Organisms Reproduce? | Fission/budding, plant reproduction, human reproduction |
| Heredity | Monohybrid cross, independent assortment, sex chromosomes |
| Light — Reflection and Refraction | Concave mirror, convex lens, refraction |
| The Human Eye and the Colourful World | Accommodation, myopia, dispersion/scattering |
| Electricity | Ohm's law, resistor combinations, heating/power |
| Magnetic Effects of Electric Current | Wire field, solenoid, magnetic force |
| Our Environment | Energy flow, biomagnification, waste |

Each chapter contains 8 bilingual note sections with in-text questions, a concept map, formula/relationship cards, mistakes and revision summary, 5 worked examples, 10 MCQs with reasons for all options, and a 6-question written practice test. Scene controls are immediately available; missions, live guidance, Why explanations and Quick Checks use the existing interface. There are no lesson-plan/homework tabs or separate key-term boxes.

## Authoring and progress

`science10-source/scene-specs.json` defines exact scene parameters. Individual `chapter-01.json` through `chapter-13.json` hold original explanatory content. Run `node scripts/build-science10.mjs` to generate `dist/data/class-10.json`, followed by `node scripts/build-offline.mjs`. `npm run build` includes both. Renderer modules import locally, one chapter module on demand; no new runtime packages or remote assets.

The existing `vigyan-darshan-v3` storage key is preserved. Class 9 progress keys remain unchanged; Class 10 progress, scores and mistakes use `10:<chapter-id>` keys. Last chapter is tracked separately per class. Print output identifies the current class.

## Scientific model limits

Particle colours, organ sizes, process times, pollution concentration factors and waste decomposition times are illustrative. Biological and chemical sliders are not clinical or laboratory rate predictions. The pH concentration relationship and approximately 10% energy transfer have stated limits. Optical calculations use the NCERT Cartesian sign convention, handle a focal object without non-finite drawing coordinates, and distinguish signed distances from slider magnitudes. Independent assortment examples are ideal Mendelian probabilities. The myopia model uses a 50 cm far point, not a medical prescription. No unsafe chemical experiments are assigned at home.

See `class10-curriculum-research.md` for primary source verification. This independent companion does not reproduce a textbook or claim to replace its full exercise set.
