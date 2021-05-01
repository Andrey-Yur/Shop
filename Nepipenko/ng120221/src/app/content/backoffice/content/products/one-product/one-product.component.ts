import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IProduct} from '../products.service';
import {pluck} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {
 public product$: Observable<IProduct> = this.activatedRoute.data.pipe(
     pluck('product')
 );
  public productId!: string;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
      this.activatedRoute.queryParams.subscribe((v) => {
          console.log(v);
      });
      setTimeout(() => {
          this.router.navigate(['./'], {queryParams: {page: 1, skip: 10}, relativeTo: this.activatedRoute});
      }, 7000);
      this.activatedRoute.data.subscribe((data) => console.log(data) );
      this.activatedRoute.params.subscribe(({id}) => {
     this.productId = id;
    });
  }

}
