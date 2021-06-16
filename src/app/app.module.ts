import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/catalog-ui/search-bar/search-bar.component';
import { JobCardComponent } from './components/catalog-ui/job-card/job-card.component';
import { CatalogBodyComponent } from './components/catalog-ui/catalog-body/catalog-body.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    JobCardComponent,
    CatalogBodyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
