import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren:()=> import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path:'auth',
    loadChildren:()=> import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'home/productList',
    loadChildren:()=> import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path:'contacto',
    loadChildren:()=> import('./contacto/contacto.module').then(m => m.ContactoModule)
  },
  {
    path:'**',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
