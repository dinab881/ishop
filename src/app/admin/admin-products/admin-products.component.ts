import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html'
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  private products: Product[];
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

  delete(productId) {
    if (!confirm('Are you sure you want to delete this product?')) {
      return;
    }
    this.productService.delete(productId);
  }

}
