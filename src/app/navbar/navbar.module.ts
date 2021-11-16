import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IPortfolioServiceModule } from '../portfolio-service/iportfolio-service.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        MatToolbarModule,
        BrowserModule,
        IPortfolioServiceModule,
        FontAwesomeModule
    ],
    exports: [
        NavbarComponent
    ]
})
export class NavbarModule { }
