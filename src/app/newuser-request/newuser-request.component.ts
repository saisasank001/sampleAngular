import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newuser-request',
  templateUrl: './newuser-request.component.html',
  styleUrls: ['./newuser-request.component.scss']
})
export class NewuserRequestComponent implements OnInit {
  unsubscribeUserForm : FormGroup;
  usersArray:any = [{"unsubscription_id":1082,"EmailAddress":"b@b.com","AddedBy":"User","DateAdded":"2020-03-03T14:37:13"}]
  constructor(private formBuilder:FormBuilder, private router:Router) { }
  ngOnInit(): void {
    this.unsubscribeUserForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      addedBy: ['test', [Validators.required]]
  });
  this.cloneResponse=this.usersArray;
  this.addFilters(); 
  }

  page=1;
  pageSize=10;
  filter=[]; // for filter menu toggle
  filters=[]; // for filters checkbox data
  searchTitle=[]; // for searching text 
  tableDisplay=[{
    name:'EmailAddress',
    key:'EmailAddress',
  },
  {
    name:'AddedBy',
    key:'AddedBy'
  },{
    name:'DateAdded',
    key:'DateAdded'
  }];
  keys=["EmailAddress","AddedBy","DateAdded"];
  cloneResponse=[];


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
    let count=this.keys;
    count.map(item=>{
      this.filters.push([]);
      this.searchTitle.push()
      this.filter.push(false);
    })

    // insert filter data inside filters
    this.usersArray.forEach(item=>{
      let count=this.keys;
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
    let count=this.keys;
    
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
    let count=this.keys;
    let tmp={};
    let filteredRecords=[];
    count.map((key,index)=>{
      if(!tmp[key]){
        tmp[key]=[];
      }
      
      let filters=JSON.parse(JSON.stringify(this.filters[index]));
    
      filters=filters.filter(item=>{return item.selected==true})
      console.log(filters)
      if(filters.length){
        filters.forEach(element => {
          tmp[key].push(element.name);
        });
      }
    })
  
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
    this.usersArray=tmpResponse;
  }

  

  submit(data){
    console.log(data)
  }
  delete(data){

    console.log(data['unsubscription_id'])
  }
}
