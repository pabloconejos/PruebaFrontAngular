import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment';
import { MovieRoot } from '../../interfaces/Movie';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(private http: HttpClient) { }

  getMovies(page = 1) {
    const url = `${environment.apiUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.accesTokenAuth}`
    });

    return this.http.get<MovieRoot>(url, { headers });
  }


}
