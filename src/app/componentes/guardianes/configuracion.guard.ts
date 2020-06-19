import { Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ConfiguracionServicio } from 'src/app/servicios/configuracion.service';
import { map } from 'rxjs/operators';

@Injectable()
export class ConfiguracionGuard implements CanActivate {

  constructor(
    private router: Router,
    private configuracionServicio: ConfiguracionServicio
  ) { }

  canActivate(): Observable<boolean> {
    return this.configuracionServicio.getConfiguracion().pipe(
      map(configuracion => {
        if (configuracion.permitirRegistro) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }

}
