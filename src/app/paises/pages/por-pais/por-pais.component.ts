import { Component, inject } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { SmallCountry } from '../../models/paises.models';

@Component({
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
  private paisesService: PaisesService = inject(PaisesService);
  paises: SmallCountry[] = [];

  onEnterPressed(valor: string): void {
    console.log('Holis', valor);
    
  }

  buscarPaisesPorNombre(nombre: string): void {
    
  }
}
