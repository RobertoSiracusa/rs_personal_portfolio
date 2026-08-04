import type Lenis from "lenis";

let instance: Lenis | null = null;
let released = false;

/** Lo llama Navbar apenas crea la instancia. Decide start/stop segun el estado real. */
export function registerLenis(l: Lenis) {
  instance = l;
  if (released) l.start();
  else l.stop();
}

/** Lo llama Navbar en el cleanup del efecto. */
export function unregisterLenis(l: Lenis) {
  if (instance === l) instance = null;
}

/** Lo llama initialFX (o el catch de su import). Idempotente. */
export function releaseScroll() {
  released = true;
  document.body.style.overflowY = "auto";
  instance?.start();
}
