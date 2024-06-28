const BLOGS = 'blogs';
const LIGHT = 'light';
const DARK = 'dark';
const LIGHT_CIRCLE = '#ffb100';
const DARK_CIRCLE = '#000';
const THEME = 'theme';

function applyTheme(theme) {
    const lightThemeButtonEl = document.getElementById('light-button');
    const darkThemeButtonEl = document.getElementById('dark-button');

    const isLightTheme = (theme === LIGHT);

    // toggle the body theme classes
    document.body.classList.toggle(LIGHT, isLightTheme);
    document.body.classList.toggle(DARK, !isLightTheme);

    // toggle the display of the theme buttons
    lightThemeButtonEl.setAttribute('style', `display: ${isLightTheme ? 'none' : 'auto'}`);
    darkThemeButtonEl.setAttribute('style', `display: ${isLightTheme ? 'auto' : 'none'}`);

    // toggle the circle color
    document.querySelector(':root').style.setProperty('--circle-color', isLightTheme ? LIGHT_CIRCLE : DARK_CIRCLE);
}

// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
function handleNodeToggle() {
    const currentTheme = localStorage.getItem(THEME);
    const theme = currentTheme === LIGHT ? DARK : LIGHT;
    localStorage.setItem(THEME, theme);
    applyTheme(theme);
}

// TODO: Create a function that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
    let data = localStorage.getItem(BLOGS)
    if (data) data = JSON.parse(data);
    return data || [];
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(obj) {
    let data = readLocalStorage(BLOGS);
    data.push(obj);
    localStorage.setItem(BLOGS, JSON.stringify(data));
}

applyTheme(localStorage.getItem(THEME)); // applies stored theme at loading...
document.getElementById('toggle').addEventListener('click', handleNodeToggle);

// ! Use the following function whenever you need to redirect to a different page
let redirectURL = '';
const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
};
