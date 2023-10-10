import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CarritoService } from '../../../services/carrito.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  listProducts: Observable<any> | undefined;
  successMessage = ''; 
  showSuccessToast = false; 
  constructor(
    private productService: ProductService,
    private carritoService: CarritoService
  ) { }

  ngOnInit(): void {
    this.listProducts = this.productService.getProductos();
    setTimeout(() => {
    }, 1000);
  }
  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto);
    this.successMessage = `Se ha agregado "${producto.nombre}" al carrito.`;
    this.showSuccessToast = true;
    setTimeout(() => {
      this.showSuccessToast = false;
    }, 3000); 
  }

}
