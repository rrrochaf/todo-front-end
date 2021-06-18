import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {

  constructor(
    public id : number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  } 

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = [];
  message!: string;

  constructor(private todoDataService : TodoDataService) { }

  ngOnInit(): void {
    this.retrieveAllTodos();
  }

  retrieveAllTodos(){
    this.todoDataService.retrieveAllTodos("ricardo").subscribe(
      response => {
        this.todos = response;
      }
    )
  }

  delete(id : any){
     
    this.todoDataService.deleteTodo("ricardo",id).subscribe(

      response => {
        this.retrieveAllTodos();
        this.message = `Todo ${id} deleted`
       }
    )
  }
}
