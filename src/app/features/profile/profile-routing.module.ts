import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InvoiceEditorComponent} from "../invoice-editor/invoice-editor.component";

const routes: Routes = [
  { path: '', component: InvoiceEditorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
