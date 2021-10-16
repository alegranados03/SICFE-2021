import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/interfaces/cuentas.interface';
import { ApiService } from 'src/app/services/api.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

interface TableRow {
  numero_cuenta: string;
  nombre_cuenta: string;
  debe: number;
  haber: number;
}
@Component({
  selector: 'app-balance-comprobacion',
  templateUrl: './balance-comprobacion.component.html',
  styleUrls: ['./balance-comprobacion.component.scss'],
})
export class BalanceComprobacionComponent implements OnInit {
  displayedColumns: string[] = [
    'cuenta',
    'nombre',
    'saldo_deudor',
    'saldo_acreedor',
  ];
  cuentas: Cuenta[] = [];
  tablaCuentas: TableRow[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getBalanceComprobacion().subscribe((response) => {
      if (response.cuentas) {
        this.cuentas = response.cuentas.filter(
          (cuenta) => cuenta.movimientos!.length > 0
        );

        const resumen: TableRow = {
          numero_cuenta: '',
          nombre_cuenta: 'Total',
          debe: 0,
          haber: 0,
        };
        
        this.transformData();

        this.tablaCuentas.forEach((cuenta) => {
          if (cuenta) {
            resumen.debe += cuenta.debe,
            resumen.haber += cuenta.haber
          }
        });

        resumen.debe = +resumen.debe.toFixed(2);
        resumen.haber = +resumen.haber.toFixed(2);
        this.tablaCuentas.push(resumen);
      }
    });
  }

  transformData() {
    this.tablaCuentas = this.cuentas.map((cuenta): TableRow => {
      return {
        numero_cuenta: cuenta.numero_cuenta,
        nombre_cuenta: cuenta.nombre_cuenta,
        debe: +cuenta.total_debe?.toFixed(2)!,
        haber: +cuenta.total_haber?.toFixed(2)!,
      };
    });
  }
}
