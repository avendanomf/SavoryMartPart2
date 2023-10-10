import { Component } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent {
  productos: any[] = [];

  constructor(private carritoService: CarritoService) {
    this.productos = carritoService.obtenerProductos();
  }

  eliminarDelCarrito(index: number) {
    this.carritoService.eliminarProducto(index);
  }
  calcularTotal(): number {
    let total = 0;

    for (const producto of this.productos) {
      total += producto.precio;
    }

    return total;
  }
}
