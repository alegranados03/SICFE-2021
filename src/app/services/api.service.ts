import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  Cuenta,
  ResponseCuentas,
  ResponseTransaccionesPorFecha,
} from '../interfaces/cuentas.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = environment.apiRoute;
  constructor(private http: HttpClient) {}

  getCatalogo() {
    return this.http.get<ResponseCuentas>(`${this.url}cuentas`);
  }
  getListaCuentas() {
    return this.http.get<ResponseCuentas>(`${this.url}cuentas/listaCuentasCompleta`);
  }

  getLibroMayor() {
    return this.http.get<ResponseCuentas>(`${this.url}cuentas/libroMayor`);
  }
  getLibroDiario() {
    return this.http.get<ResponseTransaccionesPorFecha>(
      `${this.url}transacciones`
    );
  }
  getBalanceComprobacion() {
    return this.http.get<ResponseCuentas>(
      `${this.url}cuentas/balanceComprobacion`
    );
  }
  getEstadoCapital() {
    return this.http.get<ResponseCuentas>(`${this.url}cuentas/estadoCapital`);
  }
  getEstadoResultado() {
    return this.http.get<{cuentas:ResponseCuentas}>(
      `${this.url}cuentas/estadoResultados`
    );
  }
}
