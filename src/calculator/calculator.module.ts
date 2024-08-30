import { NgModule } from "@angular/core";
import { CalculatorComponent } from "./calculator.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [CalculatorComponent],
    imports: [FormsModule, CommonModule],
    exports: [CalculatorComponent]
})

export class CalculatorModule{}