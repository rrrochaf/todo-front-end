import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id! : number;
  todo!: Todo;

  constructor(private todoService : TodoDataService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(1,'',false, new Date());

    this.todoService.retrieveTodo('ricardo',this.id).subscribe(
      data => this.todo = data 
    )
    
  }

  saveTodo(){

    this.todoService.updateTodo('ricardo',this.id,this.todo).subscribe(
      data => {
        console.log(data);
      }
    )

  }

}
