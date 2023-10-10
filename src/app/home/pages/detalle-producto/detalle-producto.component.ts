import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { map, switchMap, catchError } from 'rxjs/operators';
import { throwError, of } from 'rxjs';
import { Productos } from 'src/app/interfaces/productos';
import { CarritoService } from '../../../services/carrito.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  producto: Productos | undefined;
  successMessage = ''; 
  showSuccessToast = false; 
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private carritoService: CarritoService  
    ) { }
    
  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto);
    this.successMessage = `Se ha agregado "${producto.nombre}" al carrito.`;
    this.showSuccessToast = true;
    setTimeout(() => {
      this.showSuccessToast = false;
    }, 3000); 
  }

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        const productId = params['id'];
        this.productService.getProductById(productId).subscribe((producto: Productos | undefined) => {
          this.producto = producto;
        });
      });
    
  }
}
