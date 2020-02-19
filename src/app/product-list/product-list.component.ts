import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { CardComponent } from "../card/card.component";
import { CheckoutModalComponent } from "../checkout-modal/checkout-modal.component";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {

  totalCount = 0;
  totalPrice = 0;
  message: string;
  name;
  brandImage;
  productCount;
  CardDetails;

  constructor(
    public dialog: MatDialog,
    private ProductService: ProductService
  ) {}

  ngOnInit() {
    this.getProductList();
  }
  receiveMessage(event) {
    this.message = event;
    // console.log("event", event);
    // console.log("cards", this.CardDetails);
    this.calculateTotalProductPrice();
  }

  calculateTotalProductPrice() {
    this.totalPrice = 0;
    this.totalCount = 0;

    this.CardDetails.forEach(ele => {
      this.totalPrice += ele.price * ele.quantity;
      this.totalCount += ele.quantity;
    });
  }

  openDialog() {
    console.log(this.CardDetails);
    const dialogConfig = new MatDialogConfig();
    (dialogConfig.data = this.CardDetails),
      (this.totalPrice = this.totalPrice),
      this.dialog.open(CheckoutModalComponent, dialogConfig);
  }
  getProductList = () => {
    this.ProductService.getProductDetails().subscribe((res: any) => {
      if (res.status === 200) {
        this.CardDetails = res.body.data;
        console.log('CardDetails', this.CardDetails);
      }
    });
  }
}
