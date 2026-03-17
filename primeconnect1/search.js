// // Initialize cart if it doesn't exist
// if (!localStorage.getItem('cart')) {
//   localStorage.setItem('cart', JSON.stringify([]));
// }

// // Function to update cart count in header
// function updateCartCount() {
//   const cart = JSON.parse(localStorage.getItem('cart'));
//   const cartCount = document.querySelector('.cart-count');
  
//   if (cart && cart.length > 0) {
//       cartCount.textContent = cart.length;
//       cartCount.style.display = 'flex';
//   } else {
//       cartCount.style.display = 'none';
//   }
// }

// // Function to add item to cart
// function addToCart(name, price) {
//   const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
//   // Ensure price is properly converted to number
//   const numericPrice = typeof price === 'string' ? 
//                       parseFloat(price.replace(/[^0-9.]/g, '')) : 
//                       Number(price);
  
//   cart.push({ 
//       name, 
//       price: numericPrice 
//   });
  
//   localStorage.setItem('cart', JSON.stringify(cart));
//   updateCartCount();
//   alert(`${name} added to cart!`);
// }

// // Universal Search Functionality
// document.addEventListener('DOMContentLoaded', function() {
//   updateCartCount();
  
//   const searchInput = document.getElementById('searchInput');
//   const searchButton = document.getElementById('searchButton');
  
//   if (!searchInput || !searchButton) return; // Exit if search elements don't exist

//   // Debounce function to limit how often the search runs
//   function debounce(func, timeout = 300) {
//       let timer;
//       return (...args) => {
//           clearTimeout(timer);
//           timer = setTimeout(() => { func.apply(this, args); }, timeout);
//       };
//   }
  
//   function normalizeString(str) {
//       return str.toLowerCase().replace(/[^a-z0-9]/g, ' ');
//   }
  
//   function filterContent() {
//       const searchTerm = normalizeString(searchInput.value);
//       let hasResults = false;
      
//       // Try different selectors for different page structures
//       const contentSelectors = [
//           '.card', // For education and event pages
//           '.service', // For home services
//           '.service-card', // For beauty page
//           '.profile', // For tutor profiles
//           '.repair-card' // For repair cards
//       ];
      
//       let allCards = [];
      
//       // Collect all possible cards from different page structures
//       contentSelectors.forEach(selector => {
//           const cards = document.querySelectorAll(selector);
//           if (cards.length > 0) {
//               allCards = [...allCards, ...Array.from(cards)];
//           }
//       });
      
//       if (allCards.length === 0) return; // No content found to search
      
//       allCards.forEach(card => {
//           // Try different ways to get text content based on page structure
//           let title = '';
//           let description = '';
          
//           // For service cards (home services, beauty)
//           const titleEl = card.querySelector('h3') || card.querySelector('h4');
//           if (titleEl) title = titleEl.textContent;
          
//           // For descriptions (different pages have different structures)
//           const descEl = card.querySelector('p') || 
//                          card.querySelector('.card-content') || 
//                          card.querySelector('.service-info') || 
//                          card.querySelector('.profile-info');
//           if (descEl) description = descEl.textContent;
          
//           // For price elements (if we want to search by price)
//           const priceEl = card.querySelector('.price') || 
//                          card.querySelector('[class*="price"]');
//           const price = priceEl ? priceEl.textContent : '';
          
//           // Normalize all searchable text
//           const cardText = normalizeString(title + ' ' + description + ' ' + price);
          
//           // Split search term into words and check if all appear in card text
//           const searchWords = searchTerm.split(/\s+/).filter(word => word.length > 0);
//           const matches = searchWords.length === 0 || 
//                          searchWords.every(word => cardText.includes(word));
          
//           if (matches) {
//               card.style.display = 'block';
//               hasResults = true;
//           } else {
//               card.style.display = 'none';
//           }
//       });
      
//       // Handle no results message
//       const noResults = document.getElementById('no-results');
//       if (!hasResults && searchTerm.length > 0) {
//           if (!noResults) {
//               const noResultsElement = document.createElement('p');
//               noResultsElement.id = 'no-results';
//               noResultsElement.textContent = 'No services found matching your search.';
//               noResultsElement.style.textAlign = 'center';
//               noResultsElement.style.margin = '20px 0';
//               noResultsElement.style.fontSize = '1.2rem';
              
//               // Insert the message in a logical place (varies by page)
//               const main = document.querySelector('main') || 
//                           document.querySelector('.services') || 
//                           document.querySelector('.tutors') || 
//                           document.querySelector('.catering');
//               if (main) {
//                   main.appendChild(noResultsElement);
//               }
//           }
//       } else if (noResults) {
//           noResults.remove();
//       }
//   }

//   // Add event listeners with debounce
//   searchInput.addEventListener('input', debounce(filterContent));
//   searchButton.addEventListener('click', filterContent);
// });