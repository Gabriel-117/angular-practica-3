import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarea } from '../../models/tarea.model';
import { TareaStatus } from '../../enums/tarea-status.enum';
import { TareaService } from '../../services/tarea-service.service';

@Component({
  selector: 'tareas-tarea-formulario',
  templateUrl: './tarea-formulario.component.html',
  styleUrls: ['./tarea-formulario.component.css']
})
export class TareaFormularioComponent {
  // Declaración de servicios
  private tareaService: TareaService = inject(TareaService);
  private fb: FormBuilder = inject(FormBuilder);// Permite crear formulario dinámico
  private router: Router = inject(Router);// Permite hacer redirección de rutas

  tareaForm: FormGroup = this.fb.group({
    // campo: [valor inicial, [validadores síncronos], [validadores asíncronos]] 
    titulo: ['', [Validators.required, Validators.minLength(5)]],
    descripcion: ['', [Validators.required, Validators.minLength(5)]]
  });

  

  isFieldValid(field: string): boolean | null {
    return this.tareaForm.controls[field].errors && this.tareaForm.controls[field]?.touched
  }

  OnFormSubmit() {
    if ( !this.tareaForm.valid ) {
      this.tareaForm.markAllAsTouched();
      // console.info('El forumlario es no válido');
      return;
    }
    
    const newTarea: Tarea = {
      status: TareaStatus.PENDIENTE,
      titulo: this.tareaForm.value['titulo'],
      descripcion: this.tareaForm.value['descripcion']
    }
    console.log("Valores ingresados", newTarea);

    // Registrar esa tarea
    this.tareaService.agregarTarea(newTarea);

    // Redirigir a Mi lista
    this.router.navigate(['tareas', "mi-lista"]);
    // this.router.navigateByUrl('/tareas/mi-lista');
  }
}
