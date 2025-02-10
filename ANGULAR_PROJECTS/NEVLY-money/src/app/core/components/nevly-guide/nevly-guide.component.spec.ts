import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevlyGuideComponent } from './nevly-guide.component';

describe('NevlyGuideComponent', () => {
  let component: NevlyGuideComponent;
  let fixture: ComponentFixture<NevlyGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NevlyGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NevlyGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
