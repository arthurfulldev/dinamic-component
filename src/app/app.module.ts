import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { HomeDefaultComponent } from './home-default/home-default.component';
import { PayCardComponent } from './pay-card/pay-card.component';

@NgModule({
	declarations: [
		AppComponent,
		DynamicComponent,
		HomeDefaultComponent,
		PayCardComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent],
	entryComponents: [
		HomeDefaultComponent,
		PayCardComponent
	]
})
export class AppModule { }
