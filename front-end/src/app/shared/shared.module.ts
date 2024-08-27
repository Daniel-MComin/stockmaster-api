import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { CategoryPipe } from './pipes/category.pipe'; 
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ 
     CategoryPipe
    ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    CategoryPipe,
  ]
})
export class SharedModule { }
