import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevlyPlansComponent } from './nevly-plans.component';

describe('NevlyPlansComponent', () => {
  let component: NevlyPlansComponent;
  let fixture: ComponentFixture<NevlyPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NevlyPlansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NevlyPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
