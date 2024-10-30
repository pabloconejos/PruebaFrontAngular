import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../../../core/services/tmdb.service';
import { Movie, MovieRoot } from '../../../../interfaces/Movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit{

  paginationInfo = {
    itemsPerPage: 0,
    currentPage: 1,
    total_pages: 0,
    total_results: 0
  }
  

  movies: Movie[] = []


  constructor(private tmdb: TmdbService) {

  }
  ngOnInit(): void {
    this.tmdb.getMovies().subscribe( (movies: MovieRoot) => {
      console.log(movies)
      this.movies = movies.results
    })
  }

}
