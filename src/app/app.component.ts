import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
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
  title = environment.companyName;
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
      icon: 'assignment',
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
