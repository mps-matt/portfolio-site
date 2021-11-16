import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ExperienceComponent } from './experience.component';

@NgModule({
    declarations: [
        ExperienceComponent
    ],
    imports: [
        MatCardModule
    ],
    exports: [
        ExperienceComponent
    ]
})
export class ExperienceModule { }
