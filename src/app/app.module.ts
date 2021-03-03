import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {SearchStringModule} from './components/search-string/search-string.module';
import {MatButtonModule} from '@angular/material/button';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    SearchStringModule,
    MatButtonModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
