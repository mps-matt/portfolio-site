import { Component } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { IPortfolioService } from '../portfolio-service/iportfolio-service';

@Component({
    selector: 'app-linkedin',
    templateUrl: './linkedin.component.html',
    styleUrls: [ './linkedin.component.css' ]
})
export class LinkedinComponent {
    faLinkedin = faLinkedin;
    constructor(
        public readonly portfolioService: IPortfolioService
    ) { }
}
