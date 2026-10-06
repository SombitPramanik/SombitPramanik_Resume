const ambientCursor = document.querySelector(".ambient-cursor");
const largePointer = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (ambientCursor) {
    let animationFrame = 0;

    function trackPointer(event) {
        if (event.pointerType !== "mouse" && event.pointerType !== "pen") {
            return;
        }

        if (animationFrame) {
            window.cancelAnimationFrame(animationFrame);
        }

        animationFrame = window.requestAnimationFrame(() => {
            ambientCursor.style.setProperty("--ambient-x", `${event.clientX}px`);
            ambientCursor.style.setProperty("--ambient-y", `${event.clientY}px`);
            ambientCursor.classList.add("is-active");
            animationFrame = 0;
        });
    }

    function hideCursorGlow() {
        ambientCursor.classList.remove("is-active");
    }

    function syncPointerTracking() {
        const shouldTrack = largePointer.matches && !reducedMotion.matches;

        if (shouldTrack) {
            window.addEventListener("pointermove", trackPointer, { passive: true });
            document.documentElement.addEventListener("pointerleave", hideCursorGlow);
            return;
        }

        window.removeEventListener("pointermove", trackPointer);
        document.documentElement.removeEventListener("pointerleave", hideCursorGlow);
        ambientCursor.classList.remove("is-active");

        if (animationFrame) {
            window.cancelAnimationFrame(animationFrame);
            animationFrame = 0;
        }
    }

    largePointer.addEventListener("change", syncPointerTracking);
    reducedMotion.addEventListener("change", syncPointerTracking);
    syncPointerTracking();
}
