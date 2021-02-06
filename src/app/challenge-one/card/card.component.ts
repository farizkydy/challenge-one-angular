import { Component, OnInit } from '@angular/core';
import { isTemplateExpression } from 'typescript';
import { CARD_DATA, PRICE_DATA } from './card.data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  data = CARD_DATA
  cards = PRICE_DATA
  total = 0
  messages = ""
  change = ""
  constructor() {
    
   }

  ngOnInit(): void {
  }
  addToCart(item: any) {
    this.cards.push({
      name: item.title,
      price: item.price,
    })
    this.total = this.total + item.price
    
  }

  buy() {
    if (this.total > 1000) {
      this.messages = "You can not buy"
    } else {
      this.messages = "transaction success"
    }
  }


}
