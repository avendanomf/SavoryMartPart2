import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  productos: any[] = [];

  agregarProducto(producto: any) {
    this.productos.push(producto);
  }

  eliminarProducto(index: number) {
    this.productos.splice(index, 1);
  }

  obtenerProductos() {
    return this.productos;
  }
}
