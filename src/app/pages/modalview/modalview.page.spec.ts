import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalviewPage } from './modalview.page';

describe('ModalviewPage', () => {
  let component: ModalviewPage;
  let fixture: ComponentFixture<ModalviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
