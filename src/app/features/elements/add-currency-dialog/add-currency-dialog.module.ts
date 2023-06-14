import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCurrencyDialogComponent } from "./add-currency-dialog/add-currency-dialog.component";

import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from "@angular/material/icon";


@NgModule({
  declarations: [AddCurrencyDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  exports: [
    AddCurrencyDialogComponent,
  ],
  entryComponents: [
    AddCurrencyDialogComponent
  ]
})
export class AddCurrencyDialogModule { }
