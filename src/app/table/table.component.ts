import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  GuardRegMessagesList = [
    {
      RegulationName: 'ABC1',
      GuardRegMessageList: [
        {
          GuardMessageCategory: 'ABC11',
          GuardRegSubMessageList: [
            {
              GuardMessageText: 'ABC111',
              GuardMessageToolTipText: 'fsdagfhjgdsak',
              GuradMessageColor: 'fdgsajhfkd',
              RegActionToBeTaken: null
            },
            {
              GuardMessageText: 'ABC112',
              GuardMessageToolTipText: 'fsdagfhjgdsak',
              GuradMessageColor: 'fdgsajhfkd',
              RegActionToBeTaken: [
                {
                  PrefixMessage: 'ABC1121',
                  LinDisplayText: 'fgdshajfk',
                  Link: 'fdsakf',
                  SuffixMessage: 'dsfaads'
                },
                {
                  PrefixMessage: 'ABC1122',
                  LinDisplayText: 'fgdshajfk',
                  Link: 'fdsakf',
                  SuffixMessage: 'dsfaads'
                }
              ]
            },
          ]
        },
        {
          GuardMessageCategory: 'ABC12',
          GuardRegSubMessageList: [
            {
              GuardMessageText: 'ABC121',
              GuardMessageToolTipText: 'fsdagfhjgdsak',
              GuradMessageColor: 'fdgsajhfkd',
              RegActionToBeTaken: [
                {
                  PrefixMessage: 'ABC1211',
                  LinDisplayText: 'fgdshajfk',
                  Link: 'fdsakf',
                  SuffixMessage: 'dsfaads'
                },
                {
                  PrefixMessage: 'ABC1212',
                  LinDisplayText: 'fgdshajfk',
                  Link: 'fdsakf',
                  SuffixMessage: 'dsfaads'
                }
              ]
            },
            {
              GuardMessageText: 'ABC122',
              GuardMessageToolTipText: 'fsdagfhjgdsak',
              GuradMessageColor: 'fdgsajhfkd',
              RegActionToBeTaken: [
                {
                  PrefixMessage: 'ABC1221',
                  LinDisplayText: 'fgdshajfk',
                  Link: 'fdsakf',
                  SuffixMessage: 'dsfaads'
                },
                {
                  PrefixMessage: 'ABC1222',
                  LinDisplayText: 'fgdshajfk',
                  Link: 'fdsakf',
                  SuffixMessage: 'dsfaads'
                }
              ]
            },
          ]
        },
      ]
    },
    {
      RegulationName: 'ABC1',
      GuardRegMessageList: [
        {
          GuardMessageCategory: 'ABC11',
          GuardRegSubMessageList: [
            {
              GuardMessageText: 'ABC111',
              GuardMessageToolTipText: 'fsdagfhjgdsak',
              GuradMessageColor: 'fdgsajhfkd',
              RegActionToBeTaken: [
                {
                  PrefixMessage: 'ABC1111',
                  LinDisplayText: 'fgdshajfk',
                  Link: 'fdsakf',
                  SuffixMessage: 'dsfaads'
                },
                {
                  PrefixMessage: 'ABC1112',
                  LinDisplayText: 'fgdshajfk',
                  Link: 'fdsakf',
                  SuffixMessage: 'dsfaads'
                }
              ]
            },
            {
              GuardMessageText: 'ABC112',
              GuardMessageToolTipText: 'fsdagfhjgdsak',
              GuradMessageColor: 'fdgsajhfkd',
              RegActionToBeTaken: [
                {
                  PrefixMessage: 'ABC1121',
                  LinDisplayText: 'fgdshajfk',
                  Link: 'fdsakf',
                  SuffixMessage: 'dsfaads'
                },
                {
                  PrefixMessage: 'ABC1122',
                  LinDisplayText: 'fgdshajfk',
                  Link: 'fdsakf',
                  SuffixMessage: 'dsfaads'
                }
              ]
            },
          ]
        },
        {
          GuardMessageCategory: 'ABC12',
          GuardRegSubMessageList: [
            {
              GuardMessageText: 'ABC121',
              GuardMessageToolTipText: 'fsdagfhjgdsak',
              GuradMessageColor: 'fdgsajhfkd',
              RegActionToBeTaken: [
                {
                  PrefixMessage: 'ABC1211',
                  LinDisplayText: 'fgdshajfk',
                  Link: 'fdsakf',
                  SuffixMessage: 'dsfaads'
                },
                {
                  PrefixMessage: 'ABC1212',
                  LinDisplayText: 'fgdshajfk',
                  Link: 'fdsakf',
                  SuffixMessage: 'dsfaads'
                }
              ]
            },
            {
              GuardMessageText: 'ABC122',
              GuardMessageToolTipText: 'fsdagfhjgdsak',
              GuradMessageColor: 'fdgsajhfkd',
              RegActionToBeTaken: [
                {
                  PrefixMessage: 'ABC1221',
                  LinDisplayText: 'fgdshajfk',
                  Link: 'fdsakf',
                  SuffixMessage: 'dsfaads'
                },
                {
                  PrefixMessage: 'ABC1222',
                  LinDisplayText: 'fgdshajfk',
                  Link: 'fdsakf',
                  SuffixMessage: 'dsfaads'
                }
              ]
            },
          ]
        },
      ]
    },
    {
      RegulationName: 'ABC1',
      GuardRegMessageList: [
        {
          GuardMessageCategory: 'ABC11',
          GuardRegSubMessageList: [
            {
              GuardMessageText: 'ABC111',
              GuardMessageToolTipText: 'fsdagfhjgdsak',
              GuradMessageColor: 'fdgsajhfkd',
              RegActionToBeTaken: [
                {
                  PrefixMessage: 'ABC1111',
                  LinDisplayText: 'fgdshajfk',
                  Link: 'fdsakf',
                  SuffixMessage: 'dsfaads'
                },
                {
                  PrefixMessage: 'ABC1112',
                  LinDisplayText: 'fgdshajfk',
                  Link: 'fdsakf',
                  SuffixMessage: 'dsfaads'
                }
              ]
            },
            {
              GuardMessageText: 'ABC112',
              GuardMessageToolTipText: 'fsdagfhjgdsak',
              GuradMessageColor: 'fdgsajhfkd',
              RegActionToBeTaken: [
                {
                  PrefixMessage: 'ABC1121',
                  LinDisplayText: 'fgdshajfk',
                  Link: 'fdsakf',
                  SuffixMessage: 'dsfaads'
                },
                {
                  PrefixMessage: 'ABC1122',
                  LinDisplayText: 'fgdshajfk',
                  Link: 'fdsakf',
                  SuffixMessage: 'dsfaads'
                },
                {
                  PrefixMessage: 'ABC1122',
                  LinDisplayText: 'fgdshajfk',
                  Link: 'fdsakf',
                  SuffixMessage: 'dsfaads'
                }
              ]
            },
          ]
        },
        {
          GuardMessageCategory: 'ABC12',
          GuardRegSubMessageList: [
            {
              GuardMessageText: 'ABC121',
              GuardMessageToolTipText: 'fsdagfhjgdsak',
              GuradMessageColor: 'fdgsajhfkd',
              RegActionToBeTaken: [
                {
                  PrefixMessage: 'ABC1211',
                  LinDisplayText: 'fgdshajfk',
                  Link: 'fdsakf',
                  SuffixMessage: 'dsfaads'
                },
                {
                  PrefixMessage: 'ABC1212',
                  LinDisplayText: 'fgdshajfk',
                  Link: 'fdsakf',
                  SuffixMessage: 'dsfaads'
                }
              ]
            },
            {
              GuardMessageText: 'ABC122',
              GuardMessageToolTipText: 'fsdagfhjgdsak',
              GuradMessageColor: 'fdgsajhfkd',
              RegActionToBeTaken: [
                {
                  PrefixMessage: 'ABC1221',
                  LinDisplayText: 'fgdshajfk',
                  Link: 'fdsakf',
                  SuffixMessage: 'dsfaads'
                },
                {
                  PrefixMessage: 'ABC1222',
                  LinDisplayText: 'fgdshajfk',
                  Link: 'fdsakf',
                  SuffixMessage: 'dsfaads'
                }
              ]
            },
          ]
        },
      ]
    },
  ]


  RegularList = [
    {
      RegulationName : 'ABC1',
      GuardMessageCategory : 'ABC11',
      GuardMessageText : 'ABC111',
      PrefixMessage : 'ABC1111'
  },
  {
      RegulationName : 'ABC1',
      GuardMessageCategory : 'ABC11',
      GuardMessageText : 'ABC111',
      PrefixMessage : 'ABC1112' 
  },
  {
      RegulationName : 'ABC1',
      GuardMessageCategory : 'ABC11',
      GuardMessageText : 'ABC112',
      PrefixMessage : 'ABC1111' 
  },
  {
      RegulationName : 'ABC1',
      GuardMessageCategory : 'ABC11',
      GuardMessageText : 'ABC112',
      PrefixMessage : 'ABC1112' 
  },
  
  {
      RegulationName : 'ABC1',
      GuardMessageCategory : 'ABC12',
      GuardMessageText : 'ABC111',
      PrefixMessage : 'ABC1111' 
  },
  {
      RegulationName : 'ABC1',
      GuardMessageCategory : 'ABC12',
      GuardMessageText : 'ABC111',
      PrefixMessage : 'ABC1112' 
  },
  {
      RegulationName : 'ABC1',
      GuardMessageCategory : 'ABC12',
      GuardMessageText : 'ABC112',
      PrefixMessage : 'ABC1111' 
  },
  {
      RegulationName : 'ABC1',
      GuardMessageCategory : 'ABC12',
      GuardMessageText : 'ABC112',
      PrefixMessage : 'ABC1112' 
  },
  
  ]

  constructor() { }

  formList = []


  ngOnInit() {
    console.log(this.GuardRegMessagesList)
    this.formList = this.myFunction(this.handleNull(this.GuardRegMessagesList))
    console.log(this.formList)
  }

  unwindArray(arr, f) {
    return arr.reduce((r, o) => r.concat(o[f].map(v => ({ ...o, [f]: v }))), []);
  }

  handleNull(arr) {
    for(let i = 0; i<arr.length;i++) {
      for(let j=0;j<arr[i].GuardRegMessageList.length;j++) {
        for(let k=0;k<arr[i].GuardRegMessageList[j].GuardRegSubMessageList.length;k++) {
          if(arr[i].GuardRegMessageList[j].GuardRegSubMessageList[k].RegActionToBeTaken == null)
          arr[i].GuardRegMessageList[j].GuardRegSubMessageList[k].RegActionToBeTaken = [{}]
        }
      }
    }
    return arr  
  }


  myFunction(GuardRegMessagesList) {
    let preLevel = GuardRegMessagesList.map(x => {
      x['firstLevel'] = this.countLeafNodeFirstLevel(x)
      return x
    })
   let firstLevel = this.unwindArray(preLevel, 'GuardRegMessageList')
   firstLevel = firstLevel.map(x => {
     return {
      RegulationName : x.RegulationName,
      GuardMessageCategory : x.GuardRegMessageList.GuardMessageCategory,
      GuardRegSubMessageList : x.GuardRegMessageList.GuardRegSubMessageList,
      firstLevel : x.firstLevel,
      secondLevel : this.countLeafNodeSecondLevel(x.GuardRegMessageList)
     }
   })
   
   let secondLevel = this.unwindArray(firstLevel, 'GuardRegSubMessageList') 
   secondLevel = secondLevel.map(x => {
    return {
     RegulationName : x.RegulationName,
     GuardMessageCategory : x.GuardMessageCategory,
     GuardRegSubMessageList : x.GuardRegSubMessageList,
     firstLevel : x.firstLevel,
     secondLevel : + x.secondLevel,
     GuardMessageText : x.GuardRegSubMessageList.GuardMessageText,
     GuardMessageToolTipText : x.GuardRegSubMessageList.GuardMessageToolTipText,
     GuradMessageColor : x.GuardRegSubMessageList.GuradMessageColor,
     RegActionToBeTaken : x.GuardRegSubMessageList.RegActionToBeTaken,
     thirdLevel : this.countLeafNodeThirdLevel(x.GuardRegSubMessageList)
    }
  })
  let thirdLevel = this.unwindArray(secondLevel, 'RegActionToBeTaken') 
  return this.updateRowSpan(thirdLevel)
  
  
  }

  updateRowSpan(guardMessageArray) {
    //FirstColumn
    let length = guardMessageArray.length
    let i = 0
    while(i < length) {
      guardMessageArray[i]['firstColumn'] = true
      i = i + guardMessageArray[i]['firstLevel']
    }

    //Second Column
    i = 0
    while(i < length) {
      guardMessageArray[i]['secondColumn'] = true
      i = i + guardMessageArray[i]['secondLevel']
    }

    //Third Column
    i = 0
    while(i < length) {
      guardMessageArray[i]['thirdColumn'] = true
      i = i + guardMessageArray[i]['thirdLevel']
    }
    return guardMessageArray
  }

  countLeafNodeFirstLevel(obj) {
    let count =0
    for(let i = 0; i<obj.GuardRegMessageList.length;i++) {
      for(let j=0;j<obj.GuardRegMessageList[i].GuardRegSubMessageList.length;j++) {
        for(let k=0;k<obj.GuardRegMessageList[i].GuardRegSubMessageList[j].RegActionToBeTaken.length;k++) {
          count = count +1
        }
      }
    }
    return count
  }

  countLeafNodeSecondLevel(obj) {
    let count =0
    for(let j=0;j<obj.GuardRegSubMessageList.length;j++) {
      for(let k=0;k<obj.GuardRegSubMessageList[j].RegActionToBeTaken.length;k++) {
        count = count +1
      }
    }
    return count
  }

  countLeafNodeThirdLevel(obj) {
    let count =0
    
    for(let k=0;k<obj.RegActionToBeTaken.length;k++) {
      count = count +1
    }
    
    return count
  }

}


