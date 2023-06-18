import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'currency-app';
  elementsNames: string[] = [];
  ngOnInit() {
    this.elementsNames = ['USD', 'EUR', 'GBP'];
  }

  listChanged(currency: string): void {
    this.elementsNames.push(currency);
  }
}


