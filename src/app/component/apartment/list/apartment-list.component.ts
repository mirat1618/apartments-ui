import { Component, Input, OnInit } from '@angular/core';
import { Apartment } from "src/app/component/apartment/model/Apartment";
import { MatDialog } from '@angular/material/dialog';
import { EditApartmentFormComponent } from '../form/edit/edit-apartment-form/edit-apartment-form.component';
import { ApartmentComplexService } from 'src/app/service/apartment-complex.service';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {
  @Input()
  public apartments: Apartment[] = []
  public displayedColumns: string[] = [];
  public dialog: MatDialog;
  private apartmentComplexService: ApartmentComplexService;

  constructor(dialog: MatDialog, apartmentComplexService: ApartmentComplexService) {
    this.displayedColumns = ['number', 'floor', 'numberOfBedrooms', 'squareMeters', 'hasWashingMachine', 'hasDishwasher', 'rentPrice', 'edit', 'delete'];
    this.dialog = dialog;
    this.apartmentComplexService = apartmentComplexService;
   }

  ngOnInit(): void {
    
  }

  public editApartment(apartment: Apartment): void {
      console.log(apartment);
      const dialogRef = this.dialog.open(EditApartmentFormComponent, {
        data: { apartment: apartment } 
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog response: ${result}`);
      });
    }

  public deleteApartment(apartment: Apartment): void {
    if(confirm("Удалить квартиру?")) {
      this.apartmentComplexService.deleteApartment(apartment.apartmentComplex, apartment.id);
    }
  }

}
