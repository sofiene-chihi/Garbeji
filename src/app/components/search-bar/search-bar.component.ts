import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  categories: Array<string>= [
    "Mongus",
    "Photographing",
    "Labib"
  ]

  @Output() categoryChoiceEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
//le click sur un bouton de catégorie le nom de cette dernière sera envoyé au catalog-body-component
  chosenCategory(specifiedCategory: string){
    this.categoryChoiceEvent.emit(specifiedCategory)
  }
}
