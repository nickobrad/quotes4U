import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesButtonsComponent } from './quotes-buttons.component';

describe('QuotesButtonsComponent', () => {
  let component: QuotesButtonsComponent;
  let fixture: ComponentFixture<QuotesButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
