const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
 // Function to trigger animation when elements are in viewport
  function animateEducationSection() {
    const educationItems = document.querySelectorAll('.education-item');
    const windowHeight = window.innerHeight;

    educationItems.forEach(item => {
      const itemPosition = item.getBoundingClientRect().top;
      if (itemPosition < windowHeight - 100) {
        item.classList.add('animate');
      }
    });
  }
  const roles = ['A Full Stack Developer', 'Web Designer', 'DevOps'];
  let currentRole = 0;

  function changeRole() {
      const roleElement = document.getElementById('role');
      roleElement.classList.remove('fade-in'); // Fade out
      setTimeout(() => {
          roleElement.textContent = roles[currentRole]; // Change text
          roleElement.classList.add('fade-in'); // Fade in
          currentRole = (currentRole + 1) % roles.length; // Cycle through roles
      }, 500); // Delay for fade out
  }

  setInterval(changeRole, 2000); // Change every 2 seconds
  changeRole(); // Initialize the first role


  // Add event listener for scroll event
  window.addEventListener('scroll', animateEducationSection);
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Perform your custom validation or submission logic here
    alert('Message sent successfully!');
    this.reset(); // Reset the form after submission
  });


