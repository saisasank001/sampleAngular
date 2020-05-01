import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  sideMenu=[
    {
      name:'Announcements',
      active:false,
      children:[
        {
          name:'Write Announcement',
          path:'/admin/announcement-add'
        },
       
        {
          name:'Announcement List',
          path:'/admin/annoucement-list'
        }
      ]
    },
    {
      name:'User Management',
      active:false,
      children:[
        {
          name:'Domains',
          path:'/products/individual-search'
        },
        {
          name:'User Search',
          path:'/admin/user-search'
        },
        {
          name:'Change User Email',
          path:'/products/individual-search'
        },
        {
          name:'Unsubscribed Users',
          path:'/products/individual-search'
        },
      ]
    }
  ]
  
  
  response=[];

  
  routeUrl='';
 

  constructor(private router: Router ) {
    this.routeUrl=(this.router.url);
    console.log(this.routeUrl)
  }

  ngOnInit(){
    this.sideMenu.forEach(element=>{
      element.active=this.checkChildActive(element)
    })
    
    this. router.events.subscribe((val) => {
      // see also 
      console.log(this.router.url)
      this.routeUrl=this.router.url;
      this.sideMenu.forEach(element=>{
        element.active=this.checkChildActive(element)
      })
  });
  }

  toggleMenu(menu){
    let tmp=Object.assign([],menu);
    this.sideMenu.forEach(element => {
      element.active=false;
    });
    menu.active=!tmp.active;
  }

  checkChildActive(menu){
    let flag=false;
    for(let i=0;i<menu.children.length;i++){
      if(menu.children[i].path==this.routeUrl){
        flag=true;
      }
    }
    return flag;
  }


}
