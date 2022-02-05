import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApartmentComplex } from 'src/app/component/apartment-complex/model/ApartmentComplex';
import { Apartment } from '../component/apartment/model/Apartment';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApartmentComplexService {
  private httpClient: HttpClient;
  private baseUrl: string = 'https://apartments-backend-api.herokuapp.com';
  
  private _apartmentComplexes = new BehaviorSubject<ApartmentComplex[]>([]);
  public apartmentComplexes$ = this._apartmentComplexes.asObservable();
  public apartmentComplexes: ApartmentComplex[] = [];

  private _apartmentComplex = new Subject<ApartmentComplex>();
  public apartmentComplex$ = this._apartmentComplex.asObservable();
  public apartmentComplex : ApartmentComplex = new ApartmentComplex(0, '', '', '', []);

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this._apartmentComplexes.next(Object.assign([], this._apartmentComplexes));

    this.httpClient.get<ApartmentComplex[]>(`${this.baseUrl}/apartment-complexes/`).subscribe(resp => {
      this.apartmentComplexes = resp;
      this._apartmentComplexes.next(Object.assign([], this.apartmentComplexes));
    })
  }

  public getApartmentComplex(id: number): Observable<ApartmentComplex> {
    return this.httpClient.get<ApartmentComplex>(`${this.baseUrl}/apartment-complexes/${id}`);
  }

  public setApartmentComplexObservable(id: number): Observable<ApartmentComplex> {
    this.httpClient.get<ApartmentComplex>(`${this.baseUrl}/apartment-complexes/${id}`).subscribe(resp => {
      this.apartmentComplex = resp;
      this._apartmentComplex.next(this.apartmentComplex);
    });
    return this.apartmentComplex$;
  }

  public createApartmentComplex(formValues: string): void {
    this.httpClient.post<ApartmentComplex>(`${this.baseUrl}/apartment-complexes/`, formValues).subscribe({
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
    this.httpClient.put<ApartmentComplex>(`${this.baseUrl}/apartment-complexes/${id}`, formValues).subscribe({
      next: data => {
        console.log(data);

        this.httpClient.get<ApartmentComplex[]>(`${this.baseUrl}/apartment-complexes/`).subscribe(resp => {
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
    this.httpClient.delete<void>(`${this.baseUrl}/apartment-complexes/${id}`).subscribe();
    this.apartmentComplexes.forEach((t, i) => {
      if (t.id === id) {
        this.apartmentComplexes.splice(i, 1);
      }
    });
    this._apartmentComplexes.next(Object.assign([], this.apartmentComplexes));
    console.log(this.apartmentComplexes);
  }

  public addApartment(id: number, formValues: string): void {  
    this.httpClient.post<ApartmentComplex>(`${this.baseUrl}/apartment-complexes/${id}/apartments/`, formValues).subscribe(resp => {
      this.apartmentComplex = resp;
      this._apartmentComplex.next(this.apartmentComplex);
      console.log(resp);
    });
  }

  public deleteApartment(apartmentComplexId: number, apartmentId: number): void {
    this.httpClient.delete<void>(`${this.baseUrl}/apartment-complexes/${apartmentComplexId}/apartments/${apartmentId}`).subscribe();
    console.log(apartmentId);
    this.apartmentComplex.apartments = this.apartmentComplex.apartments.filter(apartment => apartment.id != apartmentId);
    this._apartmentComplex.next(this.apartmentComplex);
  }

  public updateApartment(apartmentId: number, formValues: string): void {
    this.httpClient.put<Apartment>(`${this.baseUrl}/apartments/${apartmentId}`, formValues).subscribe({
      next: data => {
        console.log(data);
        this.getApartmentComplex(this.apartmentComplex.id).subscribe(resp => {
          this._apartmentComplex.next(resp);
        })
      },
      error: error => {
        console.error(error);
      }
    })
   }
}



