import { Component } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  e: number = Math.E
  str = 'hello world'
  date: Date = new Date()
  float = 0.42
  obj = {
    a: 1, b: {
    c:2, d:{e:3, f:8}
  }
}

  posts: Post[] = [
    { title: 'Beer', text: 'Самое лучшее пиво в Баварии' },
    { title: 'Bread', text: 'Бородинский хлебушек'},
    { title: 'Vodka', text: 'Rodnik'},
    ]
  
  search = ''
  searchfield = 'title'
  
  addPost() {
    this.posts.unshift({
      title: 'Angular 9',
      text:'Учит Андрей Юрченко'
    })
  }

  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => { resolve('Promise Resolved') }, 4000)
  })

  date1: Observable<Date> = new Observable(obs => {
    setInterval( () => {
    obs.next(new Date())
    }, 1000)
  }
  )
}
