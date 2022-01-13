import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from '../product';
import { State, getShowProductCode, getCurrentProduct, getProducts, getError } from '../../state/slices/products';
import * as ProductActions from '../../state/slices/products/product.actions';

@Component({
  templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit {
  products$: Observable<Product[]>;
  selectedProduct$: Observable<Product>;
  displayCode$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(ProductActions.loadProducts());
    this.products$ = this.store.select(getProducts);
    this.selectedProduct$ = this.store.select(getCurrentProduct);
    this.displayCode$ = this.store.select(getShowProductCode);
    this.error$ = this.store.select(getError);
  }

  checkChanged(): void {
    this.store.dispatch(ProductActions.toggleProductCode());
  }

  newProduct(): void {
    this.store.dispatch(ProductActions.initCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(ProductActions.setCurrentProduct({ currentProductId: product.id }));
  }

  createProduct(product: Product): void {
    this.store.dispatch(ProductActions.createProduct({ product }));
  }

  updateProduct(product: Product): void {
    this.store.dispatch(ProductActions.updateProduct({ product }));
  }

  deleteProduct(product: Product): void {
    this.store.dispatch(ProductActions.deleteProduct({ productId: product.id }));
  }

  clearProduct(): void {
    this.store.dispatch(ProductActions.clearCurrentProduct());
  }
}
