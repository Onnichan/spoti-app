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
    const headers = new HttpHeaders({'Authorization':'Bearer BQDsSCcBz3tRUfMgl5K-Ktr8KE0a1ynJnzCNWwV_bbAJivnyG8iE5gw81Hmk7kS24S7Yk4_wQ-cGisqeMtA'});
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

  ShowArtist(id:string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTraks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map(data => data['tracks']));
  }
}