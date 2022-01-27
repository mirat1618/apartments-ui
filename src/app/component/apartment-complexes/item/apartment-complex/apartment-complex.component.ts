import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-apartment-complex',
  templateUrl: './apartment-complex.component.html',
  styleUrls: ['./apartment-complex.component.css']
})
export class ApartmentComplexComponent implements OnInit {
  public apartmentComplexId : number = 0;
  constructor(private route : ActivatedRoute) { 
    this.route.params.subscribe(params => { 
      this.apartmentComplexId = params['id'];
      console.log(params) 
    });
  }

  ngOnInit(): void {

  }

  getId() : void {
    id : Number;
    this.route.params.subscribe(params => {
      this.apartmentComplexId = params['id'];
    })
  }

}
