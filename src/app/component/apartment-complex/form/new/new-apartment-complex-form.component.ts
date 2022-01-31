import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { disableDebugTools } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { ApartmentComplex } from '../../model/ApartmentComplex';
import { ApartmentComplexListComponent } from '../../list/apartment-complex-list.component';
import { ApartmentComplexService } from 'src/app/service/apartment-complex.service';

@Component({
  selector: 'app-apartment-complex-form',
  templateUrl: './new-apartment-complex-form.component.html',
  styleUrls: ['./new-apartment-complex-form.component.css']
})
export class NewApartmentComplexFormComponent implements OnInit {
  private formBuilder : FormBuilder;
  public apartmentComplexForm : FormGroup;
  private apartmentComplexService : ApartmentComplexService;

  constructor(formBuilder : FormBuilder, apartmentComplexService : ApartmentComplexService) { 
    this.formBuilder = formBuilder;
    this.apartmentComplexService = apartmentComplexService;

    this.apartmentComplexForm = this.formBuilder.group({
      title : ['', [Validators.required, Validators.minLength(5)]],
      address : ['', [Validators.required, Validators.minLength(10)]],
      imageUrl : ['https://i.ibb.co/wYVf8L6/simvol-ufa-jk-593400187-6.jpg']
    })
  }

  ngOnInit(): void {
    
  }

  public onSubmit() : void {
    let formValues = this.apartmentComplexForm.value;
    console.log(formValues);
    this.apartmentComplexService.createApartmentComplex(formValues);
  }

  public trimSpaces(event : Event) : void {
    var trimmed : string = (event.target as HTMLInputElement).value.replace(/\s{2,}/g, ' ').replace(/^\s/g, '');
    (event.target as HTMLInputElement).value = trimmed;
  }
}
