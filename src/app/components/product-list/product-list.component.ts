  import { Component, Output, Input, EventEmitter } from '@angular/core';
  import { Product } from '../../product';

  @Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss'
  })
  export class ProductListComponent {
    @Input() products: Product[] = [];
    @Output() productDelete = new EventEmitter<number>();

    deleteProduct(id: number) {
      this.productDelete.emit(id);
      console.log('se elimino el producto ', id);
    }
  }
