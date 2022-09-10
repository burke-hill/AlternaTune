import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component'
import { LoginComponent } from './auth/login/login.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component: ForgotComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'signup', component: SignUpComponent},
  { path: '', component: ContentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
