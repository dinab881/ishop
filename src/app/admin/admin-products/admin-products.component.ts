import {Component, OnInit, OnDestroy} from '@angular/core';
import {Product} from '../../shared/models/product.model';
import {ProductService} from '../../shared/services/product.service';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products: Product[];
  subscription: Subscription;
  searchProducts: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.subscription = this.productService.getAll().subscribe(
      (products) => {
        this.searchProducts = this.products = products;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  filter(word: string) {
    this.searchProducts = (word) ?
      this.products.filter(p => p.title.toLowerCase().includes(word.toLocaleLowerCase())) :
      this.products;

  }

}
