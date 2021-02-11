import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientRoutingModule } from './client-routing.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClientRoutingModule,
  ],
  declarations: [
    LayoutComponent
  ]
})
export class ClientModule { }
