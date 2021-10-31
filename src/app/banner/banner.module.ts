import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LinkedinModule } from '../linkedin/linkedin.module';
import { IPortfolioServiceModule } from '../portfolio-service/iportfolio-service.module';
import { BannerComponent } from './banner.component';

@NgModule({
    declarations: [
        BannerComponent
    ],
    imports: [
        BrowserModule,
        IPortfolioServiceModule,
        LinkedinModule
    ],
    exports: [
        BannerComponent
    ]
})
export class BannerModule { }
