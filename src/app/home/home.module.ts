import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HomeRoutingModule } from './home-routing.module';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { SuccessToastComponent } from '../components/success-toast/success-toast.component';
import { ProductListComponent } from './pages/product-list/product-list.component';



@NgModule({
  declarations: [
    InicioComponent,
    DetalleProductoComponent,
    CarritoComponent,
    SuccessToastComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
