import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
  	console.log('Servicio Spotify listo!');
  }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDePtzjc8ObuZHob9OTnr_HOL0Y0FhAyDqiLeAxNpLPjEjFGdJbn7FHak7OP1Ltu3CT7ja-ypjYHxE2d1A'
    });
    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20').pipe(map(data => data['albums'].items));
  }

  getArtista(termino: string){
    return this.getQuery(`search?query=${termino}&type=artist&market=CO&offset=0&limit=15`).pipe(map(data => data['artists'].items));
  }
}
