import { Component, OnInit, Injector } from '@angular/core';

@Component({
	selector: 'app-pay-card',
	templateUrl: './pay-card.component.html',
	styleUrls: ['./pay-card.component.scss']
})
export class PayCardComponent implements OnInit {
	public title: string;
	public tipo_tarjeta: string;
	public limite_credito: number;
	public saldo: number;
	public vigencia: string;

	constructor(
		private inj: Injector
	) {
		this.title = this.inj.get('name');
		this.tipo_tarjeta = this.inj.get('tipo_tarjeta');
		this.limite_credito = this.inj.get('limite_credito');
		this.saldo = this.inj.get('saldo');
		this.vigencia = this.inj.get('vigencia');
	}

	ngOnInit() {
	}

}
