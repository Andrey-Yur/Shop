import { NgModule } from '@angular/core';
import {SharedModule} from '../../../../shared/shared.module';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from './products.component';
import {ProductCardComponent} from './product-card/product-card.component';
import {ProductsFilterPipe} from './products-filter.pipe';
import {ProductsService} from './products.service';
import { OneProductComponent } from './one-product/one-product.component';
import {ProductResolverService} from './one-product/product-resolver.service';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductsFilterPipe,
    OneProductComponent,
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  providers: [
      ProductsService,
      ProductResolverService
  ]
})
export class ProductsModule { }
