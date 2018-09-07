import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decision-tree',
  templateUrl: './decision-tree.component.html',
  styleUrls: ['./decision-tree.component.css']
})
export class DecisionTreeComponent implements OnInit {

  defaultColor = 'default'
  redColor = 'redColor'
  greenColor = 'greenColor'
  value = ''
  description = ''

  nodesInfo = [
    {color : false, colorClass : null, ValidatorName : null},
    {color : false, colorClass : this.defaultColor, ValidatorName : null},
    {color : false, colorClass : this.defaultColor, ValidatorName : null},
    {color : false, colorClass : this.defaultColor, ValidatorName : null},
    {color : false, colorClass : this.defaultColor, ValidatorName : null},
    {color : false, colorClass : this.defaultColor, ValidatorName : null},
    {color : false, colorClass : this.defaultColor, ValidatorName : null},
    {color : false, colorClass : this.defaultColor, ValidatorName : null},
    {color : false, colorClass : this.defaultColor, ValidatorName : null}
  ]

  ValidatorArray = [
    {name: 'ABC', value : 'ABCDEFG', description: '1234567890'},
    {name: 'DEF', value : 'HIJKL', description: '437564926'},
    {name: 'GHI', value : 'MNOPQ', description: '1245749305'},
    {name: 'JKL', value : 'RSTUVW', description: '07856743580'},
  ]

  graph = [
    {node: 0, yes: null, no: null, color: 'greenColor'},
    {node: 1, yes: 2, no: 4, color: 'greenColor'},
    {node: 2, yes: 3, no: 4, color: 'greenColor'},
    {node: 3, yes: 'end', no: 'end', color: 'redColor'},
    {node: 4, yes: 5, no: 8, color: 'greenColor'},
    {node: 5, yes: 6, no: 8, color: 'greenColor'},
    {node: 6, yes: 7, no: 8, color: 'greenColor'},
    {node: 7, yes: 'end', no: 'end', color: 'greenColor'},
    {node: 8, yes: 'end', no: 'end', color: 'redColor'},
  ]

  serviceArray = [
    {ExecutionStatus: true, ValidatorName: 'ABC'},//1->2
    {ExecutionStatus: false, ValidatorName: 'DEF'},//2->4
    {ExecutionStatus: true, ValidatorName: 'GHI'},//4->5
    {ExecutionStatus: true, ValidatorName: 'GHI'},//4->5
    {ExecutionStatus: true, ValidatorName: 'JKL'},//5->8
  ]

  showValidators(validatorName) {
    
    if(validatorName != null) {
      let validatorIndex = this.ValidatorArray.findIndex(x => x.name == validatorName)
      if(validatorIndex != -1) {
        this.value = this.ValidatorArray[validatorIndex].value
        this.description = this.ValidatorArray[validatorIndex].description
      }
    }
    else {
      this.value = ''
      this.description = ''
    }
    
  }

  constructor() { }

  ngOnInit() {
  }

  formDecisionTree() {
    let path = this.getPath(this.graph, this.serviceArray)

    let lastPathNode = path[path.length - 1].path
    let color = ''

    let graphColorIndex = this.graph.findIndex(x => x.node == lastPathNode)

    if(graphColorIndex != -1) {
      color = this.graph[graphColorIndex].color
    }

    // if([2,4,6,8,11].findIndex(x => x == lastPathNode) >= 0) {
    //   color = this.greenColor
    // } else {
    //   color = this.redColor
    // }
    

    path.forEach(element => {
      let nodeIndex = element.path
      this.nodesInfo[nodeIndex].colorClass = color
      this.nodesInfo[nodeIndex].ValidatorName = element.ValidatorName
    });

  }

  getPath(graph:Array<any>, pathArray:Array<any>) {
    
    let graphIndex = 1
    let returnArray = []
    
    for(let pathArrayIndex = 0; pathArrayIndex < pathArray.length;pathArrayIndex++) {
      let graphObj = graph[graphIndex]
      let pathArrayObj = pathArray[pathArrayIndex]
      
      returnArray.push({
        path : graphIndex,
        ValidatorName : pathArrayObj.ValidatorName
      })

      graphIndex = pathArrayObj.ExecutionStatus ? graphObj.yes : graphObj.no
      
      if(graph[graphIndex].yes == 'end') break
    }

    returnArray.push({
      path : graphIndex,
    })

    return returnArray

  }

}
