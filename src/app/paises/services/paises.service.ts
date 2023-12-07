import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Country, SmallCountry } from '../models/paises.models';
import { Continente } from '../enums/continente.enum';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private base_url: string = 'https://restcountries.com/v3.1';
  
  private http: HttpClient = inject(HttpClient);
  
  constructor() { }

  getCountriesByRegion(region: string): Observable<SmallCountry[]> {
    const url = `${this.base_url}/region/${region}`;
    return this.http.get<SmallCountry[]>(url)
    .pipe(
      catchError(error => of([]))
    );
  }

  getCountriesByName(name: string): Observable<SmallCountry[]> {
    const url = `${this.base_url}/name/${name}`;
    return this.http.get<SmallCountry[]>(url)
    .pipe(
      catchError(error => of([]))
    );
  }

  getCountryByCca3(cca3: string): Observable<Country> {
    const url = `${this.base_url}/alpha/${cca3}`;
    return this.http.get<Country[]>(url)
      .pipe(
        map((countries) => countries[0]),
        catchError(error => of())
      );
  }
}
