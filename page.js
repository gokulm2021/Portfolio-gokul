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

document.getElementById('contact-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  // Show loading overlay and blur background
  const loadingOverlay = document.getElementById('loadingOverlay');
  const mainContent = document.body;
  loadingOverlay.style.display = 'flex';
  mainContent.classList.add('blur-effect');

  // Create JSON data from form
  const formData = {
    name: this.querySelector('[name="name"]').value,
    email: this.querySelector('[name="email"]').value,
    subject: this.querySelector('[name="subject"]').value,
    message: this.querySelector('[name="message"]').value
  };
  
  try {
    const response = await fetch('/send_email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',  // Set content type to JSON
      },
      body: JSON.stringify(formData)  // Convert data to JSON string
    });
    
    const result = await response.json();
    
    if (response.ok) {
      // Success notification
      Swal.fire({
        title: 'Success!',
        text: 'Email sent successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      this.reset(); // Reset form
    } else {
      // Error notification
      Swal.fire({
        title: 'Error!',
        text: result.error || 'Failed to send email',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  } catch (error) {
    // Network error notification
    Swal.fire({
      title: 'Error!',
      text: 'Network error occurred',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  } finally {
    // Hide loading overlay and remove blur
    loadingOverlay.style.display = 'none';
    mainContent.classList.remove('blur-effect');
  }
});
