// script.js

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var sections = document.querySelectorAll('section');
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    // Add or remove the 'scrolled' class for the navbar
    if (scrollPosition > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Highlight the active section in the navbar and adjust the indicator
    sections.forEach(function(section) {
        var sectionTop = section.offsetTop - navbar.offsetHeight;
        var sectionHeight = section.clientHeight;
        var id = section.getAttribute('id');

        // Buffer value to ensure the last section triggers the scroll event
        var buffer = 200;

        if (scrollPosition >= sectionTop - buffer && scrollPosition < sectionTop + sectionHeight - buffer) {
            var activeLink = document.querySelector('#navbar ul li a[href="#' + id + '"]');
            document.querySelector('#navbar ul li a.active').classList.remove('active');
            activeLink.classList.add('active');

            // Move the indicator
            var indicator = document.querySelector('#navbar .indicator');
            var linkRect = activeLink.getBoundingClientRect();
            var navbarRect = navbar.getBoundingClientRect();
            indicator.style.width = linkRect.width + 'px';
            indicator.style.left = (linkRect.left - navbarRect.left) + 'px';
        }

        // Check if the section is in view and add the fade-in effect
        var contentBlock = section.querySelector('.content-block');
        if (scrollPosition >= sectionTop - window.innerHeight * 0.8) {
            contentBlock.classList.add('fade-in');
        }
    });
});

// Ensure the first section is highlighted and the indicator is positioned correctly on page load
window.addEventListener('load', function() {
    var activeLink = document.querySelector('#navbar ul li a.active');
    var indicator = document.querySelector('#navbar .indicator');
    var linkRect = activeLink.getBoundingClientRect();
    var navbarRect = navbar.getBoundingClientRect();
    indicator.style.width = linkRect.width + 'px';
    indicator.style.left = (linkRect.left - navbarRect.left) + 'px';
});
