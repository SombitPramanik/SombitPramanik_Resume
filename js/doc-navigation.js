const compactDocNavigation = window.matchMedia("(max-width: 700px)");
const docNavigationGroups = document.querySelectorAll(".doc-navigation details");

function closeCompactNavigationGroups() {
    if (!compactDocNavigation.matches) {
        return;
    }

    docNavigationGroups.forEach((group) => {
        group.open = false;
    });
}

closeCompactNavigationGroups();
compactDocNavigation.addEventListener("change", closeCompactNavigationGroups);