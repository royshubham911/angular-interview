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

  it('should return 0 for an empty string and null values (add)', () => {
    expect(component.calculateAdd(null)).toBe(0);
  });

  it('should return 0 for an empty string (add)', () => {
    expect(component.calculateAdd('')).toBe(0);
  });

  it('should return same value for a single number (add)', () => {
    expect(component.calculateAdd(5)).toBe(5)
  });
  it('should be able to handle the elements in an array (add)', ()=> {
    expect(component.calculateAdd([1, 2, 4])).toBe(7)
  })
  it('should be able to handle the line change between numbers passes in a string (add)', ()=> {
    expect(component.calculateAdd('1\n3,5,\n8')).toBe(17)
  })
  it('should return 0 for an empty string and null values (substraction)', () => {
    expect(component.calculateSubstract(null)).toBe(0);
  });

  it('should return 0 for an empty string (substraction)', () => {
    expect(component.calculateSubstract('')).toBe(0);
  });

  it('should return same value for a single number (substraction)', () => {
    expect(component.calculateSubstract(5)).toBe(5)
  });
  it('should be able to handle the elements in an array for (substraction)', ()=> {
    expect(component.calculateSubstract([1, 2, 4])).toBe(1)
  })
  it('should be able to handle the line change between numbers passes in a string (substraction)', ()=> {
    expect(component.calculateSubstract('5,\n8')).toBe(3)
  })
  it('should return 0 for an empty string and null values (multiplicatiom)', () => {
    expect(component.calculateMultiplication(null)).toBe(0);
  });

  it('should return 0 for an empty string (multiplicatiom)', () => {
    expect(component.calculateMultiplication('')).toBe(0);
  });

  it('should return same value for a single number (multiplicatiom)', () => {
    expect(component.calculateMultiplication(5)).toBe(5)
  });
  it('should be able to handle the elements in an array for multiplication', ()=> {
    expect(component.calculateMultiplication([1, 2, 4])).toBe(8)
  })
  it('should be able to handle the line change between numbers passes in a string (multiplicatiom)', ()=> {
    expect(component.calculateMultiplication('5,\n8')).toBe(40)
  })
});
