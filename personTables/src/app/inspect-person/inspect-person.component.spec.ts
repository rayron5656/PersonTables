import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectPersonComponent } from './inspect-person.component';

describe('InspectPersonComponent', () => {
  let component: InspectPersonComponent;
  let fixture: ComponentFixture<InspectPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
