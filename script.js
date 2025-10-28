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
    //ตัวนี้เอาไว้ถ้าไม่อยากให้มันเเสดงซ้ำตอนเลื้อนขึ้นลง ก็Commentสะ
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
    strings: ['Frontend Website Developer', 'Prompt Engineering', 'Backend Website Developer', 'Fullstack Website Developer' , 'Vibe Website Developer' ],
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

// Carousel Logic (ปรับสำหรับ Certificate - เพิ่ม description)
const slides = [
    { src: "img/00.jpg", pdfPath: "img/00.jpg", title: "Gemini Certified Educator", description: "Certificate from Google for Education, awarded for demonstrating the knowledge, skills, and basic competencies needed to use Google AI in education. Issued on 16/09/2025, valid through 15/09/2028.", button: "View PDF" },
    { src: "img/01.png", pdfPath: "img/01.png", title: "Basic Prompt Engineering", description: "Verified certificate from Mahidol University (CBTU) for successfully completing the Basic Prompt Engineering course with passing grade. Completed on October 5, 2025. Instructor: Tawesak Samanchuen, Ph.D.", button: "View PDF" },
    { src: "img/10.png", pdfPath: "img/10.png", title: "Generative AI ChatGPT Course", description: "Certificate from Kasetsart University for completing the Generative AI ChatGPT course, awarded to Somprasong Wasuwid on November 5, 2025.", button: "View PDF" },
    { src: "img/11.png", pdfPath: "img/11.png", title: "AI for All: From Basics to GenAI Practice ", description: "NVIDIA Deep Learning Institute Certificate of Completion for successfully completing the AI for All: From Basics to GenAI Practice course, issued in October 2025.", button: "View PDF" },
];

let current = 0;
let ul; // global for ul

function handleMouseMove(e) {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.setProperty('--x', `${x}px`);
    el.style.setProperty('--y', `${y}px`);
}

function handleMouseLeave(e) {
    e.currentTarget.style.setProperty('--x', '0px');
    e.currentTarget.style.setProperty('--y', '0px');
}

function imageLoaded(e) {
    e.target.style.opacity = '1';
}

function handleSlideClick(e) {
    const link = e.target.closest('a.project-btn'); // เปลี่ยนจาก button เป็น a tag
    if (link) return; // ถ้ากดลิงก์ View PDF ไม่เปลี่ยน slide
    const index = parseInt(e.currentTarget.dataset.index);
    if (index !== current) {
        setCurrent(index);
    }
}

function handlePreviousClick() {
    let prev = current - 1;
    setCurrent(prev < 0 ? slides.length - 1 : prev);
}

function handleNextClick() {
    let next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
}

function setCurrent(idx) {
    current = idx;
    updateCarousel();
}

function updateCarousel() {
    const numSlides = slides.length;
    ul.style.transform = `translateX(-${current * (100 / numSlides)}%)`;

    document.querySelectorAll('.slide').forEach((slideEl, i) => {
        const isActive = i === current;
        if (isActive) {
            slideEl.style.transform = 'scale(1) rotateX(0deg)';
        } else {
            slideEl.style.transform = 'scale(0.98) rotateX(8deg)';
        }

        const bgLayer = slideEl.querySelector('.bg-layer');
        const overlay = slideEl.querySelector('.overlay');
        const img = slideEl.querySelector('.slide-img');
        const content = slideEl.querySelector('.content');

        if (isActive) {
            bgLayer.style.transform = 'translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)';
            overlay.style.opacity = '1';
            img.style.opacity = '1';
            content.classList.add('active');
        } else {
            bgLayer.style.transform = 'none';
            overlay.style.opacity = '0';
            img.style.opacity = '0.5';
            content.classList.remove('active');
        }
    });
}

function initCarousel() {
    const wrapper = document.querySelector('.carousel-wrapper');
    if (!wrapper) return;

    ul = document.querySelector('.carousel-slides');
    ul.innerHTML = ''; // ล้างก่อน

    slides.forEach((slideData, index) => {
        const perspective = document.createElement('div');
        perspective.className = 'perspective';

        const li = document.createElement('li');
        li.className = 'slide';
        li.dataset.index = index;
        li.innerHTML = `
            <div class="bg-layer">
                <img class="slide-img" src="${slideData.src}" alt="${slideData.title}" loading="eager" decoding="sync">
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

        // เพิ่ม event listeners
        li.addEventListener('mousemove', handleMouseMove);
        li.addEventListener('mouseleave', handleMouseLeave);
        li.addEventListener('click', handleSlideClick);

        // Image load
        const img = li.querySelector('.slide-img');
        if (img.complete) {
            imageLoaded({ target: img });
        } else {
            img.addEventListener('load', imageLoaded);
        }

        perspective.appendChild(li);
        ul.appendChild(perspective);
    });

    // Controls
    document.querySelector('.control.previous').addEventListener('click', handlePreviousClick);
    document.querySelector('.control.next').addEventListener('click', handleNextClick);

    // Init first slide
    setCurrent(0);
}

// เรียก initCarousel ที่นี่ (หลัง DOM load)
document.addEventListener('DOMContentLoaded', initCarousel);