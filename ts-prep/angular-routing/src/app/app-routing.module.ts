import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutExtraComponent } from './about-extra/about-extra.component';
import { AboutComponent } from './about/about.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { PostResolver } from './post.resolver';
import { AuthGuard } from './auth.guard';

// http://localhost:4200/-> HomeComponent
// http://localhost:4200/about-> AboutComponent
// http://localhost:4200/posts-> PostsComponent
// http://localhost:4200/about/extra-> AboutExtraComponent

const routes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: 'about', component: AboutComponent, canActivateChild:[AuthGuard], children: [
        {path: 'extra', component: AboutExtraComponent}
    ]},
    { path: 'posts', component: PostsComponent, canActivate:[AuthGuard] },
    {
        path: 'posts/:id', component: PostComponent, resolve:
        {  post: PostResolver }
    },
    { path: 'error', component: ErrorPageComponent },
    { path: '**', redirectTo: '/error'} // обязательно последним! 
]

@NgModule({
    imports: [RouterModule.forRoot(routes)], // регистрация массива routes
    exports: [RouterModule]
})
export class AppRoutingModule {}