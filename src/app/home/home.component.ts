import { Component, OnInit } from '@angular/core';
import { contact  } from '../contact';
 import { DataService} from '../data.service';
import 'lodash';
import * as $ from 'jquery';
declare var $:any;
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 model = new contact();
  submitted= false; 
  professions=[];
  title = 'client';
  error ={}
  name;
  email;
  message;
  proSelected: string;
  modifedtext: string;
  constructor( private dataService :DataService ){
    
  }
  
  ngOnInit() {
    this.professions = [
      {Id:1, Name: 'bioinformatics'},
      {Id:2,Name:'data scientist'},
      {Id:3, Name:'fullstack'}, 
      {Id:4, Name:'sponsorship'}];
    this.proSelected ="";
 
  }
  
  onSelectProfession(){
        
        this.proSelected = this.proSelected;
        console.log(this.proSelected);
  }
  
  customFunction(val:any){
    this.modifedtext= val;
    console.log()
  }

  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}. My proffesion is ${this.proSelected}`;
    alert(allInfo); 
    this.model.Name = this.proSelected;
    this.model.email = this.email;
 
    console.log(typeof(this.model));
     
    this.submitted = true;
    return this.dataService.contactForm(this.model).subscribe(
    data => this.model = data,
    error => this.error = error
    );
  }

}
