import { Component, OnInit } from '@angular/core';
import { ApartmentComplex } from '../item/apartment-complex/ApartmentComplex';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-complex',
  templateUrl: './apartment-complex-list.component.html',
  styleUrls: ['./apartment-complex-list.component.css']
})
export class ApartmentComplexListComponent implements OnInit {
  public apartmentComplexes : ApartmentComplex[] = [];
  private httpClient : HttpClient;
  private router : Router;
  public isLoaded : boolean = false;

  constructor(httpClient : HttpClient, router : Router) {
    this.httpClient = httpClient;
    this.router = router;
   }

  ngOnInit(): void {
    this.getApartmentComplexes();
  }

  private getApartmentComplexes() {
    this.httpClient.get<ApartmentComplex[]>('http://apartments-backend-api.herokuapp.com/apartment-complexes').subscribe(
      response => {
        this.apartmentComplexes = response;
        this.isLoaded = true;
        console.log(response);
      }
    )
  }

  public viewApartmentComplex(id : number) {
      this.router.navigate(['/apartment-complexes', id]);
  }

}