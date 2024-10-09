
const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 2000,
    direction: 'horizontal', 
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });
  




  // Form validation for signup
const signupForm = document.getElementById('signup-form');
const signupMessage = document.getElementById('signup-message');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const password = document.getElementById('password-signup').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Check if passwords match
  if (password !== confirmPassword) {
    signupMessage.textContent = "Passwords do not match!";
  } else {
    signupMessage.textContent = "Account created successfully!";
    signupMessage.style.color = "green";
    // Add form submission logic here
  }
});

// You can add form validation or login logic for the login form here
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  alert("Login functionality not implemented yet.");
});



// Add any interactivity here (e.g., selecting colors or changing images based on color)
document.querySelectorAll('.color').forEach(color => {
  color.addEventListener('click', function() {
      alert("You selected a color!");
  });
});

// Placeholder script to add functionality if needed.
document.querySelector('.shop-btn').addEventListener('click', () => {
  window.location.href = 'https://www.apple.com/shop'; // Example redirect
});



