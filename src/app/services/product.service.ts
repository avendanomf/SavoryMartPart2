import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos } from '../interfaces/productos';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) { }

  private productosUrl = 'assets/database/productos.json'; // Ruta al archivo JSON en la carpeta "assets"

  getProductos(): Observable<Productos[]> {
    return this.http.get<Productos[]>(this.productosUrl);
  }

  getProductById(productId: string): Observable<Productos | undefined> {
    return this.getProductos().pipe(
      map((productos: Productos[]) =>
        productos.find((producto: Productos) => producto.nombre === productId)
      )
    );
  }

  
}
