import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Apartment } from '../../../model/Apartment';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApartmentComplex } from 'src/app/component/apartment-complex/model/ApartmentComplex';
import { ApartmentComplexService } from 'src/app/service/apartment-complex.service';

@Component({
  selector: 'app-edit-apartment-form',
  templateUrl: './edit-apartment-form.component.html',
  styleUrls: ['./edit-apartment-form.component.css']
})
export class EditApartmentFormComponent implements OnInit {
  private formBuilder: FormBuilder;
  public apartmentForm: FormGroup;
  private apartmentComplexService: ApartmentComplexService;
  public apartmentId: number;
  public apartmentComplexId: number;
  public apartmentComplexes: ApartmentComplex[] = [];
 
  constructor(@Inject(MAT_DIALOG_DATA) data: {apartment: Apartment}, formBuilder: FormBuilder, apartmentComplexService: ApartmentComplexService) { 
    this.formBuilder = formBuilder;
    this.apartmentComplexService = apartmentComplexService;
    this.apartmentId = data.apartment.id;
    this.apartmentComplexId = data.apartment.apartmentComplex;
    this.apartmentComplexes = this.apartmentComplexService.apartmentComplexes;
    
    this.apartmentForm = this.formBuilder.group({
      number: [data.apartment.number, [Validators.required, Validators.min(1), Validators.pattern('\\d+')]],
      floor: [data.apartment.floor, [Validators.required, Validators.pattern('-*\\d+')]],
      numberOfBedrooms: [data.apartment.numberOfBedrooms, [Validators.required, Validators.min(0), Validators.pattern('\\d+')]],
      squareMeters: [data.apartment.squareMeters, [Validators.required, Validators.min(0), Validators.pattern('\\d+(\\.?\\d+)*')]],
      hasWashingMachine: [data.apartment.hasWashingMachine],
      hasDishwasher: [data.apartment.hasDishwasher],
      rentPrice: [data.apartment.rentPrice, [Validators.required, Validators.min(0), Validators.pattern('\\d+(\\.?\\d+)*')]],
      apartmentComplex: this.formBuilder.group({
        id: [this.apartmentComplexes.find(x => x.id == this.apartmentComplexId)!.id]
      })
    })
  }

  ngOnInit(): void { }

  public onSubmit(): void {
    let formValues: string = this.apartmentForm.value;
    this.apartmentComplexService.updateApartment(this.apartmentId, formValues);
    console.log(formValues);
  }

  public trimNonDigits(event: Event): void {
    let field: HTMLInputElement = event.target as HTMLInputElement;
    let fieldName = field.getAttribute('formControlName');
    let trimmedValue: string = '';

    switch(fieldName) {
      case 'number': case 'numberOfBedrooms': 
        trimmedValue = field.value.replace(/[^\d]/g, ''); // allow only digits
        break;
      case 'floor': 
        trimmedValue = field.value.replace(/[^-\d]/g, ''); // allow digits and minus (hyphen) symbol only
        break;
      case 'squareMeters': case 'rentPrice' :
        trimmedValue = field.value.replace(/[^\d\.]/g, '') // allow digits and dot symbol only
        break;
      default :
        trimmedValue = field.value.replace(/[^\d]/g, ''); // allow only digits
    }
    field.value = trimmedValue;
  }
}
