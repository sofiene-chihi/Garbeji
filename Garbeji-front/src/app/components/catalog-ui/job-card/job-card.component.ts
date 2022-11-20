import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { JobOffer } from 'src/app/services/fetch-data.service'
@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  @Input() jobOffer: JobOffer;
    modalId: string;
  
  constructor() { 
  }

  ngOnInit(): void {
    this.modalId= "#offerModal"+this.jobOffer.id.toString();    
  }
}
