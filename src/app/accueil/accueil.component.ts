import { Component, inject } from '@angular/core';
import { ProductsInterface } from '../productsInterface';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {
  productsList: ProductsInterface[] = [];
  produitsService: ProduitsService = inject(ProduitsService);
  produits: any[] = [];
  searchtext: any;
  ProduitsService: any = [];

  constructor() {
    this.productsList = this.produitsService.getAllProducts();
  }

  ngOnInit(): void {
    this.produits = this.ProduitsService.produits;
  }

  public order = '';

  asc() {
    this.order = 'asc';
  }

  desc() {
    this.order = 'desc';
  }
}
