import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalCliente } from './cliente';


@NgModule({
  declarations: [
    ModalCliente,
  ],
  imports: [
    IonicPageModule.forChild(ModalCliente),
  ],
  exports: [
    ModalCliente
  ]
})
export class ModalClienteModule {}
