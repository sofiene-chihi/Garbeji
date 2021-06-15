import { Injectable } from '@angular/core';
import data from '../../../assets/data/dummy-data.json';

//l'interface qui modélise l'offre de travail
export interface JobOffer{
offer_id: Number,
title: string,
description: string,
imageUrl: string,
category: string
}

@Injectable({
  providedIn: 'root'
})

export class FetchDataService {
  //Organisation des offres dans un tableau
   jobs: Array<JobOffer>;
  constructor() {
    this.jobs = Array.from(data);
    }
}
