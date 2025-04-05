window.addEventListener('scroll', function () {
    var nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.backgroundColor = '#ffffffcc';


    } else {
        nav.style.backgroundColor = 'transparent';

    }
});

const navToggle = document.querySelector('.nav-links');
const navText = document.querySelector('.nav-toggle');

if (navToggle && navText) {
    navToggle.addEventListener('click', function () {
        this.classList.toggle('active');
        navText.classList.toggle('active');
    });
}    


document.addEventListener('DOMContentLoaded', function () {
            const navToggle = document.getElementById('nav-toggle');
            const navLinks = document.getElementById('nav-links');
            const nav = document.querySelector('nav');

            navToggle.addEventListener('click', function () {
                navLinks.classList.toggle('show');
            });

            window.addEventListener('scroll', function () {
                if (window.scrollY > 0) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            });
        });