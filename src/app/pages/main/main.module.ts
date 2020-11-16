import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { IonicModule } from '@ionic/angular';
import { SubComponentModule } from 'src/app/sub-component/sub-component.module';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    IonicModule,
    SubComponentModule
  ]
})
export class MainModule { }
