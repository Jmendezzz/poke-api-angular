import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/components/layouts/main-layout/main-layout.component';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';

const routes: Routes = [{
  path:'',
  component:MainLayoutComponent,
  children:[
    {
      path:'',
      component: HomePageComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
