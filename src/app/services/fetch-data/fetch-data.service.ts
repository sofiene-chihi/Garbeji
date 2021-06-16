import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//l'interface qui modélise l'offre de travail
export interface JobOffer{
id: Number,
userId: Number,
name: string,
worktime_start: string,
worktime_end: string,
price: Number,
category: string,
availability: string,
description: string,
imageUrl: string
}

@Injectable({
  providedIn: 'root'
})

export class FetchDataService {
  constructor(private http:HttpClient) {
    }

    getJobOffers(){
      return this.http.get<JobOffer[]>("http://localhost:3000/jobOffers");
    }


}
