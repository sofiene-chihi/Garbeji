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
    this.divideData(this.jobs);
  }

//Tableau des offres obtenu depuis le service fetchDataService
  jobs = this.fetchDataService.jobs;

//Si l'utilisateur clique sur un bouton de catégorie, un nouveau tableau d'offres sera généré qui contient seulement la catégorie séléctionnée
  chooseByCategory(specifiedCategory: string) {
    let specificJobs: Array<JobOffer> = [];
    for (let job of this.jobs) {
      if (job.category == specifiedCategory) {
        specificJobs.push(job);
      }
    }
    this.divideData(specificJobs);
  }


//Puisque les offres seront ajoutées en trois colonnes, on crée un tableau pour chacune
jobsOfColumn1: Array<JobOffer> = [];
jobsOfColumn2: Array<JobOffer> = [];
jobsOfColumn3: Array<JobOffer> = [];


//division des offres sur des colonnes
  divideData(jobs: Array<JobOffer>): void {
    //reset arrays to empty (needed specifically for chooseByCategory)
    this.jobsOfColumn1 = [];
    this.jobsOfColumn2 = [];
    this.jobsOfColumn3 = [];
    //Pour les cas ou le tableau ne contient pas assez d'offres
    if (jobs.length==1) {
      this.jobsOfColumn1.push(jobs[0]);
    }
    if (jobs.length==2) {
      this.jobsOfColumn1.push(jobs[0]);
      this.jobsOfColumn2.push(jobs[1])
    }
    //Si la taille du tableau dépasse 3 (contient assez d'offres pour être subdivisé sur trois colonnes)
    for (let i = 0; i < jobs.length - 2; i += 3) {
      this.jobsOfColumn1.push(jobs[i]);
      this.jobsOfColumn2.push(jobs[i + 1]);
      this.jobsOfColumn3.push(jobs[i + 2]);
      //Si la taille du tableau n'est pas divisible par trois, 1 ou 2 offres doivent être ajoutés aux 2 premières colonnes
      if (this.jobs.length - i - 2 === 2) {
        this.jobsOfColumn1.push(jobs[i + 3]);
      }
      if (this.jobs.length - i - 2 === 3) {
        this.jobsOfColumn1.push(jobs[i + 3]);
        this.jobsOfColumn2.push(jobs[i + 4]);
      }
    }
  }
}
