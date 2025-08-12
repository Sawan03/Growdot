// DotGrow Digital Agency - Complete JavaScript Functions

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
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

    // Initialize EmailJS (if you want to use EmailJS service)
    // emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
});

// Smooth scrolling for internal links
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Navigate to packages section
function scrollToPackages() {
    scrollToSection('packages');
}

// WhatsApp Functions
function sendWhatsApp() {
    const phoneNumber = "918004015099"; // +91 80040 15099
    const message = "Hi! I'm interested in DotGrow Digital Agency's services. I'd like to know more about your packages.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function bookCall() {
    const phoneNumber = "918004015099"; // +91 80040 15099
    const message = "Hi! I'd like to book a free discovery call with DotGrow Digital Agency. Please let me know your available times.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function inquireService(packageName) {
    const phoneNumber = "918004015099"; // +91 80040 15099
    const message = `Hi! I'm interested in the ${packageName} from DotGrow Digital Agency. Can you provide more details and pricing?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Portfolio Functions
function filterPortfolio(category) {
    const items = document.querySelectorAll('.portfolio-item');
    const buttons = document.querySelectorAll('.tab-btn');

    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    event.target.classList.add('active');

    // Show/hide portfolio items
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.classList.remove('hide');
            item.classList.add('show');
        } else {
            item.classList.remove('show');
            item.classList.add('hide');
        }
    });
}

function viewFullPortfolio() {
    const phoneNumber = "918004015099"; // +91 80040 15099
    const message = "Hi! I'd like to see your complete portfolio and case studies. Can you share more examples of your work?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Email Form Handlers
function sendEmail(formData, subject) {
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
${formData.business ? `Business: ${formData.business}` : ''}
${formData.phone ? `Phone: ${formData.phone}` : ''}
${formData.referrer ? `Referrer Code: ${formData.referrer}` : ''}

Message:
${formData.message}
    `;

    // Create mailto link
    const mailtoLink = `mailto:Dotdigitagency@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Also show success message
    showSuccessMessage('Thank you! Your inquiry has been prepared. Please send the email that opened in your email client.');
}

// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                business: document.getElementById('business').value,
                message: document.getElementById('message').value
            };

            // Validate required fields
            if (!formData.name || !formData.email || !formData.message) {
                showErrorMessage('Please fill in all required fields.');
                return;
            }

            // Send email
            sendEmail(formData, 'New Contact Inquiry - DotGrow Digital Agency');
            
            // Reset form
            contactForm.reset();
        });
    }
});

// Affiliate Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const affiliateForm = document.getElementById('affiliate-form');
    if (affiliateForm) {
        affiliateForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('affiliate-name').value,
                email: document.getElementById('affiliate-email').value,
                phone: document.getElementById('affiliate-phone').value,
                referrer: document.getElementById('referrer-code').value,
                message: document.getElementById('affiliate-message').value
            };

            // Validate required fields
            if (!formData.name || !formData.email || !formData.phone) {
                showErrorMessage('Please fill in all required fields.');
                return;
            }

            // Generate unique affiliate code (simple method - in real app you'd use backend)
            const affiliateCode = generateAffiliateCode(formData.name);
            
            // Add affiliate code to message
            formData.message += `\n\nGenerated Affiliate Code: ${affiliateCode}`;

            // Send email
            sendEmail(formData, 'New Affiliate Program Registration - DotGrow Digital Agency');
            
            // Show success with affiliate code
            showSuccessMessage(`Thank you! Your affiliate registration has been submitted. Your affiliate code is: ${affiliateCode}`);
            
            // Reset form
            affiliateForm.reset();
        });
    }
});

// Utility Functions
function generateAffiliateCode(name) {
    // Simple affiliate code generation (first 3 letters + random number)
    const namePrefix = name.substring(0, 3).toUpperCase();
    const randomNumber = Math.floor(Math.random() * 10000);
    return `DG${namePrefix}${randomNumber}`;
}

function showSuccessMessage(message) {
    // Create and show success notification
    const notification = createNotification(message, 'success');
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 5000);
}

function showErrorMessage(message) {
    // Create and show error notification
    const notification = createNotification(message, 'error');
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 5000);
}

function createNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        max-width: 400px;
        animation: slideIn 0.3s ease-out;
    `;
    
    return notification;
}

// Add CSS for notifications
const notificationCSS = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 18px;
        margin-left: auto;
    }
    
    .btn-whatsapp {
        background: #25D366 !important;
        color: white !important;
        border: none !important;
    }
    
    .btn-whatsapp:hover {
        background: #128C7E !important;
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4) !important;
    }
    
    .affiliate-link {
        background: linear-gradient(135deg, #ff6363, #ffffff) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        font-weight: 600 !important;
    }
    
    .affiliate {
        background: linear-gradient(135deg, #ffffff, #ffeaea);
        padding: 80px 0;
    }
    
    .affiliate-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 50px;
        align-items: start;
        margin-bottom: 50px;
    }
    
    .affiliate-info {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    
    .affiliate-card {
        background: #fff;
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0 5px 20px rgba(255, 99, 99, 0.1);
        border: 1px solid rgba(255, 99, 99, 0.1);
        text-align: center;
        transition: transform 0.3s ease;
    }
    
    .affiliate-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(255, 99, 99, 0.15);
    }
    
    .affiliate-icon {
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #ff6363, #ffffff);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 20px;
        font-size: 1.5rem;
        color: #333;
    }
    
    .affiliate-card h3 {
        color: #333;
        font-size: 1.2rem;
        margin-bottom: 10px;
        font-weight: 600;
    }
    
    .affiliate-card p {
        color: #666;
        font-size: 0.9rem;
    }
    
    .affiliate-form {
        background: #fff;
        padding: 40px;
        border-radius: 20px;
        box-shadow: 0 5px 30px rgba(255, 99, 99, 0.1);
        border: 1px solid rgba(255, 99, 99, 0.1);
    }
    
    .affiliate-form h3 {
        color: #333;
        margin-bottom: 30px;
        text-align: center;
        font-size: 1.4rem;
    }
    
    .affiliate-structure {
        background: #fff;
        padding: 40px;
        border-radius: 20px;
        box-shadow: 0 5px 30px rgba(255, 99, 99, 0.1);
        border: 1px solid rgba(255, 99, 99, 0.1);
        text-align: center;
    }
    
    .affiliate-structure h3 {
        color: #333;
        margin-bottom: 30px;
        font-size: 1.4rem;
    }
    
    .structure-tree {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
    
    .level {
        position: relative;
    }
    
    .level-box {
        background: linear-gradient(135deg, #ff6363, #ffffff);
        color: #333;
        padding: 20px 30px;
        border-radius: 15px;
        min-width: 200px;
        font-weight: 600;
    }
    
    .level-box h4 {
        margin-bottom: 10px;
        font-size: 1rem;
    }
    
    .level-box p {
        font-size: 1.1rem;
        font-weight: 700;
        margin: 0;
    }
    
    .level-2 .level-box {
        background: linear-gradient(135deg, #ffb3b3, #ffffff);
    }
    
    .level-3 .level-box {
        background: linear-gradient(135deg, #ffcccc, #ffffff);
    }
    
    @media (max-width: 768px) {
        .affiliate-content {
            grid-template-columns: 1fr;
            gap: 30px;
        }
        
        .affiliate-form,
        .affiliate-structure {
            padding: 30px 20px;
        }
        
        .structure-tree {
            gap: 15px;
        }
        
        .level-box {
            min-width: 180px;
            padding: 15px 20px;
        }
    }
`;

// Add the CSS to document head
const style = document.createElement('style');
style.textContent = notificationCSS;
document.head.appendChild(style);

// Scroll animations
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.service-card, .package-card, .portfolio-item, .team-member, .affiliate-card');
    animatedElements.forEach(el => observer.observe(el));
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    observeElements();
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Advanced WhatsApp Functions with Custom Messages
function getCustomQuote() {
    const phoneNumber = "918004015099";
    const message = "Hi DotGrow Digital Agency! I need a custom quote for my project. Here are my requirements:\n\n[Please describe your project, budget range, and timeline]";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function getFreeConsultation() {
    const phoneNumber = "918004015099";
    const message = "Hi! I'd like to schedule a FREE consultation with DotGrow Digital Agency. I want to discuss my business growth strategies and how you can help me scale.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function joinAffiliateWhatsApp() {
    const phoneNumber = "918004015099";
    const message = "Hi! I'm interested in joining your Affiliate Program. Can you provide more details about commission structure, requirements, and how to get started?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Local Storage for Affiliate Codes (Simple Implementation)
function saveAffiliateData(affiliateData) {
    let affiliates = JSON.parse(localStorage.getItem('dotgrow_affiliates') || '[]');
    affiliateData.id = 'DG' + Date.now();
    affiliateData.dateRegistered = new Date().toISOString();
    affiliateData.level = 1;
    affiliateData.parentId = affiliateData.referrer || null;
    affiliates.push(affiliateData);
    localStorage.setItem('dotgrow_affiliates', JSON.stringify(affiliates));
    return affiliateData.id;
}

function getAffiliateStats(affiliateId) {
    const affiliates = JSON.parse(localStorage.getItem('dotgrow_affiliates') || '[]');
    const affiliate = affiliates.find(a => a.id === affiliateId);
    if (affiliate) {
        const directReferrals = affiliates.filter(a => a.parentId === affiliateId);
        return {
            affiliate,
            directReferrals: directReferrals.length,
            totalNetwork: calculateNetworkSize(affiliateId, affiliates)
        };
    }
    return null;
}

function calculateNetworkSize(affiliateId, affiliates) {
    let count = 0;
    function countDescendants(parentId, level = 1) {
        if (level > 3) return; // Max 3 levels
        const children = affiliates.filter(a => a.parentId === parentId);
        count += children.length;
        children.forEach(child => countDescendants(child.id, level + 1));
    }
    countDescendants(affiliateId);
    return count;
}

// Enhanced Form Validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

// Performance and Analytics (Basic Implementation)
function trackEvent(eventName, eventData = {}) {
    // Simple event tracking - in production you'd use Google Analytics, etc.
    console.log(`Event: ${eventName}`, eventData);
    
    // Store in localStorage for basic analytics
    let events = JSON.parse(localStorage.getItem('dotgrow_events') || '[]');
    events.push({
        event: eventName,
        data: eventData,
        timestamp: new Date().toISOString(),
        page: window.location.pathname
    });
    
    // Keep only last 100 events
    if (events.length > 100) {
        events = events.slice(-100);
    }
    
    localStorage.setItem('dotgrow_events', JSON.stringify(events));
}

// Track button clicks
document.addEventListener('DOMContentLoaded', function() {
    // Track all button clicks
    document.querySelectorAll('button, .btn').forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            const buttonClass = this.className;
            trackEvent('button_click', { text: buttonText, class: buttonClass });
        });
    });
    
    // Track form submissions
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function() {
            const formId = this.id || 'unknown_form';
            trackEvent('form_submission', { form_id: formId });
        });
    });
    
    // Track section views
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id || entry.target.className;
                trackEvent('section_view', { section: sectionId });
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });
});

// Utility function to get basic analytics data
function getAnalytics() {
    const events = JSON.parse(localStorage.getItem('dotgrow_events') || '[]');
    const affiliates = JSON.parse(localStorage.getItem('dotgrow_affiliates') || '[]');
    
    return {
        totalEvents: events.length,
        totalAffiliates: affiliates.length,
        recentEvents: events.slice(-10),
        buttonClicks: events.filter(e => e.event === 'button_click').length,
        formSubmissions: events.filter(e => e.event === 'form_submission').length
    };
}
