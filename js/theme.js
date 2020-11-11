const themeToggle = document.getElementById("themeButton");
var dark = localStorage.getItem('darkTheme');

function enableDark() {
    document.body.classList.add('darktheme');
    themeToggle.innerHTML = '<i class="far fa-lightbulb"></i>';
    localStorage.setItem('darkTheme', 'true');
}

function disableDark() {
    document.body.classList.remove('darktheme');
    themeToggle.innerHTML = '<i class="fas fa-lightbulb"></i>';
    localStorage.setItem('darkTheme', 'false')
}

if (dark === "true") {
    enableDark();
} else {
    disableDark();
}

themeToggle.addEventListener('click', () => {
    dark = localStorage.getItem('darkTheme');
    if (dark != "true") {
        enableDark();
    } else {
        disableDark();
    }
})