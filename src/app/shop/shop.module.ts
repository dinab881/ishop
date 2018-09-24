import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { ShopRoutingModule } from './shop-routing.module';

import { ProductsComponent } from './products/products.component';
import { ShopMenuComponent } from './shop-menu/shop-menu.component';

@NgModule({
  imports: [
    SharedModule,
    ShopRoutingModule
  ],
  declarations: [ProductsComponent, ShopMenuComponent]
})
export class ShopModule { }
