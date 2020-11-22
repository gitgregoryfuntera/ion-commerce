import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-product-size-popover',
  templateUrl: './product-size-popover.component.html',
  styleUrls: ['./product-size-popover.component.scss'],
})
export class ProductSizePopoverComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  dismissPopover(selectedValue: string) {
    this.popoverController.dismiss(selectedValue);
  }

}
