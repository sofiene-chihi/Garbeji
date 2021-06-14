import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewServiceFormComponent } from '../new-service-form/new-service-form.component';
import { OldServicesComponent } from '../old-services/old-services.component';
import { ProvidedServicesComponent } from '../provided-services/provided-services.component';
import { UserProfileComponent } from './user-profile.component';



const routes: Routes = [

{path: '', component: UserProfileComponent,      
    children:[
    {path: 'new-service' ,component: NewServiceFormComponent },
    {path: 'old-services' ,component: OldServicesComponent},
    {path: 'provided-services' ,component: ProvidedServicesComponent},
    {path: '**' ,   redirectTo:'new-service'},
            
    ]
},

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class userProfileRoutingModule { }
