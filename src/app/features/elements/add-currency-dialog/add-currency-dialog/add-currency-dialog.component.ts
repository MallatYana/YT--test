import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'add-currency-dialog',
  templateUrl: './add-currency-dialog.component.html',
  styleUrls: ['./add-currency-dialog.component.scss']
})
export class AddCurrencyDialogComponent {

  loading = true;
  addCurrencyNames!: string[];

  @Output() nameUsed = new EventEmitter<string>();

  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: any,
    public dialogRef: MatDialogRef<AddCurrencyDialogComponent>) {
    if (data) {
      this.addCurrencyNames = data.addCurrencyNames;
      console.log(this.addCurrencyNames)
    }
  }

  addCurrency(name: string) {
    this.addCurrencyNames = this.addCurrencyNames.filter(n => n !== name);
    this.nameUsed.emit(name);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
