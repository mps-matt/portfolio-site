import { NgModule } from '@angular/core';
import { IPortfolioServiceModule } from '../portfolio-service/iportfolio-service.module';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        IPortfolioServiceModule
    ]
})
export class HomeModule { }
