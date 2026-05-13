// This file contains JavaScript code for the portfolio website. 
// It may include functionality for interactive elements, such as form submissions or animations.

document.addEventListener("DOMContentLoaded", function() {
    // Example: Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Example: Form submission handling
    const form = document.querySelector("#contact-form");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            // Handle form submission logic here
            alert("Form submitted!");
        });
    }
});

// Add header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});