import { Component, OnInit } from '@angular/core';
import { IPortfolioService } from '../portfolio-service/iportfolio-service';

declare let Rellax : any;

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: [ './banner.component.css' ]
})
export class BannerComponent implements OnInit {

    constructor(
    public readonly portfolioService: IPortfolioService
    ) { }

    ngOnInit() {
        const rellax = new Rellax( '.rellax' );
    }
}
