document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');
    const links = menu.querySelectorAll('a');
    const tabContents = document.querySelectorAll('.tab-content');

    // Toggle menu visibility
    menuButton.addEventListener('click', () => {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    // Show the selected tab content
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('data-target');

            // Hide all tab contents
            tabContents.forEach(tabContent => {
                tabContent.style.display = 'none';
            });

            // Show the selected tab content
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.style.display = 'block';
            }

            // Hide menu after selection
            menu.style.display = 'none';
        });
    });

    // Optionally, show the first tab by default
    if (tabContents.length > 0) {
        tabContents[0].style.display = 'block';
    }
});