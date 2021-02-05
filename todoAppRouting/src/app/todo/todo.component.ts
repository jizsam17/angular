import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo?:string;

  @Output() deleteTodo= new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  delete(todo?:any){
    this.deleteTodo.emit(todo);
    //alert(todo);
  }
}
