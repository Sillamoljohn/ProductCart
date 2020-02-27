import { CheckoutModalComponent } from "./../../checkout-modal/checkout-modal.component";
import { Injectable, Inject } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
@Injectable({
  providedIn: "root"
})
export class DataSharingService {

  private productIdSource = new Subject<any>();

  productId = this.productIdSource.asObservable();

  constructor() {}


  updateProductId(data: any) {
    console.log(data);
    this.productIdSource.next(data);
  }


 
}
