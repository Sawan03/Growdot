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


// Custom Forms & Team Management JavaScript
// Add this to your main script.js file

// Global variables
let currentFormStep = 1;
let totalFormSteps = 3;
let selectedBudget = 50000;
let teamStructure = [];
let affiliateCount = 0;

// Requirements Form Modal
function openRequirementsForm() {
    const modal = document.getElementById('requirements-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateBudgetDisplay();
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        resetForm(modalId);
    }
}

function resetForm(modalId) {
    const form = document.querySelector(`#${modalId} form`);
    if (form) {
        form.reset();
        currentFormStep = 1;
        showFormStep(1);
        updateProgress();
    }
}

// Multi-step form navigation
function nextStep() {
    if (validateCurrentStep()) {
        if (currentFormStep < totalFormSteps) {
            currentFormStep++;
            showFormStep(currentFormStep);
            updateProgress();
        }
    }
}

function prevStep() {
    if (currentFormStep > 1) {
        currentFormStep--;
        showFormStep(currentFormStep);
        updateProgress();
    }
}

function showFormStep(step) {
    // Hide all steps
    document.querySelectorAll('.form-step').forEach(stepEl => {
        stepEl.classList.remove('active');
    });
    
    // Show current step
    const currentStep = document.getElementById(`step-${step}`);
    if (currentStep) {
        currentStep.classList.add('active');
    }
    
    // Update navigation buttons
    const prevBtn = document.querySelector('.btn-prev');
    const nextBtn = document.querySelector('.btn-next');
    
    if (prevBtn) {
        prevBtn.style.display = step === 1 ? 'none' : 'block';
    }
    
    if (nextBtn) {
        if (step === totalFormSteps) {
            nextBtn.textContent = 'Submit Requirements';
            nextBtn.onclick = submitRequirementsForm;
        } else {
            nextBtn.textContent = 'Next Step';
            nextBtn.onclick = nextStep;
        }
    }
}

function updateProgress() {
    document.querySelectorAll('.progress-step').forEach((step, index) => {
        const stepNumber = index + 1;
        step.classList.remove('active', 'completed');
        
        if (stepNumber < currentFormStep) {
            step.classList.add('completed');
        } else if (stepNumber === currentFormStep) {
            step.classList.add('active');
        }
    });
}

function validateCurrentStep() {
    const currentStepEl = document.getElementById(`step-${currentFormStep}`);
    const requiredInputs = currentStepEl.querySelectorAll('[required]');
    let isValid = true;
    
    requiredInputs.forEach(input => {
        if (!input.value.trim()) {
            showFieldError(input, 'This field is required');
            isValid = false;
        } else {
            clearFieldError(input);
        }
    });
    
    return isValid;
}

function showFieldError(input, message) {
    const formGroup = input.closest('.form-group');
    formGroup.classList.add('error');
    
    let errorEl = formGroup.querySelector('.error-message');
    if (!errorEl) {
        errorEl = document.createElement('div');
        errorEl.className = 'error-message';
        formGroup.appendChild(errorEl);
    }
    errorEl.textContent = message;
}

function clearFieldError(input) {
    const formGroup = input.closest('.form-group');
    formGroup.classList.remove('error');
}

// Budget slider functionality
function updateBudgetDisplay() {
    const slider = document.getElementById('budget-slider');
    const display = document.getElementById('budget-display');
    
    if (slider && display) {
        const value = parseInt(slider.value);
        selectedBudget = value;
        
        if (value >= 1000000) {
            display.textContent = `₹${(value / 100000).toFixed(0)}L+`;
        } else if (value >= 100000) {
            display.textContent = `₹${(value / 100000).toFixed(1)}L`;
        } else {
            display.textContent = `₹${value.toLocaleString()}`;
        }
        
        // Update slider background
        const percentage = ((value - slider.min) / (slider.max - slider.min)) * 100;
        slider.style.background = `linear-gradient(to right, #667eea 0%, #667eea ${percentage}%, #e1e5e9 ${percentage}%, #e1e5e9 100%)`;
    }
}

// Service selection handling
function toggleService(checkbox) {
    const label = checkbox.nextElementSibling;
    const serviceCard = checkbox.closest('.service-option');
    
    if (checkbox.checked) {
        serviceCard.classList.add('selected');
    } else {
        serviceCard.classList.remove('selected');
    }
}

// Submit Requirements Form
function submitRequirementsForm() {
    if (!validateCurrentStep()) return;
    
    const formData = collectFormData('requirements-form');
    const btn = document.querySelector('.btn-next');
    
    // Show loading state
    btn.classList.add('loading');
    btn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        sendRequirementsEmail(formData);
        sendWhatsAppNotification(formData, 'requirements');
        showSuccessMessage('Requirements submitted successfully! We\'ll contact you within 24 hours.');
        
        setTimeout(() => {
            closeModal('requirements-modal');
            btn.classList.remove('loading');
            btn.disabled = false;
        }, 2000);
    }, 1500);
}

function collectFormData(formId) {
    const form = document.getElementById(formId);
    const formData = new FormData(form);
    const data = {};
    
    // Collect basic form data
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    // Collect selected services
    const selectedServices = [];
    document.querySelectorAll('input[name="services"]:checked').forEach(checkbox => {
        selectedServices.push(checkbox.value);
    });
    data.services = selectedServices;
    
    // Add budget
    data.budget = selectedBudget;
    
    // Add timestamp
    data.timestamp = new Date().toLocaleString('en-IN', { 
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    return data;
}

// Email sending function
function sendRequirementsEmail(data) {
    const emailContent = `
New Requirements Submission - DotGrow Digital Agency

Client Details:
- Name: ${data.name || 'Not provided'}
- Email: ${data.email || 'Not provided'}
- Phone: ${data.phone || 'Not provided'}
- Business: ${data.business || 'Not provided'}

Project Details:
- Services Required: ${data.services ? data.services.join(', ') : 'Not selected'}
- Budget Range: ₹${formatBudget(data.budget)}
- Timeline: ${data.timeline || 'Not specified'}
- Current Website: ${data.current_website || 'Not provided'}

Project Description:
${data.project_description || 'Not provided'}

Goals & Expectations:
${data.goals || 'Not provided'}

Additional Information:
${data.additional_info || 'Not provided'}

Submitted on: ${data.timestamp}
    `;
    
    // Here you would integrate with your email service
    console.log('Email sent:', emailContent);
    
    // Example integration with EmailJS or similar service
    // emailjs.send('service_id', 'template_id', {
    //     to_email: 'contact@dotdigitalagency.in',
    //     subject: 'New Requirements Submission',
    //     content: emailContent
    // });
}

// WhatsApp notification function
function sendWhatsAppNotification(data, type) {
    let message = '';
    
    if (type === 'requirements') {
        message = `🚀 New Requirements Submission\n\n` +
                 `👤 Client: ${data.name}\n` +
                 `📧 Email: ${data.email}\n` +
                 `📱 Phone: ${data.phone}\n` +
                 `🏢 Business: ${data.business || 'Not provided'}\n` +
                 `💰 Budget: ₹${formatBudget(data.budget)}\n` +
                 `⏰ Timeline: ${data.timeline || 'Not specified'}\n` +
                 `🎯 Services: ${data.services ? data.services.join(', ') : 'Not selected'}\n\n` +
                 `📝 Description: ${data.project_description ? data.project_description.substring(0, 100) + '...' : 'Not provided'}\n\n` +
                 `⏰ Submitted: ${data.timestamp}`;
    } else if (type === 'affiliate') {
        message = `🤝 New Affiliate Registration\n\n` +
                 `👤 Name: ${data.name}\n` +
                 `📧 Email: ${data.email}\n` +
                 `📱 Phone: ${data.phone}\n` +
                 `🔗 Referrer: ${data.referrer || 'Direct signup'}\n` +
                 `📊 Team Level: ${data.teamLevel || 'Level 1'}\n\n` +
                 `💼 Experience: ${data.message ? data.message.substring(0, 100) + '...' : 'Not provided'}\n\n` +
                 `⏰ Registered: ${data.timestamp}`;
    }
    
    // Here you would integrate with WhatsApp API or use a webhook
    console.log('WhatsApp message:', message);
    
    // Example: Send to your WhatsApp number
    const phoneNumber = '919773863151'; // Your WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    // You can use this URL to send automated messages via WhatsApp API
    console.log('WhatsApp URL:', whatsappUrl);
}

function formatBudget(amount) {
    if (amount >= 100000) {
        return `${(amount / 100000).toFixed(1)}L`;
    } else {
        return amount.toLocaleString();
    }
}

// Affiliate Program Functions
function openAffiliateForm() {
    const modal = document.getElementById('affiliate-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        generateReferralCode();
    }
}

function generateReferralCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'DG';
    for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    const codeInput = document.getElementById('generated-referral-code');
    if (codeInput) {
        codeInput.value = result;
    }
    
    return result;
}

function submitAffiliateForm() {
    const form = document.getElementById('affiliate-registration-form');
    const formData = new FormData(form);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    // Add additional data
    data.timestamp = new Date().toLocaleString('en-IN', { 
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    data.affiliateId = generateAffiliateId();
    data.teamLevel = determineTeamLevel(data.referrer);
    
    // Show loading state
    const submitBtn = document.querySelector('#affiliate-registration-form .btn-primary');
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Process affiliate registration
    setTimeout(() => {
        addToTeamStructure(data);
        sendAffiliateEmail(data);
        sendWhatsAppNotification(data, 'affiliate');
        updateTeamDisplay();
        showSuccessMessage('Welcome to the DotGrow Affiliate Program! Check your email for login details.');
        
        setTimeout(() => {
            closeModal('affiliate-modal');
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }, 2000);
    }, 1500);
}

function generateAffiliateId() {
    return 'DGA' + Date.now().toString(36).toUpperCase();
}

function determineTeamLevel(referrerCode) {
    if (!referrerCode) return 1;
    
    // Find referrer in team structure
    const referrer = teamStructure.find(member => member.referralCode === referrerCode);
    return referrer ? referrer.level + 1 : 1;
}

function addToTeamStructure(newAffiliate) {
    const affiliate = {
        id: newAffiliate.affiliateId,
        name: newAffiliate.name,
        email: newAffiliate.email,
        phone: newAffiliate.phone,
        referralCode: newAffiliate.generated_referral_code,
        referrer: newAffiliate.referrer || null,
        level: newAffiliate.teamLevel,
        joinDate: new Date(),
        commissionRate: getCommissionRate(newAffiliate.teamLevel),
        totalEarnings: 0,
        activeReferrals: 0
    };
    
    teamStructure.push(affiliate);
    affiliateCount++;
    
    // Update referrer's active referrals
    if (affiliate.referrer) {
        const referrer = teamStructure.find(member => member.referralCode === affiliate.referrer);
        if (referrer) {
            referrer.activeReferrals++;
        }
    }
}

function getCommissionRate(level) {
    switch(level) {
        case 1: return 15; // Direct referral
        case 2: return 5;  // Sub affiliate
        case 3: return 2;  // Sub-sub affiliate
        default: return 0;
    }
}

function updateTeamDisplay() {
    const teamDisplay = document.getElementById('team-structure-display');
    if (!teamDisplay) return;
    
    // Update team stats
    const totalMembers = teamStructure.length;
    const level1Members = teamStructure.filter(m => m.level === 1).length;
    const level2Members = teamStructure.filter(m => m.level === 2).length;
    const level3Members = teamStructure.filter(m => m.level === 3).length;
    
    document.getElementById('total-affiliates').textContent = totalMembers;
    document.getElementById('level1-count').textContent = level1Members;
    document.getElementById('level2-count').textContent = level2Members;
    document.getElementById('level3-count').textContent = level3Members;
    
    // Update team members list
    const membersList = document.getElementById('team-members-list');
    membersList.innerHTML = '';
    
    teamStructure.forEach(member => {
        const memberCard = createMemberCard(member);
        membersList.appendChild(memberCard);
    });
}

function createMemberCard(member) {
    const card = document.createElement('div');
    card.className = 'team-member-card';
    
    const initials = member.name.split(' ').map(n => n[0]).join('').toUpperCase();
    
    card.innerHTML = `
        <div class="member-info">
            <div class="member-avatar">${initials}</div>
            <div class="member-details">
                <h4>${member.name}</h4>
                <p>Level ${member.level} • ${member.activeReferrals} Referrals • Joined ${member.joinDate.toLocaleDateString()}</p>
            </div>
        </div>
        <div class="member-commission">${member.commissionRate}%</div>
    `;
    
    return card;
}

// Email sending for affiliate
function sendAffiliateEmail(data) {
    const emailContent = `
New Affiliate Registration - DotGrow Digital Agency

Affiliate Details:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}
- Affiliate ID: ${data.affiliateId}
- Referral Code: ${data.generated_referral_code}
- Referred By: ${data.referrer || 'Direct signup'}
- Team Level: ${data.teamLevel}
- Commission Rate: ${getCommissionRate(data.teamLevel)}%

Network Information:
${data.message || 'Not provided'}

Registration Date: ${data.timestamp}

Current Team Structure:
${generateTeamStructureText()}
    `;
    
    console.log('Affiliate email sent:', emailContent);
    
    // Integration with email service
    // emailjs.send('service_id', 'affiliate_template_id', {
    //     to_email: 'contact@dotdigitalagency.in',
    //     subject: 'New Affiliate Registration',
    //     content: emailContent
    // });
}

function generateTeamStructureText() {
    let structure = '\nTeam Hierarchy:\n';
    
    const level1Members = teamStructure.filter(m => m.level === 1);
    level1Members.forEach(l1 => {
        structure += `\n├── ${l1.name} (Level 1 - ${l1.commissionRate}%)`;
        
        const level2Members = teamStructure.filter(m => m.level === 2 && m.referrer === l1.referralCode);
        level2Members.forEach(l2 => {
            structure += `\n│   ├── ${l2.name} (Level 2 - ${l2.commissionRate}%)`;
            
            const level3Members = teamStructure.filter(m => m.level === 3 && m.referrer === l2.referralCode);
            level3Members.forEach(l3 => {
                structure += `\n│   │   └── ${l3.name} (Level 3 - ${l3.commissionRate}%)`;
            });
        });
    });
    
    return structure;
}

// Success message display
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message show';
    successDiv.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <h3>Success!</h3>
        <p>${message}</p>
    `;
    
    const modalBody = document.querySelector('.modal-container .modal-body');
    modalBody.insertBefore(successDiv, modalBody.firstChild);
    
    setTimeout(() => {
        successDiv.remove();
    }, 4000);
}

// Initialize forms when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize budget slider
    const budgetSlider = document.getElementById('budget-slider');
    if (budgetSlider) {
        budgetSlider.addEventListener('input', updateBudgetDisplay);
        updateBudgetDisplay();
    }
    
    // Initialize form steps
    showFormStep(1);
    updateProgress();
    
    // Initialize service checkboxes
    document.querySelectorAll('input[name="services"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            toggleService(this);
        });
    });
    
    // Close modal when clicking outside
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeModal(overlay.id);
            }
        });
    });
    
    // Form submissions
    const requirementsForm = document.getElementById('requirements-form');
    if (requirementsForm) {
        requirementsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitRequirementsForm();
        });
    }
    
    const affiliateForm = document.getElementById('affiliate-registration-form');
    if (affiliateForm) {
        affiliateForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitAffiliateForm();
        });
    }
});

// Utility Functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0
    }).format(amount);
}

function copyReferralCode() {
    const codeInput = document.getElementById('generated-referral-code');
    if (codeInput) {
        codeInput.select();
        document.execCommand('copy');
        
        // Show feedback
        const copyBtn = document.querySelector('.copy-code-btn');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.style.background = '#4CAF50';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = '';
        }, 2000);
    }
}

// Dashboard Functions for Affiliates
function calculateTeamEarnings(affiliateId) {
    const affiliate = teamStructure.find(a => a.id === affiliateId);
    if (!affiliate) return 0;
    
    let totalEarnings = affiliate.totalEarnings;
    
    // Calculate earnings from referrals
    const directReferrals = teamStructure.filter(a => a.referrer === affiliate.referralCode);
    directReferrals.forEach(referral => {
        // Simulate earnings calculation
        totalEarnings += referral.totalEarnings * (affiliate.commissionRate / 100);
    });
    
    return totalEarnings;
}

function getTeamMembers(affiliateId) {
    const affiliate = teamStructure.find(a => a.id === affiliateId);
    if (!affiliate) return [];
    
    return teamStructure.filter(a => a.referrer === affiliate.referralCode);
}

// Integration with existing functions
function inquireService(packageName) {
    // Set package name in requirements form
    const packageInput = document.getElementById('selected-package');
    if (packageInput) {
        packageInput.value = packageName;
    }
    
    openRequirementsForm();
}

function bookCall() {
    // Pre-fill form with call booking intent
    const serviceCheckbox = document.querySelector('input[name="services"][value="consultation"]');
    if (serviceCheckbox) {
        serviceCheckbox.checked = true;
        toggleService(serviceCheckbox);
    }
    
    openRequirementsForm();
}

// Enhanced WhatsApp integration
function sendWhatsApp() {
    const message = "Hi! I'm interested in DotGrow Digital Agency's services. Can we discuss my requirements?";
    const phoneNumber = "919773863151";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Team structure visualization
function visualizeTeamStructure() {
    const canvas = document.getElementById('team-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = 400;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw team hierarchy
    drawTeamNode(ctx, canvas.width / 2, 50, teamStructure[0], 0);
}

function drawTeamNode(ctx, x, y, member, level) {
    if (!member) return;
    
    // Draw member circle
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, 2 * Math.PI);
    ctx.fillStyle = level === 0 ? '#ffd700' : '#667eea';
    ctx.fill();
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw member initials
    ctx.fillStyle = level === 0 ? '#333' : 'white';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(member.name.charAt(0), x, y + 5);
    
    // Draw connections to sub-members
    const subMembers = teamStructure.filter(a => a.referrer === member.referralCode);
    const startX = x - (subMembers.length - 1) * 60;
    
    subMembers.forEach((subMember, index) => {
        const subX = startX + index * 120;
        const subY = y + 100;
        
        // Draw connection line
        ctx.beginPath();
        ctx.moveTo(x, y + 30);
        ctx.lineTo(subX, subY - 30);
        ctx.strokeStyle = '#ddd';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Recursively draw sub-member
        drawTeamNode(ctx, subX, subY, subMember, level + 1);
    });
}

// Export team data
function exportTeamData() {
    const data = {
        exportDate: new Date().toISOString(),
        totalAffiliates: teamStructure.length,
        teamStructure: teamStructure,
        summary: {
            level1: teamStructure.filter(a => a.level === 1).length,
            level2: teamStructure.filter(a => a.level === 2).length,
            level3: teamStructure.filter(a => a.level === 3).length,
            totalEarnings: teamStructure.reduce((sum, a) => sum + a.totalEarnings, 0)
        }
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dotgrow-team-structure-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// Search and filter functions
function searchTeamMembers(query) {
    const filteredMembers = teamStructure.filter(member => 
        member.name.toLowerCase().includes(query.toLowerCase()) ||
        member.email.toLowerCase().includes(query.toLowerCase()) ||
        member.id.toLowerCase().includes(query.toLowerCase())
    );
    
    displayFilteredMembers(filteredMembers);
}

function filterByLevel(level) {
    const filteredMembers = teamStructure.filter(member => 
        level === 'all' ? true : member.level === parseInt(level)
    );
    
    displayFilteredMembers(filteredMembers);
}

function displayFilteredMembers(members) {
    const membersList = document.getElementById('team-members-list');
    membersList.innerHTML = '';
    
    members.forEach(member => {
        const memberCard = createMemberCard(member);
        membersList.appendChild(memberCard);
    });
}

// Commission calculation
function calculateCommissions(saleAmount, affiliateId) {
    const affiliate = teamStructure.find(a => a.id === affiliateId);
    if (!affiliate) return;
    
    let currentAffiliate = affiliate;
    let level = 1;
    
    while (currentAffiliate && level <= 3) {
        const commission = saleAmount * (currentAffiliate.commissionRate / 100);
        currentAffiliate.totalEarnings += commission;
        
        // Send commission notification
        sendCommissionNotification(currentAffiliate, commission, saleAmount);
        
        // Move to next level (referrer)
        if (currentAffiliate.referrer) {
            currentAffiliate = teamStructure.find(a => a.referralCode === currentAffiliate.referrer);
            level++;
        } else {
            break;
        }
    }
    
    updateTeamDisplay();
}

function sendCommissionNotification(affiliate, commission, saleAmount) {
    const message = `💰 Commission Earned!\n\n` +
                   `👤 ${affiliate.name}\n` +
                   `💵 Commission: ₹${commission.toLocaleString()}\n` +
                   `📊 From Sale: ₹${saleAmount.toLocaleString()}\n` +
                   `📈 Rate: ${affiliate.commissionRate}%\n` +
                   `💳 Total Earnings: ₹${affiliate.totalEarnings.toLocaleString()}\n\n` +
                   `⏰ ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`;
    
    console.log('Commission notification:', message);
    
    // Send WhatsApp notification
    const phoneNumber = '919773863151';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    // Store for batch sending
    if (!window.pendingNotifications) {
        window.pendingNotifications = [];
    }
    window.pendingNotifications.push(whatsappUrl);
}

// Batch send notifications
function sendBatchNotifications() {
    if (window.pendingNotifications && window.pendingNotifications.length > 0) {
        // Process notifications
        window.pendingNotifications.forEach((url, index) => {
            setTimeout(() => {
                // In a real implementation, you'd send these via API
                console.log(`Sending notification ${index + 1}:`, url);
            }, index * 1000);
        });
        
        window.pendingNotifications = [];
    }
}


// Add these functions to trigger the modals from your existing buttons

// Update existing inquireService function
function inquireService(packageName) {
    // Set package name in requirements form
    const packageInput = document.getElementById('selected-package');
    if (packageInput) {
        packageInput.value = packageName;
    }
    
    openRequirementsForm();
}

// Update existing affiliate program link
document.addEventListener('DOMContentLoaded', function() {
    const affiliateLink = document.querySelector('.affiliate-link');
    if (affiliateLink) {
        affiliateLink.addEventListener('click', function(e) {
            e.preventDefault();
            openAffiliateForm();
        });
    }
    
    // Initialize team dashboard
    const teamDashboardBtn = document.getElementById('team-dashboard-btn');
    if (teamDashboardBtn) {
        teamDashboardBtn.addEventListener('click', function() {
            document.getElementById('team-dashboard-modal').classList.add('active');
            updateTeamDisplay();
        });
    }
});

// Additional helper functions for quick contact
function openQuickContact() {
    document.getElementById('quick-contact-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function sendQuickWhatsApp() {
    const form = document.getElementById('quick-contact-form');
    const formData = new FormData(form);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const service = formData.get('service_interest');
    const message = formData.get('message');
    
    const whatsappMessage = `Hi! I'm ${name}.\n\n` +
                           `📱 Phone: ${phone}\n` +
                           `🎯 Interested in: ${service}\n\n` +
                           `Message: ${message}\n\n` +
                           `I'd like to discuss your services.`;
    
    const phoneNumber = '919773863151';
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    closeModal('quick-contact-modal');
}

// Floating menu toggle
function toggleFloatingMenu() {
    const menu = document.getElementById('floating-menu');
    const mainBtn = document.querySelector('.main-btn i');
    
    menu.classList.toggle('active');
    
    if (menu.classList.contains('active')) {
        mainBtn.style.transform = 'rotate(45deg)';
    } else {
        mainBtn.style.transform = 'rotate(0deg)';
    }
}

// Commission calculator
function calculateCommission() {
    const saleAmount = parseInt(document.getElementById('sale-amount').value) || 0;
    const teamLevel = parseInt(document.getElementById('team-level').value) || 1;
    
    const commissionRate = getCommissionRate(teamLevel);
    const commission = saleAmount * (commissionRate / 100);
    
    document.getElementById('commission-amount').textContent = `₹${commission.toLocaleString()}`;
    document.getElementById('commission-details').textContent = 
        `${commissionRate}% commission on ₹${saleAmount.toLocaleString()} sale`;
}

// Notification system
function showNotification(message, type = 'success') {
    const container = document.getElementById('notification-container');
    const notification = document.createElement('div');
    
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        background: ${type === 'success' ? '#4CAF50' : '#ff4444'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        margin-bottom: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideInRight 0.3s ease;
        cursor: pointer;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    notification.onclick = () => notification.remove();
    container.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}
