import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/layouts/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './components/organisms/nav-bar/nav-bar.component';
import { LinkComponent } from './components/atoms/link/link.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { HeadingComponent } from './components/atoms/heading/heading.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { FooterComponent } from './components/organisms/footer/footer.component';



@NgModule({
  declarations: [MainLayoutComponent, NavBarComponent, LinkComponent, LogoComponent, HeadingComponent, ButtonComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MainLayoutComponent, LinkComponent, LogoComponent, HeadingComponent, ButtonComponent, FooterComponent]
})
export class SharedModule { }
