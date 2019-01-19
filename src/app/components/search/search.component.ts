import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

	artistas: any[] = [];

  constructor(private spotify:SpotifyService) { }

  buscar(termino: string){
  	console.log(termino);
  	if (termino.length > 0)
    {
      this.spotify.getArtista(termino).subscribe((data: any) => this.artistas = data);
    }
    else
    {
      this.spotify.getNewReleases().subscribe((data: any) => this.artistas = data);
    }
  }
}