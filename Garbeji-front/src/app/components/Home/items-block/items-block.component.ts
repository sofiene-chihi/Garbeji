import { Component, OnInit } from '@angular/core';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-items-block',
  templateUrl: './items-block.component.html',
  styleUrls: ['./items-block.component.css']
})
export class ItemsBlockComponent implements OnInit {

  faLocationArrow= faLocationArrow;
  constructor() { }

  ngOnInit(): void {
  }

}
