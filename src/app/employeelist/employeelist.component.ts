import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employeemodel';
import { ServiceofemployeeService } from '../serviceofemployee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
 
  // text:any = '';
  arr: Array<IEmployee> = [];
  constructor(private _employeeservice: ServiceofemployeeService) { }

  ngOnInit(): void {
    this._employeeservice.getEmployee().subscribe(data => this.arr = data)
  }
  
}
