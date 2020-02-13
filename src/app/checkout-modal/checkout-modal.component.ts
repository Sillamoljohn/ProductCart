import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductListComponent } from '../product-list/product-list.component';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-checkout-modal',
  templateUrl: './checkout-modal.component.html',
  styleUrls: ['./checkout-modal.component.scss']
})
export class CheckoutModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CheckoutModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
