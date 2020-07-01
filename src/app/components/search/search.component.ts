import { Component} from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})

export class SearchComponent {
  artists:any[] = [];
  constructor(private spotifyService:SpotifyService) { }

  search(value:string){
    console.log(value);
    this.spotifyService.getArtist(value).subscribe((response:any)=>{
      console.log(response);
      this.artists = response;
    })};
}