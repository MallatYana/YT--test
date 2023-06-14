import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TitleComponent } from "./title/title.component";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  declarations: [TitleComponent],
  exports: [TitleComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class TitleModule { }
