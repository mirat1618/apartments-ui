import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApartmentComplex } from '../model/ApartmentComplex';
import { MatTableModule } from '@angular/material/table';
import { ApartmentComplexService } from 'src/app/service/apartment-complex.service';
import { NewApartmentFormComponent } from '../../apartment/form/new/new-apartment-form/new-apartment-form.component';
import { MatDialog } from '@angular/material/dialog';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-apartment-complex',
  templateUrl: './apartment-complex.component.html',
  styleUrls: ['./apartment-complex.component.css']
})
export class ApartmentComplexComponent implements OnInit {
  public apartmentComplex : ApartmentComplex;
  public isLoaded : boolean = false;
  private route : ActivatedRoute;
  private router : Router;
  private apartmentComplexService : ApartmentComplexService;
  public dialog : MatDialog;

  constructor(route : ActivatedRoute, router : Router, apartmentComplexService : ApartmentComplexService, dialog : MatDialog) { 
    this.route = route;
    this.apartmentComplex = new ApartmentComplex(0, '', '', '',[]);
    this.router = router;
    this.apartmentComplexService = apartmentComplexService;
    this.dialog = dialog;
  }

  ngOnInit(): void {
    this.isLoaded = false;
    this.route.params.subscribe(params => {
      this.apartmentComplexService.getApartmentComplex(params['id']).subscribe(data => {
        this.apartmentComplex = data;
        this.isLoaded = true;
      })
    });
  }

  public goBack() : void {
    this.router.navigate(['/apartment-complexes']);
  }

  public addNewApartment(apartmentComplexId : number) : void {
    const dialogRef = this.dialog.open(NewApartmentFormComponent, {
      data : { apartmentComplexId : apartmentComplexId }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ngOnInit();
    });
  }
}