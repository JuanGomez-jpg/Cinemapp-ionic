import { Injectable } from "@angular/core"; 
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    movies = new Subject<any[]>();

    constructor() {
        this.getMovies();
    }

    getMovies()
    {
        this.movies.next([
                {
                  title: 'Matrix',
                  year: 1999,
                  director: 'Wachosky sisters',
                  image: 'http://www.elespectadorimaginario.com/media/diciembre09/imgthe-matrix-movie1.jpg'
                },
                {
                  title: 'Iron Man',
                  year: 2008,
                  director: 'Jon Favreau',
                  image: 'https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg'
                }
            ]
        );
    }
}