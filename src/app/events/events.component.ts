import { Component, OnInit, Directive, ElementRef, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  @ViewChild('fc',{static:true}) fc;

  options;
  events=[];
  ngOnInit(){
    this.events = [{
      "title": "Conference",
      "start": "2017-02-12T10:30:00",
      "end": "2017-02-12T10:30:00"
  },{
    "title": "Conference",
    "start": "2017-02-12T10:30:00",
    "end": "2017-02-12T10:30:00"
},{
  "title": "Conference",
  "start": "2017-02-12T10:30:00",
  "end": "2017-02-12T10:30:00"
},{
  "title": "Conference",
  "start": "2017-02-12T10:30:00",
  "end": "2017-02-12T10:30:00"
},{
  "title": "Conference",
  "start": "2017-02-12T10:30:00",
  "end": "2017-02-12T10:30:00"
},{
  "title": "Conference",
  "start": "2017-02-12T10:30:00",
  "end": "2017-02-12T10:30:00"
},{
  "title": "Conference",
  "start": "2017-02-12T10:30:00",
  "end": "2017-02-12T10:30:00"
},{
  "title": "Conference",
  "start": "2017-02-12T10:30:00",
  "end": "2017-02-12T10:30:00"
},{
  "title": "Conference",
  "start": "2017-02-12T10:30:00",
  "end": "2017-02-12T10:30:00"
},{
  "title": "Conference",
  "start": "2017-02-12T10:30:00",
  "end": "2017-02-12T10:30:00"
},{
  "title": "Conference",
  "start": "2017-02-12T10:30:00",
  "end": "2017-02-12T10:30:00"
}];
    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: '2017-02-01',
      eventLimit: true,
      header: {
          left: 'prev,next',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
      },
      dateClick: (e) =>  {
        //handle date click
        console.log(e)
    }
  }

  }

  gotoDate(date: Date) {
    this.fc.getCalendar().gotoDate(date);
}

}
