import { Component, OnInit } from '@angular/core';
import { PurchaseDetailService } from '../shared/purchase-detail.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Purchase } from 'src/app/shared/purchase.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-purchase-details',
  templateUrl: './purchase-details.component.html',
  styleUrls: ['./purchase-details.component.css'],
})
export class PurchaseDetailsComponent implements OnInit {
  faTrash = faTrash;

  constructor(
    public service: PurchaseDetailService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.service.refreshPurchases();
  }

  populateForm(selectedPurchase: Purchase) {
    this.service.formData = Object.assign({}, selectedPurchase);
  }

  onDelete(id: string) {
    if (confirm('Are you sure you want to delete this purchase?')) {
      this.service.deletePurchase(id).subscribe(
        (res) => {
          this.service.refreshPurchases();
          this.toastr.error('Deleted successfully', 'Purchase Register');
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
