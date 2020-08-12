import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvocesComponent } from './invoces/invoces.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';



@NgModule({
  declarations: [InvocesComponent, NewInvoiceComponent],
  imports: [
    CommonModule
  ]
})
export class InvoicesModule { }
