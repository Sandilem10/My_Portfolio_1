# My Portfolio

## index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio | Hackathon Project</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <header id="header">
        <div class="container">
            <h1 class="logo">Portfolio</h1>
            <nav>
                <ul class="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div class="hamburger">
                    <i class="fas fa-bars"></i>
                </div>
            </nav>
        </div>
    </header>

    <main>
        <!-- Home Section -->
        <section id="home" class="hero">
            <div class="container">
                <div class="hero-content">
                    <h1>Hi, I'm <span class="highlight">Sandile</span></h1>
                    <h2>Web Developer</h2>
                    <p>Creating beautiful, functional websites</p>
                    <a href="#projects" class="btn">View My Work</a>
                </div>
                <div class="hero-image">
                    <img src="images/profile.jpg" alt="Profile Picture">
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="section">
            <div class="container">
                <h2 class="section-title">About Me</h2>
                <div class="about-content">
                    <div class="about-text">
                        <h3>My Journey</h3>
                        <p>I'm an aspiring web developer and software engineer with a passion for building innovative and user-friendly digital experiences.</p>
                        <p>When I'm not coding, i enjoy playing soccer, diving into videogames and staying up-to-date with the latest tech trends through vlogs and tech magazine.</p>
                    </div>
                    <div class="skills">
                        <h3>My Skills</h3>
                        <div class="skill-bars">
                            <div class="skill">
                                <p>HTML/CSS</p>
                                <div class="bar">
                                    <div class="level html">90%</div>
                                </div>
                            </div>
                            <div class="skill">
                                <p>JavaScript</p>
                                <div class="bar">
                                    <div class="level js">85%</div>
                                </div>
                            </div>
                            <div class="skill">
                                <p>React</p>
                                <div class="bar">
                                    <div class="level react">75%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="section">
            <div class="container">
                <h2 class="section-title">My Projects</h2>
                <div class="projects-grid" id="projectsGrid">
                    <!-- Projects will be loaded from database -->
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="section">
            <div class="container">
                <h2 class="section-title">Get In Touch</h2>
                <div class="contact-content">
                    <form id="contactForm" class="contact-form">
                        <div class="form-group">
                            <input type="text" id="name" name="name" placeholder="Your Name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" id="email" name="email" placeholder="Your Email" required>
                        </div>
                        <div class="form-group">
                            <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" class="btn">Send Message</button>
                    </form>
                    <div class="contact-info">
                        <h3>Contact Information</h3>
                        <p><i class="fas fa-envelope"></i> matsendzingeko@gmail.com</p>
                        <p><i class="fas fa-phone"></i> + (268) 7820 3892</p>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-github"></i></a>
                            <a href="#"><i class="fab fa-linkedin"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 My Portfolio. All rights reserved.</p>
            <a href="#home" class="back-to-top"><i class="fas fa-arrow-up"></i></a>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>

</details> <details>
<summary>style.css</summary>

## Style.CSS

/* Base Styles */
:root {
    --primary: #4361ee;
    --secondary: #3f37c9;
    --accent: #4895ef;
    --light: #f8f9fa;
    --dark: #212529;
    --gray: #6c757d;
    --light-gray: #e9ecef;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--dark);
    background-color: #fff;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header Styles */
#header {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    z-index: 1000;
    padding: 15px 0;
}

.logo {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--primary);
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li {
    margin-left: 30px;
}

.nav-links a {
    text-decoration: none;
    color: var(--dark);
    font-weight: 500;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: var(--primary);
}

.hamburger {
    display: none;
    cursor: pointer;
}

/* Hero Section */
.hero {
    padding: 150px 0 100px;
    background-color: var(--light);
}

.hero-content {
    max-width: 600px;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 15px;
}

.hero h2 {
    font-size: 1.8rem;
    color: var(--gray);
    margin-bottom: 20px;
    font-weight: 400;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 30px;
}

.highlight {
    color: var(--primary);
}

.btn {
    display: inline-block;
    background-color: var(--primary);
    color: white;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
}

.btn:hover {
    background-color: var(--secondary);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.hero-image img {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* About Section */
.section {
    padding: 100px 0;
}

.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 60px;
    color: var(--primary);
}

.about-content {
    display: flex;
    gap: 50px;
    align-items: center;
}

.about-text {
    flex: 1;
}

.about-text h3 {
    font-size: 1.8rem;
    margin-bottom: 20px;
}

.about-text p {
    margin-bottom: 15px;
    color: var(--gray);
}

.skills {
    flex: 1;
}

.skill-bars {
    margin-top: 30px;
}

.skill {
    margin-bottom: 20px;
}

.skill p {
    margin-bottom: 5px;
    font-weight: 500;
}

.bar {
    height: 10px;
    background-color: var(--light-gray);
    border-radius: 5px;
    overflow: hidden;
}

.level {
    height: 100%;
    border-radius: 5px;
}

.html {
    width: 90%;
    background-color: var(--primary);
}

.js {
    width: 85%;
    background-color: var(--accent);
}

.react {
    width: 75%;
    background-color: #61dafb;
}

/* Projects Section */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
}

.project-card {
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.project-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.project-info {
    padding: 20px;
}

.project-info h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
}

.project-info p {
    color: var(--gray);
    margin-bottom: 15px;
}

.project-links a {
    margin-right: 15px;
    color: var(--primary);
    text-decoration: none;
    font-weight: 500;
}

/* Contact Section */
.contact-content {
    display: flex;
    gap: 50px;
}

.contact-form {
    flex: 1;
}

.form-group {
    margin-bottom: 20px;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-family: inherit;
    font-size: 1rem;
}

.form-group textarea {
    height: 150px;
    resize: vertical;
}

.contact-info {
    flex: 1;
}

.contact-info h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
}

.contact-info p {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
}

.contact-info i {
    margin-right: 10px;
    color: var(--primary);
}

.social-links {
    margin-top: 20px;
}

.social-links a {
    display: inline-block;
    margin-right: 15px;
    font-size: 1.5rem;
    color: var(--primary);
    transition: all 0.3s;
}

.social-links a:hover {
    transform: translateY(-3px);
    color: var(--secondary);
}

/* Footer */
.footer {
    background-color: var(--dark);
    color: white;
    padding: 30px 0;
    text-align: center;
}

.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: var(--primary);
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
}

.back-to-top:hover {
    background-color: var(--secondary);
    transform: translateY(-3px);
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-links {
        display: none;
    }

    .hamburger {
        display: block;
    }

    .hero {
        padding: 120px 0 80px;
        text-align: center;
    }

    .hero-content {
        margin-bottom: 40px;
    }

    .about-content, .contact-content {
        flex-direction: column;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }
}

</details> <details>
<summary>script.js</summary>

## Script.js

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

