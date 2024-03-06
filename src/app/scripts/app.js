const storageKey = 'theme-preference';

const getColorPreference = () => {
    if (localStorage.getItem(storageKey)) {
        return localStorage.getItem(storageKey);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const theme = {
    value: getColorPreference(),
};

const reflectPreference = () => {
    $(':first-child').attr('data-theme', theme.value);
    $('#theme-toggle').attr('aria-label', theme.value);
};

const setPreference = () => {
    localStorage.setItem(storageKey, theme.value);
    reflectPreference();
};

const handleColorSchemeChange = () => {
    window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', ({ matches: isDark }) => {
            theme.value = isDark ? 'dark' : 'light';
            setPreference();
        });
};

const onClick = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    setPreference();
};

const initThemeToggle = () => {
    reflectPreference();
    $('#theme-toggle').on('click', onClick);
};

module.exports = {
    handleColorSchemeChange,
    reflectPreference,
    initThemeToggle,
};
