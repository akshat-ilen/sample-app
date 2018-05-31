import { Input ,Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
import * as moment from 'moment-mini-ts'

@Directive({
  selector: '[smartDate]'
})
export class SmartDateDirective {
  
  @Input('date-type') params : string;

  @HostListener('keydown',['$event']) onkeydown(e : Event){

    if(this.params == "startDate") {
      var momentDate = moment()
    } else if(this.params == "endDate") {
      let startDate = this.ngControl['_parent']['value']['startDate']
      console.log(startDate)
      var momentDate = moment(startDate)
    }

    var value = parseInt(e['target']['value'])
    
    if(e['key'] == 'y' || e['key'] == 'Y') {
      var a = momentDate.add(value, 'year').toISOString()
      this.ngControl.control.patchValue(a)
    }
    if(e['key'] == 'm' || e['key'] == 'M') {
      var a = momentDate.add(value, 'months').toISOString()
      this.ngControl.control.patchValue(a)
    }
    if(e['key'] == 'd' || e['key'] == 'D') {
      var a = momentDate.add(value, 'days').toISOString()
      this.ngControl.control.patchValue(a)
    }

    
  }

  @HostListener('keyup',['$event']) onkeyup(e : Event){
    
    if(e['key'] == 'y' || e['key'] == 'Y') {
      var value = e['target']['value'].slice(0, -1)
      this.ngControl.control.patchValue(moment(value,'M/D/YYYY').toISOString())
    }
  }

  constructor(private ngControl : NgControl) { }

}
