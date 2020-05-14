import { Component, OnInit } from '@angular/core';

import {FullCalendarModule} from 'primeng/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import * as $ from 'jquery';
import * as moment from 'moment';
import 'fullcalendar';
import { UserService } from '../user.service';

@Component({
  selector: 'app-whatsnew',
  templateUrl: './whatsnew.component.html',
  styleUrls: ['./whatsnew.component.scss']
})
export class WhatsnewComponent implements OnInit {


  json: any = [
 
    {
      Customer: "lexisNexis",
      Date_Created: "11/19/2019 15:08:41",
      Description: "",
      End_date: "2019-11-29",
      End_time: "16:08:00",
      Is_Active: 1,
      Is_Recurring: 0,
      Notes: "",
      RecurringType: "daily",
      Reported_By: "Mahesh Saka",
      Reported_By_Email: "mahesh.saka@lexisnexisrisk.com",
      Scope: "private",
      Start_time: "15:08:00",
      TYPE: "new",
      id: 101,
      start_date: "2019-11-29"
    },
    {
      Customer: "lexisNexis1lexisNexis1lexisNexis1lexisNexis1lexisNexis1",
      Date_Created: "11/19/2019 15:08:41",
      Description: "",
      End_date: "2019-11-29",
      End_time: "16:08:00",
      Is_Active: 1,
      Is_Recurring: 0,
      Notes: "",
      RecurringType: "daily",
      Reported_By: "Mahesh Saka",
      Reported_By_Email: "mahesh.saka@lexisnexisrisk.com",
      Scope: "private",
      Start_time: "10:08:00",
      TYPE: "new",
      id: 101,
      start_date: "2019-11-29"
    },
    {
      Customer: "qwert",
      Date_Created: "11/19/2019 15:08:41",
      Description: "",
      End_date: "2019-11-15",
      End_time: "16:08:00",
      Is_Active: 1,
      Is_Recurring: 1,
      Notes: "",
      RecurringType: "daily",
      Reported_By: "Mahesh Saka",
      Reported_By_Email: "mahesh.saka@lexisnexisrisk.com",
      Scope: "private",
      Start_time: "15:08:00",
      TYPE: "new",
      id: 101,
      start_date: "2019-11-10",
     
    },
    {
      Customer: "qwert",
      Date_Created: "11/19/2019 15:08:41",
      Description: "",
      End_date: "2019-11-15",
      End_time: "16:08:00",
      Is_Active: 1,
      Is_Recurring: 1,
      Notes: "",
      RecurringType: "weekly",
      Reported_By: "Mahesh Saka",
      Reported_By_Email: "mahesh.saka@lexisnexisrisk.com",
      Scope: "private",
      Start_time: "15:08:00",
      TYPE: "new",
      id: 101,
      start_date: "2019-11-10",
     
    },
    {
      Customer: "qwert",
      Date_Created: "11/19/2019 15:08:41",
      Description: "",
      End_date: "2019-11-15",
      End_time: "16:08:00",
      Is_Active: 1,
      Is_Recurring: 1,
      Notes: "",
      RecurringType: "biweekly",
      Reported_By: "Mahesh Saka",
      Reported_By_Email: "mahesh.saka@lexisnexisrisk.com",
      Scope: "private",
      Start_time: "15:08:00",
      TYPE: "new",
      id: 101,
      start_date: "2019-11-10",
     
    },
    {
      Customer: "qwert",
      Date_Created: "11/19/2019 15:08:41",
      Description: "",
      End_date: "2019-11-15",
      End_time: "16:08:00",
      Is_Active: 1,
      Is_Recurring: 1,
      Notes: "",
      RecurringType: "monthly",
      Reported_By: "Mahesh Saka",
      Reported_By_Email: "mahesh.saka@lexisnexisrisk.com",
      Scope: "private",
      Start_time: "15:08:00",
      TYPE: "new",
      id: 101,
      start_date: "2019-11-10",
     
    },

  ]
  eventData: any=[]; // calendar events
  tableEvents:any=[]; // on select date events to show
  filteredTableEvents=[];
  options: any; // calendar options
  defaultConfigurations: any;
  
   
  constructor(public userService:UserService) { }

  ngOnInit() {

    this.eventData=[];
    
    this.json.forEach(item=>{
      if(this.validateEvent(item)){
        if(item['Is_Recurring']){
          let num=1;
          if(item['RecurringType']=='weekly'){
            num=7;
          }
          if(item['RecurringType']=='biweekly'){
            num=14;
          }
          if(item['RecurringType']=='monthly'){
            num=30;
          }
          let dates=(this.generateDates(item.start_date,item.End_date,num));
          dates.forEach(date=>{
            let json=Object.assign({},item);
            json['date']=date;
            this.tableEvents.push(json);

            // add calendar events
            let className=this.getEventClassName(item['Is_Recurring'],item['RecurringType']);
               this.eventData.push(
                {
                  "title":item.Customer,
                  "start": date+'T'+item.Start_time,
                  "end": date+'T'+item.End_time,
                  eventColor: '#fff',
                  eventBackgroundColor:'red',
                  eventTextColor:'#fff',
                  className: className
                }
              )
          })

        }else{
          item.date=item.start_date;
          this.tableEvents.push(item);
           // add calendar events
           let className=this.getEventClassName(item['Is_Recurring'],item['RecurringType']);
           this.eventData.push(
            {
              "title":item.Customer,
              "start": item.start_date+'T'+item.Start_time,
              "end": item.start_date+'T'+item.End_time,
              eventColor: '#fff',
              eventBackgroundColor:'red',
              eventTextColor:'#fff',
              className: className
            }
          )
        }
      }
      
    })

    console.log(this.tableEvents)
    this.filteredTableEvents=this.tableEvents;
    this.filteredTableEvents.forEach(item=>{
      item.selected=false;
    })
    this.cloneResponse=this.filteredTableEvents;
    this.addFilters();
    console.log(this.eventData)
    console.log({table:this.tableEvents})
    this.loadCalendar();
   
  }


  selectAll=false;
  
  selectAllData=()=>{
    this.selectAll=!this.selectAll;
    this.filteredTableEvents.forEach(item=>{
      item.selected=this.selectAll;
    })
    this.cloneResponse=this.filteredTableEvents;
  }

  deleteEvent(){
    console.log({table:this.filteredTableEvents});
    let flag=false;
    this.filteredTableEvents.forEach(item=>{
      if(item.Is_Recurring==1 || item.Is_Recurring=="1"){
        flag=true;
      }
    })
    if(flag){
      
    }else{

    }
  }

  export(){

  }

  deleteEventDetails(){

  }

  filterTable(date){
    this.filteredTableEvents=[];
    this.filteredTableEvents=Object.assign([],this.tableEvents);
    this.filteredTableEvents.filter(item=>{
      return item.date==date
    })
  }

  toggleExportForm(){
    this.showExportForm=!this.showExportForm;
  }

  showErrorExport(){
    alert('errro')
  }

  exportEvents(){
    console.log(this.exportFrom,this.exportTo)
    if(!(this.exportFrom && this.exportTo)){
      console.log(1)
      return;
    }
    try{
      if(new Date(this.exportFrom).getTime()<new Date(this.exportTo).getTime()){
        console.log(this.exportFrom);
        console.log(this.tableEvents);
        let dates=this.generateDates(this.exportFrom,this.exportTo,1);
        let tmp=JSON.parse(JSON.stringify(this.tableEvents));
        tmp.filter(item=>{
          return dates.indexOf(item.start_date)>-1 
        })
        console.log(tmp)

      }else{
        this.showErrorExport();
      }
    }catch(e){
      this.showErrorExport();
    }
    
  }

  tableDisplay=[{
    name:'Customer',
    key:'Customer',
  },
  {
    name:'Type',
    key:'TYPE'
  },{
    name:'Start Time',
    key:'Start_time'
  },{
    name:'End Time',
    key:'End_time'
  }];
  keys=["Customer","TYPE","Start_time","End_time"];
  cloneResponse=[];
  page=1;
  pageSize=10;
  filter=[]; // for filter menu toggle
  filters=[]; // for filters checkbox data
  searchTitle=[]; // for searching text 
  exportFrom="";
  exportTo="";
  showExportForm=false;
  
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
    this.filteredTableEvents.forEach(item=>{
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
    this.filteredTableEvents=tmpResponse;
  }



  getEventClassName(arg0: any, arg1: any) {
    if(arg0){
      return arg1
    }else{
      return 'normal';
    }
  }

  loadCalendar(){
    this.defaultConfigurations = {
      plugins: [ interactionPlugin ],
               eventLimit: true,
               defaultDate: '2019-11-10',
               header: {
                  left: 'prev,next today',
                  right: 'title',
                  center: 'month,agendaWeek,agendaDay'
               },
               eventLimitText:'View More',
               views: {
                agenda: {
                   eventLimit: 1
                },
                month: {
                  eventLimit: 1
                }
             },
               
               
               selectable: true,
               
               events: this.eventData,
               eventRender: function(event, element) {
                if (event.className == 'normal') {
                    element.css({
                        'background-color': 'green',
                        'border-color': 'green',
                        'color':'#fff'
                    });
                }
                if (event.className == 'daily') {
                  element.css({
                      'background-color': 'red',
                      'border-color': 'green',
                      'color':'#fff'
                  });
                }
                if (event.className == 'weekly') {
                  element.css({
                      'background-color': 'blue',
                      'border-color': 'green',
                      'color':'#fff'
                  });
                }
                if (event.className == 'biweekly') {
                  element.css({
                      'background-color': 'orange',
                      'border-color': 'green',
                      'color':'#fff'
                  });
                }
                if (event.className == 'monthly') {
                  element.css({
                      'background-color': 'cyan',
                      'border-color': 'green',
                      'color':'#fff'
                  });
                }
              },
              
              
            //header and other values
            select: function(start, end, allDay) {
                console.log({start,end,allDay})
             },
             dateClick: function(info) {
              alert('Clicked on: ' + info.dateStr);
              alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
              alert('Current view: ' + info.view.type);
              // change the day's background color just for fun
              info.dayEl.style.backgroundColor = 'red';
            }
            };
            $('#full-calendar').fullCalendar(
              this.defaultConfigurations
           );

           let left=$(".fc-icon-left-single-arrow");
              left.removeAttr('class');
              left.addClass("fa fa-chevron-left")
            left=$(".fc-icon-right-single-arrow");
              left.removeAttr('class');
              left.addClass("fa fa-chevron-right")
  }
  
  validateEvent(data){
    return true;
  }

  //Function to get dates in between two dates
  getDateArray(start, end, addDate) {
    let arr = new Array();
    let dt = new Date(start);
    while (dt < end) {
        arr.push(new Date(dt));
        dt.setDate(dt.getDate() + addDate);
    }
    return arr;
  }

  generateDates(startDate,endDate,addDate){
    let formatedDates=[];
    if(startDate==endDate){
      return [startDate];
    }
    let newDate;
   
    //getting dates from arr
    let dataArr = this.getDateArray(new Date(startDate),new Date(endDate),addDate);
    //to change the dates to formated dates
    dataArr.forEach(element => {
      newDate = new Date(element).toISOString().slice(0,10);
      formatedDates.push(newDate)
    });
    
    return formatedDates;
    
  }
}