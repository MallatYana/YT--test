import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-currency-list',
  templateUrl: 'currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {

  @Input() elementsNames: string[] = [];
  currency!: {
    name: string;
    currentRate: number;
    lastRate: number;
  }

  currencies?: object[];

  constructor() {
  }

  ngOnInit() {

    const myHeaders = new Headers();
    myHeaders.append("apikey", "uybpDNpkgvuGuQ7nET0rU4V6d5RmgYuC");

    let requestInfo = "https://api.apilayer.com/currency_data/live?source=RUB&currencies=";
    for (let item = 0; item < this.elementsNames.length; item++) {
      requestInfo += "%2C%20"+this.elementsNames[item];
    }

    const requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    fetch(requestInfo, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        for (let item = 0; item < this.elementsNames.length; item++) {
          this.currency.name = this.elementsNames[item];
          this.currency.currentRate = result.quotes;
        }
        //this.currentCurrencyRate = result.quotes.RUBUSD;
      })
      .catch(error => console.log('error', error));

  }


}
