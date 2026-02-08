const typingTexts = ['Full Stack Developer', 'Creative Technologist', 'Digital Innovator', 'Problem Solver'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const currentText = typingTexts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeText, typingSpeed);
}

function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCount = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.ceil(current);
                requestAnimationFrame(updateCount);
            } else {
                stat.textContent = target;
            }
        };
        
        updateCount();
    });
}

function initTiltEffect() {
    const cards = document.querySelectorAll('[data-tilt]');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

function changeBgOnScroll() {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollY / maxScroll;
    
    const bgAnimation = document.querySelector('.bg-animation');
    if (!bgAnimation) return;
    
    const hue1 = 160 + (scrollPercent * 60);
    const hue2 = 190 + (scrollPercent * 80);
    const hue3 = 330 + (scrollPercent * 40);
    
    bgAnimation.style.background = `
        radial-gradient(circle at ${20 + scrollPercent * 60}% 50%, hsla(${hue1}, 100%, 50%, 0.1) 0%, transparent 50%),
        radial-gradient(circle at ${80 - scrollPercent * 30}% 80%, hsla(${hue2}, 100%, 50%, 0.1) 0%, transparent 50%),
        radial-gradient(circle at ${40 + scrollPercent * 20}% 20%, hsla(${hue3}, 100%, 50%, 0.1) 0%, transparent 50%)
    `;
}

function handleContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formMessage = document.getElementById('formMessage');
        const submitButton = form.querySelector('.submit-button');
        
        const email = document.getElementById('email').value;
        const company = document.getElementById('company').value;
        const message = document.getElementById('message').value;
        
        submitButton.disabled = true;
        submitButton.querySelector('.button-text').textContent = 'SENDING...';
        
        setTimeout(() => {
            formMessage.textContent = 'Message sent successfully! I will get back to you soon.';
            formMessage.className = 'form-message success';
            form.reset();
            
            submitButton.disabled = false;
            submitButton.querySelector('.button-text').textContent = 'SEND MESSAGE';
            
            setTimeout(() => {
                formMessage.className = 'form-message';
            }, 5000);
        }, 1500);
    });
}

function initParallax() {
    const heroContent = document.querySelector('.hero-content');
    if (!heroContent) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (scrolled < 800) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroContent.style.opacity = 1 - (scrolled / 500);
        }
    });
}

function renderProjects() {
    const featuredGrid = document.getElementById('featuredProjectsGrid');
    const allProjectsGrid = document.getElementById('allProjectsGrid');
    
    if (featuredGrid) {
        const featured = projectsData.slice(0, 3);
        featuredGrid.innerHTML = featured.map(project => createProjectCard(project)).join('');
    }
    
    if (allProjectsGrid) {
        allProjectsGrid.innerHTML = projectsData.map(project => createProjectCard(project)).join('');
    }
    
    setTimeout(() => {
        initTiltEffect();
    }, 100);
}

function createProjectCard(project) {
    return `
        <div class="project-card" data-tilt>
            <div class="card-glow"></div>
            <a href="${project.link}" target="_blank" rel="noopener noreferrer">
                <img src="${project.thumbnail}" alt="${project.name}" loading="lazy">
                <div class="card-overlay">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                </div>
            </a>
        </div>
    `;
}

function renderCollaborations() {
    const collaborationGrid = document.getElementById('collaborationGrid');
    
    if (collaborationGrid) {
        collaborationGrid.innerHTML = collaborationsData.map(collab => createCollabCard(collab)).join('');
    }
    
    setTimeout(() => {
        initTiltEffect();
    }, 100);
}

function createCollabCard(collab) {
    return `
        <div class="collab-card" data-tilt>
            <div class="card-glow"></div>
            <a href="${collab.link}" target="_blank" rel="noopener noreferrer">
                <img src="${collab.logo}" alt="${collab.company_name}" loading="lazy">
                <h3>${collab.company_name}</h3>
            </a>
        </div>
    `;
}

function switchPage(pageName) {
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-link');
    
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    const targetPage = document.getElementById(pageName);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    const targetLink = document.querySelector(`[data-page="${pageName}"]`);
    if (targetLink) {
        targetLink.classList.add('active');
    }
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            switchPage(page);
            
            if (history.pushState) {
                history.pushState(null, null, `#${page}`);
            }
        });
    });
    
    const hash = window.location.hash.substring(1);
    if (hash && ['home', 'projects', 'collaboration'].includes(hash)) {
        switchPage(hash);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderCollaborations();
    
    typeText();
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.classList.contains('hero-stats')) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    });
    
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
    
    initParallax();
    handleContactForm();
    initNavigation();
    
    window.addEventListener('scroll', changeBgOnScroll);
    
    const cards = document.querySelectorAll('.project-card, .collab-card');
    cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
        card.style.opacity = '0';
    });
});

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});