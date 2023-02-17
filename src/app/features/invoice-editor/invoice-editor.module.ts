import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceEditorRoutingModule } from './invoice-editor-routing.module';
import { InvoiceEditorComponent } from './invoice-editor.component';


@NgModule({
  declarations: [
    InvoiceEditorComponent
  ],
  imports: [
    CommonModule,
    InvoiceEditorRoutingModule
  ]
})
export class InvoiceEditorModule { }
