import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: TableroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrarse', component: RegistroComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
  { path: 'cliente/editar/:id', component: EditarClienteComponent },
  { path: '**', component: NoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
