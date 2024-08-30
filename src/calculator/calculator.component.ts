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
    let sum = 0;
    if (!input) return 0;
    if (input === '') return 0
    let numbers = parseInt(input, 10);
    let numbersArray: number[] = [];
    numbersArray.push(numbers);
    if (numbersArray.length === 1) {
      sum = numbersArray[0];
    }
    return sum;
  }

  inputValues(event: any) {
    const target = event.target.value;
    this.inputString = target;
    this.calculateAdd(this.inputString);
  }
}
