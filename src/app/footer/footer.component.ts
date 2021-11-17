import { Component } from '@angular/core';
import { IPortfolioService } from '../portfolio-service/iportfolio-service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: [ './footer.component.css' ]
})
export class FooterComponent {
    constructor(
    public readonly portfolioService: IPortfolioService
    ) { }
}
