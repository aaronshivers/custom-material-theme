import { Injectable } from '@angular/core';
import { Budget } from './budget';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  budget: Budget;

  constructor() {
  }

  setBudget(budget: Budget): void {
    this.budget = budget;
  }
}
