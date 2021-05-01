import {Component} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent {
  public myTitle = 'Ng Course';
  public myDrawer!: MatDrawer;
   // > = this.productsService.getProducts();
  // public products$: Observable<IProduct[]> = products$
  //   .pipe(
  //     pluck('products')
  //     // map((res) => res.products)
  //   );
  public setSideNav(drawer: MatDrawer): void{
    this.myDrawer = drawer;
  }
// public clickOnImage(divEl: HTMLDivElement, event: MouseEvent): void {
  //   console.log(divEl, event);
  // }

//   public search1(value: string): void {
// // const el = ev.target as HTMLInputElement;
// console.log(value);
// this.text = value;
  //  }
  // public ngOnInit(): void {
    // products$
    //   .pipe(takeUntil(this.unSubscriber$))
    //   .subscribe((p) => {
    //   this.products = p;
    // });
   // console.log(this.productsService);
  // }
}
