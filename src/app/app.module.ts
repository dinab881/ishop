import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

import { environment } from './../environments/environment';

/** Feature modules **/
import {CoreModule} from './core/core.module';
import {AuthModule} from './auth/auth.module';
import {AdminModule} from './admin/admin.module';
import {ShopModule} from './shop/shop.module';
import { BgImageDirective } from './shared/directives/bg-image.directive';


@NgModule({
  declarations: [
    AppComponent,
    BgImageDirective
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AuthModule,
    AdminModule,
    ShopModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
