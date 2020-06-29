import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})

export class SpotifyService{


  constructor(private httpClient:HttpClient){
    console.log('Spotify ready');
  }

  getNewReleases(){
    
    let headers = new HttpHeaders({'Authorization':'Bearer BQCGtILltkwds-Q6OUCeCHii4GoR-pSIBFS8oF_xGP5IqZhNA-LjZ9EOJAZkEJVnCJpqsIgHmDa5Av4LnX0'});
    return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases',{headers});
  }

  getArtist(ter:string){
    let headers = new HttpHeaders({'Authorization':'Bearer BQCGtILltkwds-Q6OUCeCHii4GoR-pSIBFS8oF_xGP5IqZhNA-LjZ9EOJAZkEJVnCJpqsIgHmDa5Av4LnX0'});
    return this.httpClient.get(`https://api.spotify.com/v1/search?q=%20${ter}&type=artist`,{headers});
  }
}