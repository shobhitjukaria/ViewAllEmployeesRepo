import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../shared/services/employee/employee.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns = ['f_name','l_name','company','city','state','zip','web','age'];
  employeeName: string="";
  employees : any;
  sortedColumn: string;
  a : number=0;
  page : number=0;

  constructor( private employee : EmployeeService) { }

  ngOnInit() {
    this.employee.viewEmployees().subscribe((data) => this.employees= data)
    }
  }


