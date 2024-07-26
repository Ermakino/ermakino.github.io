document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content-section');

    function showContent(contentToShow) {
        contents.forEach(content => {
            if (content === contentToShow) {
                setTimeout(() => {
                    content.classList.remove('fade-out');
                    content.classList.add('fade-in');
                    content.style.display = 'block';
                }, 500); // Start fade-in after fade-out is done
            } else {
                if (content.classList.contains('fade-in')) {
                    content.classList.remove('fade-in');
                    content.classList.add('fade-out');
                    setTimeout(() => {
                        content.style.display = 'none';
                    }, 500); // Match the duration of fade-out animation
                }
            }
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', event => {
            event.preventDefault();
            const targetId = tab.getAttribute('href');
            const targetContent = document.querySelector(targetId);
            showContent(targetContent);
        });
    });

    // Show the first tab content by default
    if (tabs.length > 0) {
        const firstTabId = tabs[0].getAttribute('href');
        const firstTabContent = document.querySelector(firstTabId);
        showContent(firstTabContent);
    }
});
