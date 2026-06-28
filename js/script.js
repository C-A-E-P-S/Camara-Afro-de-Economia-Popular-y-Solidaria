document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a[data-tab]');
    const tabPanels = document.querySelectorAll('.tab-panel');
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = document.querySelector('.dropdown-toggle');

    const showTab = (tabId) => {
        tabPanels.forEach((panel) => {
            panel.classList.toggle('active', panel.id === tabId);
        });
    };

    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            showTab(link.dataset.tab);
            dropdown.classList.remove('open');

            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Soporte táctil: en celulares no existe ":hover", así que el menú
    // también se abre/cierra con un toque sobre el botón.
    dropdownToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        dropdown.classList.toggle('open');
    });

    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('open');
        }
    });

    showTab('tab-inicio');
});
