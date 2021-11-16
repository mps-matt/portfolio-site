import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageModule } from './home-page/home-page.module';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomePageModule,
        BrowserAnimationsModule,
        NavbarModule,
        FooterModule
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
