import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listStyle = {
    width:'300px', //width of the list defaults to 300,
    height: '250px', //height of the list defaults to 250,
    dropZoneHeight: '50px' // height of the dropzone indicator defaults to 50
    }

  items = [
    {checked : false, name : 'Albert Einstein'},
    {checked : true, name : 'Madame Curie'},
    {checked : true,name : 'Elon Musk'},
  ]

  getIndex(name) {
    return this.items.findIndex(x => x.name === name)
  }

  checkboxChange(index) {
    this.items[index]['checked'] = !this.items[index]['checked']
  }

  listOrderChanged($event) {
    console.log($event)
  }

}
