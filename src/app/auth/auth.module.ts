import { NgModule } from '@angular/core';
/*import { CommonModule } from '@angular/common';*/


import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
   /* CommonModule,*/
    SharedModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AuthRoutingModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
