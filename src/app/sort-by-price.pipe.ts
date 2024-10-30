import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
})
export class SortByPricePipe implements PipeTransform {
  transform(produits: any[], order: string = ''): any[] {
    if (!produits) return [];
    return produits.sort((a: any, b: any) => {
      if (order === 'asc') {
        return a.price < b.price ? -1 : 1;
      } else {
        return b.price < a.price ? -1 : 1;
      }
    });
  }
}
