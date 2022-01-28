import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApartmentComplex } from './ApartmentComplex';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-apartment-complex',
  templateUrl: './apartment-complex.component.html',
  styleUrls: ['./apartment-complex.component.css']
})
export class ApartmentComplexComponent implements OnInit {
  public apartmentComplex : ApartmentComplex;
  public isLoaded : boolean = false;
  private httpClient : HttpClient;
  private route : ActivatedRoute;
  private router : Router;

  constructor(route : ActivatedRoute, httpClient : HttpClient, router : Router) { 
    this.route = route;
    this.httpClient = httpClient;
    this.apartmentComplex = new ApartmentComplex(0, '', '', '',[]);
    this.router = router;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getApartmentComplex(params['id']); 
      console.log(this.apartmentComplex);
    });

  }

  getApartmentComplex(id : number) : void {
    this.httpClient.get<ApartmentComplex>(`http://apartments-backend-api.herokuapp.com/apartment-complexes/${id}`).subscribe(
      response => {
        this.apartmentComplex = response;
        this.isLoaded = true;
        console.log(this.apartmentComplex);
      }
    )
  }

  back() : void {
    this.router.navigate(['/apartment-complexes']);
  }

}
