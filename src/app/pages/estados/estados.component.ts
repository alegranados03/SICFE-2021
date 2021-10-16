import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/interfaces/cuentas.interface';
import { ApiService } from 'src/app/services/api.service';
interface TableRow {
  numero_cuenta: string;
  nombre_cuenta: string;
  debe: number;
  haber: number;
}
@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.scss'],
})
export class EstadosComponent implements OnInit {
  displayedColumns: string[] = [
    'cuenta',
    'nombre',
    'saldo_deudor',
    'saldo_acreedor',
  ];
  cuentasResultado: Cuenta[] = [];
  cuentasCapital: Cuenta[] = [];
  tablaResultado: TableRow[] = [];
  tablaCapital: TableRow[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getEstadoCapital().subscribe((response) => {
      if (response) {
        this.cuentasCapital = response.cuentas;
        const resumen: TableRow = {
          numero_cuenta: '',
          nombre_cuenta: 'Total',
          debe: 0,
          haber: 0,
        };

        this.transformDataCapital();

        this.tablaCapital.forEach((cuenta) => {
          if (cuenta) {
            (resumen.debe += cuenta.debe), (resumen.haber += cuenta.haber);
          }
        });

        resumen.debe = +resumen.debe.toFixed(2);
        resumen.haber = +resumen.haber.toFixed(2);
        this.tablaCapital.push(resumen);
      }
    });

    this.apiService.getEstadoResultado().subscribe((response) => {
      if (response.cuentas) {
        this.cuentasResultado = response.cuentas.cuentas;

        const resumen: TableRow = {
          numero_cuenta: '',
          nombre_cuenta: 'Total',
          debe: 0,
          haber: 0,
        };

        this.transformDataResultado();

        this.tablaResultado.forEach((cuenta) => {
          if (cuenta) {
            (resumen.debe += cuenta.debe), (resumen.haber += cuenta.haber);
          }
        });

        resumen.debe = +resumen.debe.toFixed(2);
        resumen.haber = +resumen.haber.toFixed(2);
        this.tablaResultado.push(resumen);
      }
    });
  }

  transformDataCapital() {
    this.tablaCapital = this.cuentasCapital.map((cuenta): TableRow => {
      return {
        numero_cuenta: cuenta.numero_cuenta,
        nombre_cuenta: cuenta.nombre_cuenta,
        debe: +cuenta.total_debe?.toFixed(2)!,
        haber: +cuenta.total_haber?.toFixed(2)!,
      };
    });
  }
  transformDataResultado() {
    this.tablaResultado = this.cuentasResultado.map((cuenta): TableRow => {
      return {
        numero_cuenta: cuenta.numero_cuenta,
        nombre_cuenta: cuenta.nombre_cuenta,
        debe: +cuenta.total_debe?.toFixed(2)!,
        haber: +cuenta.total_haber?.toFixed(2)!,
      };
    });
  }
}
