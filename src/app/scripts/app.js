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
    document.firstElementChild
        .setAttribute('data-theme', theme.value);

    $('#theme-toggle').attr('aria-label', theme.value);
};

const setPreference = () => {
    localStorage.setItem(storageKey, theme.value);
    reflectPreference();
};

const onClick = () => {
    // flip current value
    theme.value = theme.value === 'light' ? 'dark' : 'light';

    setPreference();
};

// set early so no page flashes / CSS is made aware
reflectPreference();

window.onload = () => {
    // set on load so screen readers can see latest value on the button
    reflectPreference();

    // now this script can find and listen for clicks on the control
    $('#theme-toggle').on('click', onClick);
};

// sync with system changes
window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', ({ matches: isDark }) => {
        theme.value = isDark ? 'dark' : 'light';
        setPreference();
    });
