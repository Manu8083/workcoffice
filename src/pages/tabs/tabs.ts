import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MapaPage } from '../mapa/mapa';
import { CuentaPage } from '../cuenta/cuenta';

import { LoginPage } from '../login/login';
import { MasPage } from '../mas/mas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MapaPage;
  tab3Root = CuentaPage;
  
  tab5Root = LoginPage;
  tab6Root = MasPage;

  constructor() {

  }
}
