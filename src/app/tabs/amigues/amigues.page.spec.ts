import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AmiguesPage } from './amigues.page';

describe('AmiguesPage', () => {
  let component: AmiguesPage;
  let fixture: ComponentFixture<AmiguesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmiguesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AmiguesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
