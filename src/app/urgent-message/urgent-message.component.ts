import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urgent-message',
  templateUrl: './urgent-message.component.html',
  styleUrls: ['./urgent-message.component.scss']
})
export class UrgentMessageComponent implements OnInit {

  index=0;
  urgentMessages=[{
    topic:'Custom message1',
    message:'Hai this is testing message1'
  },{
    topic:'Custom message2',
    message:'Hai this is testing message2'
  }]
  interval;
  constructor() { }

  ngOnInit() {
    this.startInterval();
  }

  startInterval(){
    this.interval=setInterval(()=>{
      if(this.index==this.urgentMessages.length-1){
        this.index=0;
      }else{
        this.index++;
      }
    },20000)
  }

  stopInterval(){
    if(this.interval){
      clearInterval(this.interval)
    }
  }

}
