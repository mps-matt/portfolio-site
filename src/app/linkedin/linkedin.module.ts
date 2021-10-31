import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LinkedinComponent } from './linkedin.component';

@NgModule({
    declarations: [
        LinkedinComponent
    ],
    imports: [
        MatCardModule,
        FontAwesomeModule
    ],
    exports: [
        LinkedinComponent
    ]
})
export class LinkedinModule { }
