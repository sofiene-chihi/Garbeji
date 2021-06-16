import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userProfileRoutingModule } from './user-profile-routing.module';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    EditProfileComponent

 ],
  imports: [
    CommonModule,
    userProfileRoutingModule
  ]
})
export class userProfileModule { }
