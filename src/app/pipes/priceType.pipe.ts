import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceTypeName'
})
export class PriceTypePipe implements PipeTransform {
  transform(priceType: string): any {
    switch (priceType) {
      case 'printPrice':
        return 'print';
      case 'digitalPurchasePrice':
        return 'digital';
      default:
        return 'other';
    }
  }
}
