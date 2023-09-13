import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PeriodicElementData} from "../model/periodicelementdata.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private periodicElementDataApiUrl = 'http://localhost:3500';

  constructor(private http: HttpClient) {
  }

  getPeriodicElements(): Observable<PeriodicElementData[]> {
    return this.http.get<PeriodicElementData[]>(`${this.periodicElementDataApiUrl}/periodicElements`);
  }
}
