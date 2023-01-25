//array for storing saved pic objects
let savedItems = [];


// variable for storing all like buttons
const likes = document.querySelectorAll(".like-image");

// variable for storing all save buttons
const saves = document.querySelectorAll(".save-image");

// add event listeners
likes.forEach(el => el.addEventListener("click", function(event) {
    console.log(event);
}));

saves.forEach(el => el.addEventListener("click", function(event) {
    savedItems.push(event.originalTarget.previousElementSibling.currentSrc);
    //console.log(event.originalTarget.previousElementSibling.attributes[1]);
    console.log(savedItems);
}));

let seeFavorites = () => {
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
}

window.addEventListener("load", function () {
    //displaySavedItems();
    console.log(savedItems);
});
