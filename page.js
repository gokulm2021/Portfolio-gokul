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