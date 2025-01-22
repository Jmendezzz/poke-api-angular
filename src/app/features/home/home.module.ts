import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomePageComponent,
    HeroSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule   
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
