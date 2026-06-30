document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a[data-tab]');
    const actionButtons = document.querySelectorAll('button[data-tab]');

    const showTab = (tabId, anchorId) => {
        document.querySelectorAll('.tab-panel').forEach((panel) => {
            panel.classList.toggle('active', panel.id === tabId);
        });

        document.querySelectorAll('.nav-links a').forEach((a) => {
            a.classList.remove('active');
        });

        navLinks.forEach((a) => {
            if (a.dataset.tab === tabId && a.dataset.anchor === anchorId) {
                a.classList.add('active');
            }
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (anchorId) {
            setTimeout(() => {
                const target = document.getElementById(anchorId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            showTab(link.dataset.tab, link.dataset.anchor);
        });
    });

    actionButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            showTab(btn.dataset.tab, btn.dataset.anchor);
        });
    });

    showTab('tab-inicio');
});
