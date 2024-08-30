import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  calculateAdd(input: any): number {
    if (!input) return 0;
    if (input === '') return 0

    if (typeof input === 'number') return input;

    let numbersArray: number[] = [];

    if (Array.isArray(input)) {
      numbersArray = input;
    }

    if (input.includes('\n')) {
      numbersArray = input.split('\n')
      .join(',')
      .split(',').filter((num: string) => num.trim() !== '').map((el: string) => parseInt(el, 10))
      console.log('numsArr', numbersArray)
    }

    return numbersArray.reduce((acc, sum) => acc + sum, 0);
  }

  calculateSubstract(input: any): number {
    if (!input) return 0;
    if (input === '') return 0

    if (typeof input === 'number') return input;

    let numbersArray: number[] = [];
    if (Array.isArray(input)) {
      numbersArray = input.sort((a, b) => b - a);
    }

    if (input.includes('\n')) {
      numbersArray = input.split('\n')
      .join(',')
      .split(',').filter((num: string) => num.trim() !== '').map((el: string) => parseInt(el, 10));
      numbersArray = numbersArray.sort((a, b) => b - a);
      console.log('numsArr', numbersArray)
    }

    return numbersArray.reduce((acc, sum) => acc - sum);
  }

  calculateMultiplication(input: any): number {
    if (!input) return 0;
    if (input === '') return 0

    if (typeof input === 'number') return input;

    let numbersArray: number[] = [];
    if (Array.isArray(input)) {
      numbersArray = input;
    }

    return numbersArray.reduce((acc, sum) => acc - sum, 1);
  }
}
