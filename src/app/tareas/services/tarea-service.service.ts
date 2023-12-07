import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private tareasKey = "tareas";
  private tareas: Tarea[] = [];
  
  constructor() {
    const lSTareas = localStorage.getItem(this.tareasKey);
    if ( lSTareas ) {
      this.tareas = JSON.parse(lSTareas);
    }
  }

  private saveToLocalStorage() {
    localStorage.setItem(this.tareasKey, JSON.stringify(this.tareas));
  }

  getTareas(): Tarea[] {
    return this.tareas;
  }

  updateTarea(index: number, tarea: Tarea) {
    this.tareas[index] = tarea;
    this.saveToLocalStorage();
  }

  agregarTarea(tarea: Tarea) {
    this.tareas.push(tarea);
    this.saveToLocalStorage();
  }

  isTareasEmpty(): Observable<boolean> {
    return of( this.tareas.length <= 0 );
  }
  // isTareasEmpty(): boolean {
  //   return this.tareas.length <= 0;
  // }
}
