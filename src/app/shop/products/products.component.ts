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
  pagedProducts: Product[] = [];
  subscription: Subscription;
  total = 0;
  page = 1;
  limit = 2;



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
      this.total = this.categoryProducts.length;
      console.log('total', this.total);
      this.getPagedProducts();
    });

  }
  getPagedProducts(){
    const startIndex = (this.page - 1) * this.limit;
    const endIndex = Math.min(startIndex + this.limit - 1, this.total - 1);
    console.log(startIndex);
    console.log(endIndex);

    this.pagedProducts = this.categoryProducts.slice(startIndex, endIndex + 1);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goToPage(n: number): void {
    this.page = n;
    this.getPagedProducts();

  }

  onNext(): void {
    this.page++;
    this.getPagedProducts();
  }

  onPrev(): void {
    this.page--;
    this.getPagedProducts();
  }

}
