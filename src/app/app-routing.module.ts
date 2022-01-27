import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentComponent } from './component/apartment/apartment.component';
import { ApartmentComplexComponent } from './component/apartmentComplex/apartmentComplex.component';

const routes: Routes = [
  { path : "", component: ApartmentComplexComponent },
  { path : "apartment-complexes", component: ApartmentComplexComponent},
  { path : "apartments", component: ApartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
