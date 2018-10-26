import { Component, ViewChild, Optional, Inject, Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FormBuilder, FormControl , FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
import { ControlContainer } from '@angular/forms';
import { startWith } from 'rxjs/operators/startWith';
import { map} from 'rxjs/operators/map';
import { Child1Component } from './child1/child1.component'
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser"; 

import { SampleService } from './sample.service'
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment-mini-ts'
import * as _ from 'lodash'
import { browser } from 'protractor';
import { MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MAT_SELECT_SCROLL_STRATEGY } from '@angular/material';
    import { Overlay, BlockScrollStrategy } from '@angular/cdk/overlay';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

export function scrollFactory(overlay: Overlay): () => BlockScrollStrategy {
  return () => overlay.scrollStrategies.block();
}

var object  = [
  { index : 0, label : 'Dodd-Frank', link : 'dodd-frank', tradeAllowed : true },
  { index : 1, label : 'EMIR', link : 'emir', tradeAllowed : true },
  { index : 2, label : 'FATCA', link : 'fatca', tradeAllowed : true },
  { index : 3, label : 'AEOI', link : 'aeoi', tradeAllowed : true },
  { index : 4, label : 'MIFID', link : 'mifid', tradeAllowed : true },
]

var data = [
  { GuardTradeAllowed : 0, isTradeAllowed : true },
  { GuardTradeAllowed : 1, isTradeAllowed : false },
  { GuardTradeAllowed : 2, isTradeAllowed : true },
  { GuardTradeAllowed : 3, isTradeAllowed : false },
  { GuardTradeAllowed : 4, isTradeAllowed : true },
]





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    // {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    // // {
    // //     provide: DateAdapter, useClass: MomentUtcDateAdapter
    // // },
    // // {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
]
})
export class AppComponent {
  

  LegTypes = [
    'MAT',
    'Non-Mat',
    'Not Sure',
    'MAT',
    'Non-Mat',
    'Not Sure',
    'MAT',
    'Non-Mat',
    'Not Sure',
    'MAT',
    'Non-Mat',
    'Not Sure',
    'MAT',
    'Non-Mat',
    'Not Sure',
    'MAT',
    'Non-Mat',
    'Not Sure',
  ]

  BlockTypes = [
    'Not Sure',
    'Yes',
    'No'
  ]

  disableToggle: Boolean = true



  LegsForm : FormGroup
  RatesForm : FormGroup
  // subscription: Subscription;  
  tabs: any[] = []
  
  aa = moment() 
  bb = moment()
  sampleDiff = this.bb.diff(this.aa,'years',true)
  objs = []

  maxlengthStringError = true
  dateChangeVar = null
  // Legs: any[] = []

  constructor(private _fb : FormBuilder,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private localService: SampleService) {
      this.matIconRegistry.addSvgIcon(
        "checkbox",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/sample.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "checkbox-disable",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/sample-disable.svg")
      );

      this.debounceValue
        .debounceTime(2000)
        .distinctUntilChanged()
        .subscribe(x => {
          this.localService.getDisable().subscribe(x => console.log(x))
        })

      
      // this.debounceValue.debounceTime(200).distinctUntilChanged().switchMap(x => this.sampleDebounceFunction(x))
  }

  ngOnInit() {
    // console.log(this.aa.format('YYYY-MM-DD'),this.bb.format('YYYY-MM-DD'))
    this.LegsForm = this._fb.group({
      delta : ['', Validators.required],
      notional : [''],
      legs : this._fb.array([]),
      isChecked : [''],
      startDate : [moment().startOf('date').toISOString()],
      endDate : ['']
    })


    this.RatesForm = this._fb.group({
      rates : this._fb.array([])
    })
    // console.log(this.LegsForm.get('delta'))
    // this.LegsForm.get('delta').markAsTouched({onlySelf:true})
    // this.LegsForm.get('delta').setValue('12')
    
    
    // this.LegsForm.get('delta').setValue('12')

    this.onFormChange()
    // console.log(this.generateObject(data, object))
  }

  sampleDateFunction($event) {
    console.log($event)
    this.dateChangeVar = $event.targetElement.value
  }

  pseudoSubmit() {
    let a = this.LegsForm.get('fghjf')
    if(a){
      console.log(a)  
    }
    
    let validity = true
    Object.keys(this.LegsForm.controls).forEach(field => {
      const control = this.LegsForm.get(field)
      if(field != 'delta') validity = validity && control.valid 
    })  

    return validity
  }



  endDateValidator($event) {
    this.LegsForm.get('endDate').setErrors({incorrect : false})
    this.LegsForm.get('endDate').setErrors(null)
    // console.log(this.LegsForm.get('endDate'))
  }

  maxLengthError($event) {
    this.maxlengthStringError = $event
  }

  sampleButton() {
    this.LegsForm.get('delta').setValue('')
    // this.LegsForm.get('delta').markAsUntouched({onlySelf:true})
    // console.log(this.LegsForm.get('delta'))
  }

  sampleButton1() {
    this.LegsForm.get('delta').setValue('12')
    console.log(this.LegsForm.get('delta'))
  }

  debounceValue = new Subject<String>()

  
   


  // sampleDebounceFunction(str) {
  //   console.log(str + 'Akshat')
  //   return (str + 'Akshat')
  // }

  

  generateObject(data, enumObject) {
    let objs = []
    data.forEach(element => {
      let ind = enumObject.findIndex(x => x.index == element.GuardTradeAllowed)
      let obj = enumObject[ind]
      let returnObj = {
        label : obj.label,
        link : obj.link,
        tradeAllowed : element.isTradeAllowed  
      }
      objs.push(returnObj)
    });
    
    return objs 
  }

  changeDate($event) {
      
      let startDate = moment.utc(this.LegsForm.get('startDate').value)
      let endDate = moment.utc(this.LegsForm.get('endDate').value)
      let diff = endDate.diff(startDate,'year',true)
      if(diff == 4 || diff == 6) {
        //console.log(true)
      } else {
        //console.log(false)
      }

    // setTimeout(() => {

    //   let startDate = moment.utc(this.LegsForm.get('startDate').value)
    //   let endDate = moment.utc(this.LegsForm.get('endDate').value)
    //   let diff = endDate.diff(startDate,'year',true)
    //   if(diff == 4 || diff == 6) {
    //     console.log(true)
    //   } else {
    //     console.log(false)
    //   }

    // },100)
    
  }
  
  // Add this line
  ngAfterContentInit() {
    this.reset()
  }

  legsFormValidator(control : FormArray) {
    let values = control.value
    let count = 0
    let a: String = 'abc'
    for(let val of values) {
      if(val.legs != "") count++
    }
    // console.log(values)
    if(count < 2) return {invalidLegLength : true}
    return null
  }

  checkboxChange($event) {
    if($event.target.checked) {
      this.LegsForm.get('legs').setValidators([this.legsFormValidator])
    } else {
      this.LegsForm.get('legs').setValidators([])
    }
  }

  // Add this line
  resetLegsForm(){
    const Legs = <FormArray>this.LegsForm.controls['legs']
    while(Legs.length > 0) {
      Legs.removeAt(0)
    } 
    for(let i =0;i<3;i++) {
      Legs.push(this.createLeg())
    }
  }

  createLeg() {
    return this._fb.group({
      legNo : [],
      legs : [''],
      blocks : ['']
    })
  }

  addLeg() : void{
    const Legs = <FormArray>this.LegsForm.controls['legs']
    Legs.push(this.createLeg())
  }

  removeLeg(i) : void {
    const Legs = <FormArray>this.LegsForm.controls['legs']
    Legs.removeAt(i)

    let index = this.tabs.findIndex(x => x.legNo == i+1)
    if(index != -1)  this.removeTab(index)
  }

  createRate(legNo, product) {
    return this._fb.group({
      legNo : [legNo],
      ratePrice : [{value : product, disabled : true}],
      samplePrice : ['']
    })  
  }

  addRate(legNo, product, boolean?): void {
    const Rate = <FormArray>this.RatesForm.controls['rates']
    Rate.push(this.createRate(legNo, product))
  }

  resetRate(i) {
    const Legs = <FormArray>this.RatesForm.controls['rates']
    const LegsForm = <FormGroup>Legs.controls[i]
    LegsForm.reset()
  }

  removeRate(i) : void {
    const Legs = <FormArray>this.RatesForm.controls['rates']
    Legs.removeAt(i)
  }

  // Add this line
  resetRatesForm() : void {
    const Rate = <FormArray>this.RatesForm.controls['rates']
    while(Rate.length > 0) Rate.removeAt(0)
  }

  // Add this line
  reset() : void {
    this.resetLegsForm()
    this.resetRatesForm()
  }

  submit() {
    const Rate = <FormArray>this.RatesForm.controls['rates']
    for(let i=0 ; i<Rate.length ; i++) {
      let b = <FormGroup>Rate.controls[i]
      b.controls['ratePrice'].enable()
    }
    // console.log(this.LegsForm.value)
    // console.log(this.RatesForm.value)
  }

  disable() {
    let a = <FormArray>this.LegsForm.controls['legs']
    for(let i=0; i < a.length-1;i++) {
      let Legs = a.at(i)
      Legs.disable()
    }
    // this.LegsForm.controls['legs'].disable()
    // this.LegsForm.get('legs').disabled
    // console.log(this.LegsForm.controls['legs'].enable)
  }

  onFormChange() : void {
    (this.LegsForm.get('legs') as FormArray).valueChanges.subscribe(val => {
      // console.log('a')
      this.generateTabs(val)
    })

  }

  toggle() {
    if(this.disableToggle) {
      this.LegsForm.get('legs').disable()
      this.disableToggle = false
    } else {
      this.LegsForm.get('legs').enable()
      let legs = this.LegsForm.get('legs').value
      for(let i in legs) {
        let obj = {value : legs[i].legs}

        this.setBlock(obj,i)
      }

      this.disableToggle = true
    }
  }

  generateTabs(formValue) {
    
    for (let i in formValue) {
      let formVal = formValue[i]
      let index = this.tabs.findIndex(x => x.legNo == formVal.legNo)

      if(index == -1) {
        this.checkToGenerateTabs(formVal) ? this.addTab(formVal) : false 
      } else {
        if(!this.checkFormChangeOnTabs(index, i)) {
          this.removeTab(index)    
          this.checkToGenerateTabs(formVal) ? this.addTab(formVal) : false 
        }
        // this.checkFormChangeOnTabs(index, i) ?  true : this.checkToGenerateTabs(formVal) ? this.resetRate(i) : this.removeTab(index)
      }
    }

  }

  replaceTabs() {
    const Rate = <FormArray>this.RatesForm.controls['rates']

  }

  addTab(formVal) {
    this.tabs.push(formVal)
    this.addRate(formVal.legNo, 'Akshat')
    this.sortTab()
  }

  removeTab(index) {
    this.tabs.splice(index,1)
    this.removeRate(index)
    this.sortTab()
  }

  checkToGenerateTabs(val) {
    return ((val.legs == "MAT" && val.blocks == "Not Sure") || val.legs == "Not Sure")
  }

  checkFormChangeOnTabs(tabIndex, formValIndex) {
    let stringTabs = this.tabs[tabIndex]
    let stringValue = this.LegsForm.value['legs'][formValIndex]
    return stringTabs == stringValue
  }

  sortTab() {
    this.tabs.sort((a,b) => {
      if (a.legNo < b.legNo) return -1;
      else if (a.legNo > b.legNo) return 1;
      else return 0;
    })
  }

  setBlock($event,i) {
    
    let legsArray = <FormArray>this.LegsForm.controls['legs']
    let legGroup = <FormGroup>legsArray.controls[i]

    // let creditDealDetailArray = <FormArray>this.creditForm.controls['creditDealDetail']
    // let creditDealDetailGroup = <FormGroup>creditDealDetailArray.controls[i]
    // console.log(creditDealDetailGroup.get('Product').value)
    
    if($event.value == "MAT") {
      legGroup.controls['blocks'].enable()
      legGroup.controls['blocks'].patchValue('Not Sure')  
    } else {
      legGroup.controls['blocks'].disable()
    }
  }


  

  



  




  // sample = true
  // newLineText = "Akshat<br/>Jain"
  // subscription: Subscription;

  // abc = false


  // // parentForm : FormGroup
  // // @ViewChild(Child1Component) child:Child1Component

  // notionalForm : FormGroup
  // disableCondition : FormGroup

  // products = [
  //   {value: 'product1', viewValue: 'Product1'},
  //   {value: 'product2', viewValue: 'Product2'},
  //   {value: 'product3', viewValue: 'Product3'},
  //   {value: 'product4', viewValue: 'Product4'},
  // ];


  //   dca = {
  //     singleUnderlier : false,
  //     underlierSecurity : false,
  //     underlierType : false,
  //     underlier1 : false,
  //     underlier2 : false,
  //     inverseUnderlier : false,
  //     underlierSecurityVisibilty : true,
  //     delta : false,
  // }

  // resetFieldArray = [
  //   {name : 'product' , value : "", disableValue : true},
  //   {name : 'underlierSecurityVisibilty' , value : "" , disableValue : true},
  //   {name : 'productOption' , value : "" , disableValue : false},
  //   {name : 'singleUnderlier' , value : "yes" , disableValue : true},
  //   {name : 'underlierSecurity' , value : "" , disableValue : true},
  //   {name : 'underlierType' , value : "" , disableValue : true},
  //   {name : 'underlier1' , value : "" , disableValue : true},
  //   {name : 'underlier2' , value : "" , disableValue : true},
  //   {name : 'inverseUnderlier' , value : "" , disableValue : true},
  //   {name : 'delta' , value : "" , disableValue : true},
  // ]

  // constructor(private fb : FormBuilder,
  //   private matIconRegistry: MatIconRegistry,
  //   private domSanitizer: DomSanitizer,
  //   private subSer : SampleService){
    
  //   this.matIconRegistry.addSvgIcon(
  //     `icon_label`,
  //     this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/sample.svg")
  //   );
  // }

  // ngOnInit() {
  //   // this.parentForm = this.fb.group({
  //   //   sampleField : ['', Validators.required],
  //   //   startDate : [moment().add(2,'days').toISOString(), Validators.required],
  //   //   endDate : ['', Validators.required]
  //   // }) 
  //    this.notionalForm = this.fb.group({
  //     "notional" : [''],
  //     "startDate" : [''],
  //     "endDate" : ['']
  //   })

  //   this.disableCondition = this.fb.group({
  //     product : [''],
  //     singleUnderlier : ['yes'],
  //     underlierSecurity : [''],
  //     underlierType : [''],
  //     underlier1 : [''],
  //     underlier2 : [''],
  //     inverseUnderlier : [''],
  //     delta : [''],
  //   })
  //   //this.parentForm.controls['startDate'].patchValue(moment().toISOString())
  // }

  // submit() {
  //   // var a = String(this.parentForm.value['sampleField'])
  //   // parseInt(a.replace(/,/g,''))
  //   // this.parentForm.controls['sampleField'].setValue(parseInt(a.replace(/,/g,'')))
  //   // console.log(this.parentForm)
  //   console.log(this.disableCondition)
  // }

  // productChange($event) {
  //   this.resetField('product')
  //   if($event.value == "product1" || $event.value == "product2") {
  //     this.subSer.sendDisable({product : false })
  //   } else {
  //     this.subSer.sendDisable({product : true })
  //   } 
  // }

  // singleUnderlierChange($event) {
  //   this.resetField('singleUnderlier')
  //   this.subSer.sendDisable({underlierSecurityVisibilty : ($event.value == "no")? false : true })
  // }

  // underlierSecurityChange($event) {
  //   this.resetField('underlierSecurity')
  //   this.subSer.sendDisable({underlierSecurity : ($event.value == "no")? false : true })
  //   this.subSer.sendDisable({productOption : (this.disableCondition.controls['product'].value == "product3") ? true : false})
  // }

  // sampleF($event) {
  //   console.log($event)
  // }
  
  // service() {
  //   // this.subSer.sendDisable({product : false })
  //   this.abc = !this.abc
  // }

  // onClickedOutside(e: Event) {
  //   console.log('Clicked outside:', e);
  //   this.abc = false
  // }



  // resetField(fieldName) {
  //   let a = this.resetFieldArray.findIndex(x => x.name == fieldName)
  //   if(a != -1) {
  //     let b = this.resetFieldArray.slice(a+1)
  //     let obj = {}
  //     for(let each of b) {
  //       let fieldName = each['name']
  //       try {
  //         this.disableCondition.controls[fieldName].patchValue(each.value)  
  //       } catch (error) {
          
  //       }
  //       obj[fieldName] = each.disableValue
  //     }
  //     this.subSer.sendDisable(obj)
  //   }
  // }

  // ngDoCheck() {
  //   this.subscription = this.subSer.getDisable().subscribe(message => {
  //     this.dca.singleUnderlier = message.product && message.singleUnderlier
  //     this.dca.underlierSecurity = message.product && message.underlierSecurityVisibilty
  //     this.dca.underlierType = message.product && message.underlierSecurityVisibilty && message.underlierSecurity
  //     this.dca.underlier1 = message.product && !message.underlierSecurityVisibilty
  //     this.dca.underlier2 = message.product && !message.underlierSecurityVisibilty
  //     this.dca.inverseUnderlier = message.product && message.underlierSecurity
  //     this.dca.underlierSecurityVisibilty = message.underlierSecurityVisibilty
  //     this.dca.delta = (message.product && message.underlierSecurity) || message.productOption
  //   })  
  // }


  



  // FForm: FormGroup;
  // @ViewChild(Child1Component) child1Component: Child1Component

  // constructor(private ms : FService,private fb: FormBuilder){
  //   this.createForm()
  // }

  // myControl: FormControl = new FormControl();

  // options = [
  //   'One',
  //   'Two',
  //   'Three'
  // ];

  // filteredOptions: Observable<string[]>;

  // ngOnInit() {
  //   this.FForm = this.fb.group({
  //     date : ['', Validators.required ],
  //     F : this.child1Component.initialise(this.fb)
  //   })
  //   this.filteredOptions = this.myControl.valueChanges
  //     .pipe(
  //       startWith(''),
  //       map(val => {
  //         return this.filter(val)
  //       })
  //     );

    
  // }

  // filter(val: string): string[] {
  //   return this.options.filter(option =>
  //     option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  // }
  
  
  // subscription: Subscription;

  // FAbc = 1
  // FDef = Number
  // FEfg = Number

  // createForm() {
    
  // }


  // ngDoCheck() {
  //   //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //   //Add 'implements DoCheck' to the class.
  //   this.subscription = this.ms.getMessage().subscribe(message => {
  //     this.FEfg = message.text
  //   })
  // }


  
  // // FObject = {}
  // // FArray = [{},{},{}]
  // // tabArray = []

  // // foods = [
  // //   {value: 'steak-0', viewValue: 'Steak'},
  // //   {value: 'pizza-1', viewValue: 'Pizza'},
  // //   {value: 'tacos-2', viewValue: 'Tacos'}
  // // ];

  // // add() {
  // //   this.FArray.push(this.FObject)
  // // }

  // // reset() {
  // //   this.FArray.splice(0,this.FArray.length)
  // //   // this.FObject = {}
  // //   for(var i=0;i<3;i++) {
  // //     this.FArray.push({})
  // //   }
  // // }

  // // select(input) {
  // //   let F = {
  // //     value : input.value
  // //   }
  // //   this.tabArray.push(F)
  // // }
  // sampleArray = [{},{},{}]

  // foods = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'}
  // ];

  // add() {
  //   this.sampleArray.push({})
  //   this.ms.sendMessage(this.sampleAbc)
  //   this.sampleAbc++
  // }

  // reset() {
  //   this.sampleArray.splice(0, this.sampleArray.length)
  //   for(var i = 0;i<3;i++) {
  //     this.add()
  //   }
  //   this.subscription = this.ms.getMessage().subscribe(message => {
  //     this.sampleDef = message.text
  //   })
  // }

  // sample($event) {
  //   console.log($event)
  // }

  // tabArray = []

  // select(input, index) {
  //   let legno = parseInt(index)+1
  //   console.log(this.tabArray.findIndex((item) => {
  //     return item.legno == legno;
  //   }))
  //   let bool = this.tabArray.find(item => item.legno == parseInt(index)+1)
  //   console.log(bool)
  //   if(!bool){
  //     this.tabArray.push(
  //       {
  //         legno: legno
  //       }
  //     )
  //   }

  // }
}



