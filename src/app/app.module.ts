import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PurchaseDetailsComponent } from './purchase-details/purchase-details.component';
import { PurchaseDetailFormComponent } from './purchase-details/purchase-detail-form/purchase-detail-form.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FindPurchaseTypePipe } from './shared/find-purchase-type.pipe';




@NgModule({
  declarations: [
    AppComponent,
    PurchaseDetailsComponent,
    PurchaseDetailFormComponent,
    FindPurchaseTypePipe,
  ],
  imports: [
    BrowserModule,

    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
  ],
  // imports: [BrowserModule, FontAwesomeModule, FormsModule, HttpClientModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(){
  }
}
