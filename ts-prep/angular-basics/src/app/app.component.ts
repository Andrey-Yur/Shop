import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic title'
  number = 42
  arr = [1, 2, 3]
  obj = { a: 1, b: { c: 23 } }
  title2 = 'initial'
  title3 = 'ng  works!'
  inputValue = ''

  backgroundToggle = false
  toggle:any = false

  img = 'https://raw.githubusercontent.com/WeltN24/react-web-component/master/docs/images/react-web-component-logo.png'

  arr2 = [1, 1, 2, 3, 5, 8, 13]
  obj2 = [
    {
      title: 'Post1', author: 'Andrey', comments: [
      {name: 'Maxim', text: 'Bosch1'},
      {name: 'Maxim', text: 'Bosch2'},
      {name: 'Maxim', text: 'Bosch3'}
    ]},
    {
      title: 'Post2', author: 'Dimok', comments: [
      {name: 'Petro', text: 'Bosch1'},
      {name: 'Petro', text: 'Bosch2'},
      {name: 'Petro', text: 'Bosch3'}
    ]}
  ]
  now:Date = new Date()

  constructor() {
    setTimeout(() => {
    console.log('Timeout is over')
    this.img = 'https://avatars0.githubusercontent.com/u/139426?v=3&s=400' 
    }, 5000)
  }

  onInput(event: KeyboardEvent) {
  //  console.log('Event', event)
    this.inputValue = (<HTMLInputElement>event.target).value
  }

  onClick() {
    console.log('Nazhal knopku!')
  }

  onBlur(str: string) {
    this.inputValue = str
  }

  onInput2(event: any) {
    this.title2 = event.target.value
  }
}

