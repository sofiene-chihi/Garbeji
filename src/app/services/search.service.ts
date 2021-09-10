import { Injectable } from '@angular/core';
import { JobOffer } from './fetch-data.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

//filtrage du tableau contenant les offres de jobs suivant la catégorie séléctionée
  searchByCategory(jobs: Array<JobOffer>, specifiedCategory: string){
    let specificJobs: Array<JobOffer> = [];
    for (let job of jobs) {
      if (job.category == specifiedCategory) {
        specificJobs.push(job);
      }
    }
    return specificJobs;
  }

//filtrage du tableau contenant les offres de jobs suivant le mot clé séléctioné dans le "name" du JobOffer
  searchByKeyword(jobs: Array<JobOffer>, keyword: string){
    let specificJobs: Array<JobOffer> = [];
    for (let job of jobs) {
      if (job.name.toLowerCase().includes(keyword.toLowerCase())) {
        specificJobs.push(job);
      }
    }
    return specificJobs;
  }
}
