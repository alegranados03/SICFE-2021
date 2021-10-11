export interface Movimiento {
  id: number;
  transaccion_id: number;
  cuenta_id: number;
  debe: string;
  haber: string;
  created_at: Date | null;
  updated_at: Date | null;
  cuenta?: Cuenta;
}

export interface Cuenta {
  id: number;
  numero_cuenta: string;
  nombre_cuenta: string;
  padre_id: number | null;
  debe: string;
  haber: string;
  tipo_id: number;
  created_at: null;
  updated_at: null;
  cuentas?: Cuenta[];
  movimientos?: Movimiento[];
}

export interface Transaccion {
  id: number;
  total_debe: string;
  total_haber: string;
  descripcion: string;
  created_at: Date;
  updated_at: null;
  movimientos?: Movimiento[];
}
export interface ResponseCuentas {
  cuentas: Cuenta[];
}
export interface ResponseTransacciones {
  transacciones: Transaccion[];
}
export interface ResponseTransaccionesPorFecha {
  fechas: { [fecha: string]: Transaccion[] };
}
