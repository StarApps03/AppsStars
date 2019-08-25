import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/app/components/layouts/main/main.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { SitiosWebComponent } from 'src/app/components/sitios-web/sitios-web.component';
import { AplicacionesComponent } from 'src/app/components/aplicaciones/aplicaciones.component';

const routes: Routes = [
  { path:"",redirectTo:"inicio",pathMatch:'full'},
  {
    path:'',
    component:MainComponent,
    children:[
      {path:"inicio",component:HomeComponent},
      {path:"nosotros",component:AboutComponent},
      {path:"sitios-web",component:SitiosWebComponent},
      {path:"aplicaciones-moviles",component:AplicacionesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
