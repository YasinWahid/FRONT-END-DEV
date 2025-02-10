import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevlyServicesComponent } from './nevly-services.component';

describe('NevlyServicesComponent', () => {
  let component: NevlyServicesComponent;
  let fixture: ComponentFixture<NevlyServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NevlyServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NevlyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
