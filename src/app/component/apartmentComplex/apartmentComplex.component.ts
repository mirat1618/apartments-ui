import { Component, OnInit } from '@angular/core';
import { ApartmentComplex } from './ApartmentComplex';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-complex',
  templateUrl: './apartmentComplex.component.html',
  styleUrls: ['./apartmentComplex.component.css']
})
export class ApartmentComplexComponent implements OnInit {
  private apartmentComplexes : ApartmentComplex[] = [];
  private httpClient : HttpClient;

  constructor(httpClient : HttpClient) {
    this.httpClient = httpClient;
   }

  ngOnInit(): void {
    this.getApartmentComplexes();
  }

  private getApartmentComplexes() {
    this.httpClient.get<ApartmentComplex[]>('http://apartments-backend-api.herokuapp.com/apartment-complexes').subscribe(
      response => {
        console.log(response);
        this.apartmentComplexes = response;
      }
    )
  }

}
