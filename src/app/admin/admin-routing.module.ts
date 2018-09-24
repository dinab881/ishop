import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { ProductFormComponent } from './product-form/product-form.component';


const routes: Routes = [
  {
  path: '',
  children: [
      { path: 'products',
        component: AdminProductsComponent
      },
      { path: 'products/new',
        component: ProductFormComponent
      },
      { path: 'products/:id',
        component: ProductFormComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
