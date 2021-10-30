import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LinkedinModule } from '../linkedin/linkedin.module';
import { IPortfolioServiceModule } from '../portfolio-service/iportfolio-service.module';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        BrowserModule,
        IPortfolioServiceModule,
        LinkedinModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }
