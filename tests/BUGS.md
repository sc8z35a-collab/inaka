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

## Sweep 2 (PR #6) — fixed
Rendering / engine
- C1  An exception inside the animation loop repeated every frame forever; the loop now stops once and shows the reload screen.
- C2  Context restore kept ULTRA (the heaviest preset) and lost the context again; it now falls back to LOW.
- C3  Context restore left the PMREM sky environment empty, so reflective surfaces turned dark; it is regenerated.
- C4  resize() during context loss read MAX_RENDERBUFFER_SIZE as null, giving a 0×0 canvas.
- C5  The ULTRA supersample factor trimmed by the fps governor persisted after re-selecting ULTRA.
- C6  Time spent in a hidden tab counted as one slow frame window and cut the resolution on return.
- C7  Resizes from ResizeObserver or DPR changes never updated the settings resolution readout.
- C8  Teleports cut straight through hills on the original map (the ground clamp applied only on the plains map).
- C9  A teleport interrupted by input left the camera floating or sunk until the player moved.
- C10 Spot pitch outside the drag clamp made the view jump on the first drag afterwards.
- C11 Unbounded yaw lost precision over long sessions.
- C12 The goTo() aim helper allocated a whole PerspectiveCamera on every call.
- C13 A failed ground texture download was silent; it now warns and shows a toast.
- C14 The unused 'leaf' canvas texture (33k strokes) was painted at startup.
- C15 LOW renders through the composer, so it had no MSAA: jagged edges and shimmering foliage.
- C16 The lighting pass still ran while the context was lost.
- C17 Ground-texture clone list was never pruned after load.
- C18 The scene rendered at full cost behind the opaque portrait rotate hint.
UI / input
- C19 A double tap on the sound button during resume() desynchronised the audio state.
- C20 Enabling sound in a hidden tab left the AudioContext running.
- C21 Dragging the volume slider queued overlapping gain ramps (lagging volume).
- C22 The sliders wrote localStorage on every input pixel.
- C23 applyTime() at startup regenerated the PMREM environment a second time.
- C24 The time selector and HUD clock showed "day" until the world had finished building.
- C25 The already-selected viewpoint could not be re-travelled to from the keyboard (Enter now works).
- C26 iOS webkitRequestFullscreen fails silently, yet the UI claimed fullscreen; it now falls back to wide mode.
- C27 A late real-fullscreen event left the wide-mode fallback class active.
- C28 The landscape orientation lock stayed on after leaving fullscreen.
- C29 The start gate left the HUD focusable and the world walkable behind the modal.
- C30 The start gate also appeared in an installed standalone PWA.
- C31 Escape closed the panel, zen mode and wide mode all at once; it now closes only the top layer.
- C32 F toggled fullscreen behind the start gate and with Shift held.
- C33 A resting thumb on the joystick cancelled teleports and crept forward (dead zone added).
- C34 The screenshot built a 20–40 MB base64 data URL on the main thread; it now uses toBlob and a Blob URL, with a double-click guard.
- C35 The screenshot could be attempted during context loss.
- C36 The discovery counter was hard-coded to "/ 6".
- C37 The minimap canvas and HUD text were rewritten every frame even when nothing had changed.
- C38 The compass labels were rewritten every frame.
- C39 Constructor failure left the half-built canvas in the DOM and the error overlay could be invisible (faded by .ready).
- C40 lucide's `Map` import shadowed the global Map constructor in main.js.
- C41 The brand link used href="#", which appended # and scrolled.
World
- C42 The train wrapped as soon as the first car passed x = 249, so the rear car vanished mid-track.
- C43 Wheel rotation grew without bound.
- C44 Villagers meeting head-on waited for each other forever.
- C45 Villager curve sampling allocated three vectors per villager per frame (plus the sole vector).
- C46 The footpath surface height extended 30 m past the ribbon's end (walkers floated 24 cm in the village).
- C47 The last lookout fence post had an invisible 3 m wall beside it.
- C48 Hay-bale colliders were circles of radius 1 and missed the 1.5 m bale length.
- C49 Twelve hay bales, twelve produce spheres and 27 greenhouse ribs each had their own draw calls and materials.
- C50 Sign and bench colliders lacked `r`, which the verge-placement filter relies on.
- C51 Duplicated, unused noise helpers remained in scene.js.
CSS / PWA
- C52 Hover backgrounds stuck after taps on touch screens.
- C53 Long toasts overflowed the screen (nowrap).
- C54 The six minimap spot buttons overflowed the 148 px phone panel at the 40 px touch size.
- C55 The "leave fullscreen" pill covered the look pad and the show-UI button; it now appears only in zen mode, beside show-UI.
- C56 The duplicated settings-panel rules missed the vh fallback for browsers without dvh.
- C57 The manifest had no icons (not installable) and no id; there was no favicon.
Pipeline / tests
- C58 LLM-written commit messages went through a shell, so `$(...)` could execute.
- C59 Agents could patch files outside their assigned list; malformed patches were not rejected.
- C60 Importing agents.mjs (for AGENTS) ran the whole pipeline as a side effect.
- C61 The reject path did not restore pipeline/ and public/.
- C62 The regression and interaction tests had drifted from the app (plains default, start gate, spots export, timing).
