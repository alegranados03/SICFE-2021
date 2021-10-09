import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { LibroDiarioComponent } from './pages/libro-diario/libro-diario.component';
import { LibroMayorComponent } from './pages/libro-mayor/libro-mayor.component';
import { BalanceComprobacionComponent } from './pages/balance-comprobacion/balance-comprobacion.component';
import { EstadosComponent } from './pages/estados/estados.component';
import { BalanceGeneralComponent } from './pages/balance-general/balance-general.component';

const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: 'libro-diario', component: LibroDiarioComponent },
  { path: 'libro-mayor', component: LibroMayorComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'estados', component: EstadosComponent },
  { path: 'balance-general', component: BalanceGeneralComponent },
  { path: 'balance-comprobacion', component: BalanceComprobacionComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
