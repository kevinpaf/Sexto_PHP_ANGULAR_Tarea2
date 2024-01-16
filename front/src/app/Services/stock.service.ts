import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStock } from '../Interfaces/istock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private urlBase = 'http://localhost/Sexto_PHP_ANGULAR/Inventario/Controllers/Stock.Controller.php?op=';
  constructor(private clientePhp: HttpClient) { }

  todos(): Observable<IStock[]> {
    return this.clientePhp.get<IStock[]>(this.urlBase + 'todos');
  }
  insertar(stock: IStock): Observable<any> {
    var st = new FormData();
    st.append('ProductoId', stock.ProductoId.toString());
    st.append('ProveedorId', stock.ProveedorId.toString());
    st.append('Cantidad', stock.Cantidad.toString());
    st.append('Precio_Venta', stock.Precio_Venta.toString());
    return this.clientePhp.post(this.urlBase + 'insertar', st);
  }
  eliminar(id: number): Observable<any> {
    var st = new FormData();
    st.append('stockId', id.toString());
    return this.clientePhp.post(this.urlBase + 'eliminar', st);
  }
  uno(id: number): Observable<IStock> {
    var st = new FormData();
    st.append('stockId', id.toString());
    return this.clientePhp.post<IStock>(this.urlBase + 'uno', st);
  }
  actualizar(stock: IStock, id: number): Observable<any> {
    var st = new FormData();
    st.append('stockId', id.toString());
    st.append('ProductoId', stock.ProductoId.toString());
    st.append('ProveedorId', stock.ProveedorId.toString());
    st.append('Cantidad', stock.Cantidad.toString());
    st.append('Precio_Venta', stock.Precio_Venta.toString());
    return this.clientePhp.post(this.urlBase + 'actualizar', st);
  }
}
