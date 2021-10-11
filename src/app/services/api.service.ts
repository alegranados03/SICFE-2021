import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
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

  getLibroMayor() {
    return this.http.get<ResponseCuentas>(`${this.url}cuentas/libroMayor`);
  }
  getLibroDiario() {
    return this.http.get<ResponseTransaccionesPorFecha>(
      `${this.url}transacciones`
    );
  }
}
