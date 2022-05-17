import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatpCardComponent } from './ratp-card.component';

describe('RatpCardComponent', () => {
  let component: RatpCardComponent;
  let fixture: ComponentFixture<RatpCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatpCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
