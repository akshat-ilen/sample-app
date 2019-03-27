import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-excel-data',
  templateUrl: './excel-data.component.html',
  styleUrls: ['./excel-data.component.css']
})
export class ExcelDataComponent implements OnInit {
  data: any

  constructor(private http: HttpClient) { }
  

  ngOnInit() {
    this.downloadData().then(data => {this.data = data.data})
  }

  getData() {
    console.log(this.data)
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
    const worksheet1: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
    console.log('worksheet',worksheet); 
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet,'data1' :worksheet1 }, SheetNames: ['data','data1'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    // const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, 'Akshat');
    
    
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  async downloadData():Promise<any> {
    return await this.http.get('https://reqres.in/api/users').toPromise()
  }

  

}
