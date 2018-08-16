import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static-table',
  templateUrl: './static-table.component.html',
  styleUrls: ['./static-table.component.css']
})
export class StaticTableComponent implements OnInit {

  data = [
    {ValidatorOutput : 2, DecisionOutput : 'ABC'},
    {ValidatorOutput : 4, DecisionOutput : 'ABC'},
    {ValidatorOutput : 7, DecisionOutput : 'ABC'},
    {ValidatorOutput : 9, DecisionOutput : 'ABC'}
  ]

  tableDataStructure = [
    {id: 0, level : 0, parent:-1, enum : [1], color: 'whiteColor', boolean: false },
    {id: 1, level : 0, parent:-1, enum : [2], color: 'whiteColor', boolean: false },
    {id: 2, level : 1, parent:0, enum : [3,4,5], color: 'whiteColor', boolean: false },
    {id: 3, level : 1, parent:1, enum : [3], color: 'whiteColor', boolean: false },
    {id: 4, level : 1, parent:1, enum : [4], color: 'whiteColor', boolean: false },
    {id: 5, level : 2, parent:2, enum : [6,7], color: 'whiteColor', boolean: false },
    {id: 6, level : 2, parent:3, enum : [7], color: 'whiteColor', boolean: false },
    {id: 7, level : 2, parent:3, enum : [6], color: 'whiteColor', boolean: false },
    {id: 8, level : 2, parent:4, enum : [6,7], color: 'whiteColor', boolean: false },
    {id: 9, level : 3, parent:5, enum : [8], color: 'whiteColor', boolean: false, allowed : true },
    {id: 10, level : 3, parent:6, enum : [8], color: 'whiteColor', boolean: false, allowed : false },
    {id: 11, level : 3, parent:6, enum : [9], color: 'whiteColor', boolean: false, allowed : true },
    {id: 12, level : 3, parent:7, enum : [8], color: 'whiteColor', boolean: false, allowed : true },
    {id: 13, level : 3, parent:7, enum : [9], color: 'whiteColor', boolean: false, allowed : true },
    {id: 14, level : 3, parent:8, enum : [8], color: 'whiteColor', boolean: false, allowed : false },
    {id: 15, level : 3, parent:8, enum : [9], color: 'whiteColor', boolean: false, allowed : true },
  ]

  constructor() { }

  ngOnInit() {
    this.dataBind()
  }

  dataBind() {
    let level = 0
    let parent = -1
    let color = 'greenColor'
    this.data.forEach(element => {
      for(let i =0;i<this.tableDataStructure.length;i++) {
        if(this.tableDataStructure[i].level == level && this.tableDataStructure[i].parent == parent) {
          if(this.tableDataStructure[i].enum.findIndex(x => x == element.ValidatorOutput) != -1) {
            this.tableDataStructure[i].boolean = true
            parent = this.tableDataStructure[i].id
            if(level == 3) {
                color = this.tableDataStructure[i].allowed ? 'greenColor' : 'redColor'
            }
            break
          }
        }
      }
      level = level + 1
    });

    for(let i =0;i<this.tableDataStructure.length;i++) {
      if(this.tableDataStructure[i].boolean) {
        this.tableDataStructure[i].color = color
      }
    }
    
  }

}
