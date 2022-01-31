import { Component, Input, OnInit } from '@angular/core';
import { Apartment } from "src/app/component/apartment/model/Apartment";

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {
  @Input()
  public apartments : Apartment[] = []
  public displayedColumns: string[] = [];
  public noApartments : boolean = false;


  constructor() {
    this.displayedColumns = ['number', 'floor', 'numberOfBedrooms', 'squareMeters', 'hasWashingMachine', 'hasDishwasher', 'rentPrice', 'edit', 'delete'];
    
   }

  ngOnInit(): void {
    this.noApartments = this.apartments.length == 0 ? true : false;
  }

}
