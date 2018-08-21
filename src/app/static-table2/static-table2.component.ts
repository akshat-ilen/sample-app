import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static-table2',
  templateUrl: './static-table2.component.html',
  styleUrls: ['./static-table2.component.css']
})
export class StaticTable2Component implements OnInit {

  data = {
    FatcaWitholdableProduct : "No",
    IsDocumented : "Yes",
    KYCSecondLevelStatus : "Something Else",
    Profile : 'Profile 2'
  }

  tableDataStructure = [
    {id: 0,  profile : 'Profile 2', color: 'defaultColor', allowed: false },
    {id: 1,  profile : 'Profile 9', color: 'defaultColor', allowed: false },
    {id: 2,  profile : 'Profile 3', color: 'defaultColor', allowed: false },
    {id: 3,  profile : 'Profile 1', color: 'defaultColor', allowed: false },
    {id: 4,  profile : 'Profile 3', color: 'defaultColor', allowed: false },
    {id: 5,  profile : 'Profile 2', color: 'defaultColor', allowed: false },
    {id: 6,  profile : 'Profile 4', color: 'defaultColor', allowed: false },
    {id: 7,  profile : 'Profile 6', color: 'defaultColor', allowed: false },
    {id: 8,  profile : 'Profile 8', color: 'defaultColor', allowed: false },
    {id: 9,  profile : 'Profile 9', color: 'defaultColor', allowed : true },
    {id: 10, profile : 'Profile 10',  color: 'defaultColor', allowed : false },
    {id: 11, profile : 'Profile 11',  color: 'defaultColor', allowed : true },
    {id: 12, profile : 'Profile 99',  color: 'defaultColor', allowed : true },
    {id: 13, profile : 'Profile 13',  color: 'defaultColor', allowed : true },
    {id: 14, profile : 'Profile 14',  color: 'defaultColor', allowed : false },
    {id: 15, profile : 'Profile 15',  color: 'defaultColor', allowed : true },
  ]

  participate = "defaultColor"
  nonParticipate = "defaultColor"

  constructor() { }

  ngOnInit() {
    this.dataBind()
    console.log(this.tableDataStructure)
  }

  dataBind() {

    switch(this.data.FatcaWitholdableProduct) {
      case 'No' : {
        switch(this.data.Profile) {
          case 'Profile 2' : {
            this.decide(0,this.data.FatcaWitholdableProduct)
            break
          }
          case 'Profile 9' : {
            this.decide(1,this.data.FatcaWitholdableProduct)
            break
          }
          default : {
            this.decide(2,this.data.FatcaWitholdableProduct)
            break
          }
        }
        break
        
      }

      case 'Yes' : {
        for(let i= 3; i< this.tableDataStructure.length;i++) {
          if(this.data.Profile == this.tableDataStructure[i].profile) {
            this.decide(i,this.data.FatcaWitholdableProduct)
            break
          }
        }
      } 
    }

  }

  decide(index,paritcipating) {
    let color  = this.tableDataStructure[index].allowed ? 'greenColor' : 'redColor'
    this.tableDataStructure[index].color = color
    if(paritcipating == 'No') {
      this.participate = color
    } else {
      this.nonParticipate = color
    }
  }
  

}
