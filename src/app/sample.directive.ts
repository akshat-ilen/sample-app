import { Directive, Input, HostBinding, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DH_CHECK_P_NOT_PRIME } from 'constants';

@Directive({
  selector: '[disableControl]'
})
export class SampleDirective {

  //Array of objects for replacing the digits
  digitReplace = [
    {code : 66, replace : "000000000"}, //B
    {code : 75, replace : "000"}, //K
    {code : 77, replace : "000000"}, //M
  ]

  //Keydown Event
  @HostListener('keydown',['$event']) onkeydown(e : Event){
    
    //Checking the keycode by calling the function
    if(!this.checkKeyCode(e)) return false

    //Extracting the charcode
    let charCode = (e['query']) ? e['query'] : e['keyCode'];

    //Replacing the digit if b,k,m is found
    let replaceIndex = this.digitReplace.findIndex(x => x.code == charCode)
    if(replaceIndex != -1) {
      this.ngControl.control.patchValue(`${e['target']['value']}${this.digitReplace[replaceIndex]["replace"]}`)
    }
      
  }

  //KeyUp Event
  @HostListener('keyup',['$event']) onkeyup(e : Event){
    let charCode = (e['query']) ? e['query'] : e['keyCode'];
    //If b,k,m is found, slice off the last character
    let replaceIndex = this.digitReplace.findIndex(x => x.code == charCode)
    let value = e['target']['value']
    if(replaceIndex != -1) {
      value = value.slice(0, -1) 
    }
    //Convert the number into commas (123456 => 123,456)
    this.ngControl.control.patchValue(this.numberWithCommas(value))
  }

  checkKeyCode(e) {

    //Declaring the charcode which are allowed
    // 8=> Backspace
    // 48-57 => 0-9
    // 66-75-77 => b-k-m
    let allowCharCode = [8,48,49,50,51,52,53,54,55,56,57,66,75,77]

    //Declaring the charcode which are not allowed on first place
    let notAllowCharCodeOnFirstPlace = [48,66,75,77]
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

  //Function to convert the number into commas seperated numbers
  numberWithCommas(number) {
    number = number.trim().replace (/,/g, "");
    var parts = number.toString().split(".");
    //Below is the pattern to replace commas after 3 digits
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".")
  }

  // @Input() set disableControl( condition : boolean ) {
  //   const action = condition ? 'disable' : 'enable';
  //   const color = condition ? 'grey' : 'white';
  //   this.ngControl.control[action]();
  //   this.backgroundColor = color
  // }

  constructor( private ngControl : NgControl ) {
  }

}
