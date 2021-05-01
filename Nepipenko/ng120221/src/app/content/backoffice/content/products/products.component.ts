import {Component, OnInit, Optional} from '@angular/core';
import {IProduct, ProductsService} from './products.service';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public searchText = '';
  public onlyFavorites = false;
  public products$!: Observable<IProduct[]>;
  public constructor(
      // @Inject(ProductsService) private productsService: any
      @Optional() private productsService: ProductsService
  ) {
  }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }
  public search(text: string): void{
    this.searchText = text;
  }
  public productsFilter(products: IProduct[]): IProduct[]{
    return products.filter((product: IProduct) => `${product.name} ${product.id}`.toLocaleLowerCase().includes(this.searchText));
  }
  public toggleOnlyFavorites(event: MatCheckboxChange): void {
    this.onlyFavorites = event.checked;
  }
}
