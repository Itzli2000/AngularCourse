import { ClienteServicio } from './../../servicios/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente.model';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }

  constructor(private clientesServicio: ClienteServicio,
    private flashMessages: FlashMessagesService) { }

  ngOnInit() {
    this.clientesServicio.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    );
  }

  getSaldoTotal() {
    let saldoTotal: number = 0;
    if (this.clientes) {
      this.clientes.forEach(cliente => {
        saldoTotal += cliente.saldo;
      });
    }
    return saldoTotal;
  }

  agregar({ value, valid }: { value: Cliente, valid: boolean }) {
    if (!valid) {
      this.flashMessages.show('Por favor llenar el formulario correctamente', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
    } else {
      // Agregar el nuevo cliente
      this.clientesServicio.agregarCliente(value);
    }
  }

}
