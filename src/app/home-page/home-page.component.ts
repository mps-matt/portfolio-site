import { Component, OnInit } from '@angular/core';

declare let Rellax : any;

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: [ './home-page.component.css' ]
})
export class HomePageComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        const rellax = new Rellax( '.rellax' );
    }
}
