import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import {  RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselItemDirective} from './carousel/carousel-item.directive';
import {CarouselItemElementDirective} from './carousel/carousel-item-element.directive';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
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
    BreadcrumbsComponent,
    BestSellersComponent,
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElementDirective,
    ReactiveFormsModule,
    FormsModule

  ],
  declarations: [
    AuthFormComponent,
    ProductCardComponent,
    BreadcrumbsComponent,
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElementDirective,
    BestSellersComponent
  ],
  providers: [ AuthService]
})
export class SharedModule { }
