import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ProductSizePopoverComponent } from 'src/app/sub-component/product-size-popover/product-size-popover.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  selectedSize = 'XL';

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ProductSizePopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });

    popover.onDidDismiss().then((dataReturned) => {
      console.log(dataReturned);
      if (dataReturned.data) {
        this.selectedSize = dataReturned.data;
      }
    })
    return await popover.present();
  }

  

}
