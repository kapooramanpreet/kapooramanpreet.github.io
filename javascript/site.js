// Shared behavior: theme toggle, mobile menu, smooth in-page scroll.

function applyThemeIcon(theme) {
    document.querySelectorAll('[data-theme-icon]').forEach(function (el) {
        // Show the icon of the theme you can switch TO.
        el.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    });
    var label = theme === 'dark' ? 'Light mode' : 'Dark mode';
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
        btn.setAttribute('title', label);
        btn.setAttribute('aria-label', label);
    });
}

function setTheme(theme) {
    var root = document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
    applyThemeIcon(theme);
}

document.addEventListener('DOMContentLoaded', function () {
    var current = document.documentElement.classList.contains('light') ? 'light' : 'dark';
    applyThemeIcon(current);

    document.querySelectorAll('.theme-toggle').forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            var next = document.documentElement.classList.contains('light') ? 'dark' : 'light';
            setTheme(next);
        });
    });

    var menuButton = document.getElementById('mobile-menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', function () {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
