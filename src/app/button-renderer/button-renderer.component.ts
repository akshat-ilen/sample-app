import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";
import { GridApi } from 'ag-grid-community';


@Component({
  selector: 'app-button-renderer',
  templateUrl: './button-renderer.component.html',
  styleUrls: ['./button-renderer.component.css']
})
export class ButtonRendererComponent implements ICellRendererAngularComp {
  
  public params: any;
  public api: GridApi
  public value : any

  constructor() { }

  agInit(params: any): void {
    this.params = params;
    this.api = this.params.api
  }

  public edit() {
    this.api.startEditingCell({
        rowIndex : this.params.rowIndex,
        colKey: 'model' 
    })

    let node = this.api.getRowNode(this.params.rowIndex)
    this.value = node.data.model
  }

  public save() {
    let node = this.api.getRowNode(this.params.rowIndex)
    node.setDataValue('model',node.data.model)
    this.value = node.data.model
  }

  public cancel() {
    let node = this.api.getRowNode(this.params.rowIndex)
    node.setDataValue('model',this.value)
    this.api.stopEditing()
  }

  refresh(): boolean {
    return true;
  }

}
