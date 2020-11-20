import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  //Для передачи в app.component нужно отметить как @Output
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()
  
  // если хотим обращаться в ngOnInit то static:TRUE
  @ViewChild('titleInput', {static: false}) inputRef: ElementRef
  
  title = ''
  text = '' 
  
  constructor() { }

  ngOnInit(): void {
  }

  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      }
      this.onAdd.emit(post) // emit() отправление данных наружу
     // console.log('New Post:', post)
      this.text = this.title = ''
   } 
  }
// Доступ до HTML элементов
  focusTitle() {
    this.inputRef.nativeElement.focus()
   // console.log(this.inputRef)
}

}
