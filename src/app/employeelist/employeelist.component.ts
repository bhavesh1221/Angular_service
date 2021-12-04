import { Component, OnInit } from '@angular/core';
import { ServiceofemployeeService } from '../serviceofemployee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  // public employee[]:<string> = [];
  // employee: Array<string> = [];
  text:any = '';
  // employee:string[] = new Array() 
  constructor(private _employeeservice: ServiceofemployeeService) { }

  ngOnInit(): void {
    this.text = this._employeeservice.getEmployee();
  }
  // fun(){
  //   this.employee = this._employeeservice.getEmployee();
  // }
}
