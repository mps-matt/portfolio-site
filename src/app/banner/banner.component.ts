import { Component } from '@angular/core';
import { IPortfolioService } from '../portfolio-service/iportfolio-service';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: [ './banner.component.css' ]
})
export class BannerComponent {

    constructor(
    public readonly portfolioService: IPortfolioService
    ) { }
}
