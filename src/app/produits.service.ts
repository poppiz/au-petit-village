import { Injectable } from '@angular/core';
import { ProductsInterface } from './productsInterface';

@Injectable({
  providedIn: 'root',
})
export class ProduitsService {
  protected productsList: ProductsInterface[] = [
    {
      id: 1,
      name: 'astérix',
      image: '../../asset/images/astérix.jpg',
      description:
        'Figurine faite a la main du célébre Astérix. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat tortor vitae convallis posuere. Fusce auctor felis sit amet massa consectetur, quis maximus ex congue. In volutpat elit magna, a finibus magna consectetur a. Ut non pulvinar mi. Aliquam tempor sem sed ullamcorper suscipit. Integer fermentum venenatis sem nec rutrum. Ut tempus vehicula ex, ac blandit neque mollis non. Cras ac erat id nulla commodo sagittis at in leo. Phasellus bibendum condimentum dapibus. Aliquam sed quam tincidunt elit viverra bibendum id sit amet nisi. Etiam nisi libero, mollis et molestie ut, iaculis quis odio. Curabitur lacinia dignissim commodo. Donec sed.',
      price: '49, 95',
    },

    {
      id: 2,
      name: 'obelix',
      image: '../../asset/images/obelix.jpg',
      description:
        'Figurine faite a la main du célébre Obelix. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat tortor vitae convallis posuere. Fusce auctor felis sit amet massa consectetur, quis maximus ex congue. In volutpat elit magna, a finibus magna consectetur a. Ut non pulvinar mi. Aliquam tempor sem sed ullamcorper suscipit. Integer fermentum venenatis sem nec rutrum. Ut tempus vehicula ex, ac blandit neque mollis non. Cras ac erat id nulla commodo sagittis at in leo. Phasellus bibendum condimentum dapibus. Aliquam sed quam tincidunt elit viverra bibendum id sit amet nisi. Etiam nisi libero, mollis et molestie ut, iaculis quis odio. Curabitur lacinia dignissim commodo. Donec sed.',
      price: '34, 95',
    },

    {
      id: 3,
      name: 'amonbofis',
      image: '../../asset/images/amonbofis.jpg',
      description:
        'Figurine faite a la main du célébre Amonbofice. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat tortor vitae convallis posuere. Fusce auctor felis sit amet massa consectetur, quis maximus ex congue. In volutpat elit magna, a finibus magna consectetur a. Ut non pulvinar mi. Aliquam tempor sem sed ullamcorper suscipit. Integer fermentum venenatis sem nec rutrum. Ut tempus vehicula ex, ac blandit neque mollis non. Cras ac erat id nulla commodo sagittis at in leo. Phasellus bibendum condimentum dapibus. Aliquam sed quam tincidunt elit viverra bibendum id sit amet nisi. Etiam nisi libero, mollis et molestie ut, iaculis quis odio. Curabitur lacinia dignissim commodo. Donec sed.',
      price: '29, 95',
    },

    {
      id: 4,
      name: 'idefix',
      image: '../../asset/images/idefix.jpg',
      description:
        'Figurine faite a la main du célébre idéfixe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat tortor vitae convallis posuere. Fusce auctor felis sit amet massa consectetur, quis maximus ex congue. In volutpat elit magna, a finibus magna consectetur a. Ut non pulvinar mi. Aliquam tempor sem sed ullamcorper suscipit. Integer fermentum venenatis sem nec rutrum. Ut tempus vehicula ex, ac blandit neque mollis non. Cras ac erat id nulla commodo sagittis at in leo. Phasellus bibendum condimentum dapibus. Aliquam sed quam tincidunt elit viverra bibendum id sit amet nisi. Etiam nisi libero, mollis et molestie ut, iaculis quis odio. Curabitur lacinia dignissim commodo. Donec sed.',
      price: '19, 95',
    },

    {
      id: 5,
      name: 'panoramix',
      image: '../../asset/images/panoramix.jpg',
      description:
        'Figurine faite a la main du célébre panoramix. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat tortor vitae convallis posuere. Fusce auctor felis sit amet massa consectetur, quis maximus ex congue. In volutpat elit magna, a finibus magna consectetur a. Ut non pulvinar mi. Aliquam tempor sem sed ullamcorper suscipit. Integer fermentum venenatis sem nec rutrum. Ut tempus vehicula ex, ac blandit neque mollis non. Cras ac erat id nulla commodo sagittis at in leo. Phasellus bibendum condimentum dapibus. Aliquam sed quam tincidunt elit viverra bibendum id sit amet nisi. Etiam nisi libero, mollis et molestie ut, iaculis quis odio. Curabitur lacinia dignissim commodo. Donec sed.',
      price: '39, 95',
    },

    {
      id: 6,
      name: 'numerobis',
      image: '../../asset/images/numerobis.jpg',
      description:
        'Figurine faite a la main du célébre numerobis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat tortor vitae convallis posuere. Fusce auctor felis sit amet massa consectetur, quis maximus ex congue. In volutpat elit magna, a finibus magna consectetur a. Ut non pulvinar mi. Aliquam tempor sem sed ullamcorper suscipit. Integer fermentum venenatis sem nec rutrum. Ut tempus vehicula ex, ac blandit neque mollis non. Cras ac erat id nulla commodo sagittis at in leo. Phasellus bibendum condimentum dapibus. Aliquam sed quam tincidunt elit viverra bibendum id sit amet nisi. Etiam nisi libero, mollis et molestie ut, iaculis quis odio. Curabitur lacinia dignissim commodo. Donec sed.',
      price: '29, 95',
    },
  ];

  constructor() {}

  getAllProducts(): ProductsInterface[] {
    return this.productsList;
  }
  getProductById(id: number): ProductsInterface | undefined {
    return this.productsList.find(
      (productsInterface) => productsInterface.id === id
    );
  }
}
