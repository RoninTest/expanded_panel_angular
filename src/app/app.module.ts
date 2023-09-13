import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgFor, NgIf} from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import {AppComponent} from './app.component';
import {TableExpandableComponent} from './table-expandable/table-expandable.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TableExpandableComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    NgFor,
    NgIf,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
