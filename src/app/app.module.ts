import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApartmentComplexListComponent } from './component/apartment-complex/list/apartment-complex-list.component';
import { ApartmentComponent } from './component/apartment/item/apartment.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog"; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ApartmentComplexComponent } from './component/apartment-complex/item/apartment-complex.component';
import { ApartmentListComponent } from './component/apartment/list/apartment-list.component';
import { NewApartmentComplexFormComponent } from './component/apartment-complex/form/new/new-apartment-complex-form.component';
import { ApartmentComplexService } from './service/apartment-complex.service';
import { EditApartmentComplexFormComponent } from './component/apartment-complex/form/edit//edit-apartment-complex-form.component';
import { NewApartmentFormComponent } from './component/apartment/form/new/new-apartment-form/new-apartment-form.component';
import { EditApartmentFormComponent } from './component/apartment/form/edit/edit-apartment-form/edit-apartment-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ApartmentComplexListComponent,
    ApartmentComponent,
    ApartmentComplexComponent,
    ApartmentListComponent,
    NewApartmentComplexFormComponent,
    EditApartmentComplexFormComponent,
    NewApartmentFormComponent,
    EditApartmentFormComponent,
    
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
    MatProgressSpinnerModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
   



    HttpClientModule,
    ReactiveFormsModule,



  ],
  providers: [ApartmentComplexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
