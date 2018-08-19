import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import { ProductCardComponent } from './components/product-card/product-card.component';

import {  RouterModule } from '@angular/router';



import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    NgbModule.forRoot()
  ],
  exports: [
    CommonModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot().ngModule,
    RouterModule,
    AuthFormComponent,
    ProductCardComponent,

    BestSellersComponent,
    PaginationComponent,
    ReactiveFormsModule,
    FormsModule

  ],
  declarations: [
    AuthFormComponent,
    ProductCardComponent,

    BestSellersComponent,
    PaginationComponent
  ],
  providers: [ AuthService]
})
export class SharedModule { }
