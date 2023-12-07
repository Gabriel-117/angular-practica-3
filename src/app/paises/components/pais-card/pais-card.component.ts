import { Component, Input } from '@angular/core';
import { SmallCountry } from '../../models/paises.models';

@Component({
  selector: 'paises-pais-card',
  templateUrl: './pais-card.component.html',
  styleUrls: ['./pais-card.component.css']
})
export class PaisCardComponent {
  @Input() 
  country!: SmallCountry;
}
