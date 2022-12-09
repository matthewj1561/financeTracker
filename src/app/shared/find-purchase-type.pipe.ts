import { Injector, Pipe, PipeTransform } from '@angular/core';
import { PurchaseType } from './purchaseType.model';
import { PurchaseDetailService } from './purchase-detail.service';

@Pipe({
  name: 'findPurchaseType',
})
export class FindPurchaseTypePipe implements PipeTransform {
  public constructor(public service: PurchaseDetailService,) {}

  transform(value: Array<PurchaseType>, purchaseId: any): any {

    for (let purchaseType of value) {
      if (purchaseType.id == purchaseId) {
        return purchaseType.typeName;
      }
    }
    return 'Not Found';
  }
}
