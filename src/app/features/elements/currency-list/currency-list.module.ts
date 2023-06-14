import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CurrencyListComponent} from "./currency-list/currency-list.component";
import {CurrencyItemModule} from "../currency-item/currency-item.module";

@NgModule({
  declarations: [CurrencyListComponent],
  exports: [CurrencyListComponent],
  imports: [
    CommonModule,
    CurrencyItemModule
  ]
})
export class CurrencyListModule { }
