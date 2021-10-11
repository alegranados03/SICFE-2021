import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import {
  Movimiento,
  ResponseTransaccionesPorFecha,
  Transaccion,
} from 'src/app/interfaces/cuentas.interface';
@Component({
  selector: 'app-libro-diario',
  templateUrl: './libro-diario.component.html',
  styleUrls: ['./libro-diario.component.scss'],
})
export class LibroDiarioComponent implements OnInit {
  displayedColumns: string[] = ['id', 'cuenta', 'debe', 'haber', 'created_at'];
  libroDiario: { fecha: string; transacciones: Transaccion[] }[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getLibroDiario().subscribe((response) => {
      if (response.fechas) {
        this.procesarTransacciones(response);
      }
    });
  }

  createDataSource(movimientos: Movimiento[]): MatTableDataSource<Movimiento> {
    return new MatTableDataSource(movimientos);
  }

  procesarTransacciones(response: ResponseTransaccionesPorFecha) {
    for (let key in response.fechas) {
      this.libroDiario.push({
        fecha: key,
        transacciones: response.fechas[key],
      });
    }
  }
}
