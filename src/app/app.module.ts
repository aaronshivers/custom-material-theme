import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BudgetComponent } from './budget/budget.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BalanceComponent } from './balance/balance.component';
import { IncomeFormComponent } from './income-form/income-form.component';
import { ExpesneFormComponent } from './expesne-form/expesne-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BudgetComponent,
    BalanceComponent,
    IncomeFormComponent,
    ExpesneFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
