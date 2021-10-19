import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import {
  Cuenta,
  Movimiento,
  ResponseTransaccionesPorFecha,
  Transaccion,
} from 'src/app/interfaces/cuentas.interface';
import {
  AbstractControl,
  Form,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-libro-diario',
  templateUrl: './libro-diario.component.html',
  styleUrls: ['./libro-diario.component.scss'],
})
export class LibroDiarioComponent implements OnInit {
  displayedColumns: string[] = ['id', 'cuenta', 'debe', 'haber', 'created_at'];
  libroDiario: { fecha: string; transacciones: Transaccion[] }[] = [];
  cuentas: Cuenta[] = [];
  tabIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  tabIndex: number = 0;

  formArrayInicial: FormGroup[] = [
    this.fb.group({
      fecha: ['', Validators.required],
      cuenta: ['', Validators.required],
      monto: ['', Validators.required],
      concepto: ['', Validators.required],
      lado: ['', Validators.required],
    }),
    this.fb.group({
      fecha: ['', Validators.required],
      cuenta: ['', Validators.required],
      monto: ['', Validators.required],
      concepto: ['', Validators.required],
      lado: ['', Validators.required],
    }),
  ];

  transaccionForm: FormGroup = this.fb.group({
    movimientos: this.fb.array([...this.formArrayInicial]),
  });

  constructor(private apiService: ApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.apiService.getLibroDiario().subscribe((response) => {
      if (response.fechas) {
        this.procesarTransacciones(response);
      }
    });

    this.apiService.getListaCuentas().subscribe((response) => {
      if (response.cuentas) {
        this.cuentas = response.cuentas;
      }
    });

    this.tabIndex$.asObservable().subscribe((index) => {
      this.tabIndex = index;
    });
  }

  clearForm() {
    // while (this.movimientos.length > 2) {
    //   this.movimientos.removeAt(this.movimientos.length - 1);
    // }
    this.transaccionForm = this.fb.group({
      movimientos: this.fb.array([...this.formArrayInicial]),
    });
    this.transaccionForm.reset();
  }

  get movimientos() {
    return this.transaccionForm.get('movimientos') as FormArray;
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

  onSubmit() {
    console.log(this.transaccionForm.valid);
    console.log(this.transaccionForm.value);
    this.tabIndex$.next(0);
    // this.transaccionForm.reset();
  }

  toFormGroup(e: AbstractControl) {
    return e as FormGroup;
  }

  addMovimiento() {
    const movimiento: FormGroup = this.fb.group({
      fecha: ['', Validators.required],
      cuenta: ['', Validators.required],
      monto: ['', Validators.required],
      concepto: ['', Validators.required],
      lado: ['', Validators.required],
    });
    this.movimientos.push(movimiento);
  }

  removeMovimiento(index: number) {
    this.movimientos.removeAt(index);
  }

  setIndexTab(index: number) {
    this.tabIndex$.next(index);
  }

  onCancel() {
    this.clearForm();
    console.log(this.tabIndex);
    this.tabIndex$.next(0);
  }
}
