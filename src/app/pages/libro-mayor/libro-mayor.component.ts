import { Component, OnInit } from '@angular/core';
import { Cuenta, Movimiento } from 'src/app/interfaces/cuentas.interface';
import { ApiService } from 'src/app/services/api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-libro-mayor',
  templateUrl: './libro-mayor.component.html',
  styleUrls: ['./libro-mayor.component.scss'],
})
export class LibroMayorComponent implements OnInit {
  cuentas: Cuenta[] = [];
  displayedColumns: string[] = [
    'transaccion_id',
    'debe',
    'haber',
    'created_at',
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getLibroMayor().subscribe((response) => {
      if (response.cuentas) {
        this.cuentas = response.cuentas;
      }
    });
  }

  createDataSource(movimientos: Movimiento[]): MatTableDataSource<Movimiento> {
    return new MatTableDataSource(movimientos);
  }
}
