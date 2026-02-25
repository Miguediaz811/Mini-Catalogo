import { Component, } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'miniCatalogo';

  products: Product[] = [];


  addProduct(product: Product) {
    this.products.push(product);
  }

  deleteProduct (id: number) {
        this.products = this.products.filter(p => p.id !== id);
        console.log('Se elimino el producto ' + id);
  }

  get total(): number {
        return this.products.reduce((sum, product) => sum + product.price, 0);
    }

    priceMax: number = 0;

    get filterProducts(): Product[] {
      if (!this.priceMax || this.priceMax <= 0) {
        return this.products;
      }
      return this.products.filter(p => p.price <= this.priceMax);
    }

  orderAsc() {
    this.products = [...this.products].sort((a, b) => a.price - b.price);
  }

  orderDesc() {
    this.products = [...this.products].sort((a, b) => b.price - a.price);
  }
}
