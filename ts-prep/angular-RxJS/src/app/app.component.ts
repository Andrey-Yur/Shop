import { Component } from '@angular/core';
import { interval, Subscription, Observable,Subject } from 'rxjs';
import { map,filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-RxJS';
  
  sub: Subscription
  stream$: Subject<number> = new Subject<number>()
  counter = 0

  constructor() {
    // const intervalStream$ = interval(1000)
    // this.sub = intervalStream$
    //   .pipe(
    //     filter(val=>val %2 === 0),
    //     map((val) => `Mapped value ${val}`)
        
    //   )
    //   .subscribe((val) => {
    //   console.log(val)
    // })

// **  Сщздание своего стрима
    // const stream$ = new Observable(observer => {
    //   setTimeout(() => {
    //     observer.next(1)
    //   },1500)
    
    //   setTimeout(() => {
    //     observer.complete()
    //   }, 2600)

    //   setTimeout(() => {
    //     observer.error('Что то не так')
    //   }, 2500)
    
    //   setTimeout(() => {
    //     observer.next(2)
    //   }, 2500)
    
    // })
    

    // this.sub = stream$.subscribe(
    //   value => console.log('Next:',value) ,
    //   error => console.log('Error:', error),
    //   ()=>console.log('Бобик сдох')
    
    // )
    
    this.sub=this.stream$.subscribe(value => {
  console.log('Subscribe:',value)
})
}

  stop() {
    this.sub.unsubscribe()
  }

  next() {
    this.counter++
    this.stream$.next(this.counter)
  }

}
