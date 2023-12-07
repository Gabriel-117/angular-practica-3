import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, switchMap } from 'rxjs';

@Component({
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    // const abc = {prop1:123, prop2: 456, prop3: 789};
    // const {prop2} = abc;
  }

  ngOnInit(): void {
    // Utilizar el servicio para traer datos del pais
    this.activatedRoute.params
      .pipe(
        // switchMap( ({ cca3 }) => paisesService.getCountryByCca3(cca3) )
        switchMap( ({ cca3 }) => of(cca3) )
      )
      .subscribe(
        // (pais) => {
        (cca3) => {
          // Guardar para despues utilizar la información del país
          console.log(cca3);
        }
      );
  }
}
