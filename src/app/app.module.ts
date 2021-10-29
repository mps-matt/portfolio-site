import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IPortfolioServiceModule } from './portfolio-service/iportfolio-service.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        IPortfolioServiceModule
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
