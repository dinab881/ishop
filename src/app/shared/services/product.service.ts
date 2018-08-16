import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {Product} from '../models/product.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  add(product) {
    return this.db.list('/products').push(product);
  }

  /*getAll() {
    return this.db.list('products').valueChanges();
  }*/

  getAll() {
    return this.db.list<Product>('products').snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      )
    );
  }

  get(productId) {
    return this.db.object('/products/' + productId).valueChanges();
  }

  update(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId) {
    return this.db.object('/products/' + productId).remove();
  }
}
