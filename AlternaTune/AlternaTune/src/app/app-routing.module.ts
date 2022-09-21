import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: 'signup', component: SignUpComponent},
  { path: '', component: ContentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'sign-in', component: SignInComponent},
  { path: 'profile', component: UserProfileComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
