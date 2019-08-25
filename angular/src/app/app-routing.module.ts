import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components

const routes: Routes = [
  { path:"",redirectTo:"inicio",pathMatch:'full'},
];

export const routing = RouterModule.forRoot(routes);




