import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

const routes:Routes =[
  {
    path: '',
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'productos/:id', component: DetalleProductoComponent },
      { path: 'carrito', component: CarritoComponent },
      { path: 'productList', component: ProductListComponent },
      { path: '**', redirectTo: 'inicio' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HomeRoutingModule { }
