import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesLayoutComponent } from './layout/paises-layout/paises-layout.component';
import { PorContinenteComponent } from './pages/por-continente/por-continente.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';

const routes: Routes = [
  {
    path: '',
    component: PaisesLayoutComponent,
    children: [
      {
        path: 'por-continente',
        component: PorContinenteComponent
      },
      {
        path: 'por-pais',
        component: PorPaisComponent
      },
      {
        path: 'ver-pais/:cca3',
        component: VerPaisComponent
      },
      {
        path: '**',
        redirectTo: 'por-continente'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
