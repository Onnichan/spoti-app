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
    const headers = new HttpHeaders({'Authorization':'Bearer BQBv4nxT2j8ZgJmZFNFFcp430D5v9DgeoL3T8rfTEaP5i2kvNq2A0CAyescm-i8fmhALSZBGGusexnHToIc'});
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