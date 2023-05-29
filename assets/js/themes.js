document.addEventListener("DOMContentLoaded", function () {
    const root = document.documentElement;
    const dark = "theme--dark";
    const light = "theme--light";

    let theme =
        window.getComputedStyle(root).getPropertyValue("--theme") === "dark"
            ? dark
            : light;
    root.classList.add(theme);

    const darkModePreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
    );
    const lightModePreference = window.matchMedia(
        "(prefers-color-scheme: light)"
    );

    // recommended method for newer browsers: specify event-type as first argument
    darkModePreference.addEventListener(
        "change",
        (e) => e.matches && updateTheme(true)
    );
    lightModePreference.addEventListener(
        "change",
        (e) => e.matches && updateTheme()
    );

    // deprecated method for backward compatibility
    darkModePreference.addListener((e) => e.matches && updateTheme(true));
    lightModePreference.addListener((e) => e.matches && updateTheme());

    function updateTheme(isDark = false) {
        const newTheme = isDark ? dark : light;
        root.classList.remove(theme);
        root.classList.add(newTheme);
        theme = newTheme;
    }
});
