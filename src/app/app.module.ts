import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlogenComponent } from './slogen/slogen.component';
import { TeamComponent } from './team/team.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { PodcastComponent } from './podcast/podcast.component';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'podcast', component: PodcastComponent},
  { path:'podcast/:id', component: PlayComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    SlogenComponent,
    TeamComponent,
    NavbarComponent,
    PodcastComponent,
    HomeComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
