// Get all the background layers
let bgLayers = document.querySelectorAll('.bg');
// Get all the tabs
let tabs = document.querySelectorAll('.tab');
// Get the banner title
let bannerTitle = document.querySelector('.banner h1');

// Add a scroll event to the window
window.addEventListener("scroll", function () {
    // Get the current scroll position
    let scrollTop = window.scrollY;

    // Move the background layers for the parallax effect
    for (let i = 0; i < bgLayers.length; i++) {
        let bg = bgLayers[i];
        if (i === 0) {
            // Move the first background layer
            bg.style.transform = "translateY(" + (scrollTop / 3) + "px)";
        } else if (i !== bgLayers.length - 1) {
            // Move other layers (except the last one)
            bg.style.transform = "translateY(" + (scrollTop * i / 2) + "px)";
        }
    }

    // Move the banner title
    bannerTitle.style.transform = "translateY(" + (scrollTop * 2) + "px)";

    // Check if tabs are in view and add 'active' class
    for (let i = 0; i < tabs.length; i++) {
        let tab = tabs[i];
        if (tab.offsetTop - scrollTop < 550) {
            // Add the active class to show animation
            tab.classList.add('active');
        } else {
            // Remove the active class
            tab.classList.remove('active');
        }
    }
});
