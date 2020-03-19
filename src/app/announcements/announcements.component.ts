import { Component, OnInit } from '@angular/core';
import { Key } from 'protractor';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {

  
  response=[{
    title:'asjdk',
    createdAt:'26789',
    type:'announcement'
  },{
    title:'asjd',
    createdAt:'26889',
    type:'announcemen'
  },{
    title:'asjdk',
    createdAt:'26789',
    type:'announcement'
  },{
    title:'asjd',
    createdAt:'26889',
    type:'announcemen'
  },{
    title:'asjdk',
    createdAt:'26789',
    type:'announcement'
  },{
    title:'asjd',
    createdAt:'26889',
    type:'announcemen'
  },{
    title:'asjdk',
    createdAt:'26789',
    type:'announcement'
  },{
    title:'asjd',
    createdAt:'26889',
    type:'announcemen'
  },{
    title:'asjdk',
    createdAt:'26789',
    type:'announcement'
  },{
    title:'asjd',
    createdAt:'26889',
    type:'announcemen'
  },{
    title:'asjdk',
    createdAt:'26789',
    type:'announcement'
  },{
    title:'asjd',
    createdAt:'26889',
    type:'announcemen'
  },{
    title:'asjdk',
    createdAt:'26789',
    type:'announcement'
  },{
    title:'asjd',
    createdAt:'26889',
    type:'announcemen'
  },{
    title:'asjdk',
    createdAt:'26789',
    type:'announcement'
  },{
    title:'asjd',
    createdAt:'26889',
    type:'announcemen'
  },{
    title:'asjdk',
    createdAt:'26789',
    type:'announcement'
  },{
    title:'asjd',
    createdAt:'26889',
    type:'announcemen'
  },{
    title:'asjdk',
    createdAt:'26789',
    type:'announcement'
  },{
    title:'asjd',
    createdAt:'26889',
    type:'announcemen'
  },{
    title:'asjdk',
    createdAt:'26789',
    type:'announcement'
  },{
    title:'asjd',
    createdAt:'26889',
    type:'announcemen'
  },{
    title:'asjdk',
    createdAt:'26789',
    type:'announcement'
  },{
    title:'asjd',
    createdAt:'26889',
    type:'announcemen'
  },{
    title:'asjdk',
    createdAt:'26789',
    type:'announcement'
  },{
    title:'asjd',
    createdAt:'26889',
    type:'announcemen'
  },{
    title:'asjdk',
    createdAt:'26789',
    type:'announcement'
  },{
    title:'asjd',
    createdAt:'26889',
    type:'announcemen'
  },{
    title:'asjdk',
    createdAt:'26789',
    type:'announcement'
  },{
    title:'asjd',
    createdAt:'26889',
    type:'announcemen'
  },{
    title:'asjdk',
    createdAt:'26789',
    type:'announcement'
  },{
    title:'asjd',
    createdAt:'26889',
    type:'announcemen'
  },{
    title:'asjdk',
    createdAt:'26789',
    type:'announcement'
  },{
    title:'asjd',
    createdAt:'26889',
    type:'announcemen'
  },{
    title:'asjdk',
    createdAt:'26789',
    type:'announcement'
  },{
    title:'asjd',
    createdAt:'26889',
    type:'announcemen'
  },{
    title:'asjdk',
    createdAt:'26789',
    type:'announcement'
  },{
    title:'asjd',
    createdAt:'26889',
    type:'announcemen'
  },{
    title:'asjdk',
    createdAt:'26789',
    type:'announcement'
  },{
    title:'asjd',
    createdAt:'26889',
    type:'announcemen'
  },{
    title:'asjdk',
    createdAt:'26789',
    type:'announcement'
  },{
    title:'asjd',
    createdAt:'26889',
    type:'announcemen'
  },{
    title:'asjdk',
    createdAt:'26789',
    type:'announcement'
  },{
    title:'asjd',
    createdAt:'26889',
    type:'announcemen'
  },{
    title:'asjdk',
    createdAt:'26789',
    type:'announcement'
  },{
    title:'asjd',
    createdAt:'26889',
    type:'announcemen'
  },{
    title:'asjdk',
    createdAt:'26789',
    type:'announcement'
  },{
    title:'asjd',
    createdAt:'26889',
    type:'announcemen'
  }];

  cloneResponse=[]

  tableDisplay=[{
    name:'Title',
    key:'title',
  },{
    name:'Created At',
    key:'createdAt'
  },{
    name:'Type',
    key:'type'
  }];

  page=1;
  pageSize=10;
 

  constructor() {
    this.cloneResponse=this.response;
   }

  filter=[]; // for filter menu toggle
  filters=[]; // for filters checkbox data
  searchTitle=[]; // for searching text 

  // check if alread filter added
  checkFilterExist(item,key,index){
    
    let response=Object.assign([],this.filters[index]);
    let data=response.filter(filterData=>{
      return filterData['name']==item[key]; 
    })
    
    return data.length?true:false;
  }

  addFilters(){
    // init filters
    let count=Object.keys(this.response[0]);
    count.map(item=>{
      this.filters.push([]);
      this.searchTitle.push()
      this.filter.push(false);
    })

    // insert filter data inside filters
    this.response.forEach(item=>{
      let count=Object.keys(this.response[0]);
      count.map((key,index)=>{
        if(!this.checkFilterExist(item,key,index)){
          this.filters[index].push({name:item[key],selected:false})
        }
      })
      
    })
  }

  // toggle filter menu of item
  changeFilter(index){
    let i=index;
    
    let value=this.filter[i];
    // reset filters
    let count=Object.keys(this.response[0]);
    
    this.filter=[];
    count.map(item=>{
      this.filter.push(false);
    })
    
    // toggle filter of selected menu item
    this.filter[i]=value;
    this.filter[i]=!this.filter[i];
    
  }

  // on change checkbox filter data
  filterRecords(){
    let count=Object.keys(this.response[0]);
    let tmp={};
    let filteredRecords=[];
    count.map((key,index)=>{
      if(!tmp[key]){
        tmp[key]=[];
      }
      
      let filters=JSON.parse(JSON.stringify(this.filters[index]));
      console.log(filters)
      filters=filters.filter(item=>{return item.selected==true})
      console.log(filters)
      if(filters.length){
        filters.forEach(element => {
          tmp[key].push(element.name);
        });
      }
    })
    console.log(tmp);
    let tmpResponse=[];
    this.cloneResponse.forEach(item=>{
      let keys=Object.keys(item);
      let flag=1;
      keys.forEach(key=>{
        if(tmp[key].length){
          if(tmp[key].indexOf(item[key])==-1){
            flag=0;
          }
        }        
      })
      
      if(flag){
        tmpResponse.push(item);
      }
    })
    this.response=tmpResponse;
  }

  ngOnInit() {
   this.addFilters(); 
  }

}
