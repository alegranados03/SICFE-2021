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
      icon: 'assignment',
      name: 'Menu Item 1',
      url: '',
    },
    {
      icon: 'card_travel',
      name: 'Menu Item 2',
      url: 'ruta2',
    },
    {
      icon: 'date_range',
      name: 'Menu Item 3',
      url: 'ruta3',
    },
    {
      icon: 'attach_money',
      name: 'Menu Item 4',
      url: 'ruta4',
    },
  ];

}
