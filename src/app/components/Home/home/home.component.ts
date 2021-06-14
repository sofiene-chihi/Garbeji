import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() dark: boolean;

  constructor() { }

  ngOnInit(): void {
    if(this.dark){
      document.body.classList.add('dark-theme')
    }else{
      document.body.classList.remove('dark-theme')
    }
  }

  changeMode(){
      document.body.classList.toggle('dark-theme')
  }

}
