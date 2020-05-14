import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  url= 'products-house'
  constructor() { }

  ngOnInit() {
  }

  checkActive(urlData){
    if(urlData.includes(this.url)){

      return true
      
    }
  }

}
