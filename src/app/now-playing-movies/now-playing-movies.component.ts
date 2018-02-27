import { Component, OnInit } from '@angular/core';
import {TmdbApiService} from './../tmdb-api.service';

@Component({
  selector: 'app-now-playing-movies',
  templateUrl: './now-playing-movies.component.html',
  styleUrls: ['./now-playing-movies.component.css'],
  providers:[TmdbApiService]
})
export class NowPlayingMoviesComponent implements OnInit {
public nowData: any=[];
public imagePath: any;
public baseUrl="http://image.tmdb.org/t/p/w185/";
constructor(private tmdbApiService : TmdbApiService) { }

  ngOnInit() {
    this.getInfo();
  }
  getInfo(){
    this.tmdbApiService.getnow().subscribe(data=>{
      this.nowData=data.results;
        },(error:any)=>{
          console.log(error)
        })
  }
}
