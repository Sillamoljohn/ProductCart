import { DataSharingService } from "./../shared/service/data-sharing.service";
import { ProductService } from "./../product.service";
import { Component, OnInit, ViewChild } from "@angular/core";
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
  CardDetails = [];
  searchText: string = null;
  @ViewChild('cardCheld') cardCompo: CardComponent;

  constructor(
    public dialog: MatDialog,
    private productService: ProductService,
    private dataSharingService: DataSharingService
  ) {}


  ngOnInit() {
    this.getProductList();
    // this.getUpdatedCount();

    console.log(this.totalCount);

    this.dataSharingService.productId.subscribe((data) => {
      console.log('CardDetails', data, this.CardDetails);
      const productIndex =  this.CardDetails.indexOf(data);
      const x =  this.CardDetails;
      x[productIndex].quantity  = 0;
      this.CardDetails = x;
      this.calculateTotalProductPrice();
      this.cardCompo.onChangeOfData();
    });

  }

  receiveMessage(event) {
    this.message = event;
    // console.log("event", event);
    console.log("cards", this.CardDetails);
    this.calculateTotalProductPrice();
  }


  getUpdatedCount() {
    console.log(this.totalCount);
    this.dataSharingService.productId.subscribe((data) => {
      console.log('CardDetails', data, this.CardDetails);
      const productIndex =  this.CardDetails.indexOf(data);
      const x =  this.CardDetails;
      x[productIndex].quantity  = 0;
      this.CardDetails = x;
      this.calculateTotalProductPrice();
    });
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
      (this.totalCount = this.totalCount),
      this.dialog.open(CheckoutModalComponent, dialogConfig);
  }


  getProductList = () => {
    this.productService.getProductDetails().subscribe((res: any) => {
      if (res.status === 200) {
        this.CardDetails = res.body.data;
        console.log("CardDetails", this.CardDetails);
      }
    });
  }

}
