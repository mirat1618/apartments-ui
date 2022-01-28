import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApartmentComplexListComponent } from './component/apartment-complexes/list/apartment-complex-list.component';
import { ApartmentComponent } from './component/apartment/item/apartment.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTableModule } from "@angular/material/table";
import { HttpClientModule } from '@angular/common/http';
import { ApartmentComplexComponent } from './component/apartment-complexes/item/apartment-complex/apartment-complex.component';
import { ApartmentListComponent } from './component/apartment/list/apartment-list/apartment-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ApartmentComplexListComponent,
    ApartmentComponent,
    ApartmentComplexComponent,
    ApartmentListComponent
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
    MatProgressBarModule,
    MatTableModule,


    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
