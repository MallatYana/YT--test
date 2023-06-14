import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { AppComponent } from './app.component';
import { TitleModule } from "./features/elements/title/title.module";
import {CurrencyItemModule} from "./features/elements/currency-item/currency-item.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CurrencyListModule} from "./features/elements/currency-list/currency-list.module";
import { MatDialogModule } from "@angular/material/dialog";
import { AddCurrencyDialogModule} from "./features/elements/add-currency-dialog/add-currency-dialog.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        CommonModule,
        TitleModule,
        CurrencyItemModule,
        BrowserAnimationsModule,
        CurrencyListModule,
        MatDialogModule,
        AddCurrencyDialogModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
