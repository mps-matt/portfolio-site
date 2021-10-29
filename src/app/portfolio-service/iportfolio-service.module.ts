import { NgModule } from '@angular/core';
import { PortfolioServiceFactory } from './iportfolio-service.factory';
import { IPortfolioService } from './iportfolio-service.service';

@NgModule({
    providers: [
        { provide: IPortfolioService, useFactory: PortfolioServiceFactory }
    ]
})
export class IPortfolioServiceModule { }
