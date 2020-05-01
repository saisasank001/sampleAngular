import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-add',
  templateUrl: './test-add.component.html',
  styleUrls: ['./test-add.component.css']
})
export class TestAddComponent implements OnInit {
details:any=[ {
  "firstName":"",
  "lastName":"",
  "company":"",
  "email":"",
  "workPhone":"",
  "extn":""
}]
  constructor() { }

  ngOnInit() {
  }
addList(){
 this.details.push({
  "firstName":"",
  "lastName":"",
  "company":"",
  "email":"",
  "workPhone":"",
  "extn":""
})
}
remove(index){
  this.details.splice(index, 1)
}
submit(){
  console.log(this.details)
}
}
