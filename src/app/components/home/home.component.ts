import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  newSongs:any[] = [];
  loading:boolean;
  error:boolean;
  mensajeError:string;

  constructor(private spotifyService:SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotifyService.getNewReleases().subscribe((data:any) =>{
      this.newSongs = data;
      this.loading = false;
    },(errorMessage) =>{
        this.loading = false;
        this.error = true;
        this.mensajeError = errorMessage.error.error.message;      
    });
  }

  ngOnInit(): void {
  }

}
