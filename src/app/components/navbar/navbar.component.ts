import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';




    
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  @HostListener('window:scroll', ['$event']) 
  scrollHandler(event) {
    if(window.screen.width>991){
      this.top= 1 - 1/(window.pageYOffset/100);
      if(this.top>0.9){
        this.top=1;
      }
    }else{
      this.top=1;
    }
  }

  top=0;
  constructor() { }

  ngOnInit(): void {
  }
  
}


