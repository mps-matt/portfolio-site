import { Component } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-linkedin',
    templateUrl: './linkedin.component.html',
    styleUrls: [ './linkedin.component.css' ]
})
export class LinkedinComponent {
    faLinkedin = faLinkedin;
    constructor() { }
}
