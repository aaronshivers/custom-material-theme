import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Income } from '../income';

@Component({
  selector: 'app-income-form',
  templateUrl: './income-form.component.html',
  styleUrls: [ './income-form.component.scss' ],
})
export class IncomeFormComponent implements OnInit {

  constructor(private budgetService: BudgetService) {
  }

  ngOnInit() {
  }

  addIncome(income: Income): void {
    this.budgetService.addIncome(income);
  }

  onSubmit(income: Income): void {
    this.addIncome(income);
  }
}
