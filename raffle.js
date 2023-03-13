// Define a variable to store the currently selected category
let selectedCategory = "";
const categories = {
	sugar: ["Pepsi", "Mtn Dew", "Naked", "Kombucha", "Gatorade", "Energy Drink"],
	fiber: ["Apple", "Protein Bar", "Canned Black Beans", "Avocado", "Nut Trail Mix", "Chips", "Peach Cup"],
	fat: ["Olive Oil", "Avocado", "Salad Dressing", "Butter", "Mayo", "Bacon", "Cheese Stick"]
};

// Define a function to handle category button clicks
function selectCategory(category) {
	// Set the selected category variable
	selectedCategory = category;
	// Remove the "active" class from all category buttons
	const buttons = document.querySelectorAll(".category-button");
	buttons.forEach(button => button.classList.remove("active"));
	// Add the "active" class to the clicked category button
	const clickedButton = document.querySelector(`.category-button[data-category="${category}"]`);
	clickedButton.classList.add("active");
}

// Define a function to handle the button click
function enterRaffle() {
	if (selectedCategory) {
		// Call the pickOption function to get the selected option
		const option = pickOption(selectedCategory);
		// Display the selected option
		document.getElementById("result").innerHTML = `Guess ... how much ${selectedCategory} is in <b>${option}?</b>`;
	} else {
		// If no category is selected, display an error message
		document.getElementById("result").innerHTML = "Please select a category!";
	}
}

// Define a function to randomly select an option from a category
function pickOption(category) {
	// Get the options for the selected category
	const options = categories[category];
	// Generate a random index
	const index = Math.floor(Math.random() * options.length);
	// Return the option at the random index
	return options[index];
}
