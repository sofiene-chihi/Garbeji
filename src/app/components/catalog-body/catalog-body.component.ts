import { Component, OnInit } from '@angular/core';
import { FetchDataService, JobOffer } from 'src/app/services/fetch-data/fetch-data.service';
@Component({
  selector: 'app-catalog-body',
  templateUrl: './catalog-body.component.html',
  styleUrls: ['./catalog-body.component.css']
})
export class CatalogBodyComponent implements OnInit {

  constructor(private fetchDataService: FetchDataService) { }

  ngOnInit(): void {
    this.divideData();
  }
  jobs = this.fetchDataService.jobs;
  jobsOfColumn1: Array<JobOffer> = [];
  jobsOfColumn2: Array<JobOffer> = [];
  jobsOfColumn3: Array<JobOffer> = [];
  
  divideData(): void{
    for(let i=0; i<this.jobs.length-2;i+=3){
      this.jobsOfColumn1.push(this.jobs[i]);
      this.jobsOfColumn2.push(this.jobs[i+1]);
      this.jobsOfColumn3.push(this.jobs[i+2]);
      if(this.jobs.length-i-2===2){
        this.jobsOfColumn1.push(this.jobs[i+3]);
      }
      if(this.jobs.length-i-2===3){
        this.jobsOfColumn1.push(this.jobs[i+3]);
        this.jobsOfColumn2.push(this.jobs[i+4]);
      }

    }
  }
}
