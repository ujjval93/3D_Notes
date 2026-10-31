# Class 12 Physics and Chemistry

Integrated into the same Vigyan Darshan site and existing science reader. Class 12 has a Physics / Chemistry subject selector; Class 11 retains Physics / Chemistry / Biology. Subject choice is remembered separately by class. Existing student progress remains under `vigyan-darshan-v3`, retaining earlier chapter identities.

Physics: 14 chapters, 42 interactive scenes, 112 detailed note sections, 70 worked examples, 140 MCQs with560 option explanations,84written questions. Chemistry:10chapters,30scenes,80note sections,50examples,100MCQs with400option explanations,60written questions. Every chapter has at least1200Hindi note words, English explanations, section questions, formula/relationship cards and5revision points. No lesson-plan/homework/key-term sections added.

## Curriculum basis

Original study explanations checked against UPMSP2026–27 Class12 Physics151 and Chemistry152 official syllabus PDFs, plus NCERT2026–27 Physics leph1/leph2 and Chemistry lech1/lech2. Physics includes14current chapters; Chemistry includes10current chapters. Polarisation/Malus is explicitly marked as UP Board prescribed supplement; quantitative single-slit details are identified as support beyond the qualitative core. Radioactivity is qualitative; no deleted transistor/logic-gate course added.

## Visual model scope

Free sliders,2missions,live results,Why and interaction-gated quick checks accompany every scene. Canvas models are idealised and labelled symbolic. Physical calculations use explicitSI conversions and assumptions. Chemistry includes conceptual reaction stages and approximate reference pKa/Kb values, rather than pretending to measure reaction kinetics. SN2 inversion,neutral phenol products,coordination counts,salt bridge and external supply roles,flux normals and matter-wave/photon identity were reviewed and corrected.

## Verification

- Full build and588automated tests pass; prior484tests retained. Added104tests cover24chapter packages,72scene rendering ranges and physical/chemical invariants.
- ChromeUI QA opened all72scenes,exercised sliders and verifiedlive readouts/QuickCheck. No application console errors observed.
- Quiz test returned9/10,40option reasons,cleared retry selections and saved/removable mistake. Completion persisted after reload and stayed separate between Physics and Chemistry. Test completion was cleared.
- Class11Biology and Class12Chemistry preference roundtrip preserved both choices.
- Responsive iframe checks at360/768/1366px produced no document horizontal overflow; mobile drawer opened/closed; no Devanagari digits in rendered test pages or newJSON.
- Offline manifest includes newbook and renderer assets. No runtime dependency or CDN added.
- RealAndroid,Edge/Firefox,installedPWA offline operation,physicalprinting and long-runmemory/fps were not independently verified.

Build order: existingClass9–11builders,then `scripts/build-science12.mjs`,then `scripts/build-offline.mjs`. AuthoredJSON lives in `physics12-source/` and `chemistry12-source/`. Use `npm run build` for the completecourse.
