import { TareaStatus } from "../enums/tarea-status.enum";

export interface Tarea {
    titulo: string,
    descripcion: string,
    status: TareaStatus
}