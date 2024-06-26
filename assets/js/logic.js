/** Selectors */
const root = document.querySelector(':root');
const body = document.body;
const lightThemeButton = document.querySelector('#light-button');
const darkThemeButton = document.querySelector('#dark-button');

/** Constants */
const DISPLAY_NONE = 'display-none';
const LIGHT = 'light';
const DARK = 'dark';
const LIGHT_CIRCLE = '#ffb100';
const DARK_CIRCLE = '#000';
const THEME = 'theme';
const STORED_DATA = 'blogs';

// TODO: Create functions to read and write from local storage
function readLocalStorage() {
    let data = localStorage.getItem(STORED_DATA);

    if (!data) data = [];
    else data = JSON.parse(data);

    return data;
}

function storeLocalStorage(value) {
    return localStorage.setItem(STORED_DATA, value);
}

function applyTheme(theme) {
    const isLightTheme = (theme === LIGHT);

    // toggle the body theme classes
    body.classList.toggle(LIGHT, isLightTheme);
    body.classList.toggle(DARK, !isLightTheme);
    
    // toggle the display of the theme buttons
    darkThemeButton.classList.toggle(DISPLAY_NONE, !isLightTheme);
    lightThemeButton.classList.toggle(DISPLAY_NONE, isLightTheme);

    // toggle the circle color
    root.style.setProperty('--circle-color', isLightTheme ? LIGHT_CIRCLE : DARK_CIRCLE);
}

// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
function handleNodeToggle() {
    const currentTheme = localStorage.getItem(THEME);
    const theme = currentTheme === LIGHT ? DARK : LIGHT;
    localStorage.setItem(THEME, theme);
    applyTheme(theme);
}

function handleBack() {
    location.assign('index.html');
}

document.getElementById('toggle').addEventListener('click', handleNodeToggle);
document.getElementById('back').addEventListener('click', handleBack);
applyTheme(localStorage.getItem(THEME));
