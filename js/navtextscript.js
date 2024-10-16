// Attach event listeners to buttons with specific IDs
document.getElementById("mining").addEventListener("click", function() {
    toggleText("MineText");
});

document.getElementById("combat").addEventListener("click", function() {
    toggleText("CombText");
});

document.getElementById("crafting").addEventListener("click", function() {
    toggleText("CraftText");
});

document.getElementById("explore").addEventListener("click", function() {
    toggleText("ExploreText");
});

// Function to toggle visibility of text
function toggleText(activeId) {
    const texts = ["MineText", "CombText", "CraftText", "ExploreText"];
    
    texts.forEach(function(textId) {
        const textElement = document.getElementById(textId);
        if (textId === activeId) {
            if (textElement.classList.contains("textshow")) {
                textElement.classList.remove("textshow"); // Hide if already shown
            } else {
                textElement.classList.add("textshow"); // Show if currently hidden
            }
        } else {
            textElement.classList.remove("textshow"); // Hide the others
        }
    });
}

// Add scroll listener to hide all visible texts on scroll
window.addEventListener('scroll', () => {
    hideAllTexts();
});

// Function to hide all texts
function hideAllTexts() {
    const texts = ["MineText", "CombText", "CraftText", "ExploreText"];
    
    texts.forEach(function(textId) {
        const textElement = document.getElementById(textId);
        textElement.classList.remove("textshow"); // Hide all texts on scroll
    });
}