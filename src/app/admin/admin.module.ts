import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './product-form/product-form.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [ProductFormComponent, AdminProductsComponent]
})
export class AdminModule { }
