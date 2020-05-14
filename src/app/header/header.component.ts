import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  url= '/products-/house'
  name=''
  constructor(public router:Router, public httpService:HttpServiceService) { }

  ngOnInit() {
    this.router.events.subscribe(value => {
      console.log('current route: ', this.router.url.toString());
  });
  }

  checkActive(urlData){
    console.log("urlData",urlData)
    console.log("urlData.includes(this.url)",this.url.includes(urlData))
    if(this.url.includes(urlData)){
      return true
    }
  }

}
