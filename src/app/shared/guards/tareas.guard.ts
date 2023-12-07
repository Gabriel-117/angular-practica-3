import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { TareaService } from 'src/app/tareas/services/tarea-service.service';

export const tareasGuardCanActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ) => {
    console.log("RouteSnap:", route);
    console.log("StateSnap:", state);
    
  return checkTareasList();
};

export const tareasGuardCanMatch: CanMatchFn = (
    route: Route, 
    segments: UrlSegment[]
  ) => {
    console.log("Route:", route);
    console.log("Segments:", segments);
    
    return checkTareasList();
  }

const checkTareasList = (): boolean | Observable<boolean> => {
  const tareaService: TareaService = inject(TareaService);
  const router: Router = inject(Router);

  // if (!tareaService.isTareasEmpty())
  //   router.navigate(['tareas', 'nueva-tarea'])

  // return tareaService.isTareasEmpty();
  return tareaService.isTareasEmpty()
    .pipe(
      tap( (isEmpty) => {
        if (isEmpty)
          router.navigate(['/tareas', '/nueva-tarea']);
      } ),
      map( (isEmpty) => !isEmpty )
    );
}
