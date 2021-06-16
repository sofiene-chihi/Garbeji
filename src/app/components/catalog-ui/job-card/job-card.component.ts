import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { JobOffer } from 'src/app/services/fetch-data/fetch-data.service'
@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  @Input() jobOffer: JobOffer;
  
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
