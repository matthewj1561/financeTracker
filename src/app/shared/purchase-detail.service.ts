import { Injectable } from '@angular/core';
import { Purchase } from './purchase.model';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { PurchaseType } from './purchaseType.model';

@Injectable({
  providedIn: 'root',
})
export class PurchaseDetailService {
  formData: Purchase = new Purchase();
  purchaseTypes: PurchaseType[] = [];
  purchases: Purchase[];
  readonly baseURL = 'https://localhost:7004/api/Purchases';
  readonly purchaseTypeURL = 'https://localhost:7004/api/PurchaseType';

  constructor(private http: HttpClient) {}

  postPurchase() {
    return this.http.post(this.baseURL, this.formData);
  }

  putPurchase() {
    return this.http.put(`${this.baseURL}/${this.formData.id}`, this.formData);
  }

  deletePurchase(id: string) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshPurchases() {
    this.http
      .get(this.baseURL)
      .toPromise()
      .then((res) => {
        this.purchases = res as Purchase[];
      });
  }

  refreshPurchaseType() {
    this.http
      .get(this.purchaseTypeURL)
      .toPromise()
      .then((res) => {
        this.purchaseTypes = res as PurchaseType[];
      });
  }
}
