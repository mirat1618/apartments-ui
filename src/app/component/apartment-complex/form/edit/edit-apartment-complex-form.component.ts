import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApartmentComplex } from '../../model/ApartmentComplex';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApartmentComplexService } from 'src/app/service/apartment-complex.service';

@Component({
  selector: 'app-edit-apartment-complex-form',
  templateUrl: './edit-apartment-complex-form.component.html',
  styleUrls: ['./edit-apartment-complex-form.component.css']
})

export class EditApartmentComplexFormComponent implements OnInit {
  private formBuilder : FormBuilder;
  public apartmentComplexForm : FormGroup;
  public data : any;
  private apartmentComplexService : ApartmentComplexService;

  constructor(@Inject(MAT_DIALOG_DATA) data: {apartmentComplex: ApartmentComplex}, formBuilder : FormBuilder, apartmentComplexService : ApartmentComplexService) {
    this.formBuilder = formBuilder;
    this.apartmentComplexService = apartmentComplexService;

    this.apartmentComplexForm = this.formBuilder.group({
      id: [data.apartmentComplex.id],
      title : [data.apartmentComplex.title, [Validators.required, Validators.minLength(5)]],
      address : [data.apartmentComplex.address, [Validators.required, Validators.minLength(10)]],
      imageUrl : [data.apartmentComplex.imageUrl]
    })
   }

  ngOnInit(): void {
  }

  public onSubmit() {
    let id = this.apartmentComplexForm.value['id'];
    let formValues = this.apartmentComplexForm.value;
    this.apartmentComplexService.updateApartmentComplex(id, formValues);
    console.log(formValues);


  }

  public trimSpaces(event : Event) : void {
    var trimmed : string = (event.target as HTMLInputElement).value.replace(/\s{2,}/g, ' ').replace(/^\s/g, '');
    (event.target as HTMLInputElement).value = trimmed;
  }

}
