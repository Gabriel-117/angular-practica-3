import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Tarea } from '../../models/tarea.model';
import { TareaStatus } from '../../enums/tarea-status.enum';
import { TareaService } from '../../services/tarea-service.service';

@Component({
  selector: 'tareas-tarea-card',
  templateUrl: './tarea-card.component.html',
  styleUrls: ['./tarea-card.component.css']
})
export class TareaCardComponent {
  // Injectando servicio para utilizar sus métodos
  tareaService: TareaService = inject(TareaService);

  @Input()
  tarea!: Tarea;

  @Input("tareaIndex") 
  index: number = -1;

  @Output("onStatusChange") emitter: EventEmitter<TareaStatus>;

  tareaStatus = {
    pendiente: TareaStatus.PENDIENTE,
    retrasado: TareaStatus.RETRASADO,
    completado: TareaStatus.COMPLETADO
  }

  constructor() {
    this.emitter = new EventEmitter();
  }

  changeStatus(status: TareaStatus) {
    if ( this.index < 0 ){
      return;
    }

    this.tarea.status = status;

    this.tareaService.updateTarea(this.index, this.tarea);

    this.emitter.emit(status);
  }
}
