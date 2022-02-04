import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentComplexListComponent } from './component/apartment-complex/list/apartment-complex-list.component';
import { ApartmentComplexComponent } from './component/apartment-complex/item/apartment-complex.component';

const routes: Routes = [
  { path : "", component: ApartmentComplexListComponent },
  { path : "apartment-complexes", children: [
    { path : "", component: ApartmentComplexListComponent },
    { path : ":id", component: ApartmentComplexComponent }
  ]}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
