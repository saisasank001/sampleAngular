import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-announcement-details',
  templateUrl: './announcement-details.component.html',
  styleUrls: ['./announcement-details.component.scss']
})
export class AnnouncementDetailsComponent implements OnInit {
 json:any ={
  CreatedDate: "2020-05-09",
 EndDate: "2020-06-22",
 EndTime: "03:03:00",
 IsAnnouncement: "1",
 IsBanner: "1",
 IsEmailSend: "0",
 ModifiedDate: "5/11/2020 9:13:04 AM",
 Priority: "1",
 StartDate: "2020-06-20",
 StartTime: "02:02:00",
 announcement: "ZmluYWwgd2l0aG91dCBlbWFpbKA=",
 announcement_id: "4692",
 announcements: true,
 endTime: {hour: 3, minute: 3, second: 0},
 filename: "",
 fromDate: {year: 2020, month: 6, day: 20},
 message: "final without email ",
 sendEmail: "0",
 startTime: {hour: 2, minute: 2, second: 0},
 title: "final without email ",
 toDate: {year: 2020, month: 6, day: 22},
 urgentMessage: true
}

type ="Announcement"
  constructor(public userService:UserService) { }

  ngOnInit() {
    this.json.announcement = atob(this.json.announcement)
  }

}
