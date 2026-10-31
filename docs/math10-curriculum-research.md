# Class 10 Mathematics curriculum verification

Verified against primary sources on 2026-10-23:

- NCERT Mathematics, Class X, prelims and contents, **Reprint 2026–27**: https://ncert.nic.in/textbook/pdf/jemh1ps.pdf
- Official UP Board Class 10 Mathematics syllabus, **2026–27**: https://upmsp.edu.in/Downloads/Syllabus/Class10/928-Maths-Class-10.pdf
- NCERT Chapters 9–11, each marked Reprint 2026–27: https://ncert.nic.in/textbook/pdf/jemh109.pdf ; https://ncert.nic.in/textbook/pdf/jemh110.pdf ; https://ncert.nic.in/textbook/pdf/jemh111.pdf

## Current chapter sequence

1. Real Numbers — वास्तविक संख्याएँ
2. Polynomials — बहुपद
3. Pair of Linear Equations in Two Variables — दो चरों वाले रैखिक समीकरण युग्म
4. Quadratic Equations — द्विघात समीकरण
5. Arithmetic Progressions — समांतर श्रेढ़ियाँ
6. Triangles — त्रिभुज
7. Coordinate Geometry — निर्देशांक ज्यामिति
8. Introduction to Trigonometry — त्रिकोणमिति का परिचय
9. Some Applications of Trigonometry — त्रिकोणमिति के कुछ अनुप्रयोग
10. Circles — वृत्त
11. Areas Related to Circles — वृत्तों से संबंधित क्षेत्रफल
12. Surface Areas and Volumes — पृष्ठीय क्षेत्रफल और आयतन
13. Statistics — सांख्यिकी
14. Probability — प्रायिकता

The current contents list 14 chapters. **Constructions is not a separate current chapter**; do not retain the older 15-chapter Class 10 numbering. Appendices on proofs and modelling are supplementary resources, not additional numbered exam chapters.

## UP Board unit allocation

Written assessment: **70 marks**. School internal assessment: **30 marks**.

| Unit | Marks |
| --- | ---: |
| Number Systems | 5 |
| Algebra | 18 |
| Coordinate Geometry | 5 |
| Geometry | 10 |
| Trigonometry | 12 |
| Mensuration | 10 |
| Statistics and Probability | 10 |

These weights are the published syllabus allocation. The app's shorter chapter practice tests are learning exercises, not official board papers.

## Scope and correctness decisions

- Heights-and-distances applications use 30°, 45° and 60° with configurations needing no more than 2 right triangles, matching the official UP Board limits. Interactive continuous angles can be exploration, labelled separately from those practice restrictions.
- Quadratic-formula solution is explicitly included by UP Board; present it even though the current NCERT contents place their main headings on factorisation and nature of roots.
- Current Triangles scope centres on similarity and the Basic Proportionality Theorem. Current Coordinate Geometry main sections are distance and internal section formulae. Avoid presenting deleted topics as required standalone chapters.
- Circles: perpendicular contact radius, equal tangents from one external point, and 0/1/2 tangent cases are fundamental. A real external tangent length requires d > r; an on-circle point has a tangent line but zero segment length from that very point.
- Circular areas: distinguish chord-bounded segments from radius-bounded sectors, minor from major regions, and arc length from perimeter. θ/360 formulae use degrees. π is exact symbolically; 22/7 and 3.14 are declared approximations. The full 360° disc has no radial cuts in its external perimeter.
- Original notes and questions explain standard mathematics independently; they are not a reproduction of NCERT prose or its complete exercise bank. Numeric examples are newly chosen and independently calculated.

## Authoring audit for delegated chapters

`math10-source/chapter-09.json`, `chapter-10.json`, and `chapter-11.json` each contain 8 note sections, 5 worked examples, 10 MCQs with all 40 option explanations, 6 written questions, a five-line revision summary, a concept map, and a common-mistake explanation. Body-only word counts EN/HI: Chapter 9 = 1301/1388; Chapter 10 = 1294/1355; Chapter 11 = 1279/1311. All text uses English digits; no Devanagari numerals.
