import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {urlValidator} from '../../shared/validators/url.validator';
import {minNumberValidator} from '../../shared/validators/min-number.validator';
import {Router, ActivatedRoute} from '@angular/router';
import {ProductService} from '../../shared/services/product.service';
import {CategoryService} from '../../shared/services/category.service';
import {Product} from '../../shared/models/product.model';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId: string;
  product = {};
  categories$;


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
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.productService.get(this.productId).pipe(take(1)).subscribe(p => {
        this.product = p;
        this.productForm.patchValue({ ...this.product });

      });
    }
  }

  createForm() {
    this.productForm = this.fb.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required, minNumberValidator(0)]],
      category: ['', [Validators.required]],
      imageUrl: ['', [Validators.required, Validators.pattern('(http(s?):)([\/|.|\\w|\\s|-])*\\.(?:jpg|gif|png|jpeg)')]],
      isBestseller: [false]

    });
  }

  save() {

    if (!this.productForm.valid) return;

      this.product = this.productForm.value;

      if (this.productId) {
        this.productService.update(this.productId, this.product);
      } else {
        this.productService.add(this.product);
      }

      this.router.navigate(['/admin/products']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product?')) return;

    this.productService.delete(this.productId);
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
