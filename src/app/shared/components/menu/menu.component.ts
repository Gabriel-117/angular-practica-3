import { Component } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  tareaMenuItems: MenuItem[] = [];
  paisesMenuItems: MenuItem[] = [];

  constructor() {
    this.tareaMenuItems.push({route: '/tareas/mi-lista', text: 'Mis tareas'});
    this.tareaMenuItems.push({route: '/tareas/nueva-tarea', text: 'Agregar tareas'});

    this.paisesMenuItems.push({route: '/paises/por-continente', text: 'Buscar por continente'})
    this.paisesMenuItems.push({route: '/paises/por-pais', text: 'Buscar por nombre'})
  }
}
