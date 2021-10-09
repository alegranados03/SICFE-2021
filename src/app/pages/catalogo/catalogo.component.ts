import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { environment } from 'src/environments/environment';

interface Cuenta {
  numero: string;
  nombre: string;
  children?: Cuenta[];
}
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
})
export class CatalogoComponent implements OnInit {
  nombreCompania =  environment.companyName;
  TREE_DATA: Cuenta[] = [
    {
      nombre: 'Cuenta 1',
      numero:'00102023',
      children: [
        { nombre: 'Cuenta 3', numero: '001001' },
        { nombre: 'Cuenta 6', numero: '001001' },
        { nombre: 'Cuenta 9', numero: '001001' },
      ],
    },
    {
      nombre: 'Cuenta 2',
      numero:'00102023',
      children: [
        { nombre: 'Cuenta 4', numero: '001001' },
        { nombre: 'Cuenta 7', numero: '001001' },
        { nombre: 'Cuenta 10', numero: '001001',
        children: [
          { nombre: 'Cuenta 5', numero: '001001' },
          { nombre: 'Cuenta 8', numero: '001001' },
          { nombre: 'Cuenta 11', numero: '001001' },
        ],
      },
      ],
    },
  ];

  treeControlActivo = new NestedTreeControl<Cuenta>((node) => node.children);
  treeControlPasivo = new NestedTreeControl<Cuenta>((node) => node.children);
  treeControlCapital = new NestedTreeControl<Cuenta>((node) => node.children);
  cuentasActivo = new MatTreeNestedDataSource<Cuenta>();
  cuentasPasivo = new MatTreeNestedDataSource<Cuenta>();
  cuentasCapital = new MatTreeNestedDataSource<Cuenta>();

  constructor() {
    this.cuentasActivo.data = this.TREE_DATA;
    this.cuentasPasivo.data = this.TREE_DATA;
    this.cuentasCapital.data = this.TREE_DATA;
  }

  ngOnInit(): void {}

  hasChild = (_: number, node: Cuenta) =>
    !!node.children && node.children.length > 0;
}
