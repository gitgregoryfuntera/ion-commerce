import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { IonicModule } from '@ionic/angular';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
