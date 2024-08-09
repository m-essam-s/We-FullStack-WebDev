document.addEventListener("DOMContentLoaded", function() {
    const themeButton = document.getElementById('theme-button');
    const body = document.body;
    const logo = document.getElementById('logo');

    // Define paths for the logos
    const darkLogo = "./assets/img/Light-300-300px.png";
    const lightLogo = "./assets/img/Dark-300-300px.png";

    // Function to set the logo based on the theme
    function setLogo(theme) {
        if (theme === 'dark-theme') {
            logo.src = darkLogo;
            themeButton.classList.remove('bx-moon');
            themeButton.classList.add('bx-sun');
        } else {
            logo.src = lightLogo;
            themeButton.classList.remove('bx-sun');
            themeButton.classList.add('bx-moon');
        }
    }

    // Load the saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        setLogo(savedTheme);
    } else {
        setLogo(''); // Default to light theme
    }

    // Toggle theme and logo on button click
    themeButton.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : '';
        localStorage.setItem('theme', currentTheme);
        setLogo(currentTheme);
    });
});
