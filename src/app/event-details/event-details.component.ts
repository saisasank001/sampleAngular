import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
eventDetails:any = {
  Customer: "swe4",
  Date_Created: "11/19/2019 16:34:58",
  Description: "ZmluYWwgd2l0aG91dCBlbWFpbCYjMTYwOw==",
  End_date: "06/17/2020",
  End_time: "16:33:00",
  Is_Active: 1,
  Is_Recurring: 1,
  Notes: "notes4",
  RecurringType: "monthly",
  Reported_By: "Swetha Patoor",
  Reported_By_Email: "swetha.patoor@lexisnexis.com",
  Scope: "private",
  Start_time: "16:26:00",
  TYPE: "test4",
  id: 141,
  Start_date: "11/20/2019"
}
eventDate;

  constructor() { }

  ngOnInit() {
    this.eventDetails.Description = atob(this.eventDetails.Description)

    // if(this.eventDetails.Start_date == this.eventDetails.End_date){
    //   this.eventDate = this.eventDetails.Start_date
    // }else{
    //   this.eventDate = this.eventDetails.Start_date - this.eventDetails.End_date
    // }
  }

}
