// Smooth scrolling functionality
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Service modal functionality
const serviceData = {
    'cloud-consulting': {
        icon: 'fas fa-cloud',
        title: 'Cloud Consulting',
        description: 'Accelerate your digital transformation with our comprehensive cloud consulting services. We help organizations migrate, optimize, and secure their cloud infrastructure for maximum efficiency and cost-effectiveness.',
        features: [
            'Cloud migration strategy and execution',
            'Multi-cloud and hybrid cloud architecture',
            'Cloud cost optimization and governance',
            'Security and compliance frameworks',
            'Performance monitoring and optimization'
        ]
    },
    'ai-transformation': {
        icon: 'fas fa-robot',
        title: 'AI Transformation',
        description: 'Transform your business processes with cutting-edge artificial intelligence solutions. Our AI transformation services help you leverage machine learning, automation, and intelligent analytics to drive innovation.',
        features: [
            'AI strategy development and roadmap',
            'Machine learning model development',
            'Natural language processing solutions',
            'Computer vision implementations',
            'AI ethics and governance frameworks'
        ]
    },
    'data-analytics': {
        icon: 'fas fa-chart-line',
        title: 'Data Analytics & Platform',
        description: 'Unlock the power of your data with advanced analytics platforms and business intelligence solutions. Turn raw data into actionable insights that drive strategic decision-making.',
        features: [
            'Data warehouse design and implementation',
            'Real-time analytics and dashboards',
            'Predictive analytics and forecasting',
            'Data visualization and reporting',
            'Data governance and quality management'
        ]
    },
    'ai-automation': {
        icon: 'fas fa-cogs',
        title: 'AI Business Process Automation',
        description: 'Streamline your operations with intelligent automation solutions. Our RPA and AI-powered automation services reduce manual work, improve accuracy, and accelerate business processes.',
        features: [
            'Robotic Process Automation (RPA)',
            'Intelligent document processing',
            'Workflow automation and optimization',
            'Chatbots and virtual assistants',
            'Process mining and optimization'
        ]
    },
    'staff-augmentation': {
        icon: 'fas fa-users',
        title: 'Staff Augmented Resourcing',
        description: 'Access top-tier technology talent to accelerate your projects. Our staff augmentation services provide skilled professionals who integrate seamlessly with your existing teams.',
        features: [
            'Skilled technology professionals',
            'Flexible engagement models',
            'Quick onboarding and integration',
            'Specialized expertise across domains',
            'Scalable team expansion'
        ]
    },
    'hybrid-cloud': {
        icon: 'fas fa-network-wired',
        title: 'Hybrid & Multi-Cloud Transformation',
        description: 'Design and implement flexible cloud architectures that span multiple environments. Our hybrid and multi-cloud solutions provide optimal performance, cost-efficiency, and risk mitigation.',
        features: [
            'Hybrid cloud architecture design',
            'Multi-cloud strategy and governance',
            'Cloud interconnectivity solutions',
            'Workload placement optimization',
            'Cross-cloud security and compliance'
        ]
    },
    'data-migration': {
        icon: 'fas fa-exchange-alt',
        title: 'Data Migration',
        description: 'Ensure secure and efficient data migration with minimal downtime. Our proven methodologies and tools guarantee data integrity throughout the migration process.',
        features: [
            'Migration strategy and planning',
            'Data assessment and cleansing',
            'Zero-downtime migration techniques',
            'Data validation and reconciliation',
            'Post-migration optimization'
        ]
    },
    'business-intelligence': {
        icon: 'fas fa-lightbulb',
        title: 'Business Intelligence',
        description: 'Transform raw data into strategic business insights with our comprehensive BI solutions. Enable data-driven decision-making across your organization.',
        features: [
            'BI strategy and architecture',
            'Interactive dashboards and reports',
            'Self-service analytics platforms',
            'Data modeling and warehousing',
            'Performance KPI tracking'
        ]
    },
    'it-transformation': {
        icon: 'fas fa-microchip',
        title: 'IT & OT Transformation',
        description: 'Modernize your IT and operational technology infrastructure for the digital age. Our transformation services align technology with business objectives for maximum value.',
        features: [
            'Legacy system modernization',
            'IT infrastructure optimization',
            'Operational technology integration',
            'Digital workplace solutions',
            'Technology governance frameworks'
        ]
    },
    'sustainability': {
        icon: 'fas fa-leaf',
        title: 'Sustainability Journey',
        description: 'Achieve your sustainability goals with green technology solutions and practices. Our sustainability consulting helps reduce environmental impact while improving operational efficiency.',
        features: [
            'Green technology implementations',
            'Carbon footprint reduction strategies',
            'Sustainable IT practices',
            'Energy efficiency optimization',
            'ESG reporting and compliance'
        ]
    },
    'developer-productivity': {
        icon: 'fas fa-code',
        title: 'Developer Productivity',
        description: 'Enhance your development teams\' efficiency with modern tools, practices, and methodologies. Accelerate software delivery while maintaining high quality standards.',
        features: [
            'DevOps and CI/CD implementation',
            'Development workflow optimization',
            'Code quality and testing automation',
            'Developer tools and platforms',
            'Agile methodology adoption'
        ]
    },
    'smart-agriculture': {
        icon: 'fas fa-seedling',
        title: 'Smart Agriculture',
        description: 'Revolutionize agricultural practices with IoT, AI, and precision farming technologies. Our smart agriculture solutions optimize crop yields and resource utilization.',
        features: [
            'IoT sensors and monitoring systems',
            'Precision farming techniques',
            'Crop yield prediction models',
            'Automated irrigation systems',
            'Supply chain optimization'
        ]
    },
    'workplace-automation': {
        icon: 'fas fa-building',
        title: 'Workplace Automation',
        description: 'Create intelligent, efficient workplaces with automation and smart building technologies. Enhance employee productivity and reduce operational costs.',
        features: [
            'Smart building automation',
            'Workplace analytics and optimization',
            'Employee experience platforms',
            'Facilities management automation',
            'Energy management systems'
        ]
    },
    'cloud-training': {
        icon: 'fas fa-graduation-cap',
        title: 'Cloud & AI Training',
        description: 'Empower your workforce with comprehensive cloud and AI training programs. Build internal capabilities for sustainable digital transformation.',
        features: [
            'Customized training curricula',
            'Hands-on lab environments',
            'Certification preparation programs',
            'Skills assessment and tracking',
            'Continuous learning platforms'
        ]
    }
};

// Modal functionality
const modal = document.getElementById('serviceModal');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalFeatures = document.getElementById('modalFeatures');
const closeBtn = document.querySelector('.close');

function openModal(serviceKey) {
    const service = serviceData[serviceKey];
    if (service) {
        modalIcon.className = service.icon;
        modalTitle.textContent = service.title;
        modalDescription.textContent = service.description;
        
        // Clear and populate features
        modalFeatures.innerHTML = '';
        service.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            modalFeatures.appendChild(li);
        });
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking the X button
if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to elements
    const animatedElements = [
        '.section-title',
        '.section-subtitle',
        '.service-card',
        '.stat-item',
        '.about-text',
        '.contact-item'
    ];

    animatedElements.forEach(selector => {
        document.querySelectorAll(selector).forEach((element, index) => {
            element.classList.add('fade-in');
            element.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(element);
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(15, 15, 35, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(15, 15, 35, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<span>Sending...</span><div class="loading"></div>';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            // Reset form
            contactForm.reset();
            
            // Show success message
            submitBtn.innerHTML = '<span>Message Sent!</span><i class="fas fa-check"></i>';
            submitBtn.style.background = 'var(--accent-color)';
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = 'var(--gradient-primary)';
            }, 3000);
            
            // Show success notification
            showNotification('Thank you! Your message has been sent successfully.', 'success');
        }, 2000);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--accent-color)' : 'var(--primary-color)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        box-shadow: var(--shadow-primary);
        z-index: 3000;
        animation: slideInRight 0.3s ease-out;
        max-width: 350px;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Add CSS for notification animations
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .nav-link.active {
        color: var(--accent-color) !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(notificationStyles);

// Particle system enhancement
function createParticle() {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: var(--accent-color);
        border-radius: 50%;
        pointer-events: none;
        opacity: 0.7;
    `;
    
    return particle;
}

// Performance optimization for scroll events
let ticking = false;

function updateScrollEffects() {
    // Navbar scroll effect and other scroll-dependent animations
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 15, 35, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 15, 35, 0.95)';
        navbar.style.boxShadow = 'none';
    }
    
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
    }
}

// Optimized scroll listener
window.addEventListener('scroll', requestTick);

// Service card hover effects enhancement
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

console.log('NGSoftSys website loaded successfully!');
