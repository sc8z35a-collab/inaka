# Bug hunt log (working notes)

Environment: headless Chromium + SwiftShader WebGL2 (tests/probe.mjs), Vite dev on :3000.

## Confirmed / suspected
- B0  HDR allocates 4 x 4096^2 shadow maps (~268 MB) -> GPU OOM, shader link failures, WebGL context lost (reproduced).
- B17 Context loss has no recovery or quality downgrade.
- B1  WASD blocked while a HUD button has focus.
- B2  Modifier shortcuts (Cmd+S etc.) leave keys stuck / hijacked.
- B3/B4/B5 Multi-touch: another pointer's pointerup resets joystick/look/drag.
- B6  Compass side labels static.
- B7  Birds fly sideways.
- B8  Clouds drift away forever.
- B9  Unbounded animation offsets.
- B10 Player trapped on crossing/rails; train passes through player.
- B11 Verge texture inherits grass repeat 75x.
- B12 PMREM sigma too large (console warnings).
- B13 Duplicate PMREM generation.
- B14 Wasted canvas texture generation.
- B15 Duplicate gravel load.
- B16 preserveDrawingBuffer forced in production.
- B18 Settings panel not scrollable on short screens.
- B19 Viewpoint select cannot re-select same spot.
- B20 Bird chirps queue while tab hidden.
- B21 DPR changes not handled.
- B22 No WebKit fullscreen fallback.
- B26 Audio graph keeps running while muted.
