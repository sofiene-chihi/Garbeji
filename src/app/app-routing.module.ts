import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/Home/home/home.component';
import { userProfileModule } from './components/userUI/user-profile/user-profile.module';
import { UserProfileComponent } from './components/userUI/user-profile/user-profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CatalogBodyComponent } from './components/catalog-ui/catalog-body/catalog-body.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogue', component: CatalogBodyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'profile/:id',
    loadChildren:()=> import ('./components/userUI/user-profile/user-profile.module').then(m=> m.userProfileModule) }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
