   // Get references to DOM elements
   const darkModeToggle = document.getElementById('dark-mode-toggle');
   const body = document.body;
   
   // Check if dark mode is already enabled in localStorage
   if (localStorage.getItem('darkMode') === 'enabled') {
     body.classList.add('dark-theme');
     darkModeToggle.textContent = '🌞';  // Update button text to indicate light mode is available
   } else {
     body.classList.remove('dark-theme');
     darkModeToggle.textContent = '🌙';  // Update button text to indicate dark mode is available
   }
   
   // Dark mode toggle functionality
   darkModeToggle.addEventListener('click', () => {
     if (body.classList.contains('dark-theme')) {
       // Switch to light mode
       body.classList.remove('dark-theme');
       localStorage.setItem('darkMode', 'disabled');
       darkModeToggle.textContent = '🌙';  // Dark mode icon
     } else {
       // Switch to dark mode
       body.classList.add('dark-theme');
       localStorage.setItem('darkMode', 'enabled');
       darkModeToggle.textContent = '🌞';  // Light mode icon
     }
   });
   
   // Example code for adding items to the cart (this can be customized further)
   let cartCount = 0;
   
   function updateCartCount() {
     document.getElementById('cart-count').innerText = cartCount;
   }
   
   function addToCart() {
     cartCount++;
     updateCartCount();
   }
   
   setInterval(() => addToCart(), 5000); // Simulate adding an item to the cart every 5 seconds

   
   document.addEventListener('DOMContentLoaded', function() {
    // Initialize Typed.js on the selected text
    const typed = new Typed('.multiple-text', {
        strings: ['Welcome to Pearl of Africa Cheese!', 'Discover our amazing cheese dishes!', 'Pairing cheese like never before!'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    // Apply ScrollReveal to the same text
    ScrollReveal().reveal('.multiple-text', {
        distance: '80px',
        duration: 1000,
        delay: 200
    });
});
// Show Order Online Modal
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', function() {
        const cheeseName = this.closest('.card').getAttribute('data-name');
        const cheesePrice = this.closest('.card').getAttribute('data-price');
        document.getElementById('selectedCheese').textContent = cheeseName;
        document.getElementById('selectedPrice').textContent = `UGX ${cheesePrice}`;
        alert("💡 Special Offer: Prices are negotiable if you buy in bulk! Contact us for more details.");
        document.getElementById('order-online').classList.remove('hidden');
    });
});

// Close Order Online Modal
document.getElementById('closeOrder').addEventListener('click', function() {
    document.getElementById('order-online').classList.add('hidden');
});

// Handle Order Confirmation
document.getElementById('confirmOrder').addEventListener('click', function() {
    const selectedPayment = document.querySelector('input[name="paymentMethod"]:checked');
    if (selectedPayment) {
        alert(`Order confirmed for ${document.getElementById('selectedCheese').textContent}! Payment Method: ${selectedPayment.value}`);
        document.getElementById('order-online').classList.add('hidden');
    } else {
        alert('Please select a payment method.');
    }
});

// Filter cheese cards based on selection
document.getElementById('cheeseType').addEventListener('change', function() {
    const selectedType = this.value;
    const cards = document.querySelectorAll('#cheeseGrid .card');

    cards.forEach(card => {
        if (selectedType === 'all' || card.getAttribute('data-type') === selectedType) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Search for cheese types
document.getElementById('cheeseSearch').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const cards = document.querySelectorAll('#cheeseGrid .card');

    cards.forEach(card => {
        const cheeseName = card.getAttribute('data-name').toLowerCase();
        if (cheeseName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});