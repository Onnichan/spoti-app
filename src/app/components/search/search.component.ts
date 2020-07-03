import { Component} from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})

export class SearchComponent {
  artists:any[] = [];
  loading:boolean;

  constructor(private spotifyService:SpotifyService) { }

  search(value:string){
    this.loading = true;
    this.spotifyService.getArtist(value).subscribe((response:any)=>{
      console.log(response);
      this.artists = response;
      this.loading = false;
    });
  }
}