import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';  // <-- #1 import module
import { HttpClientModule } from "@angular/common/http";

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
import { ClickOutsideDirective } from './click-outside.directive'


@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    SampleDirective,
    SmartDateDirective,
    DateFormatDirective,
    DisableControlDirective,
    DeltaDirDirective,
    ClickOutsideDirective
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
    MatRadioModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
