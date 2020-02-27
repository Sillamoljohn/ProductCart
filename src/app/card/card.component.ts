import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() card;
  itemCount = 0;
  initialValue = 0;
  message = "Hola Mundo!";
  @Output() messageEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}


  onChangeOfData() {
    console.log(this.card);
    this.itemCount = this.card.quantity;
  }

  addItems() {
    this.itemCount++;
    this.messageEvent.emit(this.card);
  }

  reduceItems() {
    this.itemCount--;
  }

  addToCart() {
    this.card.quantity = this.itemCount;
    this.messageEvent.emit(this.card);
  }
}
