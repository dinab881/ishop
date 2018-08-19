import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ProductsComponent } from './products/products.component';
import {SharedModule} from '../shared/shared.module';
import { ShopMenuComponent } from './shop-menu/shop-menu.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule
  ],
  declarations: [ProductsComponent, ShopMenuComponent]
})
export class ShopModule { }
