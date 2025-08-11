// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initNavigation();
    initScrollAnimations();
    initPortfolioFilter();
    initContactForm();
    initSmoothScroll();
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(26, 32, 69, 0.98)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.background = 'rgba(26, 32, 69, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Add staggered animation for grid items
                if (entry.target.classList.contains('service-card') || 
                    entry.target.classList.contains('package-card') ||
                    entry.target.classList.contains('portfolio-item')) {
                    const siblings = Array.from(entry.target.parentElement.children);
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.service-card, .package-card, .portfolio-item, .team-member').forEach(el => {
        observer.observe(el);
    });
}

// Portfolio filter functionality
function initPortfolioFilter() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    // Set initial state - show all items
    portfolioItems.forEach(item => {
        item.classList.add('show');
    });
}

function filterPortfolio(category) {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    // Update active tab
    tabButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter items with animation
    portfolioItems.forEach(item => {
        item.classList.remove('show');
        item.classList.add('hide');
        
        setTimeout(() => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.classList.remove('hide');
                    item.classList.add('show');
                }, 50);
            } else {
                item.style.display = 'none';
            }
        }, 300);
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const business = formData.get('business');
        const message = formData.get('message');
        
        // Create WhatsApp message
        const whatsappMessage = `Hi! I'm interested in your services.
        
Name: ${name}
Email: ${email}
Business: ${business || 'Not specified'}
Message: ${message}`;
        
        const whatsappUrl = `https://wa.me/919773863151?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
        
        // Show success message
        showNotification('Message prepared! Redirecting to WhatsApp...', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// Smooth scroll functionality
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility Functions

// Book a call function
function bookCall() {
    const whatsappMessage = `Hi! I'd like to book a free discovery call to discuss my project.`;
    const whatsappUrl = `https://wa.me/919773863151?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
}

// Send WhatsApp message
function sendWhatsApp() {
    const whatsappMessage = `Hi! I'm interested in learning more about your digital marketing services.`;
    const whatsappUrl = `https://wa.me/919773863151?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
}

// Scroll to packages section
function scrollToPackages() {
    const packagesSection = document.getElementById('packages');
    const offsetTop = packagesSection.offsetTop - 80;
    
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}

// Inquire about specific service
function inquireService(packageName) {
    const whatsappMessage = `Hi! I'm interested in the ${packageName}. Can you provide more details and pricing?`;
    const whatsappUrl = `https://wa.me/919773863151?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
}

// View full portfolio
function viewFullPortfolio() {
    const whatsappMessage = `Hi! I'd like to see your full portfolio and case studies.`;
    const whatsappUrl = `https://wa.me/919773863151?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
}

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Preloader functionality
window.addEventListener('load', function() {
    // Hide preloader if exists
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
    
    // Start entrance animations
    setTimeout(() => {
        document.querySelector('.hero-content').style.animation = 'fadeInUp 1s ease-out forwards';
    }, 200);
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Enhanced mobile experience
function handleMobileInteractions() {
    // Touch feedback for buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        btn.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// Initialize mobile interactions
if ('ontouchstart' in window) {
    handleMobileInteractions();
}

// Performance optimization - Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Analytics tracking (placeholder for when analytics is implemented)
function trackEvent(action, category, label) {
    // This would integrate with Google Analytics, Facebook Pixel, etc.
    console.log(`Event tracked: ${action} - ${category} - ${label}`);
}

// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const action = this.textContent.trim();
        trackEvent('click', 'button', action);
    });
});

// Error handling for external services
window.addEventListener('error', function(e) {
    console.log('Error caught:', e.message);
    // Could send errors to logging service
});

// Service Worker registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}


