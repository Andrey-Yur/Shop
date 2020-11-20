import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush, // реагировать на изменение @Input целиком, не локального объекта внутри например title 
  encapsulation: ViewEncapsulation.None // применить стили для остальных элементов
})
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked, 
  OnDestroy
{
  
  @Input() post: Post
  @Output() onRemove = new EventEmitter<number>()
  @ContentChild('info',{static: true}) infoRef: ElementRef // Доступ до контента внутри компонента
 
  constructor() {
    //console.log('constructor')
   }

  // Про hooks и их жизненный цикл читать на сайте поиск ..life

  ngOnChanges(changes: SimpleChanges): void{
  console.log('ngOnChanges', changes)
}

  ngOnInit(): void {    // Иницилизация компонента
    console.log('ngOnInit')
    //console.log(this.infoRef.nativeElement)
  }

  ngDoCheck() {
    console.log('ngDoCheck')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit() {
  console.log('ngAfterViewInit')
  }
  
  ngAfterViewChecked() {
  console.log('ngAfterViewChecked')
  }
  
  ngOnDestroy() {
    console.log('ngOnDestroy')
  }
  removePost() {
   this.onRemove.emit(this.post.id) // отправляем id post в app.component
 }

}
