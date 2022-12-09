import { Component, OnInit } from '@angular/core';
import { PurchaseDetailService } from 'src/app/shared/purchase-detail.service';
import { NgForm } from '@angular/forms';
import { Purchase } from 'src/app/shared/purchase.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-purchase-detail-form',
  templateUrl: './purchase-detail-form.component.html',
  styleUrls: ['./purchase-detail-form.component.css'],
})
export class PurchaseDetailFormComponent implements OnInit {
  date: string = new Date().toLocaleDateString('en-CA');
  constructor(
    public service: PurchaseDetailService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.service.refreshPurchaseType();
    
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.id == '') {
      this.insertPurchase(form);
    } else {
      this.updatePurchase(form);
    }
  }

  insertPurchase(form: NgForm) {
    console.log(form);
    this.service.postPurchase().subscribe(
      (res) => {
        this.resetForm(form);
        this.toastr.success(
          'Purchase Submitted Successfully',
          'Purchase Register'
        );
        this.service.refreshPurchases();
        console.log('success!');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updatePurchase(form: NgForm) {
    this.service.putPurchase().subscribe(
      (res) => {
        this.resetForm(form);
        this.toastr.info('Purchase Updated Successfully', 'Purchase Register');
        this.service.refreshPurchases();
        console.log('success!');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Purchase();
  }
}
