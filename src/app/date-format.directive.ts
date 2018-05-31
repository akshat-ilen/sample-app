import { Directive, Input, HostListener } from '@angular/core';
import * as moment from 'moment-mini-ts'
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[dateFormat]'
})
export class DateFormatDirective {

  @Input('dateType') dateType : String

  dateReplace = [
    {letter : 'd', code : 68, replace : 'days'}, //d
    {letter : 'm', code : 77, replace : 'months'}, //m
    {letter : 'y', code : 89, replace : 'years'}, //y
  ]
  format = "M/D/YYYY"
  
  constructor(private ngControl : NgControl) { 
  }
  //KeyDown Event
  @HostListener('keydown',['$event']) onkeydown(e : Event) {
    if(!this.checkKeyCode(e)) return false
    
    let charCode = (e['query']) ? e['query'] : e['keyCode'];

    if(this.checkInt(e['target']['value'])) {
      let replaceIndex = this.dateReplace.findIndex(x => x.code == charCode)
      if(replaceIndex != -1) {
        let addNumber = Number(e['target']['value']) || 0
        let replaceString = this.dateReplace[replaceIndex]["replace"] as moment.unitOfTime.DurationConstructor
        let date = moment(this.decideDate()).add(addNumber, replaceString).format(this.format)
        this.ngControl.control.patchValue(new Date(date))
      }
    }
  }
  //KeyUp Event
  @HostListener('keyup',['$event']) onkeyup(e : Event){
    let charCode = (e['query']) ? e['query'] : e['keyCode'];
    let replaceIndex = this.dateReplace.findIndex(x => x.code == charCode)
    let value = e['target']['value']
    let lastDigit = this.dateReplace.findIndex(x => x.letter == value.slice(-1).toLowerCase())

    if(replaceIndex != -1 && lastDigit != -1) {
      value = value.slice(0, -1) 
      this.ngControl.control.patchValue(new Date(value))
    }
  }
  
  decideDate() {
    let startDate = this.ngControl.control.parent.value['startDate'] || moment()
    return (this.dateType == "endDate") ? moment(startDate) : moment()
  }

  checkKeyCode(e) {

    //Declaring the charcode which are allowed
    // 8=> Backspace
    // 48-57 => 0-9
    // 66-75-77 => b-k-m
    let allowCharCode = [8,47,48,49,50,51,52,53,54,55,56,57,68,77,89,191]

    //Declaring the charcode which are not allowed on first place
    let notAllowCharCodeOnFirstPlace = [47,48,68,77,89,191]
    let charCode = (e['query']) ? e['query'] : e['keyCode'];

    //Checking the allowCharcode
    if(allowCharCode.findIndex(x => x == charCode) == -1){
      return false
    }

    //Checking the charcode on ifrst place
    if(e['target']['value'].length == 0) {
      if(notAllowCharCodeOnFirstPlace.findIndex(x => x == charCode) != -1){
        return false
      }
    }

    //If everything is fine, return true
    return true
  }

  checkInt(inputString) {
    return !isNaN(Number(inputString))
  }

}
