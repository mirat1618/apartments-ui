import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApartmentComplexListComponent } from './component/apartment-complexes/list/apartment-complex-list.component';
import { ApartmentComponent } from './component/apartment/apartment.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from '@angular/common/http';
import { ApartmentComplexComponent } from './component/apartment-complexes/item/apartment-complex/apartment-complex.component';


@NgModule({
  declarations: [
    AppComponent,
    ApartmentComplexListComponent,
    ApartmentComponent,
    ApartmentComplexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
