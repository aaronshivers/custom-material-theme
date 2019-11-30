import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Budget } from '../budget';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: [ './balance.component.scss' ],
})
export class BalanceComponent implements OnInit {
  budget: Budget;

  constructor(private budgetService: BudgetService) {
  }

  ngOnInit() {
    this.getBudget();
  }

  getBudget(): void {
    this.budget = this.budgetService.getBudget();
    console.log(this.budget);
  }

}
