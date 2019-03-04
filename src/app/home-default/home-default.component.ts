import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'app-home-default',
  templateUrl: './home-default.component.html',
  styleUrls: ['./home-default.component.scss']
})
export class HomeDefaultComponent implements OnInit {
  name: string;
  otro_label:string;

  constructor( private inj: Injector ) { 
      this.name = this.inj.get('name');
      this.otro_label = this.inj.get('otrolabel')
  }

  ngOnInit() {
  }

}
