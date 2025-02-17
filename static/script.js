// Add this at the beginning of your script.js file
document.addEventListener('DOMContentLoaded', function() {
    // Get both logo elements
    const logoDesktop = document.getElementById('logoDesktop');
    const logoMobile = document.getElementById('logoMobile');

    // Function to handle scroll to top
    const handleScrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Add click event listeners to both logos
    if (logoDesktop) {
        logoDesktop.addEventListener('click', handleScrollToTop);
        logoDesktop.style.cursor = 'pointer';
    }

    if (logoMobile) {
        logoMobile.addEventListener('click', handleScrollToTop);
        logoMobile.style.cursor = 'pointer';
    }
});

// Update the fetch URL to use relative path
const response = await fetch('/send_email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData)
}); 
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  // Intersection Observer for animations
  const sections = document.querySelectorAll('.animate-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1
  });
  
  sections.forEach(section => {
    observer.observe(section);
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const profileSection = document.querySelector('#profile');
    
    setTimeout(() => {
      profileSection.querySelector('.profile-container').style.opacity = '1';
      profileSection.querySelector('.profile-container').style.transform = 'translateY(0)';
    }, 300);
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const loaderWrapper = document.getElementById('loaderWrapper');
    const mainContent = document.querySelector('body');

    function showLoader() {
        loaderWrapper.style.display = 'block';
        mainContent.classList.add('blur-content');
        document.body.classList.add('loading');
    }

    function hideLoader() {
        loaderWrapper.style.display = 'none';
        mainContent.classList.remove('blur-content');
        document.body.classList.remove('loading');
    }

    function showSuccessMessage() {
        Swal.fire({
            title: 'Success!',
            text: 'Your message has been sent successfully!',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#3498db'
        });
    }

    function showErrorMessage() {
        Swal.fire({
            title: 'Error!',
            text: 'Failed to send message. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#e74c3c'
        });
    }

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Show loader and blur content
        showLoader();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        try {
            const response = await fetch('/send_email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            // Hide loader and remove blur
            hideLoader();

            if (response.ok) {
                showSuccessMessage();
                contactForm.reset();
            } else {
                showErrorMessage();
            }
        } catch (error) {
            console.error('Error:', error);
            hideLoader();
            showErrorMessage();
        }
    });
  });
  
  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const logos = document.querySelectorAll('.logo');
    logos.forEach(logo => {
        logo.style.cursor = 'pointer';
        logo.setAttribute('title', 'Scroll to top');
        logo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
  });
  
  // Add this simple code at the start of your script.js
  document.addEventListener('DOMContentLoaded', () => {
    const scrollTopButton = document.getElementById('scrollTop');
    
    if (scrollTopButton) {
        scrollTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
  });
  