import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AboutMeComponent } from './about-me.component';

@NgModule({
    declarations: [
        AboutMeComponent
    ],
    imports: [
        MatCardModule
    ],
    exports: [
        AboutMeComponent
    ]
})
export class AboutMeModule { }
