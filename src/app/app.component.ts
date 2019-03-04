import { Component } from '@angular/core';
import { HomeDefaultComponent } from './home-default/home-default.component'
import { PayCardComponent } from './pay-card/pay-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dinamic-component';
  
  componentData1: any = {
    component: HomeDefaultComponent,
    inputs: {
      name: 'atributo "name" del ejemplo de componente dinamico 1.',
      otrolabel: 'otro input ejemplo injectado al ng template'
    }
  };
  componentData2: any = {
    component: PayCardComponent,
    inputs: {
      name: 'Widget pago de tarjeta.',
      saldo: 1500,
      limite_credito: 30000,
      vigencia: '2022-02-01',
      tipo_tarjeta: 'PERFILES'
    }
  };
  componentData3: any = {
    component: HomeDefaultComponent,
    inputs: {
      name: 'atributo "name" del ejemplo de componente dinamico 2.',
      otrolabel: 'otro input ejemplo injectado al ng template'
    }
  };
  componentData4: any = {
    component: PayCardComponent,
    inputs: {
      name: 'Widget pago de tarjeta.',
      saldo: 1500000,
      limite_credito: 3000000,
      vigencia: '2035-02-01',
      tipo_tarjeta: 'MAESTRA'
    }
  };
  componentData5: any = {
    component: PayCardComponent,
    inputs: {
      name: 'Widget pago de tarjeta.',
      saldo: 1500,
      limite_credito: 30000,
      vigencia: '2022-02-01',
      tipo_tarjeta: 'AHORROS'
    }
  };

  constructor() {
    
  }
}
