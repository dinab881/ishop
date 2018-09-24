import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AuthFormComponent} from './components/auth-form/auth-form.component';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {BestSellersComponent} from './components/best-sellers/best-sellers.component';
import {PaginationComponent} from './components/pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AuthFormComponent,
    ProductCardComponent,
    BestSellersComponent,
    PaginationComponent,
  ],
  declarations: [
    AuthFormComponent,
    ProductCardComponent,
    BestSellersComponent,
    PaginationComponent
  ]
})
export class SharedModule {
}
