// ============================================
// TURBOTUNE PRO - ECU Tuning File Services
// Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all modules
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initTestimonialsSlider();
  initFormValidation();
  initFileUpload();
  initSmoothScroll();
  initServiceTabs();
});

// ============================================
// Navigation
// ============================================

function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
}

// ============================================
// Mobile Menu
// ============================================

function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.nav-menu');
  const links = document.querySelectorAll('.nav-link');
  
  if (!toggle || !menu) return;
  
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
  });
  
  // Close menu on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      menu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      toggle.classList.remove('active');
      menu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// ============================================
// Scroll Animations
// ============================================

function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  if (!elements.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  elements.forEach(el => observer.observe(el));
}

// ============================================
// Testimonials Slider
// ============================================

function initTestimonialsSlider() {
  const slider = document.querySelector('.testimonials-slider');
  if (!slider) return;
  
  const track = slider.querySelector('.testimonials-track');
  const cards = slider.querySelectorAll('.testimonial-card');
  const prevBtn = slider.querySelector('.testimonial-prev');
  const nextBtn = slider.querySelector('.testimonial-next');
  
  if (!track || !cards.length) return;
  
  let currentIndex = 0;
  let cardsPerView = getCardsPerView();
  const totalCards = cards.length;
  
  function getCardsPerView() {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }
  
  function updateSlider() {
    const cardWidth = cards[0].offsetWidth;
    const gap = 32; // 2rem gap
    const offset = currentIndex * (cardWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;
  }
  
  function goToNext() {
    const maxIndex = totalCards - cardsPerView;
    currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    updateSlider();
  }
  
  function goToPrev() {
    const maxIndex = totalCards - cardsPerView;
    currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    updateSlider();
  }
  
  if (prevBtn) prevBtn.addEventListener('click', goToPrev);
  if (nextBtn) nextBtn.addEventListener('click', goToNext);
  
  // Auto-play
  let autoplayInterval = setInterval(goToNext, 5000);
  
  slider.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
  slider.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(goToNext, 5000);
  });
  
  // Handle resize
  window.addEventListener('resize', () => {
    cardsPerView = getCardsPerView();
    currentIndex = Math.min(currentIndex, totalCards - cardsPerView);
    updateSlider();
  });
}

// ============================================
// Form Validation
// ============================================

function initFormValidation() {
  const forms = document.querySelectorAll('form[data-validate]');
  
  forms.forEach(form => {
    const inputs = form.querySelectorAll('[required]');
    const submitBtn = form.querySelector('[type="submit"]');
    const alertSuccess = form.querySelector('.alert-success');
    const alertError = form.querySelector('.alert-error');
    
    // Real-time validation
    inputs.forEach(input => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        if (input.closest('.form-group').classList.contains('error')) {
          validateField(input);
        }
      });
    });
    
    // Form submission
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Hide alerts
      if (alertSuccess) alertSuccess.classList.remove('show');
      if (alertError) alertError.classList.remove('show');
      
      // Validate all fields
      let isValid = true;
      inputs.forEach(input => {
        if (!validateField(input)) {
          isValid = false;
        }
      });
      
      if (!isValid) {
        if (alertError) {
          alertError.textContent = 'Please fill in all required fields correctly.';
          alertError.classList.add('show');
        }
        return;
      }
      
      // Show loading state
      if (submitBtn) {
        submitBtn.classList.add('btn-loading');
        submitBtn.disabled = true;
      }
      
      try {
        // Determine API endpoint based on form type
        const formData = new FormData(form);
        let apiEndpoint = '/api/order';
        
        // Check if this is a contact form (no file upload field)
        const hasFileInput = form.querySelector('input[type="file"]');
        if (!hasFileInput) {
          apiEndpoint = '/api/contact';
        }
        
        const response = await fetch(apiEndpoint, {
          method: 'POST',
          body: formData,
        });
        
        const result = await response.json();
        
        if (submitBtn) {
          submitBtn.classList.remove('btn-loading');
          submitBtn.disabled = false;
        }
        
        if (!response.ok) {
          throw new Error(result.error || 'Failed to submit form');
        }
        
        // Success
        if (alertSuccess) {
          alertSuccess.classList.add('show');
        }
        
        // Reset form
        form.reset();
        
        // Clear file upload display
        const fileUpload = form.querySelector('.file-upload');
        if (fileUpload) {
          fileUpload.classList.remove('has-file');
          const fileName = fileUpload.querySelector('.file-upload-name');
          if (fileName) fileName.textContent = '';
        }
      } catch (error) {
        console.error('Form submission error:', error);
        
        if (submitBtn) {
          submitBtn.classList.remove('btn-loading');
          submitBtn.disabled = false;
        }
        
        if (alertError) {
          alertError.textContent = error.message || 'An error occurred. Please try again.';
          alertError.classList.add('show');
        }
      }
    });
  });
}

function validateField(input) {
  const formGroup = input.closest('.form-group');
  const errorEl = formGroup?.querySelector('.form-error');
  
  let isValid = true;
  let errorMessage = '';
  
  // Required check
  if (input.hasAttribute('required') && !input.value.trim()) {
    isValid = false;
    errorMessage = 'This field is required';
  }
  
  // Email validation
  if (isValid && input.type === 'email' && input.value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.value)) {
      isValid = false;
      errorMessage = 'Please enter a valid email address';
    }
  }
  
  // Phone validation
  if (isValid && input.type === 'tel' && input.value) {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    if (!phoneRegex.test(input.value)) {
      isValid = false;
      errorMessage = 'Please enter a valid phone number';
    }
  }
  
  // Update UI
  if (formGroup) {
    formGroup.classList.toggle('error', !isValid);
  }
  
  if (errorEl) {
    errorEl.textContent = errorMessage;
  }
  
  return isValid;
}

// ============================================
// File Upload
// ============================================

function initFileUpload() {
  const fileUploads = document.querySelectorAll('.file-upload');
  
  fileUploads.forEach(upload => {
    const input = upload.querySelector('input[type="file"]');
    const fileName = upload.querySelector('.file-upload-name');
    
    if (!input) return;
    
    // Drag and drop
    upload.addEventListener('dragover', (e) => {
      e.preventDefault();
      upload.classList.add('dragover');
    });
    
    upload.addEventListener('dragleave', () => {
      upload.classList.remove('dragover');
    });
    
    upload.addEventListener('drop', (e) => {
      e.preventDefault();
      upload.classList.remove('dragover');
      
      const files = e.dataTransfer.files;
      if (files.length) {
        input.files = files;
        handleFileSelect(upload, files[0]);
      }
    });
    
    // File select
    input.addEventListener('change', () => {
      if (input.files.length) {
        handleFileSelect(upload, input.files[0]);
      }
    });
  });
}

function handleFileSelect(upload, file) {
  const fileName = upload.querySelector('.file-upload-name');
  
  // Validate file type
  const allowedTypes = ['bin', 'ori', 'mod', 'fls', 'hex'];
  const extension = file.name.split('.').pop().toLowerCase();
  
  // For demo purposes, accept any file
  upload.classList.add('has-file');
  if (fileName) {
    fileName.textContent = `Selected: ${file.name} (${formatFileSize(file.size)})`;
  }
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// ============================================
// Smooth Scroll
// ============================================

function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (!target) return;
      
      e.preventDefault();
      
      const offset = 100; // Navbar height
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    });
  });
}

// ============================================
// Service Tabs
// ============================================

function initServiceTabs() {
  const tabs = document.querySelectorAll('.service-tab');
  const panels = document.querySelectorAll('.service-panel');
  
  if (!tabs.length) return;
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      
      // Update tabs
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Update panels (if they exist)
      panels.forEach(panel => {
        panel.classList.toggle('hidden', panel.dataset.panel !== target);
      });
    });
  });
}

// ============================================
// Counter Animation
// ============================================

function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.count);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current).toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target.toLocaleString();
      }
    };
    
    // Start animation when visible
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        updateCounter();
        observer.disconnect();
      }
    });
    
    observer.observe(counter);
  });
}

// Initialize counters
document.addEventListener('DOMContentLoaded', animateCounters);

// ============================================
// Utility Functions
// ============================================

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
