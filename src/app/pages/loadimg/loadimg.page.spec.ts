import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoadimgPage } from './loadimg.page';

describe('LoadimgPage', () => {
  let component: LoadimgPage;
  let fixture: ComponentFixture<LoadimgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadimgPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadimgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
