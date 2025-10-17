document.addEventListener('DOMContentLoaded', () => {
    // Function to apply purple styles
    function applyPurpleStyles() {
        const signupLinks = document.querySelectorAll('#nav-auth-section a[href="signup.html"], #mobile-auth-section a[href="signup.html"]');
        signupLinks.forEach(link => {
            link.classList.add('cta-button');
            // Remove any conflicting classes
            link.classList.remove('bg-amber-600', 'hover:bg-amber-700', 'bg-orange-600', 'hover:bg-orange-700');
            link.style.background = '#654affff';
            link.style.color = '#ffffff';
        });
    }

    // Run initially
    applyPurpleStyles();

    // Observe DOM changes to reapply styles if auth.js modifies the auth section
    const observer = new MutationObserver(applyPurpleStyles);
    observer.observe(document.getElementById('nav-auth-section'), { childList: true, subtree: true });
    observer.observe(document.getElementById('mobile-auth-section'), { childList: true, subtree: true });
});
