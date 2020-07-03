import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {

  artist:any = {};
  loading:boolean;
  topTracks:any[] = [];


  constructor(private activeRoute:ActivatedRoute,private spotifyService:SpotifyService) { 
    this.loading = true;
    this.activeRoute.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
      // console.log(this.artist);
    });
  }
  
  getArtist(id:string){
      this.loading = true;
      this.spotifyService.ShowArtist(id).subscribe( artist => {
      this.artist = artist;
      this.loading = false;
    });
  }

  getTopTracks(id:string){
    this.spotifyService.getTopTraks(id).subscribe( topTracks =>{
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }
}
