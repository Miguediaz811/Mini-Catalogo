import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from '../../product';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  name = '';
  price = 0;

  @Output() productCreated = new EventEmitter<Product>();

  agregar() {
    const nuevoProducto: Product = {
      id: Date.now(),
      name: this.name,
      price: this.price
    };

    console.log('emitiendo producto:', nuevoProducto);
    
    this.productCreated.emit(nuevoProducto)

    this.name = '';
    this.price = 0;
  }
}
