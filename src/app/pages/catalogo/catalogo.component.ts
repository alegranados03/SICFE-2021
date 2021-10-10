import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/services/api.service';
import { Cuenta } from 'src/app/interfaces/cuentas.interface';



@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
})
export class CatalogoComponent implements OnInit {
  nombreCompania = environment.companyName;
  categoriaCuentas = {
    activo: 1,
    pasivo: 2,
    capital: 3,
  };

  treeControlActivo = new NestedTreeControl<Cuenta>((node) => node.cuentas);
  treeControlPasivo = new NestedTreeControl<Cuenta>((node) => node.cuentas);
  treeControlCapital = new NestedTreeControl<Cuenta>((node) => node.cuentas);
  cuentasActivo = new MatTreeNestedDataSource<Cuenta>();
  cuentasPasivo = new MatTreeNestedDataSource<Cuenta>();
  cuentasCapital = new MatTreeNestedDataSource<Cuenta>();

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getCatalogo().subscribe((response) => {
      if (response.cuentas) {
        const cuentas = response.cuentas;
        this.cuentasActivo.data = cuentas.filter((cuenta)=>cuenta.tipo_id == this.categoriaCuentas.activo);
        this.cuentasPasivo.data = cuentas.filter((cuenta)=>cuenta.tipo_id == this.categoriaCuentas.pasivo);
        this.cuentasCapital.data = cuentas.filter((cuenta)=>cuenta.tipo_id == this.categoriaCuentas.capital);
      }
      
    });
  }

  hasChild = (_: number, node: Cuenta) =>
    !!node.cuentas && node.cuentas.length > 0;
}
