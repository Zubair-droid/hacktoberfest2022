var Rating;
(function (Rating) {
    Rating[Rating["Good"] = 0] = "Good";
    Rating[Rating["VeryGood"] = 1] = "VeryGood";
    Rating[Rating["Average"] = 2] = "Average";
    Rating[Rating["Notrecommended"] = 3] = "Notrecommended";
})(Rating || (Rating = {}));
var book1 = {
    name: "the unpredicted",
    author: "kasper",
    description: "Story of a lad stuck in an island",
    isAvailable: true,
    lendedTo: user1,
    fromDate: new Date(2022, 4, 7),
    endDate: new Date(2023, 5, 6),
    review: Rating.Good,
    numberOfPages: 100
};
var movie1 = {
    name: "Batsha",
    description: "Screenplay of a commoner becoming don",
    review: "Good",
    fromDate: new Date(2022, 3, 5),
    endDate: new Date(2022, 5, 6),
    lendedTo: user1,
    isAvailable: true,
    lengthOfMovie: "150 minutes"
};
var user1 = {
    name: "ak",
    id: 1,
    booksHaving: book1,
    movieHaving: movie1
};
var book2 = {
    name: "Julius Caesar",
    author: "Shakespeare",
    description: "Story of a King of people",
    isAvailable: true,
    lendedTo: user1,
    fromDate: new Date(2022, 1, 4),
    endDate: new Date(2023, 2, 3),
    review: Rating.VeryGood,
    numberOfPages: 200
};
var movie2 = {
    name: "Charlie 777",
    description: "Plot of a dog lover and dogs",
    review: "Very Good",
    fromDate: new Date(2022, 8, 5),
    endDate: new Date(2022, 9, 6),
    lendedTo: user1,
    isAvailable: true,
    lengthOfMovie: "120 minutes"
};
var user2 = {
    name: "sa",
    id: 2,
    booksHaving: book2,
    movieHaving: movie2
};
console.log(user2);
