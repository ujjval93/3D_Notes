# Class 11 Chemistry

Chemistry is integrated into the same Vigyan Darshan Science reader. Choose Class 11, then Physics or Chemistry, or use the Chemistry card on the subject hub. Physics remains the existing 14-chapter book; Chemistry adds 9 chapters. Existing Class 9/10 routes and progress remain intact.

## Curriculum basis

- UPMSP Class 11 Chemistry, academic session 2026–27: https://upmsp.edu.in/Downloads/Syllabus/Class11/152-Chemistry-Class-11.pdf
- NCERT Chemistry Part I: https://ncert.nic.in/textbook.php?kech1=0-6
- NCERT Chemistry Part II: https://ncert.nic.in/textbook.php?kech2=0-3

The current sequence has Some Basic Concepts of Chemistry, Structure of Atom, Classification of Elements and Periodicity in Properties, Chemical Bonding and Molecular Structure, Thermodynamics, Equilibrium, Redox Reactions, Organic Chemistry – Some Basic Principles and Techniques, and Hydrocarbons. Each chapter has original bilingual explanations with 8 note sections (at least 1200 words per language), 5 worked examples, 10 MCQs with every-option reasons, 6 written questions and 3 visual scenes. Notes include in-text-style questions, formula cards, common mistakes, concept maps and revision points. The user's removed lesson-plan/homework/key-term boxes remain absent.

These are original study notes and questions, not reproduced textbook passages or a verbatim answer key. The prescribed textbook and school practical work remain necessary.

## Implementation and state

- `chemistry11-source/` holds the editable content and 27 scene specifications.
- `scripts/build-chemistry11.mjs` emits `dist/data/chemistry-11.json`, balances MCQ option positions and adds the Class 11 book registry to the existing Physics data.
- `dist/js/chemistry11-math.js` supplies stoichiometry, atomic energies, dipole sums, chemistry thermodynamic signs, mass-action roots, electron counts and hydrocarbon relations.
- `dist/js/scenes/eleven-chemistry.js` draws the 27 local Canvas models. No runtime library or CDN added.
- `dist/js/app.js` uses the data registry for book buttons, subject-specific last-chapter memory and the correct syllabus link. The existing `vigyan-darshan-v3` key remains. Physics keeps its legacy `11:physics11-...` keys and `lastChapterByClass.11`; Chemistry uses distinct IDs and `lastChapterByClass['11:chemistry']`. Mistake counts and entries filter to the active book.

## Scientific model limits

Particle icons represent samples, not Avogadro-sized counts. The water molar mass 18 g/mol and hydrogen energy 13.6 eV are rounded teaching constants. Orbital lobes are schematic representative shapes and phase colours; they do not show electron trajectories. Effective-charge, isoelectronic-radius, inductive-effect and ethane-torsional-energy indices are explicitly qualitative, not measured radii or energies. Ionisation values are rounded selected data illustrating exceptions. VSEPR angles are approximate ideal/typical values. The MO scene is electron bookkeeping, not a full energy-level diagram or a claim that all selected counts represent a particular molecule.

Chemistry uses ΔU=q+w and w=−PextΔV. The equilibrium scenes use stated ideal concentration models; weak-acid and common-ion roots solve the acid mass-action equation with water autoionisation neglected. Graphs plot their labelled parameter relationships. Animation cycles are schematic and do not represent reaction kinetics. Hydrocarbon formulas distinguish acyclic single-double/single-triple-bond series; the first methane chlorination step does not imply a pure product in a real reaction mixture.

## Verification limits

Content checks validate bilingual completeness, distinct paragraphs, counts, answer indices, numeral rules and reachable missions. Scientific tests cover atom conservation, dilution, energy levels, matter-wave ratios, orbital capacities, ionisation exceptions, dipole cancellation, chemistry first-law signs, Hess/Gibbs relations, acid mass action, redox bookkeeping, Rf and homologous/conformation relationships.

Real Android hardware, Edge/Firefox, installed-PWA offline execution, physical printing and long-run memory/performance profiling require their respective environments. Do not infer these from numerical tests or Chrome preview.
