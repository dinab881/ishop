import {Component, OnInit, OnDestroy} from '@angular/core';
import {Product} from '../../shared/models/product.model';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProductService} from '../../shared/services/product.service';
import {switchMap} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  categoryKey: string;
  categoryProducts: Product[] = [];
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
  }

  ngOnInit() {

    this.subscription = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.categoryKey = params.get('category');
        return this.productService.getAll();
      })
    ).subscribe(products => {
      this.products = products;
      this.categoryProducts = (this.categoryKey) ?
        this.products.filter(p => p.category === this.categoryKey) :
        this.products;
    });

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
