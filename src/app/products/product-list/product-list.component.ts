import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';

  @Input() products: Product[];
  @Input() selectedProduct: Product;
  @Input() displayCode: boolean;
  @Input() error: string;
  @Output() displayCodeChanged = new EventEmitter<void>();
  @Output() initializeNewProduct = new EventEmitter<void>();
  @Output() productWasSelected = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {}

  checkChanged(): void {
    this.displayCodeChanged.emit();
  }

  newProduct(): void {
    this.initializeNewProduct.emit();
  }

  productSelected(product: Product): void {
    this.productWasSelected.emit(product);
  }

}
