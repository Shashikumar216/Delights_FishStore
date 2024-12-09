// Elements
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// Ensure menu is hidden on page load
document.addEventListener('DOMContentLoaded', () => {
    navMenu.classList.remove('show-menu'); // Hide menu by default
    localStorage.getItem('menuOpen') === 'true'
        ? navMenu.classList.add('show-menu') // Restore menu state
        : navMenu.classList.remove('show-menu');
});

// Menu SHOW
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        localStorage.setItem('menuOpen', 'true'); // Save state
    });
}

// Menu HIDDEN
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        localStorage.setItem('menuOpen', 'false'); // Save state
    });
}

// Remove menu on mobile when a link is clicked
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
    navMenu.classList.remove('show-menu');
    localStorage.setItem('menuOpen', 'false'); // Save state
};
navLink.forEach((n) => n.addEventListener('click', linkAction));

// Add blur to header on scroll
const blurHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 50
        ? header.classList.add('blur-header')
        : header.classList.remove('blur-header');
};
window.addEventListener('scroll', blurHeader);

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav__link');
    const currentPath = window.location.pathname;

    navLinks.forEach((link) => {
        // Get the href of each link and compare it with the current path
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });
});

 
//---------------------MAIN-------------------------//
function getStarted() {
    window.location.href = '#';
}

// Array of fish images
const fishImages = ['a2.png', 'a1.png', 'a3.png','a4.png','a5.png','a6.png','a7.png','a8.png']; // Add more fish images as needed

// Function to create and animate fish
function createFish() {
    const fishContainer = document.querySelector('.hero');
    const maxFishCount = 5; // Maximum number of fishes allowed

    // Check the current number of fishes
    const currentFishCount = fishContainer.querySelectorAll('.fish').length;
    if (currentFishCount >= maxFishCount) {
        return; // Do not create a new fish if the maximum count is reached
    }

    const fish = document.createElement('img');
    
    // Randomly select a fish image
    const randomFishImage = fishImages[Math.floor(Math.random() * fishImages.length)];
    fish.src = randomFishImage;
    fish.classList.add('fish');

    // Randomly set the starting position of the fish
    fish.style.top = `${Math.random() * 40 + 10}%`;
    fish.style.animationDuration = `${Math.random() * 5 + 5}s`;

    fishContainer.appendChild(fish);

    // Remove the fish after the animation is complete
    fish.addEventListener('animationend', () => {
        fish.remove();
    });
}

// Create fishes at random intervals
setInterval(createFish, 6000); // Increase interval to decrease fish appearance
 