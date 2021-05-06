import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContentComponent } from './components/content/content.component'

const routes: Routes = [
    { path: 'home', component: ContentComponent },
    { path: 'about', component: AboutPageComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
