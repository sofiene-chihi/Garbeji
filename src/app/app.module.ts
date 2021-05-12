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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    ItemCardComponent,
    ItemsBlockComponent,
    InfosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
