import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../../models/product.model';
import {Observable} from 'rxjs';
import {ProductService} from '../../services/product.service';
import {map, take} from 'rxjs/operators';

@Component({
  selector: 'best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss']
})
export class BestSellersComponent implements OnInit {
  products$: Observable<Product[]>;
  @Input() limit: number;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products$ = this.productService.getAll().pipe(
      map(products => products.filter(p => p.isBestseller === true)),
      map(x => x.slice(0, 3)),
      take(this.limit));
  }

}
