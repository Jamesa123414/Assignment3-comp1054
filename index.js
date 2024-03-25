// Enforcing strict mode for safer code and to catch common mistakes "use strict";

document.addEventListener('DOMContentLoaded', function () {
    // Target the hero element for interactive behavior
    var hero = document.getElementById('hero');

    // Change hero background on mouseover
    hero.addEventListener('mouseover', function () {
        hero.style.backgroundImage = "url('/img/choco-bliss-hero-hover.jpg')";
    });

    // Revert hero background on mouseout
    hero.addEventListener('mouseout', function () {
        hero.style.backgroundImage = "url('/img/choco-bliss-hero.jpg')";
    });

    // Implement smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic visibility for the history section upon scrolling
    var historySection = document.getElementById('history');
    window.addEventListener('scroll', function() {
        var sectionPos = historySection.getBoundingClientRect().top;
        var screenPos = window.innerHeight / 1.3;
        if (sectionPos < screenPos) {
            historySection.style.opacity = 1;
            historySection.style.transform = "translateX(0)";
        }
    });

    // Basic form validation placeholder - to be replaced with actual validation logic
    var contactForm = document.getElementById('contact');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add actual validation logic here
        alert('Form Submitted Successfully!');
    });
});
