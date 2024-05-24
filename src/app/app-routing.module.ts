import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ColdPageComponent } from './pages/cold-page/cold-page.component';
import { HotPageComponent } from './pages/hot-page/hot-page.component';
import { DessertPageComponent } from './pages/dessert-page/dessert-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },{
    path: 'contact',
    component: ContactPageComponent
  },{
    path: 'cold',
    component: ColdPageComponent
  },{
    path: 'hot',
    component: HotPageComponent
  },{
    path: 'dessert',
    component: DessertPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
