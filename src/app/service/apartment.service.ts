import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apartment } from '../component/apartment/model/Apartment';
import { ApartmentComplexComponent } from '../component/apartment-complex/item/apartment-complex.component';
import { ApartmentComplexService } from './apartment-complex.service';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  private httpClient: HttpClient;
  private baseUrl: string = 'http://apartments-backend-api.herokuapp.com/apartments/';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
   }

   public updateApartment(apartmentId: number, formValues: string): void {
    this.httpClient.put<Apartment>(this.baseUrl + apartmentId, formValues).subscribe({
      next: data => {
        console.log(data);
        
      },
      error: error => {
        console.error(error);
      }
    })
   }
}
