import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { CategoryService } from '../../core/services/category.service';
import { switchMap, take } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit, OnDestroy {
  productForm: FormGroup;
  productId: string;
  product = {};
  categories$;
  subscription: Subscription;
  loaded = false;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    this.categories$ = this.categoryService.getAll();
    this.createForm();
    this.subscription = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.productId = params.get('id');
        if (this.productId) {
          return this.productService.get(this.productId);
        } else {
          return of(null);
        }
      })
    ).subscribe(p => {
      if (p !== null) {
        this.product = p;
        this.productForm.patchValue({...this.product});
      }
      this.loaded = true;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  createForm() {
    this.productForm = this.fb.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(0)]],
      category: ['', [Validators.required]],
      imageUrl: ['', [Validators.required, Validators.pattern('(http(s?):)|([/|.|\\w|\\s])*\\.(?:jpg|gif|png|jpeg)')]],
      isBestseller: [false]

    });
  }

  save() {
    if (!this.productForm.valid) return;
    this.product = {...this.productForm.value};

    if (this.productId) {
      this.productService.update(this.productId, this.product);
    } else {
      this.productService.add(this.product);
    }

    this.router.navigate(['/admin/products']);
  }

  cancel() {
    this.router.navigate(['/admin/products']);
  }

  get title() {
    return this.productForm.get('title');
  }

  get price() {
    return this.productForm.get('price');
  }

  get imageUrl() {
    return this.productForm.get('imageUrl');
  }

  get category() {
    return this.productForm.get('category');
  }

  get isBestseller() {
    return this.productForm.get('isBestseller');
  }


}
