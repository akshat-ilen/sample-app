import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';  // <-- #1 import module
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from '@angular/router';

import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';

import { SampleService } from './sample.service';
import { Child1Component } from './child1/child1.component';
import { SampleDirective } from './sample.directive';
import { SmartDateDirective } from './smart-date.directive';
import { DateFormatDirective } from './date-format.directive';
import { DisableControlDirective } from './disable-control.directive';
import { DeltaDirDirective } from './delta-dir.directive';
import { ClickOutsideDirective } from './click-outside.directive';
import { SortPipe } from './sort.pipe'

import { MAT_SELECT_SCROLL_STRATEGY } from '@angular/material';
    import { Overlay, BlockScrollStrategy } from '@angular/cdk/overlay';

import { ColorDirective } from './color.directive';
import { DecisionTreeComponent } from './decision-tree/decision-tree.component';
import { TableComponent } from './table/table.component';
import { StaticTableComponent } from './static-table/static-table.component';
import { StaticTable2Component } from './static-table2/static-table2.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { NgxSortableModule } from 'ngx-sortable';
import { NgxSortableComponent } from './ngx-sortable/ngx-sortable.component';
import { AgTableComponent } from './ag-table/ag-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { ButtonRendererComponent } from './button-renderer/button-renderer.component';
import { ExcelDataComponent } from './excel-data/excel-data.component';

export function scrollFactory(overlay: Overlay): () => BlockScrollStrategy {
  return () => overlay.scrollStrategies.block();
}

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'abc', component: AppComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    SampleDirective,
    SmartDateDirective,
    DateFormatDirective,
    DisableControlDirective,
    DeltaDirDirective,
    ClickOutsideDirective,
    SortPipe,
    ColorDirective,
    DecisionTreeComponent,
    TableComponent,
    StaticTableComponent,
    StaticTable2Component,
    DragDropComponent,
    NgxSortableComponent,
    AgTableComponent,
    ButtonRendererComponent,
    ExcelDataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatRadioModule,
    NgxSortableModule,
    RouterModule.forRoot(routes),
    AgGridModule.withComponents([ButtonRendererComponent])
  ],
  providers: [SampleService,{ provide: MAT_SELECT_SCROLL_STRATEGY, useFactory: scrollFactory, deps: [Overlay] } ],
  bootstrap: [AppComponent]
})
export class AppModule { }

