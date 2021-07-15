import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLPComponent } from './home-lp.component';

describe('HomeLPComponent', () => {
  let component: HomeLPComponent;
  let fixture: ComponentFixture<HomeLPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
