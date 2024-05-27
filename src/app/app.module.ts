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

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { DessertPageComponent } from './pages/dessert-page/dessert-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CustomMadePageComponent } from './pages/custom-made-page/custom-made-page.component';
import { SpoonPageComponent } from './pages/spoon-page/spoon-page.component';
import { MeatPageComponent } from './pages/meat/meat-page/meat-page.component';
import { VealPageComponent } from './pages/meat/veal-page/veal-page.component';
import { PigPageComponent } from './pages/meat/pig-page/pig-page.component';
import { ChickenPageComponent } from './pages/meat/chicken-page/chicken-page.component';
import { PastaPageComponent } from './pages/pasta-page/pasta-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    NavbarSecondaryComponent,
    FooterComponent,
    MainPageComponent,
    ContactPageComponent,

    SpoonPageComponent,
    DessertPageComponent,
    AboutPageComponent,
    CustomMadePageComponent,
    MeatPageComponent,
    VealPageComponent,
    MainPageComponent,
    PigPageComponent,
    ChickenPageComponent,
    VealPageComponent,
    PastaPageComponent

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
