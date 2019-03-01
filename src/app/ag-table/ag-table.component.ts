import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';
import { forEach } from '@angular/router/src/utils/collection';
import { ButtonRendererComponent } from "../button-renderer/button-renderer.component";

@Component({
  selector: 'app-ag-table',
  templateUrl: './ag-table.component.html',
  styleUrls: ['./ag-table.component.css']
})
export class AgTableComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;
  title = 'app';
  
  defaultColDef = {editable:true}
    columnDefs = [
        {
          headerName: 'Make', 
          field: 'make', 
          checkboxSelection: true },
        {
          headerName: 'Model', 
          field: 'model',
          cellEditor: "agSelectCellEditor",
          cellEditorParams: {
            cellHeight: 50,
            values: ["Celica", "Mondeo", "Boxter"]
          }
        },
        {
          headerName: 'Price', 
          field: 'price', 
          cellStyle: this.compareValues,
          valueFormatter: this.dateFormatter
        },
        {
            headerName: "Actions",
            field: "action",
            cellRenderer: "buttonRenderer",
            colId: "params",
          }
        
    ];

    frameworkComponents = {
      buttonRenderer: ButtonRendererComponent
    };

    selectData = [
      {value : 'cel', name : 'Celica'},
      {value : 'mon', name : 'Mondeo'},
      {value : 'box', name : 'Boxter'}
    ]


    dateFormatter(data) {
      return data.value*10  
    }

    sampleString = "abc\nabc"


    rowData : any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.myjson.com/bins/15psn9').subscribe((abc:Array<any>) => {
      abc.map(a => {
        let newValue = this.selectData.find(b => b.name == a.model)
        if(newValue)
          a.abc = newValue.value
      })
      this.rowData = abc
    })
  }

  onCellValueChanged(params){
    let node = this.agGrid.api.getRowNode(params.rowIndex)
    let newValue = this.selectData.find(a => a.name == params.newValue)
    if(newValue) {
      node.data.abc = newValue.value
    }
  }

  compareValues(params) {
    if (params.value > 70000) {
      return {color: 'red', backgroundColor: 'green'};
    }
  }

  afterRendering($event) {
    this.agGrid.api.forEachNode((node,index) => {
      var eachRow = this.agGrid.api.getRowNode(node.id)
      if(eachRow.data.price > 40000) {
        eachRow.setRowSelectable(false)

      }
    })
  }

  // getAllRows() {
  //   this.agGrid.api.forEachNode((node,index) => {
  //     console.log(node,index)
  //   })
  // }


  getSelectedRows() {
    // const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedRows = this.agGrid.api.getSelectedNodes();
    let exclusionIds = [] 
    selectedRows.forEach(row => {
      var eachRow = this.agGrid.api.getRowNode(row.id)
      eachRow.setDataValue('price',100000)
      eachRow.setRowSelectable(false) 
    })

    
}

}
