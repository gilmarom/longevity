import { Component, OnInit } from '@angular/core';
import {PodcastService } from '../podcast.service';
import { HttpClient} from '@angular/common/http';
import { Podcast } from '../Podcast';
@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent implements OnInit {
  podcasts = [];
  public show_dialog : boolean = false;
  public button_name : any = 'Show Login Form!';

  constructor( podcastService:PodcastService, http:HttpClient) { }

  ngOnInit() {
       this.podcasts = [
      {id:1, name: 'The starting point', particpate: 'Dr Anat Chesner-haviv'},
      {id:2, name:'Coming soon!',particpate: 'Dr Anat Chesner-haviv'},
      {id:3, name:'Coming soon!',particpate: 'Dr Anat Chesner-haviv'}, 
      {id:4, name:'Coming soon!',particpate: 'Dr Anat Chesner-haviv'},
      {id:5, name:'Coming soon!',particpate: 'Dr Anat Chesner-haviv'}]
  }

  
  toggle() {
    this.show_dialog = !this.show_dialog;

    // CHANGE THE TEXT OF THE BUTTON.
    if(this.show_dialog) 
      this.button_name = "Hide Login Form!";
    else
      this.button_name = "Show Login Form!";
  }
}



