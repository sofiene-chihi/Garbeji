import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/Home/home/home.component';
import { userProfileModule } from './components/userUI/user-profile/user-profile.module';
import { UserProfileComponent } from './components/userUI/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'catalogue', component: HomeComponent },
  { path: 'profile/:id',
    loadChildren:()=> import ('./components/userUI/user-profile/user-profile.module').then(m=> m.userProfileModule) }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
