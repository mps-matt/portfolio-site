import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BannerModule } from '../banner/banner.module';
import { HomePageComponent } from './home-page.component';

@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        BannerModule,
        MatCardModule
    ],
    exports: [
        HomePageComponent
    ]
})
export class HomePageModule { }
