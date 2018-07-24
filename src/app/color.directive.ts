import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

// Example Directive in the app.component.html line no. - 226

//This structure will parse the Converter and give color
const  data = {
  "Type1Converter" : { //Name of the converter 
    "In Place" : "yellow",
    "Place" : "red", // value and corresponding color
    "def" : "blue",
    "default" : "green" //You have to put default value in every converter
  },
  "Type2Converter" : {
    "ghi" : "red",
    "jkl" : "blue",
    "default" : "grey"
  },
  "default" : "yellow" // If you put wrong converter name
}

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @Input('appColor') value : string // Input of the value
  @Input('converterName') converterName : string // Inu converter name
  @Input('converterType') converterType : string = 'not contain' // If it is comparing with contain function

  constructor(private elRef: ElementRef) { 
  }


  ngOnChanges(changes: SimpleChanges){
    if(this.converterName === undefined) throw new Error("Converter Name needed");
    
    
    if(changes.value){
      //Fetch the color from the data structure
      this.elRef.nativeElement.style.color = (this.converterType == 'not contain') ? this.getColor(this.value) : this.getColorWithContain(this.value)
    }
  }

  getColor(value) {
    if (this.converterName in data) {
      let converter = data[this.converterName]
      if(value in converter) {
        return converter[value]
      } else {
        return converter['default']
      }
    } else {
      return data['default']
    }
  }

  getColorWithContain(value) {
    if (this.converterName in data) {
      let converter = data[this.converterName]
      for(let convertKey in converter) {
        if(value.search(convertKey) != -1) { // Change this line
          return converter[convertKey]
        }
      }
      return converter['default']
    } else {
      return data['default']
    }  
  }

}
