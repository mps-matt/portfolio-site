import { Component, OnInit } from '@angular/core';
import { IPortfolioService } from '../portfolio-service/iportfolio-service.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {

    constructor(
    public readonly portfolioService: IPortfolioService
    ) { }

    //    ngOnInit(): void {
    //    }

}
