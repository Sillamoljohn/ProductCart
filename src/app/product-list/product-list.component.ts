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
  cards = [
    {
      id: 101,
      brandName: "Puma",
      productName: "Shoes",
      quantity: 0,
      price: 5000,
      mrf: 20,
      productImage: "assets/Images/51cwB5iZ28L.jpg",
      offerText: 20
    },
    {
      id: 102,
      brandName: "Nike",
      productName: "Bags",
      quantity: 0,
      price: 2600,
      mrf: 670,
      productImage: "assets/Images/nikeBags.jpeg",
      offerText: 40
    },
    {
      id: 103,
      brandName: "Adidas",
      productName: "Jackets",
      quantity: 0,
      price: 3000,
      mrf: 900,
      productImage: "assets/Images/jacket.jpg",
      offerText: 60
    }
  ];
  totalCount = 0;
  totalPrice = 0;
  message: string;
  name;
  brandImage;
  productCount;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  receiveMessage(event) {
    this.message = event;
    console.log("event", event);
    console.log("cards", this.cards);
    this.calculateTotalProductPrice();
  }

  calculateTotalProductPrice() {
    this.totalPrice = 0;
    this.totalCount = 0;

    this.cards.forEach(ele => {
      this.totalPrice += ele.price * ele.quantity;
      this.totalCount += ele.quantity;
    });
  }

  openDialog() {
    console.log(this.cards);
    // this.cards.forEach(ele => {
    //   if(ele.quantity > 0) {
    //     this.name = ele.productName;
    //     this.brandImage = ele.productImage;
    //     this.productCount = ele.quantity;
    //     this.totalCount += ele.quantity;
    //     this.totalPrice += ele.price * ele.quantity;
    //   }
   
    // });
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.cards,
    this.totalPrice = this.totalPrice,
    this.dialog.open(CheckoutModalComponent, dialogConfig);
  }
}
