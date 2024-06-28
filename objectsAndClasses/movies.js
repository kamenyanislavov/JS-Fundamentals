function movieList(array) {

    let listOfMovies = [];

    // class Movie {
    //     constructor(movieName, director, date) {
    //         movieName;
    //         director;
    //         date;

    //         this.movieName = movieName;
    //         this.director = director;
    //         this.date = date
    //     }
    // }

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element.includes("addMovie")) {
            let movie = element.split("addMovie ")[1]
            listOfMovies.push({ name: movie });
        } else if (element.includes("directedBy")) {
            let [name, director] = element.split(" directedBy ")
            for (let j = 0; j < listOfMovies.length; j++) {
                let movie = listOfMovies[j];
                if (movie["name"] == name) {
                    movie["director"] = director;
                }
            };
        } else if (element.includes("onDate")) {
            let [name, date] = element.split(" onDate ")
            for (let k = 0; k < listOfMovies.length; k++) {
                let movie = listOfMovies[k];
                if (movie["name"] == name) {
                    movie["date"] = date;
                }
            };
        }


    };

    listOfMovies.forEach(movie => {
        if (movie["name"] && movie["director"] && movie["date"]) {
            console.log(JSON.stringify(movie));
        }
    });
}



movieList([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);
console.log('-----------------');
movieList([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]
);