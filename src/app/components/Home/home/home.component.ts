import { ThrowStmt } from '@angular/compiler';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() dark: boolean;

  constructor( private userService : UserService) { }

  ngOnInit(): void {

    this.userService.all().subscribe((users)=>{
      console.log(users)
    })
    if(this.dark){
      document.body.classList.add('dark-theme')
    }else{
      document.body.classList.remove('dark-theme')
    }
  }

}
