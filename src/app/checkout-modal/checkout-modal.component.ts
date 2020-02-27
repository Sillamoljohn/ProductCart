import { DataSharingService } from './../shared/service/data-sharing.service';
import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ProductListComponent } from "../product-list/product-list.component";
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: "app-checkout-modal",
  templateUrl: "./checkout-modal.component.html",
  styleUrls: ["./checkout-modal.component.scss"]
})
export class CheckoutModalComponent implements OnInit {
  totalprice = 0;
  totalCount = 0;
  newArray;
  constructor(
    public dialogRef: MatDialogRef<CheckoutModalComponent>,
    private dataSharingService: DataSharingService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.newArray = [...data];
    console.log(this.newArray);
    this.newArray.forEach(ele => {
      this.totalprice += ele.price * ele.quantity;
      this.totalCount += ele.quantity;

    });
  }
  onNoClick(): void {
    this.dialogRef.close();

  }
  ngOnInit() {
    // console.log(this.data);
  }
  remove(index) {
    const product = this.newArray[index];
    this.totalprice = this.totalprice - (product.price * product.quantity);
    this.totalCount =  this.totalCount - product.quantity;
    this.newArray.splice(index, 1);
    this.dataSharingService.updateProductId(product);

  }
}
