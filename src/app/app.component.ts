import { Component } from '@angular/core';
import { IPortfolioService } from './portfolio-service/iportfolio-service.service';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
} )
export class AppComponent {
  title = 'portfolio-site';
  constructor(
       public readonly PortfolioServie: IPortfolioService
  ){}
}
