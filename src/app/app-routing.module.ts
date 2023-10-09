import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnaSayfaComponent } from './ana-sayfa/ana-sayfa.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/ana-sayfa', pathMatch: 'full' },
  { path: 'ana-sayfa', component: AnaSayfaComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
