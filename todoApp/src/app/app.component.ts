import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';

  todos=[];

  todo="";

  add(){
    this.todos.push(this.todo);
    console.log(this.todos);
  }

  deleteTodo(event){
    this.todos=this.todos.filter(todo=>{
      return todo!=event;
    })
    //alert(event); 
  }

  /* change(event:any){
    this.todo=event.target.value;
  } */
}
