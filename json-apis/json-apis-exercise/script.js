// JSON APIs Exercise here
// Part 1

$.getJSON("https://jsonplaceholder.typicode.com/users", function (response) {
    console.log(response[5]);
});

// Part 2
function getUser(userId) {
    $.getJSON(
        `https://jsonplaceholder.typicode.com/users`,
        function (response) {
            console.log(response[userId - 1]); // This logs JSON data that is convereted to a JavaScript object to the console
        }
    );
}

getUser(3);
