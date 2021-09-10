import { Component, OnInit } from '@angular/core';
import { FetchDataService, JobOffer } from 'src/app/services/fetch-data.service';
import { SearchService } from 'src/app/services/search.service';
@Component({
  selector: 'app-catalog-body',
  templateUrl: './catalog-body.component.html',
  styleUrls: ['./catalog-body.component.css']
})
export class CatalogBodyComponent implements OnInit {

  constructor(private fetchDataService: FetchDataService, private searchService:SearchService) { }

//Tableau des offres obtenu depuis le service fetchDataService
  jobs: Array<JobOffer>=[];

  ngOnInit(): void {
    this.fetchDataService.getJobOffers().subscribe((res)=>{
      this.jobs=res;
    this.divideData(this.jobs);
    });
  }

//Si l'utilisateur clique sur un bouton de catégorie, un nouveau tableau d'offres sera généré qui contient seulement la catégorie séléctionnée
  chooseByCategory(specifiedCategory: string) {
     this.divideData(this.searchService.searchByCategory(this.jobs, specifiedCategory));
  }

  searchByKeyword(keyword: string){
    this.divideData(this.searchService.searchByKeyword(this.jobs, keyword));
  }


//Puisque les offres seront ajoutées en trois colonnes, on crée un tableau pour chacune
jobsOfColumn: Array<Array<JobOffer>> = [[],[],[]];

//génération du tableau contenant les catégories
  generateCategories(){
    let categories: Array<string> = [];
    for(let job of this.jobs){
      if(categories.indexOf(job.category) === -1){
      categories.push(job.category);
    }
  }
    return categories;
  }

//division des offres sur des colonnes
  divideData(jobs: Array<JobOffer>): void {
    //reset arrays to empty (needed specifically for chooseByCategory)
    this.jobsOfColumn = [[],[],[]];
    //Pour les cas ou le tableau ne contient pas assez d'offres
    if (jobs.length==1) {
      this.jobsOfColumn[0].push(jobs[0]);
    }
    if (jobs.length==2) {
      this.jobsOfColumn[0].push(jobs[0]);
      this.jobsOfColumn[1].push(jobs[1])
    }
    //Si la taille du tableau dépasse 3 (contient assez d'offres pour être subdivisé sur trois colonnes)
    for (let i = 0; i < jobs.length - 2; i += 3) {
      this.jobsOfColumn[0].push(jobs[i]);
      this.jobsOfColumn[1].push(jobs[i + 1]);
      this.jobsOfColumn[2].push(jobs[i + 2]);
      
      //Si la taille du tableau n'est pas divisible par trois, 1 ou 2 offres doivent être ajoutés aux 2 premières colonnes
      if (jobs.length - i - 2 === 2) {
        
        this.jobsOfColumn[0].push(jobs[i + 3]);
      }
      else if (jobs.length - i - 2 === 3) {
        this.jobsOfColumn[0].push(jobs[i + 3]);
        this.jobsOfColumn[1].push(jobs[i + 4]);
      }
    }
  }
}
