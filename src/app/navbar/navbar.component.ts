import { Component } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { IPortfolioService } from '../portfolio-service/iportfolio-service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [ './navbar.component.css' ]
})
export class NavbarComponent {
  faLinkedin = faLinkedin;
  constructor(
    public readonly portfolioService: IPortfolioService
  ) { }
}
