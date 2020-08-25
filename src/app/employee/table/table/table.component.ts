import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../shared/services/employee/employee.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns = [];
  employeeName: string="";
  employees : any;
  sortedColumn: string;
  a : number=0;
  page : number=0;

  constructor( private employee : EmployeeService) { }

  ngOnInit() {
    this.employee.viewEmployees().subscribe((data) => this.employees= data);
    this.displayedColumns= this.employee.getColumns();
    }
  }


