import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HobbiesComponent } from './hobbies.component';

@NgModule({
    declarations: [
        HobbiesComponent
    ],
    imports: [
        MatCardModule
    ],
    exports: [
        HobbiesComponent
    ]
})
export class HobbiesModule { }
