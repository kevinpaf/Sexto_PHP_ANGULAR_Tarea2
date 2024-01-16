import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducto } from '../Interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private urlBase = 'http://localhost/Sexto_PHP_ANGULAR/Inventario/Controllers/Producto.Controller.php?op=';
  constructor(private clientePhp: HttpClient) {}
  todos(): Observable<IProducto[]> {
    return this.clientePhp.get<IProducto[]>(this.urlBase + 'todos');
  }
  insertar(producto: IProducto): Observable<any> {
    var prod = new FormData();
    prod.append('Nombre', producto.Nombre);
    prod.append('Precio', producto.Precio);
    prod.append('Cantidad', producto.Cantidad);
    return this.clientePhp.post(this.urlBase + 'insertar', prod);
  }
  eliminar(id: number): Observable<any> {
    var prod = new FormData();
    prod.append('productoId', id.toString());
    return this.clientePhp.post(this.urlBase + 'eliminar', prod);
  }
  uno(id: number): Observable<IProducto> {
    var prod = new FormData();
    prod.append('productoId', id.toString());
    return this.clientePhp.post<IProducto>(this.urlBase + 'uno', prod);
  }
  actualizar(producto: IProducto, id: number): Observable<any> {
    var prod = new FormData();
    prod.append('productoId', id.toString());
    prod.append('Nombre', producto.Nombre);
    prod.append('Precio', producto.Precio.toString());
    prod.append('Cantidad', producto.Cantidad.toString());
    return this.clientePhp.post(this.urlBase + 'actualizar', prod);
  }
}
