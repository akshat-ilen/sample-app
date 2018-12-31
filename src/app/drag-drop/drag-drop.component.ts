import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';

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

  tab = [
    {displayOrder : 0, checked : false, name : 'Albert Einstein'},
    {displayOrder : 1, checked : true, name : 'Madame Curie'},
    {displayOrder : 2, checked : true,name : 'Elon Musk'},
  ]

  grid = [
    {displayOrder : 0, checked : false, name : 'Albert Einstein'},
    {displayOrder : 1, checked : true, name : 'Madame Curie'},
    {displayOrder : 2, checked : true,name : 'Elon Musk'},
  ]

  getIndex(name, arrayName) {
    let array: Array<any> = (arrayName == 'tab') ? this.tab : this.grid
    return array.findIndex(x => x.name === name)
  }

  checkboxChange(index, arrayName) {
    let array: Array<any> = (arrayName == 'tab') ? this.tab : this.grid
    array[index]['checked'] = !array[index]['checked']
  }

  listOrderChanged($event, arrayName) {
    let array: Array<any> = (arrayName == 'tab') ? this.tab : this.grid
    array.forEach((element,index)=> {
      element.displayOrder = index
    })
    console.log($event)

  }

  clickEvent($event,index) {
    const selectedItems = this.tab.filter(items => items.checked == true)
    if(selectedItems.length <= 1) {
      if($event.target.checked == false) {
        $event.preventDefault()
      } else {
        this.tab[index]['checked'] = !this.tab[index]['checked']
      }
    } else {
      this.tab[index]['checked'] = !this.tab[index]['checked']
    }
    console.log(this.tab)
    
  }

}
