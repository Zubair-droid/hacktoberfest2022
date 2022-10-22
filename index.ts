
interface User {
    name: string;
    id: number;
    booksHaving: Book;
    movieHaving: Movie;
    
}


interface Book extends CommonIdentifier {
  
    author: string;
    description: string;
    isAvailable: boolean;
    lendedTo: User;
    fromDate: Date;
    endDate: Date;
    review: Rating
    numberOfPages: number
}

enum Rating {
    Good,
    VeryGood,
    Average,
    Notrecommended
}


interface Movie extends CommonIdentifier {
   
    description: string;
    review: string;
    fromDate: Date;
    endDate: Date;
    lendedTo: User;
    isAvailable: boolean;
    lengthOfMovie: string;
}


var book1: Book = {
   
    author: "kasper",
    description: "Story of a lad stuck in an island",
    isAvailable: true,
    lendedTo: user1,
    fromDate: new Date(2022, 4, 7),
    endDate: new Date(2023, 5, 6),
    review: Rating.Good,
    numberOfPages: 100

}


var movie1:  Movie =  {
    description: "Screenplay of a commoner becoming don",
    review: "Good",
    fromDate: new Date(2022, 3, 5),
    endDate: new Date(2022, 5, 6),
    lendedTo: user1,
    isAvailable: true,
    lengthOfMovie: "150 minutes"
}

var user1: User = {
    name:  "ak",
    id: 1,
    booksHaving: book1,
    movieHaving: movie1
}


var book2: Book = {
    
    author: "Shakespeare",
    description: "Story of a King of people",
    isAvailable: true,
    lendedTo: user1,
    fromDate: new Date(2022, 1, 4),
    endDate: new Date(2023, 2, 3),
    review: Rating.VeryGood,
    numberOfPages: 200
    
}


var movie2:  Movie =  {
    
    description: "Plot of a dog lover and dogs",
    review: "Very Good",
    fromDate: new Date(2022, 8, 5),
    endDate: new Date(2022, 9, 6),
    lendedTo: user1,
    isAvailable: true,
    lengthOfMovie: "120 minutes"
}

var user2: User = {
    name:  "sa",
    id: 2,
    booksHaving: book2,
    movieHaving: movie2
}


interface CommonIdentifier{
    id?: Number,
    title?: String,
    
}


console.log(user2)
