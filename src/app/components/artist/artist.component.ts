import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  artist;
  constructor(private activeRoute:ActivatedRoute,private spotifyService:SpotifyService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      console.log(params['id']);
      this.artist = this.spotifyService.ShowArtist(params['id']).subscribe(data => this.artist = data);
    });
  }
}
