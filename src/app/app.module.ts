import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { LibroDiarioComponent } from './pages/libro-diario/libro-diario.component';
import { LibroMayorComponent } from './pages/libro-mayor/libro-mayor.component';
import { BalanceComprobacionComponent } from './pages/balance-comprobacion/balance-comprobacion.component';
import { EstadosComponent } from './pages/estados/estados.component';
import { BalanceGeneralComponent } from './pages/balance-general/balance-general.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CatalogoComponent,
    LibroDiarioComponent,
    LibroMayorComponent,
    BalanceComprobacionComponent,
    EstadosComponent,
    BalanceGeneralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
