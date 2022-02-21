import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatpComponent } from './ratp.component';

describe('RatpComponent', () => {
  let component: RatpComponent;
  let fixture: ComponentFixture<RatpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
