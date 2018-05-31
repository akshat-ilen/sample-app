import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  childForm : FormGroup
  date : FormControl

  initialise(fb:FormBuilder) {
    
    this.childForm = fb.group({
      date : ['',Validators.required]
    })

    return this.childForm
  }

}
