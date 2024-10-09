
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







function updateCartPreview() {
  const cartItemsContainer = document.getElementById('cartItems');
  cartItemsContainer.innerHTML = ''; // Clear existing cart items

  let totalAmount = 0;

  cart.forEach((item, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('cart-item');
      itemDiv.style.display = 'flex'; // Align items horizontally
      itemDiv.style.justifyContent = 'space-between';
      itemDiv.style.border = '1px solid #ddd';
      itemDiv.style.padding = '10px';
      itemDiv.style.marginBottom = '10px';
      
      itemDiv.innerHTML = `
          <div>
              <img src="${item.imageSrc}" alt="${item.title}" class="cart-item-image" style="width:100px; height:100px;">
          </div>
          <div style="flex-grow: 1; margin-left: 15px;">
              <h4>${item.title}</h4>
              <p>${item.description}</p>
              <p>Price: ₹${item.price}</p>
              <p>Quantity: ${item.quantity}</p>
          </div>
          <div>
              <button class="remove-item" data-index="${index}" style="background-color: red; color: white; border: none; padding: 5px 10px;">Remove</button>
          </div>
      `;
      cartItemsContainer.appendChild(itemDiv);

      // Calculate the total amount
      totalAmount += item.price * item.quantity;
  });

  // Display the total amount
  document.getElementById('totalAmount').textContent = `Total: ₹${totalAmount}`;

  // Add event listeners to remove buttons
  document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', function() {
          const index = this.getAttribute('data-index');
          cart.splice(index, 1); // Remove the item from the cart
          localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
          updateCartPreview(); // Update the cart display
      });
  });
}

// On page load, initialize the cart preview from localStorage
document.addEventListener('DOMContentLoaded', updateCartPreview);