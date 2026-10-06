const typingText = document.getElementById("about-typing-text");

if (typingText) {
    const phrases = [
        "apps I need most.",
        "tools for real needs.",
        "ideas into software."
    ];
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let phraseIndex = 0;
    let characterIndex = phrases[0].length;
    let isDeleting = false;
    let timeoutId;

    function clearTypingTimeout() {
        window.clearTimeout(timeoutId);
    }

    function scheduleNextStep(delay) {
        clearTypingTimeout();
        timeoutId = window.setTimeout(typeNextCharacter, delay);
    }

    function typeNextCharacter() {
        const phrase = phrases[phraseIndex];

        if (isDeleting) {
            characterIndex -= 1;
            typingText.textContent = phrase.slice(0, characterIndex);

            if (characterIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                scheduleNextStep(350);
                return;
            }

            scheduleNextStep(42);
            return;
        }

        characterIndex += 1;
        typingText.textContent = phrase.slice(0, characterIndex);

        if (characterIndex === phrase.length) {
            isDeleting = true;
            scheduleNextStep(1350);
            return;
        }

        scheduleNextStep(82);
    }

    function resetTyping() {
        clearTypingTimeout();
        phraseIndex = 0;
        characterIndex = phrases[0].length;
        isDeleting = true;
        typingText.textContent = phrases[0];

        if (!motionPreference.matches && !document.hidden) {
            scheduleNextStep(1500);
        }
    }

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            clearTypingTimeout();
        } else if (!motionPreference.matches) {
            scheduleNextStep(250);
        }
    });

    motionPreference.addEventListener("change", resetTyping);
    resetTyping();
}
