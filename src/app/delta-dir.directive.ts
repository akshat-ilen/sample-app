import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appDeltaDir]'
})
export class DeltaDirDirective {

   //Keydown Event
   @HostListener('keydown',['$event']) onkeydown(e : Event){

    if(e['key'] === '.') {
      let value:String = e['target']['value']
      if(value.includes('.')) return false
    }
    



  }


  //KeyUp Event
  @HostListener('keyup',['$event']) onkeyup(e : Event){
    
    let value:String  = e['target']['value']
    

    value = (this.changeToDouble(value) >= 0) ? `+${value}` : value
    value = (value[1] == '+') ? value.slice(1) : value
    value = (value[1] == '.' && value[0] != "0") ? value.substr(0,1) + '0' + value.substr(1) : value
    // this.ngControl.control.patchValue(value)
  }

  @HostListener('blur',['$event'])
  onblur(e: Event) {
    let value = e['target']['value']
    if(value == '') return false
    let num = new Number(value).toPrecision(2)
    if(parseFloat(num) >= 0) {
      this.ngControl.control.patchValue('+'+num)
    } else {
      this.ngControl.control.patchValue(num)
    }
  }

  changeToDouble(str) {
    return +str
  }

  constructor( private ngControl : NgControl ) {
  }

}
