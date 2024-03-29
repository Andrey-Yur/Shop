
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core'
import { delay } from 'rxjs/operators'
import { Todo, TodosService } from './todos.service'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-httpclient';

  todos: Todo[] = []
  todoTitle = ''
  loading = false
  error = ''

  constructor(private todosService: TodosService) {
    }
  
  ngOnInit() {
    this.fetchTodos()
  }

  addTodo() { 
    if (!this.todoTitle.trim()) {
      return
    }
   
    this.todosService.addTodo({
      title: this.todoTitle,
      completed: false
    }).subscribe(todo => {
      this.todos.push(todo)
      this.todoTitle=''
    })

  }
  
  fetchTodos() {
    this.loading = true
    this.todosService.fetchTodos()
    .subscribe(todos => {
        console.log('Response:', todos)
        this.todos = todos
        this.loading = false
    }, error => {
       // console.log(error.message)
        this.error = error.message
    })
  }

  removeTodo(id:number) {
    this.todosService.removeTodo(id)
    .subscribe(() => {
    this.todos = this.todos.filter(t=>t.id !==id)
    })
  }

  completeTodo(id: number) {
    this.todosService.completeTodo(id).subscribe(todo => {
      console.log(todo)
      this.todos.find(t=>t.id === todo.id).completed = true
    })
  }

}
