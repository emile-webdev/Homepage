let lightMode = localStorage.getItem('lightMode');
const themeSwitch = document.getElementById('theme-switch');

const enableLightMode = () => {
    document.body.classList.add('light-mode');
    localStorage.setItem('lightMode', 'active');
}

const disableLightMode = () => {
    document.body.classList.remove('light-mode');
    localStorage.setItem('lightMode', null);
}

if (lightMode === 'active') enableLightMode();

themeSwitch.addEventListener('click', () => {
    lightMode = localStorage.getItem('lightMode');

    if (lightMode !== 'active') {
        enableLightMode();
    } else {
        disableLightMode();
    }
})