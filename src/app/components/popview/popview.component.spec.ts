import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopviewComponent } from './popview.component';

describe('PopviewComponent', () => {
  let component: PopviewComponent;
  let fixture: ComponentFixture<PopviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopviewComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
