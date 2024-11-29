// Select DOM elements
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

// List of fruits
const fruit = [
  'Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry',
  'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut',
  'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit',
  'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin',
  'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit',
  'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat',
  'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon',
  'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry',
  'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine',
  'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon',
  'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince',
  'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma',
  'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'
];

// Function to filter fruits based on input
function search(str) {
  if (str === '') return []; // If input is empty, return no results
  return fruit.filter(fruitItem =>
    fruitItem.toLowerCase().includes(str.toLowerCase()) // Case-insensitive match
  );
}

// Function to handle user input
function searchHandler(e) {
  const inputVal = e.target.value.trim(); // Get input and remove whitespace
  const results = search(inputVal); // Filter the fruit list
  showSuggestions(results, inputVal); // Display results
}

// Function to display the filtered suggestions
function showSuggestions(results, inputVal) {
  const ul = suggestions;
  ul.innerHTML = ''; // Clear previous suggestions

  // If no results, hide the dropdown
  if (results.length === 0) {
    ul.classList.remove('has-suggestions');
    return;
  }

  // Populate the dropdown with results
  results.forEach(result => {
    const li = document.createElement('li');
    li.textContent = result;
    ul.appendChild(li);
  });

  ul.classList.add('has-suggestions'); // Show suggestions
}

// Function to handle suggestion clicks
function useSuggestion(e) {
  if (e.target.tagName === 'LI') {
    input.value = e.target.textContent; // Set input value to selected suggestion
    suggestions.innerHTML = ''; // Clear suggestions
    suggestions.classList.remove('has-suggestions'); // Hide suggestions
  }
}

// Event listeners
input.addEventListener('keyup', searchHandler); // Listen for typing
suggestions.addEventListener('click', useSuggestion); // Listen for suggestion clicks
