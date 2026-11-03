# Shared visual upgrade

Science (Classes 9–12, including Physics, Chemistry and Biology) uses the existing shared CanvasLab renderer. All its scenes now use specular sphere highlights, soft object shadows, translucent shaded container faces and a depth-sorted drawing queue. Solid boxes are opt-in so containers do not hide their contents. Class 9 motion/work/buoyancy objects and Class 11 motion carts use solid faces.

Class 11 straight-line motion scenes have a reusable road with lane markings, signed metre ruler, origin and a moving position marker. The road scale and vehicle use the same mapping. Negative position is not negative distance travelled. Scene repetition remains explicitly described by the existing model note.

Maths Class 9 solid shapes and Class 10 combined solids use shared perspective/material helpers, directional lighting and a soft ground shadow. The sphere has a smooth radial highlight. Geometry, graphs, maps, timelines, English reading and art construction remain their original teaching formats; this release does not turn these 2D activities into 3D.

The earlier separate value cards, taller science canvas and 280px graph area are retained. Existing controls, language preferences and stored progress are preserved. No external libraries or CDN dependencies were added. New modules are included in the offline cache.

Validation: 763 automated tests pass, including road scale mapping, projection depth and material normal handling. Chrome representative motion, chemistry, biology and mathematics checks were performed. Earlier responsive science screenshots are in stage1-review. Full per-scene review, Android/Firefox/Edge performance, installed offline execution and slider easing remain outside this completed rendering change.
