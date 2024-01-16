import { Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './views/productos/productos.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ProveedoresComponent } from './views/proveedores/proveedores.component';
import { StocksComponent } from './views/stocks/stocks.component';
import { NuevoProveedorComponent } from './views/proveedores/nuevo-proveedor/nuevo-proveedor.component';
import { NuevoProductoComponent } from './views/productos/nuevo-producto/nuevo-producto.component';
import { NuevoStockComponent } from './views/stocks/nuevo-stock/nuevo-stock.component';


export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: 'productos', component: ProductosComponent },
  { path: 'nuevo-producto', component: NuevoProductoComponent },
  {
    path: 'editar-producto/:id',
    component: NuevoProductoComponent,
  },

  {
    path: 'proveedores',
    component: ProveedoresComponent,
  },
  {
    path: 'nuevo-proveedor',
    component: NuevoProveedorComponent,
  },
  {
    path: 'editar-proveedor/:id',
    component: NuevoProveedorComponent,
  },
  {
    path: 'stocks',
    component: StocksComponent,
  },
  {
    path: 'nuevo-stock',
    component: NuevoStockComponent,
  },
  {
    path: 'editar-stock/:id',
    component: NuevoStockComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponentComponent },
];
