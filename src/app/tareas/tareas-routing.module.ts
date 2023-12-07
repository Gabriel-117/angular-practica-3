import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiListaPageComponent } from './pages/mi-lista-page/mi-lista-page.component';
import { FormularioPageComponent } from './pages/formulario-page/formulario-page.component';
import { TareasLayoutComponent } from './layout/tareas-layout/tareas-layout.component';
import { tareasGuardCanActivate, tareasGuardCanMatch } from '../shared/guards/tareas.guard';

const routes: Routes = [
  {
    path: '',
    component: TareasLayoutComponent,
    children: [
      {
        path: 'mi-lista',
        component: MiListaPageComponent,
        canActivate: [tareasGuardCanActivate],
        canMatch: [tareasGuardCanMatch]
      },
      {
        path: "nueva-tarea",
        component: FormularioPageComponent
      },
      {
        path: '**',
        redirectTo: 'nueva-tarea'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasRoutingModule { }
