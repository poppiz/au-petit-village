import { Component, Input } from '@angular/core';
import { ProductsInterface } from '../productsInterface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() productsInterface!: ProductsInterface;
}
