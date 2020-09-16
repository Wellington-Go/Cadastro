import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InteracaoPage } from './interacao.page';

describe('InteracaoPage', () => {
  let component: InteracaoPage;
  let fixture: ComponentFixture<InteracaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteracaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InteracaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
