import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsInterface } from '../productsInterface';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  produitService = inject(ProduitsService);
  productsInterface: ProductsInterface | undefined;
  productId = -1;

  constructor() {
    const productId = Number(this.route.snapshot.params['id']);
    this.productsInterface = this.produitService.getProductById(productId);
  }
}
