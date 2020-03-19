import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {

  filter=[false,false,false];
  filters=[[],[],[]];
  response=[{
    title:'asjdk',
    createdAt:'26789',
    type:'announcement'
  }]
  constructor() { }

  checkFilterExist(item,key){
    let response=Object.assign([],this.response);
    let data=response.filter(filterData=>{
      return filterData[key]==item;
    })
    return data.length?true:false;
  }

  ngOnInit() {
    this.response.forEach(item=>{
      if(!this.checkFilterExist(item,'title')){
        this.filters[0].push({name:item['title'],selected:false})
      }
    })
  }

  changeFilter(index){
    let i=index;
    let value=this.filter[i];
    this.filter=[false,false,false];
    this.filter[i]=value;
    this.filter[index]=!this.filter[index];
  }

}
