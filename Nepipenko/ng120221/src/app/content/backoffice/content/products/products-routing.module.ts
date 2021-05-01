import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {ProductsComponent} from './products.component';
import {OneProductComponent} from './one-product/one-product.component';
import {ProductResolverService} from './one-product/product-resolver.service';



const routes: Route[] = [
    {
        path: '', component: ProductsComponent
          },
    {
    path: ':id',
        component: OneProductComponent,
        data: {
        title: 'Products Page'
        },
        resolve: {product: ProductResolverService}
    }
];
@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class ProductsRoutingModule{ }
