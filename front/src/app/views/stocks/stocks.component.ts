import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IStock } from '../../Interfaces/istock';
import { StockService } from '../../Services/stock.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.css'
})
export class StocksComponent {
  title = 'stock';
  stocks: IStock[];

  constructor(private service: StockService) {}

  ngOnInit() {
    this.cargaTabla();
  }

  cargaTabla(){
    this.service.todos().subscribe((listaproductos) => {
      this.stocks = listaproductos;
      console.log(listaproductos);
    });
  }

  alerta() {
    Swal.fire('Stocks', 'Mensaje en Stocks', 'success');
  }

  eliminar(stockId: number) {
    Swal.fire({
      title: 'Stocks',
      text: 'Esta seguro que desea eliminar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminar(stockId).subscribe((datos) => {
          this.cargaTabla();
          Swal.fire({
            title: 'Stocks',
            text: 'Se eliminó con éxito el registro',
            icon: 'success',
          });
        });
      } else {
        Swal.fire({
          title: 'Stocks',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }
}
