// Database functionality using localStorage
const DB_NAME = 'portfolio_db';

// Initialize the database
function initDB() {
    if (!localStorage.getItem(DB_NAME)) {
        const projects = [
            {
                id: 1,
                title: "E-Commerce Website",
                description: "A fully responsive e-commerce platform with product filtering and cart functionality.",
                image: "images/project1.jpg",
                technologies: ["HTML", "CSS", "JavaScript", "React"],
                demoLink: "#",
                codeLink: "#"
            },
            {
                id: 2,
                title: "Task Management App",
                description: "A productivity app for managing daily tasks with drag-and-drop functionality.",
                image: "images/project1.jpg",
                technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
                demoLink: "#",
                codeLink: "#"
            },
            {
                id: 3,
                title: "Weather Dashboard",
                description: "Real-time weather information with 5-day forecast using weather API.",
                image: "images/project1.jpg",
                technologies: ["HTML", "CSS", "JavaScript", "API"],
                demoLink: "#",
                codeLink: "#"
            }
        ];
        localStorage.setItem(DB_NAME, JSON.stringify(projects));
    }
}

// Get all projects from database
function getProjects() {
    return JSON.parse(localStorage.getItem(DB_NAME)) || [];
}

// Render projects to the DOM
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const projects = getProjects();

    if (projects.length === 0) {
        projectsGrid.innerHTML = '<p>No projects to display.</p>';
        return;
    }

    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-img">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.demoLink}" target="_blank">Live Demo</a>
                    <a href="${project.codeLink}" target="_blank">View Code</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const contactData = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        timestamp: new Date().toISOString()
    };

    // In a real app, you would send this to a server
    console.log('Form submitted:', contactData);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
}

// Initialize the app
function initApp() {
    // Initialize database
    initDB();
    
    // Render projects
    renderProjects();
    
    // Setup event listeners
    document.getElementById('contactForm').addEventListener('submit', handleContactForm);
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navLinks.classList.remove('active');
        });
    });
    
    // Show/hide back to top button
    window.addEventListener('scroll', () => {
        const backToTop = document.querySelector('.back-to-top');
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);