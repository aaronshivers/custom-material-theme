import { Injectable } from '@angular/core';
import { Budget } from './budget';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  budget: Budget = new Budget(0, 0);

  constructor() {
  }

  getBudget(): Budget {
    return JSON.parse(localStorage.getItem('budget')) || this.budget;
  }

  setBudget(budget: Budget): void {
    this.budget = budget;
  }

  saveBudget(): void {
    localStorage.setItem('budget', JSON.stringify(this.budget));
  }
}
