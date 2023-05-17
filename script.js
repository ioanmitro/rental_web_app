// Define apartment listings data
//  ADD A LIST OF APARTMENTS WITH SPECIAL FEATURES AND seach in the result list/ view the results

const apartmentListings = [
  {
    id: 1,
    title: "Spacious Apartment in the centre of Thessaloniki",
    description: "This beautiful apartment features a large living room, two bedrooms, and one bathrooms. It's located in the heart of Thessaloniki and has easy access to public transportation and many great restaurants and shops nearby.",
    price: 1000,
    location: "Center",
    features: ["2 bedrooms", "1 bathroom", "fully furnished"],
    image_url: "https://images.rentals.ca/property-pictures/medium/toronto-on/306325/apartment-14920010.jpg"
  },
  {
    id: 2,
    title: "Luxury Apartment in the centre of Thessaloniki",
    description: "This stunning apartment features a spacious open floor plan, high-end finishes, and breathtaking views of the Thessaloniki. It's located in a luxury high-rise building in the heart of Midtown and offers a wealth of amenities, including a fitness center, swimming pool, and rooftop terrace.",
    price: 500,
    location: "Center",
    features: ["2 bedroom", "1 bathroom", "furnished", "swimming pool"],
    image_url: "https://images.rentals.ca/property-pictures/medium/toronto-on/306325/apartment-14920010.jpg"
  },
];

// Get search from elements
const searchForm = document.getElementById("search-form");
const locationInput = document.getElementById("location");
const priceInput = document.getElementById("price-range");
const resultsContainer = document.getElementById("apartment-listings");

// Handle search form submission
searchForm.addEventListener("submit", function(event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get user input values
  const location = locationInput.value;
  const price = priceInput.value;

  // Filter apartment listings based on user input
  const filteredListings = apartmentListings.filter(function(listing) {
    return (listing.location === location || location === "any") &&
           (listing.price <= price || price === "any");
  });

  // Clear previous results
  resultsContainer.innerHTML = "";

  // Display filtered apartment listings
  if (filteredListings.length > 0) {
    filteredListings.forEach(function(listing) {
      const listingElement = document.createElement("div");
      listingElement.classList.add("apartment-listing");
      listingElement.innerHTML = `
        <img src="${listing.image_url}" alt="${listing.title}" class="apartment-image">
        <div class="apartment-details">
          <h2 class="apartment-title">${listing.title}</h2>
          <p class="apartment-price">$${listing.price}/month</p>
          <p class="apartment-description">${listing.description}</p>
          <ul class="apartment-features">
            ${listing.features.map(feature => `<li>${feature}</li>`).join("")}
          </ul>
        </div>
      `;
      resultsContainer.appendChild(listingElement);
    });
  } else {
    const noResultsElement = document.createElement("p");
    noResultsElement.textContent = "No results found.";
    resultsContainer.appendChild(noResultsElement);
  }
});


function fetchData() {
  fetch('http://localhost:3000')
  .then(repsonse => response.json())
  .then(data => {
    output.innerHTML += "id = " + apartmentListings.id + "<br/>";
    output.innerHTML += "title = " + apartmentListings.title + "<br/>";
        output.innerHTML += "description = " + apartmentListings.description + "<br/>";
        output.innerHTML += "price = " + apartmentListings.price + "<br/>";
        output.innerHTML += "location = " + apartmentListings.location + "<br/>";
        output.innerHTML += "features = " + apartmentListings.features + "<br/>"; 
    })
}


/*
This JavaScript code first defines an array of apartment listings data, then gets the search form elements using document.getElementById(). It then adds an event listener to the search form to handle form submissions.
When the user submits the search form, the event listener function gets the user input values from the location and price input fields. It then filters the apartment listings data based on the user input using
the Array.filter() method. The filtered apartment listings are then displayed in the resultsContainer element using document.createElement() and Element.appendChild(). If there are no results, a "No results
*/