import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule,SideNavComponent,CommonModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  // Income
  lastMonthIncome = ['January: $1000','Fabruary:$1500','March:$1200'];
  currentMonthIncome = '$2000';

  // Expense
  lastMonthExpense= ['January: $800','Fabruary:$1000','March:$1200'];
  currentMonthExpense= '$1500';

  // To DO list
  todoTransactions=[
    {description:'Pay electricity bill'},
    {description:'Submit Monthly report'},
    {description:'Buy groceries'},
    {description:'Call insurance company'}
  ];
  totalCurrentMonthIncome=2000;
  totalCurrentMonthExpence=1500;
 


  constructor(public router:Router){}
  onIncome(){
    this.router.navigate(['budget-planner/income']);
  }

  onExpense(){
    this.router.navigate(['budget-planner/expense']);
  }
  onTodo(){
    this.router.navigate(['budget-planner/todo']);
  }

  get currentMonthSavings(): number {
    return this.totalCurrentMonthIncome - this.totalCurrentMonthExpence;
  }

}


