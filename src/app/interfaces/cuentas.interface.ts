export interface Cuenta {
    id:            number;
    numero_cuenta: string;
    nombre_cuenta: string;
    padre_id:      number | null;
    debe:          string;
    haber:         string;
    tipo_id:       number;
    created_at:    null;
    updated_at:    null;
    cuentas:       Cuenta[];
  }

  export interface ResponseCuentas{
    cuentas:Cuenta[]
  }