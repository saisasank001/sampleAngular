import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatsnew',
  templateUrl: './whatsnew.component.html',
  styleUrls: ['./whatsnew.component.scss']
})
export class WhatsnewComponent implements OnInit {

  json: any = [
    {
      Customer: "swe",
      Date_Created: "11/19/2019 16:22:20",
      End_date: "2019-12-10",
      End_time: "16:21:00",
      Is_Active: 1,
      Is_Recurring: 1,
      Notes: "notes to test",
      RecurringType: "daily",
      Reported_By: "Swetha Patoor",
      Reported_By_Email: "swetha.patoor@lexisnexis.com",
      Scope: "public",
      Start_time: "16:21:00",
      TYPE: "testing schedule",
      id: 111,
      start_date: "2019-11-19"
    },
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
      Customer: "qwert",
      Date_Created: "11/19/2019 15:08:41",
      Description: "",
      End_date: "2019-11-10",
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
      start_date: "2019-11-10"
    }
  ]
  matched:any=[]
  dataArr:any=[]
  formatedDates:any=[]
  constructor() { }

  ngOnInit() {
  }
  //Function to get dates in between two dates
  getDateArray(start, end) {
    let arr = new Array();
    let dt = new Date(start);
    while (dt < end) {
        arr.push(new Date(dt));
        dt.setDate(dt.getDate() + 1);
    }
    return arr;
}
//Function to get matched start date from main json
  example(date){
    this.json.forEach(element => {
      if(element.start_date == date){
        this.matched.push(element)
      }
    });
    console.log(this.matched)
  }

  example1(startDate,endDate){
    let newDate
    console.log(startDate,endDate)
    //getting dates from arr
    this.dataArr = this.getDateArray(new Date(startDate),new Date(endDate));
    //to change the dates to formated dates
    this.dataArr.forEach(element => {
    newDate = new Date(element).toISOString().slice(0,10);
    this.formatedDates.push(newDate)
    });
    console.log(this.formatedDates)
  }
  //function for checking is recurring and adding dates and customer to new json
  example2(){
    let dates:any=[]
    let json:any={
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
      start_date: "2019-11-10"
    }
    let final:any=[]
    console.log(json.start_date,json.End_date)
    dates = this.getDateArray(new Date(json.start_date),new Date(json.End_date));
    console.log(dates)
    dates.forEach(element => {
    
      final.push({customer:json.Customer, date:new Date(element).toISOString().slice(0,10)})
    });
    console.log(final)
  }
}
