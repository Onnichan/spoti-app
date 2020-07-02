import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})

export class SpotifyService{


  constructor(private httpClient:HttpClient){
    console.log('Spotify ready');
  }
  
  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({'Authorization':'Bearer BQBu8yk1A0R1Ac7DQFJOluGjDDAlVgHk3CgCSv_KNLQ4jlbDF5A4NDfjeCYiDBbhAJUfiSsjp8RbaPi8BBY'});
    return this.httpClient.get(url,{headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
    .pipe(map(data => data['albums'].items)); 
  }

  getArtist(ter:string){
    return this.getQuery(`search?q=%20${ter}&type=artist`)
    .pipe(map(data => data['artists'].items));
  }
}