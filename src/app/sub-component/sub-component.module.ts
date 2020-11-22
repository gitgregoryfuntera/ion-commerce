import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomTabComponent } from './bottom-tab/bottom-tab.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ProductSizePopoverComponent } from './product-size-popover/product-size-popover.component';

@NgModule({
  declarations: [
    BottomTabComponent,
    ProductSizePopoverComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    BottomTabComponent,
    ProductSizePopoverComponent
  ],
})
export class SubComponentModule { }
