import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';


import { DessertPageComponent } from './pages/dessert-page/dessert-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CustomMadePageComponent } from './pages/custom-made-page/custom-made-page.component';
import { SpoonPageComponent } from './pages/spoon-page/spoon-page.component';
import { MeatPageComponent } from './pages/meat/meat-page/meat-page.component';
import { VealPageComponent } from './pages/meat/veal-page/veal-page.component';
import { PigPageComponent } from './pages/meat/pig-page/pig-page.component';
import { ChickenPageComponent } from './pages/meat/chicken-page/chicken-page.component';
import { PastaPageComponent } from './pages/pasta-page/pasta-page.component';
import { FishPageComponent } from './pages/fish-page/fish-page.component';
import { CakePageComponent } from './pages/cake-page/cake-page.component';
import { FaqsPageComponent } from './pages/faqs-page/faqs-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },{
    path: 'contact',
    component: ContactPageComponent
  },{
    path: 'spoon',
    component: SpoonPageComponent
  },{
    path: 'meat',
    component: MeatPageComponent
  },{
    path: 'dessert',
    component: DessertPageComponent
  },{
    path: 'about',
    component: AboutPageComponent
  },{
    path: 'made',
    component: CustomMadePageComponent
  },{
    path: 'chicken',
    component: ChickenPageComponent
  },{
    path: 'pig',
    component: PigPageComponent
  },{
    path: 'veal',
    component: VealPageComponent
  },{
    path: 'pasta',
    component: PastaPageComponent
  },{
    path: 'fish',
    component: FishPageComponent
  },{
    path: 'cake',
    component: CakePageComponent
  },{
    path: 'faqs',
    component: FaqsPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
