import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { NowPlayingMoviesComponent } from './now-playing-movies/now-playing-movies.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import {NavbarComponent} from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    PopularMoviesComponent,
    UpcomingMoviesComponent,
    NowPlayingMoviesComponent,
    TopRatedMoviesComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
