import { Injectable } from '@angular/core';
import { Budget } from './budget';
import { Income } from './income';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  budget: Budget;

  constructor() {
  }

  getBudget(): Budget {
    return this.budget;
  }

  setBudget(budget: Budget): void {
    this.budget = budget;
  }

  addIncome(income: Income) {
    console.log(income);
    localStorage.setItem('income', JSON.stringify(income));
  }
}
