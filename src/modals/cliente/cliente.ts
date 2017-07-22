import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalCliente page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'modal-cliente',
  templateUrl: 'cliente.html',
})
export class ModalCliente {
  public data:string;
  public pet: string = "services";


  constructor(private navParams: NavParams, private view: ViewController) {

  }

  ionViewWillLoad() {
    this.data = this.navParams.get('data');
    
  }

  closeModal(){
  	this.view.dismiss();
  }

}
