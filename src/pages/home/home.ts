import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public modal: ModalController, 
    public nav: NavController) {}
  

}
