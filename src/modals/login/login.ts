import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalLogin page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'modal-login',
  templateUrl: 'login.html',
})
export class ModalLogin {

  constructor( private view: ViewController) {

  }

  ionViewWillLoad() {
    
  }

  closeModal(){
    console.log('Close modal');
  	this.view.dismiss();
  }

}
