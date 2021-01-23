import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppAuthModule } from './app-auth/app-auth/app-auth.module';
import { CoreRouterModule } from './core/core-routing.module';

@NgModule({
	imports: [
		BrowserModule,
		AppAuthModule,
		CommonModule,
		HttpClientModule,
		CoreRouterModule,
		RouterModule
	],
	declarations: [AppComponent],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
