// Dynamic Content Exercise here
$("#main-header").text("Shopping List");
$("li").attr("class", "shopping-list-item");
$("#log-me-button").css("background-color", "lightgreen");

function logFavoriteFood(event) {
    let favoriteFoodInput = $("#favorite-food-input");

    let favoriteFood = favoriteFoodInput.val();

    console.log("The user's favorite food is " + favoriteFood);
}

let logButton = $("#log-me-button");

logButton.on("click", logFavoriteFood);
