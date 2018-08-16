import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import { ProductCardComponent } from './components/product-card/product-card.component';


@NgModule({
  imports: [
    CommonModule,
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
    AuthFormComponent,
    ProductCardComponent,
    ReactiveFormsModule,
    FormsModule

  ],
  declarations: [AuthFormComponent, ProductCardComponent],
  providers: [ AuthService]
})
export class SharedModule { }
