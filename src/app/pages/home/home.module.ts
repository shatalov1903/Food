import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdvComponent } from './components/home-adv/home-adv.component';
import { HomeCategoryComponent } from './components/home-category/home-category.component';
import { HomeRestaurantsComponent } from './components/home-restaurants/home-restaurants.component';

const routes: Routes = [
  { path: '', component: HomeComponent}
];



@NgModule({
  declarations: [
    HomeComponent,
    HomeAdvComponent,
    HomeCategoryComponent,
    HomeRestaurantsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
