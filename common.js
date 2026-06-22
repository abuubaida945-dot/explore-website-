// Settings Modal
const modal = document.getElementById('settingsModal');
const settingsBtn = document.getElementById('settingsBtn');
const closeBtn = document.querySelector('.close');
const saveBtn = document.getElementById('saveSettings');
const bgColorInput = document.getElementById('bgColor');
const accentColorInput = document.getElementById('accentColor');

// Load saved settings
function loadSettings() {
    const bg = localStorage.getItem('bgColor');
    const accent = localStorage.getItem('accentColor');
    if (bg) {
        document.documentElement.style.setProperty('--bg', bg);
        bgColorInput.value = bg;
    }
    if (accent) {
        document.documentElement.style.setProperty('--accent', accent);
        accentColorInput.value = accent;
    }
}

loadSettings();

settingsBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    // Set inputs to current values
    bgColorInput.value = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
    accentColorInput.value = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

saveBtn.addEventListener('click', () => {
    const newBg = bgColorInput.value;
    const newAccent = accentColorInput.value;
    document.documentElement.style.setProperty('--bg', newBg);
    document.documentElement.style.setProperty('--accent', newAccent);
    localStorage.setItem('bgColor', newBg);
    localStorage.setItem('accentColor', newAccent);
    modal.style.display = 'none';
});
