
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
}

// Function to update cart count in header
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart'));
  document.querySelector('.cart-count').textContent = cart.length;
}

// Call this when page loads
document.addEventListener('DOMContentLoaded', function() {
  updateCartCount();
});

// Function to add item to cart
function addToCart(name, price) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Ensure price is properly converted to number
  const numericPrice = typeof price === 'string' ? 
                      parseFloat(price.replace(/[^0-9.]/g, '')) : 
                      Number(price);
  
  cart.push({ 
      name, 
      price: numericPrice 
  });
  
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(`${name} added to cart!`);
}

// Initialize cart if it doesn't exist
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
}
// Enhanced Search Functionality
// document.addEventListener('DOMContentLoaded', function() {
//   updateCartCount();
  
//   const searchInput = document.getElementById('searchInput');
//   const searchButton = document.getElementById('searchButton');
  
//   if (!searchInput || !searchButton) return;

//   function debounce(func, timeout = 300) {
//     let timer;
//     return (...args) => {
//       clearTimeout(timer);
//       timer = setTimeout(() => { func.apply(this, args); }, timeout);
//     };
//   }
  
//   function normalizeString(str) {
//     return str.toLowerCase().replace(/[^a-z0-9]/g, ' ');
//   }
  
//   function filterContent() {
//     const searchTerm = normalizeString(searchInput.value);
//     let hasResults = false;
    
//     // Handle all card types with their specific containers
//     const cardContainers = [
//       { selector: '.service-list', itemSelector: '.service' }, // Home services
//       { selector: '.repair-list', itemSelector: '.repair-card' }, // Repair cards
//       { selector: '.tutors', itemSelector: '.profile' }, // Tutors
//       { selector: '.catering', itemSelector: '.card' }, // Event catering
//       { selector: '.services', itemSelector: '.service-card' } // Beauty services
//     ];
    
//     cardContainers.forEach(container => {
//       const containerEl = document.querySelector(container.selector);
//       if (!containerEl) return;
      
//       const cards = containerEl.querySelectorAll(container.itemSelector);
//       if (!cards.length) return;
      
//       // First make all cards visible to properly calculate layout
//       cards.forEach(card => {
//         card.style.display = '';
//         card.style.visibility = 'visible';
//         card.style.position = '';
//         card.style.opacity = '';
//       });
      
//       // Force layout recalculation
//       containerEl.offsetHeight;
      
//       // Now filter
//       let containerHasResults = false;
      
//       cards.forEach(card => {
//         const titleEl = card.querySelector('h3, h4, .profile-info > p:first-child');
//         const descEl = card.querySelector('p, .description, .card-content p, .service-info p');
        
//         const title = titleEl ? normalizeString(titleEl.textContent) : '';
//         const description = descEl ? normalizeString(descEl.textContent) : '';
        
//         const searchWords = searchTerm.split(/\s+/).filter(word => word.length > 0);
//         const matches = searchWords.length === 0 || 
//                        searchWords.every(word => title.includes(word) || description.includes(word));
        
//         if (matches) {
//           containerHasResults = true;
//           hasResults = true;
//         } else {
//           // Hide while maintaining layout
//           card.style.visibility = 'hidden';
//           card.style.position = 'absolute';
//           card.style.opacity = '0';
//         }
//       });
      
//       // Hide entire container if no matches
//       containerEl.style.display = containerHasResults ? '' : 'none';
//     });
    
//     // Handle no results message
//     const noResults = document.getElementById('no-results');
//     if (!hasResults && searchTerm.length > 0) {
//       if (!noResults) {
//         const noResultsElement = document.createElement('p');
//         noResultsElement.id = 'no-results';
//         noResultsElement.textContent = 'No services found matching your search.';
//         noResultsElement.style.textAlign = 'center';
//         noResultsElement.style.margin = '20px 0';
//         noResultsElement.style.fontSize = '1.2rem';
        
//         const mainContent = document.querySelector('main, section:first-of-type') || document.body;
//         mainContent.insertBefore(noResultsElement, mainContent.firstChild);
//       }
//     } else if (noResults) {
//       noResults.remove();
//     }
    
//     // Show all containers again when search is cleared
//     if (searchTerm.length === 0) {
//       cardContainers.forEach(container => {
//         const containerEl = document.querySelector(container.selector);
//         if (containerEl) containerEl.style.display = '';
//       });
//     }
//   }

//   searchInput.addEventListener('input', debounce(filterContent));
//   searchButton.addEventListener('click', filterContent);
//   searchInput.addEventListener('keypress', function(e) {
//     if (e.key === 'Enter') filterContent();
//   });
// });
// Universal Search Functionality
// Initialize cart if it doesn't exist
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
}

// Function to update cart count in header
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart'));
  document.querySelector('.cart-count').textContent = cart.length;
}

// Call this when page loads
document.addEventListener('DOMContentLoaded', function() {
  updateCartCount();
});

// Function to add item to cart
function addToCart(name, price) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Ensure price is properly converted to number
  const numericPrice = typeof price === 'string' ? 
                      parseFloat(price.replace(/[^0-9.]/g, '')) : 
                      Number(price);
  
  cart.push({ 
      name, 
      price: numericPrice 
  });
  
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(`${name} added to cart!`);
}

// Universal Search Functionality
document.addEventListener('DOMContentLoaded', function() {
  updateCartCount();
  
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  
  if (!searchInput || !searchButton) return;

  function debounce(func, wait = 300, immediate = false) {
    let timeout;
    return function() {
      const context = this, args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  
  function normalizeString(str) {
    return str.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }
  
  function filterContent() {
    const searchTerm = normalizeString(searchInput.value);
    let hasResults = false;
    
    // Get all card-like elements from different page structures
    const cardSelectors = [
      '.service', '.repair-card', '.card', 
      '.profile', '.service-card'
    ].join(',');
    
    // Get all containers that might hold cards
    const containerSelectors = [
      '.service-list', '.repair-list', 
      '.catering', '.tutors', '.services'
    ].join(',');
    
    // First show all containers and cards (reset state)
    document.querySelectorAll(containerSelectors).forEach(container => {
      container.style.display = '';
      container.querySelectorAll(cardSelectors).forEach(card => {
        card.style.display = '';
      });
      
      // Remove any existing no-results messages
      const existingNoResults = container.querySelector('.no-results-message');
      if (existingNoResults) existingNoResults.remove();
    });
    
    // If search is empty, show everything and return
    if (searchTerm.trim() === '') {
      return;
    }
    
    // Search through all cards
    const allCards = document.querySelectorAll(cardSelectors);
    if (allCards.length === 0) return;
    
    allCards.forEach(card => {
      const titleEl = card.querySelector('h3, h4, .profile-info > p:first-child');
      const descEl = card.querySelector('p, .description, .card-content p, .service-info p');
      
      const title = titleEl ? normalizeString(titleEl.textContent) : '';
      const description = descEl ? normalizeString(descEl.textContent) : '';
      
      const searchWords = searchTerm.split(/\s+/).filter(word => word.length > 0);
      const matches = searchWords.length === 0 || 
                     searchWords.every(word => title.includes(word) || description.includes(word));
      
      if (matches) {
        hasResults = true;
      } else {
        card.style.display = 'none';
      }
    });
    
    // Check each container for visible cards
    document.querySelectorAll(containerSelectors).forEach(container => {
      const visibleCards = container.querySelectorAll(`${cardSelectors}:not([style*="display: none"])`);
      
      if (visibleCards.length === 0) {
        // Create no results message if it doesn't exist
        if (!container.querySelector('.no-results-message')) {
          const noResultsElement = document.createElement('div');
          noResultsElement.className = 'no-results-message';
          noResultsElement.innerHTML = `
            <p>No services found matching "<strong>${searchInput.value}</strong>"</p>
            <p class="suggestions">Try different keywords or check our other categories</p>
          `;
          container.appendChild(noResultsElement);
        }
      }
    });
  }

  // Add CSS for no results message
  const style = document.createElement('style');
  style.textContent = `
    .no-results-message {
      text-align: center;
      padding: 20px;
      width: 100%;
      color: #666;
    }
    .no-results-message p {
      margin: 5px 0;
    }
    .no-results-message p:first-child {
      font-size: 1.1rem;
      color: #333;
      font-weight: 500;
    }
    .no-results-message .suggestions {
      font-size: 0.9rem;
      color: #888;
    }
  `;
  document.head.appendChild(style);

  // Add event listeners
  searchInput.addEventListener('input', debounce(filterContent, 300));
  searchButton.addEventListener('click', filterContent);
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') filterContent();
  });
});
