import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {BackofficeComponent} from './backoffice.component';


const routes: Route[] = [
    {
        path: '', component: BackofficeComponent,
        children: [
            {path: '', loadChildren: () => import('./content/products/products.module').then(mod => mod.ProductsModule)}
            ]
    },
    ];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class BackofficeRoutingModule { }
