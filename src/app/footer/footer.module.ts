import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { IPortfolioServiceModule } from '../portfolio-service/iportfolio-service.module';
import { FooterComponent } from './footer.component';

@NgModule({
    declarations: [
        FooterComponent
    ],
    imports: [
        BrowserModule,
        IPortfolioServiceModule,
        MatCardModule
    ],
    exports: [
        FooterComponent
    ]
})
export class FooterModule { }
