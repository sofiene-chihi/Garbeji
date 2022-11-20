import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  jobs:string[]= ["plombier", "transporteur", "designer", "boulonger", "chanteur", "prof etude", "Développeur", "Ingénieur ", "Expert ","plombier", "transporteur", "designer", "boulonger", "chanteur", "prof etude", "Développeur", "Ingénieur ", "Expert "]

  constructor() { }

  ngOnInit(): void {
   
  }

}
