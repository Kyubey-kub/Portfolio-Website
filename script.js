//toggle icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll section active link
let sections = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlink.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //Remove toggle icon && navbar (When you click navbar link (Scroll) )
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

//scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Website Developer', 'Prompt Engineering', 'Backend Website Developer', 'Fullstack Website Developer', 'Vibe Website Developer'],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 180,
    loop: true
});

const typed2 = new Typed('.multiple-text2', {
    strings: ['Download CV'],
    typeSpeed: 180,
    backSpeed: 99999999,
    backDelay: 180,
    loop: true
});

// Adding Css animetion !!!
function animateSequence() {
    var a = document.getElementsByClassName('sequence');
    for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var str = '';
        var delay = 100;
        for (l = 0; l < letter.length; l++) {
            if (letter[l] != ' ') {
                str += '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[l] + '</span>';
                delay += 150;
            } else str += letter[l];
        }
        $this.innerHTML = str;
    }
}

function animateRandom() {
    var a = document.getElementsByClassName('random');
    for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var delay = 70;
        var delayArray = new Array;
        var randLetter = new Array;
        for (j = 0; j < letter.length; j++) {
            while (1) {
                var random = getRandomInt(0, (letter.length - 1));
                if (delayArray.indexOf(random) == -1) break;
            }
            delayArray[j] = random;
        }
        for (l = 0; l < delayArray.length; l++) {
            var str = '';
            var index = delayArray[l];
            if (letter[index] != ' ') {
                str = '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[index] + '</span>';
                randLetter[index] = str;
            } else randLetter[index] = letter[index];
            delay += 80;
        }
        randLetter = randLetter.join("");
        $this.innerHTML = randLetter;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ===============================================
// ENHANCED CAROUSEL LOGIC - FULLY RESPONSIVE
// ===============================================

const slides = [
    { src: "img/00.jpg", pdfPath: "img/00.jpg", title: "Gemini Certified Educator", description: "Certificate from Google for Education, awarded for demonstrating the knowledge, skills, and basic competencies needed to use Google AI in education. Issued on 16/09/2025, valid through 15/09/2028.", button: "View PDF" },
    { src: "img/01.png", pdfPath: "img/01.png", title: "Basic Prompt Engineering", description: "Verified certificate from Mahidol University (CBTU) for successfully completing the Basic Prompt Engineering course with passing grade. Completed on October 5, 2025. Instructor: Tawesak Samanchuen, Ph.D.", button: "View PDF" },
    { src: "img/10.png", pdfPath: "img/10.png", title: "Generative AI ChatGPT Course", description: "Certificate from Kasetsart University for completing the Generative AI ChatGPT course, awarded to Somprasong Wasuwid on November 5, 2025.", button: "View PDF" },
    { src: "img/11.png", pdfPath: "img/11.png", title: "AI for All: From Basics to GenAI Practice", description: "NVIDIA Deep Learning Institute Certificate of Completion for successfully completing the AI for All: From Basics to GenAI Practice course, issued in October 2025.", button: "View PDF" },
    { src: "img/CCNA.png", pdfPath: "img/CCNA.pdf", title: "CCNA: Introduction to Networks", description: "Cisco Networking Academy | Rajamangala University of Technology Phra Nakhon | Completed: November 2025", button: "View PDF" },
    { src: "img/SQL.png", pdfPath: "img/SQL.pdf", title: "Introduction to SQL", description: "Certificate in SQL fundamentals covering core database concepts and query operations. This certification demonstrates proficiency in basic SQL syntax, data manipulation, table operations, and essential database management skills.", button: "View PDF"},
    { src: "img/Cybersecurity.png", pdfPath: "img/Cybersecurity.pdf", title: "Introduction to Cybersecurity", description: "Received a certificate from Cisco Networking Academy for completing the Introduction to Cybersecurity course on December 12, 2025, which provides fundamental knowledge in cybersecurity.", button: "View PDF"},
];

let current = 0;
let ul;
let touchStartX = 0;
let touchEndX = 0;

function setCurrent(idx) {
    if (idx < 0) idx = slides.length - 1;
    if (idx >= slides.length) idx = 0;
    current = idx;
    updateCarousel();
}

function updateCarousel() {
    // Smooth scroll to the current slide
    ul.style.transform = `translateX(-${current * 100}%)`;
    
    // Update slide states
    document.querySelectorAll('.slide').forEach((slideEl, i) => {
        const isActive = i === current;
        
        if (isActive) {
            slideEl.classList.add('active');
            slideEl.style.transform = 'scale(1)';
        } else {
            slideEl.classList.remove('active');
            slideEl.style.transform = 'scale(0.95)';
        }
        
        const content = slideEl.querySelector('.content');
        if (content) {
            if (isActive) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        }
    });
}

function handlePreviousClick() {
    setCurrent(current - 1);
}

function handleNextClick() {
    setCurrent(current + 1);
}

function handleSlideClick(e) {
    const link = e.target.closest('a.project-btn');
    if (link) return; // Don't change slide if clicking the View PDF button
    
    const index = parseInt(e.currentTarget.dataset.index);
    if (index !== current) {
        setCurrent(index);
    }
}

function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    
    // Swipe left (next)
    if (touchEndX < touchStartX - 50) {
        handleNextClick();
    }
    // Swipe right (previous)
    if (touchEndX > touchStartX + 50) {
        handlePreviousClick();
    }
}

function initCarousel() {
    const wrapper = document.querySelector('.carousel-wrapper');
    if (!wrapper) return;

    ul = document.querySelector('.carousel-slides');
    ul.innerHTML = ''; // Clear existing content

    // Create slides
    slides.forEach((slideData, index) => {
        const perspective = document.createElement('div');
        perspective.className = 'perspective';

        const li = document.createElement('li');
        li.className = 'slide';
        li.dataset.index = index;
        li.innerHTML = `
            <div class="bg-layer">
                <img class="slide-img" src="${slideData.src}" alt="${slideData.title}" loading="eager">
                <div class="overlay"></div>
            </div>
            <article class="content">
                <h2 class="slide-title">${slideData.title}</h2>
                <p class="description">${slideData.description}</p>
                <div style="display: flex; justify-content: center;">
                    <a href="${slideData.pdfPath}" target="_blank" class="project-btn">${slideData.button}</a>
                </div>
            </article>
        `;

        // Add event listeners
        li.addEventListener('click', handleSlideClick);
        li.addEventListener('touchstart', handleTouchStart, { passive: true });
        li.addEventListener('touchend', handleTouchEnd, { passive: true });

        perspective.appendChild(li);
        ul.appendChild(perspective);
    });

    // Setup controls
    document.querySelector('.control.previous').addEventListener('click', handlePreviousClick);
    document.querySelector('.control.next').addEventListener('click', handleNextClick);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') handlePreviousClick();
        if (e.key === 'ArrowRight') handleNextClick();
    });

    // Initialize first slide
    setCurrent(0);
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', initCarousel);
