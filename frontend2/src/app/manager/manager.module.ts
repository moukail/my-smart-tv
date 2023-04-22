import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListItemComponent } from './list-item/list-item.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { GridItemComponent } from './grid-item/grid-item.component';
import { GridListComponent } from './grid-list/grid-list.component';
import {NavigableListDirective} from "../directives/NavigableListDirective";
import {NavigableListItemDirective} from "../directives/NavigableListItemDirective";
import {FocusDirective} from "../directives/FocusDirective";

@NgModule({
  declarations: [
    DashboardComponent,
    ListItemComponent,
    GridItemComponent,
    GridListComponent,
    NavigableListDirective,
    NavigableListItemDirective,
    FocusDirective
  ],
  exports: [
    DashboardComponent,
    ListItemComponent,
    GridListComponent,
    GridItemComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule
  ]
})
export class ManagerModule { }
