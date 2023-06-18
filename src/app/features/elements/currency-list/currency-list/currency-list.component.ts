import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-currency-list',
  templateUrl: 'currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {

  @Input() elementsNames: string[] = [];

  currencies: {
    name: string,
    currentRate: number,
    lastRate: number
  }[] = [];

  constructor() {
  }

  ngOnInit() {
    this.currencies = [];

    this.getCurrencies();

    setInterval(() => this.getCurrencies(), 5000)
  }

  getCurrencies(): void {
    let api_key = ""; //insertApiKey
    console.log('Hello! To make this program work you will need to initial an api_key in currency-list.component line 30' )
    let requestInfo = "http://api.exchangeratesapi.io/v1/latest?access_key="+api_key+"base=RUB";

    fetch(requestInfo)
      .then(response => response.json())
      .then(result => {
        for (let item = 0; item < this.elementsNames.length; item++) {
          if (this.currentPosition(this.elementsNames[item]) === -1) {
            let currency = { name: "", currentRate: 0, lastRate: 0};
            currency.name = this.elementsNames[item];
            currency.lastRate = result.rates[currency.name];
            currency.currentRate = result.rates[currency.name];
            this.currencies.push(currency);
          } else {
            let idx = this.currentPosition(this.elementsNames[item]);
            this.currencies[idx].lastRate = this.currencies[idx].currentRate;
            this.currencies[idx].currentRate = result.rates[this.elementsNames[item]];
          }
        }
      })
      .catch(error => console.log('error', error));
  }

  currentPosition(name: string): number {
    let pos = this.currencies.findIndex(e => e.name === name);
    return pos;
  }
}
