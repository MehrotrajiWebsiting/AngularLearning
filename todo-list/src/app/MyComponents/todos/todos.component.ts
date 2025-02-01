import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';  // <-- Import CommonModule


@Component({
  selector: 'app-todos',
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos : Todo[] = [];

  constructor(){
    
  }

  ngOnInit(): void {
    this.todos = [
      {
        sno:1,
        title: "Title",
        desc: "Description",
        active: true
      },
      {
        sno:2,
        title: "Title",
        desc: "Description",
        active: true
      },
      {
        sno:3,
        title: "Title",
        desc: "Description",
        active: true
      }
    ]
  }
}
