import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApartmentComplex } from 'src/app/component/apartment-complex/model/ApartmentComplex';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApartmentComplexService {
  private httpClient: HttpClient;
  private baseUrl: string = 'http://apartments-backend-api.herokuapp.com/apartment-complexes/';
  
  private _apartmentComplexes = new BehaviorSubject<ApartmentComplex[]>([]);
  public apartmentComplexes$ = this._apartmentComplexes.asObservable();
  public apartmentComplexes: ApartmentComplex[] = [];

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this._apartmentComplexes.next(Object.assign([], this._apartmentComplexes));

    this.httpClient.get<ApartmentComplex[]>(this.baseUrl).subscribe(resp => {
      this.apartmentComplexes = resp;
      this._apartmentComplexes.next(Object.assign([], this.apartmentComplexes));
    })
  }

 

  public getApartmentComplex(id: number): Observable<ApartmentComplex> {
    return this.httpClient.get<ApartmentComplex>(this.baseUrl + id);
  }

  public createApartmentComplex(formValues: string): void {
    this.httpClient.post<ApartmentComplex>(this.baseUrl, formValues).subscribe({
      next: data => {
        console.log(data);
        this.apartmentComplexes.push(data);
        this._apartmentComplexes.next(Object.assign([], this.apartmentComplexes));
      },
      error: error => {
        console.error(error);
      }
    })
  }

  public updateApartmentComplex(id: number, formValues: string): void {
    this.httpClient.put<ApartmentComplex>(this.baseUrl + id, formValues).subscribe({
      next: data => {
        console.log(data);

        this.httpClient.get<ApartmentComplex[]>(this.baseUrl).subscribe(resp => {
          this.apartmentComplexes = resp;
          this._apartmentComplexes.next(Object.assign([], this.apartmentComplexes));
          console.log(this.apartmentComplexes);
        })
        
      },
      error: error => {
        console.error(error);
      }
    })
  }

  public deleteApartmentComplex(id: number): void {
    this.httpClient.delete<void>(this.baseUrl + id).subscribe();
    this.apartmentComplexes.forEach((t, i) => {
      if (t.id === id) {
        this.apartmentComplexes.splice(i, 1);
      }
    });
    this._apartmentComplexes.next(Object.assign([], this.apartmentComplexes));
    console.log(this.apartmentComplexes);
  }

  public addApartment(id: number, formValues: string): ApartmentComplex {
    let apartmentComplex = new ApartmentComplex(0, '', '', '', []);
    this.httpClient.post<ApartmentComplex>(this.baseUrl + id, formValues).subscribe(resp => {
      console.log(resp);
      apartmentComplex = resp;
    });
    return apartmentComplex;
  }

  public deleteApartment(apartmentComplexId: number, apartmentId: number): void {
    this.httpClient.delete<void>(this.baseUrl + `${apartmentComplexId}/apartments/${apartmentId}`).subscribe();
  }
}



