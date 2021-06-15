import { Injectable } from '@angular/core';
import data from '../../../assets/data/dummy-data.json';

export interface JobOffer{
offer_id: Number,
title: string,
description: string,
imageUrl: string
}

@Injectable({
  providedIn: 'root'
})

export class FetchDataService {
   jobs: Array<JobOffer>;
  constructor() {
    this.jobs = Array.from(data);
    }
}
