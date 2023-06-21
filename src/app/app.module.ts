import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './_layout/layout.module';
import { NavbarComponent } from './_layout/navbar/navbar.component';
import { ConectComponent } from './conect/conect.component';
import { ModalityComponent } from './modality/modality.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConectComponent,
    ModalityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
