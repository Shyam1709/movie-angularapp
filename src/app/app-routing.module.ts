import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {UpcomingMoviesComponent} from './upcoming-movies/upcoming-movies.component';
import {NowPlayingMoviesComponent} from './now-playing-movies/now-playing-movies.component';
import {PopularMoviesComponent} from './popular-movies/popular-movies.component';
import {TopRatedMoviesComponent} from './top-rated-movies/top-rated-movies.component';
const routes: Routes = [
  { path: '', redirectTo: '/upcoming', pathMatch: 'full' },
  { path: 'upcoming', component: UpcomingMoviesComponent },
  { path: 'now-playing', component: NowPlayingMoviesComponent },
  { path: 'popular', component: PopularMoviesComponent },
  { path: 'top-rated', component: TopRatedMoviesComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
