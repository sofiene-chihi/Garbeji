import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Garbeji';
  dark: boolean= false;


  change(){
    this.dark= !this.dark;
  }


  ngOnInit(): void {
    if(this.dark){
      document.body.classList.add('dark-theme')
    }else{
      document.body.classList.remove('dark-theme')
    }
  }

}


