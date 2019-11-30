import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Budget } from '../budget';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: [ './budget.component.scss' ],
})
export class BudgetComponent implements OnInit {
  budget: Budget;

  constructor(private budgetService: BudgetService) {
  }

  ngOnInit() {
  }

  setBudget(budget: Budget): void {
    this.budgetService.setBudget(budget);
  }

  onSubmit(budget: Budget): void {
    this.setBudget(budget);
  }
}
