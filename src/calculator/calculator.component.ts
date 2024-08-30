import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  constructor() {}

  inputString: string = '';
  result: number = 0;

  calculateAdd(input: any): number {
    if (!input) return 0;
    if (input === '') return 0

  if (typeof input === 'number') return input;

  let numbersArray: number[] = [];

  if (Array.isArray(input)) {
    numbersArray = input;
  }

  return numbersArray.reduce((acc, sum) => acc + sum, 0);
  }
}
