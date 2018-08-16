import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'is-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: Product;
  @Input('display-buttons') displayButtons = true;

  constructor() { }

  ngOnInit() {
  }

}
