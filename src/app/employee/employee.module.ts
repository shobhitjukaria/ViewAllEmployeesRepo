import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { TableComponent } from './table/table/table.component';
import { FilterPipe } from '../shared/pipes/filter/filter.pipe';
import { SortPipe } from '../shared/pipes/sort/sort.pipe';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [TableComponent,
    EmployeeComponent,
    NavComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    AppRoutingModule
  ],
  exports:[
    EmployeeComponent,
    NavComponent,
    TableComponent
  ]
})
export class EmployeeModule { }
