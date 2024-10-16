const navIcons = document.querySelectorAll('.nav-icon');

// Add scroll listener to close menu on scroll
window.addEventListener('scroll', () => {
    closeAllMenus();
});

navIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        // Collapse other expanded menus
        navIcons.forEach(otherIcon => {
            if (otherIcon !== icon && otherIcon.classList.contains('expanded')) {
                otherIcon.classList.remove('expanded');
                removeBlur();
            }
        });

        // Toggle the 'expanded' class for the clicked icon
        this.classList.toggle('expanded');

        // If the current icon is closing, add 'collapsing' class and remove blur
        if (!this.classList.contains('expanded')) {
            this.classList.add('collapsing');
            removeBlur();
            setTimeout(() => {
                this.classList.remove('collapsing');
            }, 300); // Match collapse animation duration
        } else {
            // If expanding, add blur
            addBlur();
        }
    });
});

// Function to close all menus
function closeAllMenus() {
    navIcons.forEach(icon => {
        if (icon.classList.contains('expanded')) {
            icon.classList.remove('expanded');
            removeBlur();
        }
    });
}

// Function to add blur to the background
function addBlur() {
    document.body.classList.add('blurred-background');
}

// Function to remove blur from the background
function removeBlur() {
    document.body.classList.remove('blurred-background');
}