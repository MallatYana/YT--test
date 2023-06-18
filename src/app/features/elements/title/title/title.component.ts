import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddCurrencyDialogComponent} from "../../add-currency-dialog/add-currency-dialog/add-currency-dialog.component";

@Component({
  selector: 'app-title',
  templateUrl: 'title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  @Input() elementsNames: string[] = [];
  @Output() elementUsed: EventEmitter<string> = new EventEmitter();

  currentData : Date = new Date();
  usedName!: string;

  addCurrencyDialog: MatDialogRef<AddCurrencyDialogComponent> | undefined;
  constructor(
    private dialog: MatDialog
  ) { }


  openAddCurrencyDialog() {
    const allCurrencyNames = ['USD', 'EUR', 'GBP', 'JPY', 'CNY', 'TRY'];
    const addCurrencyNames = allCurrencyNames.filter(n => this.elementsNames.indexOf(n) === -1)

     this.addCurrencyDialog = this.dialog.open(AddCurrencyDialogComponent, {
      data: {
        addCurrencyNames: addCurrencyNames
      }
     });

    this.addCurrencyDialog.afterClosed().subscribe(result => {
      this.usedName = result;
      this.elementUsed.emit(this.usedName);
    });
  }

  //i know it could be done without title component at all, but i wanted to use output even once
}

