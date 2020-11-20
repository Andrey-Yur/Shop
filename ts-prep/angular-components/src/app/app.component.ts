import { Component, OnInit } from '@angular/core';

// Хорошая практика описывать объекты
export interface Post{
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // Создаём массив posts типа Post
  posts: Post[] = [
    {title: 'Хочу выучить Angular компоненты', text:'Я старательно учу данную тему', id: 1},
    {title: 'Следующий блок', text:'Будет про директивы и ещё про пайпы', id: 2}
  ]

  updatePosts(post: Post) {
    this.posts.unshift(post) // unshift добавляет в массив перевый элемент
    // this.posts.push(post) // push добавляет в конец
  //console.log('Post', post)
}

  removePost(id: number) {
  console.log('ID to remove', id)
  this.posts = this.posts.filter(p=>p.id !==id) // Удаление из массива 
 } 
  ngOnInit() {
    setTimeout(() => {
      console.log('Timeout')
      this.posts[0] = {
        title: 'Changed!',
        text: 'Changed!',
        id:45
      }
  },5000)
}

}
