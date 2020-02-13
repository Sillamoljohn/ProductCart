import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CheckoutModalComponent } from '../checkout-modal/checkout-modal.component';
import { MatDialog } from '@angular/material/dialog';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  cards = [
    {
      "brandName": "Puma",
      "productName": "Shoes",
      "quantity": 2,
      "price": 5000,
      "mrf": 20,
      "productImage": "assets/Images/51cwB5iZ28L.jpg",
      "offerText": 20
    },
    {
      "brandName": "Nike",
      "productName": "Bags",
      "quantity": 1,
      "price": 2600,
      "mrf": 670,
      "productImage": "assets/Images/nikeBags.jpeg",
      "offerText": 40
    },
    {
      "brandName": "Adidas",
      "productName": "Jackets",
      "quantity": 1,
      "price": 3000,
      "mrf": 900,
      "productImage": "assets/Images/jacket.jpg",
      "offerText": 60
    },
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CheckoutModalComponent, {
      width: '250px',
    });
  }
  ngOnInit() {
  }

}
