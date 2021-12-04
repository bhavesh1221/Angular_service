import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  arr:any[] = [];
  addList(todo:string){
    console.log(this.arr);
    this.arr.push(
      {
        id:this.arr.length,
        lists:todo
      });
  }
  remove(id:number){
    this.arr = this.arr.filter((item) => {
     return item.id !== id;
    })
  }
  constructor() { }

  ngOnInit(): void {
  }

}
