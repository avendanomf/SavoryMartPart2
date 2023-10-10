import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
declare var $: any;
import { ProductService } from 'src/app/services/product.service'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  listProducts: Observable<any> | undefined;
  successMessage = ''; 
  showSuccessToast = false; 
  constructor(private productService: ProductService, private router: Router,private carritoService: CarritoService ) { }

  ngOnInit(): void {
    this.listProducts = this.productService.getProductos();
    setTimeout(() => {
    }, 1000);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      var multipleCardCarousel = document.querySelector("#carouselExampleControls");

      if (multipleCardCarousel instanceof Element) {
        if (window.matchMedia("(min-width: 768px)").matches) {
          var carousel = new bootstrap.Carousel(multipleCardCarousel, {
            interval: false,
          });

          // Obtener el valor de cardWidth, o asignar un valor por defecto si no está definido
          var cardWidth = $(".carousel-item").width() || 0;

          var carouselWidth = $(".carousel-inner")[0].scrollWidth;
          var scrollPosition = 0;

          $("#carouselExampleControls .carousel-control-next").on("click", function () {
            if (scrollPosition < carouselWidth - cardWidth * 4) {
              scrollPosition += cardWidth;
              $("#carouselExampleControls .carousel-inner").animate(
                { scrollLeft: scrollPosition },
                600
              );
            }
          });

          $("#carouselExampleControls .carousel-control-prev").on("click", function () {
            if (scrollPosition > 0) {
              scrollPosition -= cardWidth;
              $("#carouselExampleControls .carousel-inner").animate(
                { scrollLeft: scrollPosition },
                600
              );
            }
          });
        } else {
          $(multipleCardCarousel).addClass("slide");
        }
      }
    }, 2000);
  }

  verDetalle(id: string) {
    this.router.navigate(['/home/productos', id]);
  }

  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto);
    this.successMessage = `Se ha agregado "${producto.nombre}" al carrito.`;
    this.showSuccessToast = true;
    setTimeout(() => {
      this.showSuccessToast = false;
    }, 3000); 
  }
  verProductList() {
    this.router.navigate(['/home/productList']);
  }

}
