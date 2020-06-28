import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})

export class SpotifyService{

  URL:string;
  constructor(private httpClient:HttpClient){
    this.URL = ''
  }

  getNewReleases(){
    this.httpClient.get('');
  }


}