import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() card;
  itemCount = 0;
  initialValue = 0;
  message= "Hola Mundo!"
  @Output() messageEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    // console.log(this.card)
  }
  addItems() {
    this.itemCount++;
    console.log(this.card.quantity);
    // console.log(this.messageEvent.emit(this.message));

    console.log(this.card);

  }

  reduceItems() {
    this.itemCount--;
    console.log(this.card.quantity);
  }

  addToCart() {
    this.card.quantity = this.itemCount;
    this.messageEvent.emit(this.card);
    // console.log(this.card);
  }
}
