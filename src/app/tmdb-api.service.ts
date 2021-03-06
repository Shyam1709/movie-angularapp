import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class TmdbApiService {
  private apiURL="https://api.themoviedb.org/3/movie/upcoming?api_key=d3f52c1a9668c85909b9f50188e541b7&language=en-US&page=2";
  private popularURL="https://api.themoviedb.org/3/movie/popular?api_key=d3f52c1a9668c85909b9f50188e541b7&language=en-US&page=2";
  private nowURL="https://api.themoviedb.org/3/movie/now_playing?api_key=d3f52c1a9668c85909b9f50188e541b7&language=en-US&page=2";
  private topRatedURL="https://api.themoviedb.org/3/movie/top_rated?api_key=d3f52c1a9668c85909b9f50188e541b7&language=en-US&page=2";
  data:any={};
  constructor(private http: Http){  }
    getPosts(){
      return this.http.get(this.apiURL)
      .map(data => data.json(),
      (error: any)=>this.handleError(error));
    }
    getPopular(){
      return this.http.get(this.popularURL)
      .map(data => data.json(),
      (error: any)=>this.handleError(error));
    }
    getnow(){
      return this.http.get(this.nowURL)
      .map(data => data.json(),
      (error: any)=>this.handleError(error));
    }
    gettopRated(){
      return this.http.get(this.topRatedURL)
      .map(data => data.json(),
      (error: any)=>this.handleError(error));
    }
    private handleError(error: Response) {
       return Observable.throw(error.statusText);
   }
    }
