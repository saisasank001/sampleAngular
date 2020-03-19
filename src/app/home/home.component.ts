import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  eventList = new Array<string>();
  constructor() { }

  ngOnInit() {
    this.eventList.push(`<ng-marquee>
    <mark>Hello, World.... ssssssssssssssssssss ssssssssssssssssssssssssssssss s sssssssssssssssssssssssssssssssFind Me @ <a href="https://www.linkedin.com/in/shivarajnaidu/" target="__blank"> https://www.linkedin.com/in/shivarajnaidu/ (Yuvaraj)</a></mark>
</ng-marquee>`);
    this.eventList.push(`<span>${new Date().toLocaleString()}</span> - Sed et ligula non risus ullamcorper rhoncus quis vel ante.`);
    
  }

}
