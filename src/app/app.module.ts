import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/Home/search/search.component';
import { HomeComponent } from './components/Home/home/home.component';
import { ItemCardComponent } from './components/Home/items-block/item-card/item-card.component';
import { ItemsBlockComponent } from './components/Home/items-block/items-block.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfosComponent } from './components/Home/infos/infos.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { UserProfileComponent } from './components/userUI/user-profile/user-profile.component';
import { UserServicesComponent } from './components/userUI/user-services/user-services.component';
import { NewServiceFormComponent } from './components/userUI/new-service-form/new-service-form.component';
import { ProvidedServicesComponent } from './components/userUI/provided-services/provided-services.component';
import { OldServicesComponent } from './components/userUI/old-services/old-services.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    ItemCardComponent,
    ItemsBlockComponent,
    InfosComponent,
    FooterComponent,
    UserProfileComponent,
    UserServicesComponent,
    NewServiceFormComponent,
    ProvidedServicesComponent,
    OldServicesComponent

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
