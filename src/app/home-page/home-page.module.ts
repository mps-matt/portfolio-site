import { NgModule } from '@angular/core';
import { BannerModule } from '../banner/banner.module';
import { HomePageComponent } from './home-page.component';

@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        BannerModule
    ],
    exports: [
        HomePageComponent
    ]
})
export class HomePageModule { }
