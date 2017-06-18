import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { VacaturesComponent } from './vacatures/vacatures.component';
import { VacatureLijstComponent } from './vacatures/vacature-lijst/vacature-lijst.component';
import { VacatureDetailsComponent } from './vacatures/vacature-details/vacature-details.component';
import { VacatureItemComponent } from './vacatures/vacature-lijst/vacature-item/vacature-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VacaturesComponent,
    VacatureLijstComponent,
    VacatureDetailsComponent,
    VacatureItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
