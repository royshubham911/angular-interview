import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  sortDescending(arr: number[]): number[] {
    return arr.slice().sort((a, b) => b - a);
  }

  parseInt(input: any): number[] {
    if (!input || input === '') return [];

  if (typeof input === 'number') return [input]; // using destructuring.

  let numbersArray: number[] = [];

  if (Array.isArray(input)) {
    numbersArray = input;
  } else if (typeof input === 'string') {
    numbersArray = input
      .split('\n').join(',')
      .split(',')
      .filter(num => num.trim() !== '')
      .map(el => parseInt(el, 10));
  }
  numbersArray = numbersArray.sort((a, b) => b - a)

    return numbersArray.filter(num => !isNaN(num));
  }

  calculateAdd(input: any): number {
    const numbersArray = this.parseInt(input);
    return numbersArray.reduce((acc, sum) => acc + sum, 0);
  }

  calculateSubstract(input: any): number {
    const numbersArray = this.parseInt(input);
    if (numbersArray.length === 0) return 0;
    return numbersArray.reduce((acc, sum) => acc - sum);
  }

  calculateMultiplication(input: any): number {
    const numbersArray = this.parseInt(input);
    if (numbersArray.length === 0) return 0;
    return numbersArray.reduce((acc, sum) => acc * sum, 1);
  }
}
