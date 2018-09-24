import {NgModule} from '@angular/core';
/*import {CommonModule} from '@angular/common';*/
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {SharedModule} from '../shared/shared.module';
import {CoreRoutingModule} from './core-routing.module';

import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  imports: [
    /*CommonModule,*/
    SharedModule,
    NgbModule.forRoot(),
    CoreRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ]
})
export class CoreModule {
}
