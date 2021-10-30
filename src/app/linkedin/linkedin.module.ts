import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LinkedinComponent } from './linkedin.component';

@NgModule({
    declarations: [
        LinkedinComponent
    ],
    imports: [
        MatCardModule
    ],
    exports: [
        LinkedinComponent
    ]
})
export class LinkedinModule { }
