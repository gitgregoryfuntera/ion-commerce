import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BottomTabComponent } from './bottom-tab.component';

describe('BottomTabComponent', () => {
  let component: BottomTabComponent;
  let fixture: ComponentFixture<BottomTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomTabComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BottomTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
