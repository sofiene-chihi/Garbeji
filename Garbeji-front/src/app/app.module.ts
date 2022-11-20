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
import { CardComponent } from './components/userUI/card/card.component';
import { SocialsComponent } from './components/userUI/socials/socials.component';
import { DetailsComponent } from './components/userUI/details/details.component';
import { HttpClientModule}  from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchBarComponent } from './components/catalog-ui/search-bar/search-bar.component';
import { JobCardComponent } from './components/catalog-ui/job-card/job-card.component';
import { CatalogBodyComponent } from './components/catalog-ui/catalog-body/catalog-body.component';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';

const JWT_Module_Options: JwtModuleOptions = {
  config: {

  }
};

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
    CardComponent,
    SocialsComponent,
    DetailsComponent,
    LoginComponent,
    RegisterComponent,
    SearchBarComponent,
    JobCardComponent,
    CatalogBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    JwtModule.forRoot(JWT_Module_Options)

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
