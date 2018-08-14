import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';

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
    AuthFormComponent
  ],
  declarations: [AuthFormComponent],
  providers: [ AuthService]
})
export class SharedModule { }
