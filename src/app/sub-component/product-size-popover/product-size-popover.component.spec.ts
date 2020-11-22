import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductSizePopoverComponent } from './product-size-popover.component';

describe('ProductSizePopoverComponent', () => {
  let component: ProductSizePopoverComponent;
  let fixture: ComponentFixture<ProductSizePopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSizePopoverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductSizePopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
