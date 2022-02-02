import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApartmentComplexService } from 'src/app/service/apartment-complex.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-apartment-form',
  templateUrl: './new-apartment-form.component.html',
  styleUrls: ['./new-apartment-form.component.css']
})
export class NewApartmentFormComponent implements OnInit {
  private formBuilder: FormBuilder;
  public  apartmentForm: FormGroup;
  private apartmentComplexService: ApartmentComplexService;
  public data: any;
  public apartmentComplexId: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) data: { apartmentComplexId: number }, formBuilder: FormBuilder, apartmentComplexService: ApartmentComplexService) {
    this.formBuilder = formBuilder;
    this.apartmentComplexService = apartmentComplexService;
    this.apartmentComplexId = data.apartmentComplexId;
  
    this.apartmentForm = this.formBuilder.group({
      number: ['', [Validators.required, Validators.min(1), Validators.pattern('\\d+')]],
      floor: ['', [Validators.required, Validators.pattern('-*\\d+')]],
      numberOfBedrooms: ['', [Validators.required, Validators.min(0), Validators.pattern('\\d+')]],
      squareMeters: ['', [Validators.required, Validators.min(0), Validators.pattern('\\d+(\\.?\\d+)*')]],
      hasWashingMachine: [true],
      hasDiswasher: [false],
      rentPrice: ['', [Validators.required, Validators.min(0), Validators.pattern('\\d+(\\.?\\d+)*')]],
    })
   }

  ngOnInit(): void {

  }

  public onSubmit(): void {
    let formValues = this.apartmentForm.value;
    this.apartmentComplexService.addApartment(this.apartmentComplexId, formValues);
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
