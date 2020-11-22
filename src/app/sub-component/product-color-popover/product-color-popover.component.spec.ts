import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductColorPopoverComponent } from './product-color-popover.component';

describe('ProductColorPopoverComponent', () => {
  let component: ProductColorPopoverComponent;
  let fixture: ComponentFixture<ProductColorPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductColorPopoverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductColorPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
