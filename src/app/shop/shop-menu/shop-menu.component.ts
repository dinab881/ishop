import { Component, OnInit, Input } from '@angular/core';
import {CategoryService} from '../../core/services/category.service';

@Component({
  selector: 'shop-menu',
  templateUrl: './shop-menu.component.html',
  styleUrls: ['./shop-menu.component.scss']
})
export class ShopMenuComponent implements OnInit {

  categories$;
  @Input('category') category;

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categories$ = this.categoryService.getAll();
  }

}
