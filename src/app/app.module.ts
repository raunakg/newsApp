import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselModule } from 'ngx-owl-carousel-o';


import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LastReadComponent } from './last-read/last-read.component';
import { FooterComponent } from './footer/footer.component';
import { TrendingComponent } from './trending/trending.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { HomeComponent } from './home/home.component';
import { TagsComponent } from './tags/tags.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { ContactComponent } from './contact/contact.component';
import { ArticleComponent } from './article/article.component';
import { environment } from 'src/environments/environment';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    NavigationComponent,
    LastReadComponent,
    FooterComponent,
    TrendingComponent,
    PlaylistComponent,
    RecommendedComponent,
    HomeComponent,
    TagsComponent,
    MostPopularComponent,
    ContactComponent,
    ArticleComponent,
    ProfileComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
