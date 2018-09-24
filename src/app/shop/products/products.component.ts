import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  private categoryProducts: Product[] = [];
  private subscription: Subscription;
  pagedProducts: Product[] = [];
  categoryKey: string;
  total = 0;
  page = 1;
  limit = 4;
  pagesToShow = 3;
  loaded = false;


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
      this.categoryProducts = (this.categoryKey) ?
        products.filter(p => p.category === this.categoryKey) : products;
      this.total = this.categoryProducts.length;
      this.loaded = true;
      this.getPagedProducts();
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getPagedProducts() {
    const startIndex = (this.page - 1) * this.limit;
    const endIndex = Math.min(startIndex + this.limit - 1, this.total - 1);
    this.pagedProducts = this.categoryProducts.slice(startIndex, endIndex + 1);
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
