import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CurrencyItemComponent } from "./currency-item/currency-item.component";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [CurrencyItemComponent],
  exports: [CurrencyItemComponent],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class CurrencyItemModule { }
