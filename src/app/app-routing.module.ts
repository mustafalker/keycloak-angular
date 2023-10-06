import { NgModule } from '@angular/core';
import {  Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AnaSayfaComponent } from './ana-sayfa/ana-sayfa.component';

const routes: Routes = [
  { path: '', redirectTo: '/ana-sayfa', pathMatch: 'full' },
  { path: 'ana-sayfa', component: AnaSayfaComponent }, 
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
