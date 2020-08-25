import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Columns } from '../../interfaces/Columns';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  columns: Columns[];

  constructor(private http: HttpClient) {
    this.columns=[{col_name : 'f_name',col_value : "First Name"},
    {col_name : 'l_name',col_value : "Last Name"},
    {col_name : 'company',col_value : "Company"},
    {col_name : 'city',col_value : "City"},
    {col_name : 'state',col_value : "State"},
    {col_name : 'zip',col_value : "Zip"},
    {col_name : 'web',col_value : "Web"},
    {col_name : 'age',col_value : "Age"},
     ]
   }

   getColumns(){
     return this.columns;
   }

  viewEmployees() {
    let res = this.http.get('https://5f37efc3bbfd1e00160bf767.mockapi.io/ap/v1/users');
    return res;
  }
}
