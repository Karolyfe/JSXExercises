console.log("Let's get this party started!");

// API key and base URL
const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const BASE_URL = "https://api.giphy.com/v1/gifs/search";

// DOM elements
const gifForm = document.querySelector("#gifForm");
const searchTerm = document.querySelector("#searchTerm");
const gifContainer = document.querySelector("#gifContainer");
const removeAllButton = document.querySelector("#removeAll");

// Handle form submission
gifForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  // Get search term from the input field
  const query = searchTerm.value.trim();
  if (!query) return;

  try {
    // Make an API request
    const response = await axios.get(BASE_URL, {
      params: {
        q: query,
        api_key: API_KEY,
        limit: 1, // Get only one GIF
      },
    });

    // Check if a GIF was returned
    if (response.data.data.length > 0) {
      // Get the GIF URL
      const gifUrl = response.data.data[0].images.original.url;

      // Create an <img> element and append it to the container
      const img = document.createElement("img");
      img.src = gifUrl;
      img.alt = query;
      gifContainer.appendChild(img);
    } else {
      alert("No GIFs found. Try another search term.");
    }

    // Clear the input field
    searchTerm.value = "";
  } catch (error) {
    console.error("Error fetching GIF:", error);
  }
});

// Handle removing all GIFs
removeAllButton.addEventListener("click", function () {
  gifContainer.innerHTML = ""; // Clear the container
});
