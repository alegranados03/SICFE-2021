import { Component } from '@angular/core';

interface IMenuItem {
  icon: string;
  name: string;
  url: string;
}
// más iconos: https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'proyectosic';
  showFiller = false;
  menu: IMenuItem[] = [
    {
      icon: 'home',
      name: 'Inicio',
      url: '',
    },
    {
      icon: 'assignment',
      name: 'Catálogo de cuentas',
      url: 'catalogo',
    },
    {
      icon: 'assignment',
      name: 'Libro Diario',
      url: 'libro-diario',
    },
    {
      icon: 'assignent',
      name: 'Libro mayor',
      url: 'libro-mayor',
    },
    {
      icon: 'card_travel',
      name: 'Estados Financieros',
      url: 'estados',
    },
    {
      icon: 'attach_money',
      name: 'Balance de Comprobación',
      url: 'balance-comprobacion',
    },
    {
      icon: 'attach_money',
      name: 'Balance General',
      url: 'balance-general',
    },
  ];

}
