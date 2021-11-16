import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AboutMeModule } from '../about-me/about-me.module';
import { BannerModule } from '../banner/banner.module';
import { CharityModule } from '../charity/charity.module';
import { ExperienceModule } from '../experience/experience.module';
import { HobbiesModule } from '../hobbies/hobbies.module';
import { QualificationsModule } from '../qualifications/qualifications.module';
import { HomePageComponent } from './home-page.component';

@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        BannerModule,
        MatCardModule,
        AboutMeModule,
        CharityModule,
        ExperienceModule,
        HobbiesModule,
        QualificationsModule
    ],
    exports: [
        HomePageComponent
    ]
})
export class HomePageModule { }


