import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceofemployeeService {

  constructor() { }
  getEmployee(){
    return [ 
      { "id": 1,
      "name": "Leanne Graham",
      "username": "Bret"},
      { "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette"},
      {"id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net"}
    ]
  }
}
