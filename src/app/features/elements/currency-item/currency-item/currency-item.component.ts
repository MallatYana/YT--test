import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-item',
  templateUrl: 'currency-item.component.html',
  styleUrls: ['./currency-item.component.scss']
})
export class CurrencyItemComponent implements OnInit {

  @Input() currency?: any;
  currentDif!: number;

  constructor() {
  }

  ngOnInit() {
    this.currentDif = this.currency.currentRate - this.currency.lastRate;
  }

}
