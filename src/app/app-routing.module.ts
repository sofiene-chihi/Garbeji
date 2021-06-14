import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/Home/home/home.component';
import { UserProfileComponent } from './components/userUI/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'catalogue', component: HomeComponent },
  { path: 'profile', component: UserProfileComponent }


];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
