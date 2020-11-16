import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomTabComponent } from './bottom-tab/bottom-tab.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BottomTabComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    BottomTabComponent
  ],
})
export class SubComponentModule { }
