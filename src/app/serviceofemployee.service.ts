import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employeemodel';


@Injectable({
  providedIn: 'root'
})
export class ServiceofemployeeService {
  private _url: string = './assets/data/employee.json'
  constructor(private http: HttpClient) { }
  getEmployee():Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
    
  }
}
