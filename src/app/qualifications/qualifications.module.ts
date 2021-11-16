import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { QualificationsComponent } from './qualifications.component';

@NgModule({
    declarations: [
        QualificationsComponent
    ],
    imports: [
        MatCardModule
    ],
    exports: [
        QualificationsComponent
    ]
})
export class QualificationsModule { }
