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

  get balance() {
    return this.budget.income - this.budget.expenses;
  }

  ngOnInit() {
    this.budget = this.budgetService.getBudget();
  }

  setBudget(): void {
    this.budgetService.setBudget(this.budget);
  }

  saveBudget(): void {
    this.budgetService.saveBudget();
  }

  onSubmit(): void {
    this.setBudget();
    this.saveBudget();
  }
}
