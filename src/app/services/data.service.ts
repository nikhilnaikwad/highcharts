import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonUrl = 'assets/chart.json'; 
  constructor(private httpClient: HttpClient) { }

  getCharts(){
     return this.httpClient.get(this.jsonUrl);
  }
}
