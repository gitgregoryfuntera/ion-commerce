import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { IonicModule } from '@ionic/angular';
import { SubComponentModule } from 'src/app/sub-component/sub-component.module';
import { CartComponent } from './cart.component';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    IonicModule,
    SubComponentModule
  ]
})
export class CartModule { }
