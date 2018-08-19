import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService} from '../shared/services/auth-guard.service';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import {AdminGuardService} from '../shared/services/admin-guard.service';
import { ProductFormComponent } from './product-form/product-form.component';


const routes: Routes = [
  {
  path: '',
    children: [
      { path: 'products', component: AdminProductsComponent, canActivate: [AuthGuardService, AdminGuardService] },
      { path: 'products/new', component: ProductFormComponent, canActivate: [AuthGuardService, AdminGuardService] },
      { path: 'products/:id', component: ProductFormComponent, canActivate: [AuthGuardService, AdminGuardService] }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
