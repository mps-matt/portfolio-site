import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IPortfolioServiceModule } from '../portfolio-service/iportfolio-service.module';
import { LinkedinComponent } from './linkedin.component';

@NgModule({
    declarations: [
        LinkedinComponent
    ],
    imports: [
        BrowserModule,
        MatCardModule,
        FontAwesomeModule,
        IPortfolioServiceModule
    ],
    exports: [
        LinkedinComponent
    ]
})
export class LinkedinModule { }
