import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CharityComponent } from './charity.component';

@NgModule({
    declarations: [
        CharityComponent
    ],
    imports: [
        MatCardModule
    ],
    exports: [
        CharityComponent
    ]
})
export class CharityModule { }
