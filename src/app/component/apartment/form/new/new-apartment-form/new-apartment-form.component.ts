import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApartmentService } from 'src/app/service/apartment.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-apartment-form',
  templateUrl: './new-apartment-form.component.html',
  styleUrls: ['./new-apartment-form.component.css']
})


export class NewApartmentFormComponent implements OnInit {
  private formBuilder : FormBuilder;
  public  apartmentForm : FormGroup;
  private apartmentService : ApartmentService;
  public data : any;

  constructor(@Inject(MAT_DIALOG_DATA) data: { apartmentComplexId: number }, formBuilder : FormBuilder, apartmentService : ApartmentService) {
    this.formBuilder = formBuilder;
    this.apartmentService = apartmentService;

    this.apartmentForm = this.formBuilder.group({
      apartmentComplex : [data.apartmentComplexId],
      number : ['', [Validators.required, Validators.min(1), Validators.pattern('\\d+')]],
      floor : ['', [Validators.required, Validators.pattern('-*\\d+')]],
      numberOfBedrooms : ['', [Validators.required, Validators.min(0), Validators.pattern('\\d+')]],
      squareMeters : ['', [Validators.required, Validators.min(0), Validators.pattern('\\d+')]],
      hasWashingMachine : [false],
      hasDiswasher: [true],
      rentPrice : ['', [Validators.required, Validators.min(0), Validators.pattern('\\d+')]],
    })
   }

  ngOnInit(): void {

  }

  public onSubmit() : void {

  }

  public trimNonDigits(event : Event) : void {
    var trimmed : string = (event.target as HTMLInputElement).value.replace(/[^-\d]/g, '');
    (event.target as HTMLInputElement).value = trimmed;
  }

}
