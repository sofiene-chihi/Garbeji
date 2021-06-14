import { EventEmitter, Output } from '@angular/core';
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
      this.top= 1 - 1/(window.pageYOffset/40);
      if(this.top>0.9){
        this.top=1;
      }
    }else{
      this.top=1;
    }
  }

  @Output() changeTheme = new EventEmitter();

  top=0;
  constructor() { }

  ngOnInit(): void {
  }
  

  changeMode(){
    this.changeTheme.emit();
    var icon= document.getElementById("icon");
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        icon.className="bi bi-sun-fill";
    }else{
        icon.className="bi bi-moon-fill";
    }
  }

}


