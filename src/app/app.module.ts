import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatDialogModule   } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar-main/navbar.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NavbarSecondaryComponent } from './components/navbar-secondary/navbar-secondary.component';
import { ColdPageComponent } from './pages/cold-page/cold-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HotPageComponent } from './pages/hot-page/hot-page.component';
import { DessertPageComponent } from './pages/dessert-page/dessert-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    NavbarSecondaryComponent,
    FooterComponent,
    MainPageComponent,
    ContactPageComponent,
    ColdPageComponent,
    HotPageComponent,
    DessertPageComponent,
    AboutPageComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
