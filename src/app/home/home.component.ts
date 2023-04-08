import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../api/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any[] = [];

  constructor (private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.movies.subscribe(movies => {
      this.movies = movies;
    });
    this.moviesService.getMovies();
  }

  /*movies = [
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
  ];*/
}
