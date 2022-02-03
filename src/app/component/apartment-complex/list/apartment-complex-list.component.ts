import { Component, OnInit } from '@angular/core';
import { ApartmentComplex } from '../model/ApartmentComplex';
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NewApartmentComplexFormComponent } from '../form/new/new-apartment-complex-form.component';
import { EditApartmentComplexFormComponent} from '../form/edit/edit-apartment-complex-form.component';
import { ApartmentComplexService } from 'src/app/service/apartment-complex.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-complex',
  templateUrl: './apartment-complex-list.component.html',
  styleUrls: ['./apartment-complex-list.component.css']
})
export class ApartmentComplexListComponent implements OnInit {
  public dialog: MatDialog;
  private router: Router;
  private apartmentComplexService: ApartmentComplexService;
  public apartmentComplexes$: Observable<ApartmentComplex[]> = new Observable<ApartmentComplex[]>();
  public apartmentComplexes: ApartmentComplex[] = [];

  constructor(router: Router, dialog: MatDialog, apartmentComplexService: ApartmentComplexService) {
    this.router = router;
    this.dialog = dialog;
    this.apartmentComplexService = apartmentComplexService;
   }
 
  ngOnInit(): void {
    this.apartmentComplexes$ = this.apartmentComplexService.apartmentComplexes$;
    
    this.apartmentComplexes$.subscribe(resp => {
      this.apartmentComplexes = resp;      
    });
  }

  public viewApartmentComplex(id: number): void {
      this.router.navigate(['/apartment-complexes', id]);
  }

  public createNewApartmentComplex(): void {
    const dialogRef = this.dialog.open(NewApartmentComplexFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ngOnInit();
    });
  }

  public editApartmentComplex(apartmentComplex: ApartmentComplex): void {
    const dialogRef = this.dialog.open(EditApartmentComplexFormComponent, {
      data: { apartmentComplex: apartmentComplex }
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog response: ${result}`);
    })
  }

  public deleteApartmentComplex(apartmentComplexId: number): void {
    if(confirm("Удалить жилой комплекс?")) {
      this.apartmentComplexService.deleteApartmentComplex(apartmentComplexId);
    }
  }
}
