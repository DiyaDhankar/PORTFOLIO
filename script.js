// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
    });
}

// Close mobile menu when a link is clicked
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            hamburger.classList.remove('toggle');
        }
    });
});

// Update Current Year in Footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Navbar Scroll Effect and Active Section Highlighting
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    // Navbar background effect
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Active Section Effect
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Typing Effect for Role
const roleText = document.querySelector('.typing-text');
const words = ["B.Tech CSE (AI/ML) Student", "Tech Enthusiast", "Aspiring AI Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeEffect() {
    if(!roleText) return;

    const currentWord = words[wordIndex];
    let displayText = currentWord.substring(0, charIndex);
    
    roleText.textContent = displayText;

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        typeSpeed = 100;
        setTimeout(typeEffect, typeSpeed);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        typeSpeed = 50;
        setTimeout(typeEffect, typeSpeed);
    } else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        typeSpeed = isDeleting ? 2000 : 500; // Pause before deleting or moving to next word
        setTimeout(typeEffect, typeSpeed);
    }
}

// Initialize typing effect after a small delay
setTimeout(typeEffect, 1000);

// Simple Form Handling (Prevent Default)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
        
        // Simulate sending
        setTimeout(() => {
            submitBtn.innerHTML = 'Sent Successfully! <i class="fa-solid fa-check"></i>';
            submitBtn.style.background = '#10b981'; // Green color
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = ''; // reset to default
            }, 3000);
        }, 1500);
    });
}
