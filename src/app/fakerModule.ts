import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeDefaultComponent } from "./home-default/home-default.component";
import { PayCardComponent } from "./pay-card/pay-card.component";
import { DynamicComponent } from "./dynamic/dynamic.component";

@NgModule({
	imports: [CommonModule],
	declarations: [
		HomeDefaultComponent,
		PayCardComponent,
		DynamicComponent
	],
	entryComponents: [
		HomeDefaultComponent,
		PayCardComponent
	],
	exports: [ DynamicComponent ]
})
export class FakeModule { }