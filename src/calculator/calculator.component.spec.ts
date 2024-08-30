import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return 0 for an empty string and null values', () => {
    expect(component.calculateAdd(null)).toBe(0);
  });

  it('should return 0 for an empty string', () => {
    expect(component.calculateAdd('')).toBe(0);
  });

  it('should return same value for a single number', () => {
    expect(component.calculateAdd(5)).toBe(5)
  });
});
