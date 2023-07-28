import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormbuilderRoutingModule } from './formbuilder-routing.module';
import { FormbuilderComponent } from './formbuilder.component';


@NgModule({
  declarations: [
    FormbuilderComponent
  ],
  imports: [
    CommonModule,
    FormbuilderRoutingModule
  ]
})
export class FormbuilderModule { }
