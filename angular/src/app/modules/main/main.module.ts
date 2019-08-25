import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from 'src/app/components/home/home.component';
import { MainComponent } from 'src/app/components/layouts/main/main.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { SitiosWebComponent } from 'src/app/components/sitios-web/sitios-web.component';
import { FormCotizacionComponent } from 'src/app/components/partial/form-cotizacion.component';
import { AplicacionesComponent } from 'src/app/components/aplicaciones/aplicaciones.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [
    HomeComponent,
    MainComponent,
    AboutComponent,
    SitiosWebComponent,
    FormCotizacionComponent,
    AplicacionesComponent
  ]
})
export class MainModule { }
