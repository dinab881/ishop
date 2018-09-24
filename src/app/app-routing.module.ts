import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuardService } from './core/services/admin-guard.service';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: '../app/admin/admin.module#AdminModule',
    canLoad: [AdminGuardService],
    canActivate: [AdminGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
