import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutExtraPageComponent } from 'src/src/app/about-page/about-extra-page/about-extra-page.component';
import { SharedModule } from '../shared/shared.module';
import { AboutPageComponent } from './about-page.component';

@NgModule({
    declarations: [
        AboutPageComponent,
        AboutExtraPageComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '', component: AboutPageComponent, children: [
                    { path: 'extra', component: AboutExtraPageComponent }
                ]
            }
        ])
    ],

    exports: [RouterModule]
  
})
    
export class AboutPageModule{

}