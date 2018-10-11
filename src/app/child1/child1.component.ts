import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  @Input('group') public rateForm : FormGroup
  @Input('index') public index : Number

  ngOnInit(): void {
    
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.rateForm.statusChanges.subscribe(x => console.log(x))
  }
  // date : FormControl

  // initialise(fb:FormBuilder) {
    
  //   this.childForm = fb.group({
  //     date : ['',Validators.required]
  //   })

  //   return this.childForm
  // }

}
